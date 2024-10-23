/**
 * This configuration file is used  for the Sanity studio that's mounted on the `/app/studio/[[...index]].tsx route
 *
 * Plugins used include:
 * - internationalizedArray() to internationalize content. For more details visit: https://www.sanity.io/plugins/internationalized-array
 * - cloudinarySchemaPlugin() to integrate selecting assets from cloudinary.
 * Cloudinary is used to store assets for the application. Includes images and videos
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
// Go to https://www.sanity.io/docs/api-version to learn how API versioning works
import { apiVersion, projectId, dataset } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // add and edit the content schema in the `sanity/schemaTypes` folder
  schema: schemaTypes,
  plugins: [
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "fr", title: "French" },
      ],
      defaultLanguages: ["en"],
      fieldTypes: ["string", "text", "slug"],
    }),
    cloudinarySchemaPlugin(),
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
