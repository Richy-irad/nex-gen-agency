/**
 * This configuration file Exports Environment variables used by Sanity studio
 * @property {string} apiVersion = API version
 * @property {string} projectId = Project ID in sanity studio
 * @property {string} dataset = dataset used by sanity studio
 * @property {Boolean} useCDN = false by default
 * @property {string} token = API token secret
 *
 */

export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || "2023-06-08";

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
);
export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  "Missing environment variable: SANITY_STUDIO_DATASET"
);
export const useCdn = false;
export const token = assertValue(
  process.env.SANITY_STUDIO_API_TOKEN,
  "Missing environment variable: SANITY_STUDIO_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
