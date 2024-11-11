/**
 * This configuration file exports all the schemaTypes of the application
 */

import { type SchemaTypeDefinition } from "sanity";
import { projectCategory } from "./projectCategory";
import { project } from "./project";

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [projectCategory, project],
};
