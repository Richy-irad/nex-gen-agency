/**
 * Schema definitions for a Project
 *
 * Project types are to be programmatically provided as options.
 *
 * - `photography`
 * - `videography`
 *
 * Reason: Showing of some fields depends on the project type being know.
 *
 * Properties
 *
 * - projectName: Unique name for the project. Used to generate `slug`
 * - projectType: type of project.
 * - projectCategory: category of project
 * - slug: slug for the project. used for routing
 * - coverImage: cover image for the project. Used on site.
 * - projectDate: Date project was completed
 * - description: description for the project. Shown on site.
 * - projectImages: list of images for the project in case of Photography.
 * - projectVideo: Video for the the project in case of Videography
 */

import { defineArrayMember, defineField, defineType } from "sanity";
import slugify from "@sindresorhus/slugify";

const customSlugifier = async (
  input: string,
  schemaType: any,
  context: any
) => {
  const slug = slugify(input);
  const { getClient } = context;
  const client = getClient({ apiVersion: "2023-06-08" });
  const query = 'count(*[_type == "project" && slug.current == $slug]{_id})';
  const params = { slug: slug };
  return client.fetch(query, params).then((count: number) => {
    return `${slug}-${count + 1}`;
  });
};

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "projectName",
      title: "Project name",
      type: "string",
      description: "Internal name for your project. Should be unique",
    }),
    defineField({
      /**
       * Project type contains options that make it selectable.
       *
       * Needed to determine whether to show or hide projectImages and projectVideo fields..
       *
       * Has `initialValue` set to `photography`.
       */
      name: "projectType",
      title: "Project type",
      type: "string",
      initialValue: "photography",
      description: "Type of project. Either Photography or Videography",
      options: {
        list: [
          { title: "Photography", value: "photography" },
          { title: "Videography", value: "videography" },
        ],
      },
    }),
    defineField({
      name: "projectCategory",
      title: "Project category",
      type: "reference",
      to: [{ type: "projectCategory" }],
    }),
    defineField({
      /**
       * Uses internationalizedArrayString as type to internationalize the title into French and English
       */
      name: "projectTitle",
      title: "Project title",
      type: "internationalizedArrayString",
      description:
        "The title for your project. The title will be displayed on the site",
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "projectName",
        slugify: customSlugifier,
      },
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "cloudinary.asset",
      description: "This is the cover image for your project",
    }),
    defineField({
      name: "projectDate",
      title: "Project Date",
      type: "date",
      description: "Date project was accomplished",
    }),
    defineField({
      /**
       * Uses internationalizedArrayText to internationalize the content of the description.
       */
      name: "description",
      title: "Project description",
      type: "internationalizedArrayText",
      description: "The description of your project",
    }),
    defineField({
      name: "projectImages",
      title: "Project images",
      type: "array",
      of: [
        defineArrayMember({
          type: "cloudinary.asset",
        }),
      ],
      description: "Images for the project",
      // hide photos field if type is not photography
      // Go to https://www.sanity.io/docs/conditional-fields for details
      hidden: ({ parent }) => parent?.projectType !== "photography",
    }),
    defineField({
      name: "projectVideo",
      title: "Project video",
      type: "cloudinary.asset",
      description: "The video for the videography project",
      // hide the projectVideo field if type is not  videography.
      // Go to https://www.sanity.io/docs/conditional-fields for details
      hidden: ({ parent }) => parent?.projectType !== "videography",
    }),
  ],
});
