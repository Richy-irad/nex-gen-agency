/**
 *
 * Settings for caching for next.js
 */

import { revalidatePath } from "next/cache";

export async function GET() {
  /**
   * In development, this functionality purges the cache on demand.
   *
   * To revalidate/purge cache, just visit http://localhost:3000/api/revalidate/all and the cache shall be purged
   */
  if (process.env.NODE_ENV === "development") {
    revalidatePath("/", "layout");
    return Response.json({ message: "Layout revalidated" });
  }

  return Response.json({
    message:
      "This route is only configured to revalidate the layout in development",
  });
}
