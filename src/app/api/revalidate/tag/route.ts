/**
 * API route to handle revalidation of content based on tags
 *
 * This important to make sure that even though individual projects have changed, we revalidate other routes that display the individual project, by revalidating the cache, and the content served to users.
 */

import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  tags: string[];
};

// function to revalidate projects based on tags
export async function POST(req: NextRequest) {
  try {
    // require the presence of a secret to revalidate the cache. If missing return error message
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        "Missing environment variable SANITY_REVALIDATE_SECRET",
        { status: 500 }
      );
    }

    // check if signature is valid and get body from webhook payload
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    console.log(body);

    // check signature before validating
    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    } else if (!Array.isArray(body?.tags) || !body.tags.length) {
      const message = "Bad request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // revalidate the tags
    body.tags.forEach((tag) => {
      revalidateTag(tag);
    });

    return NextResponse.json({ body });
  } catch (error) {
    console.error(error);
    return new Response((error as Error).message, { status: 500 });
  }
}
