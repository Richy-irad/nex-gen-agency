/**
 * API route to handle revalidation of content on change.
 *
 * This is important to make sure that when an author updates content, then, the changes revalidate the cache, and content served to users is up-to-date.
 */

import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPaylod = { path?: string };

export async function POST(req: NextRequest) {
  try {
    // require the precess of a secret to revalidate the cache. If missing return error message
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        "Missing environment variable SANITY_REVALIDATE_SECRET",
        { status: 500 }
      );
    }

    const { isValidSignature, body } = await parseBody<WebhookPaylod>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    // check signature before validating.
    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    } else if (!body?.path) {
      const message = "Bad request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    // revalidate the path and return response
    revalidatePath(body.path);
    const message = `Updated Route: ${body.path}`;
    return NextResponse.json({ body, message });
  } catch (error) {
    // catch any errors that may occur
    console.error(error);
    return new Response((error as Error).message, { status: 500 });
  }
}
