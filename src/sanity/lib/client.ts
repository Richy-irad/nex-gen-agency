/**
 * This configuration file exports functions for reading and writing to sanity studio
 *
 */

import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

/**
 * Helper function SanityFetch that wraps sanity client, optionally passes in options for caching configuration, and sets sensible caching defaults for every fetch if they are not overridden
 */

export async function SanityFetch<const QueryString extends string>({
  query,
  params = {},
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch(query, params, {
    next: {
      tags,
    },
  });
}
