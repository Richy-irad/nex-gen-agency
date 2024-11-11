/**
 * This configuration file Exports Environment variables used by Sanity studio
 * @property {string} apiVersion = API version
 * @property {string} projectId = Project ID in sanity studio
 * @property {string} dataset = dataset used by sanity studio
 * @property {Boolean} useCDN = false by default
 * @property {string} token = API token secret
 *
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-29";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
