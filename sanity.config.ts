/**
 * This configuration file is used  for the Sanity studio that's mounted on the `/app/studio/[[...index]].tsx route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// Go to https://www.sanity.io/docs/api-version to learn how API versioning works
import { apiVersion, projectId, dataset } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  //   add and edit the content schema in the `sanity/schemaTypes` folder
  schemaTypes,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
