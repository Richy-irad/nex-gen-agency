/**
 * Schema definitions for a project category. will be used by editors to create new categories for their projects
 */

import { defineField, defineType } from "sanity";

export const projectCategory = defineType({
  name: "projectCategory",
  title: "Project Categories",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Project category",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "category",
      },
    }),
  ],
});
