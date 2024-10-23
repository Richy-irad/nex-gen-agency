/**
 * This configuration file exports functions for reading and writing to sanity studio
 *
 */

import { createClient, type QueryParams } from "@sanity/client";
import { apiVersion, projectId, dataset, useCdn, token } from "../env";

/**
 * Function used to query the sanity studio
 */
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
});

/**
 * Function used to write to sanity studio
 */
export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
});

/**
 * Helper function SanityFetch that wraps sanity client, optionally passes in options for caching configuration, and sets sensible caching defaults for every fetch if they are not overridden
 */

export async function SanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  });
}
