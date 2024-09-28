/**
 * This configuration file exports functions for reading and writing to sanity studio
 *
 */

import { createClient } from "@sanity/client";
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
