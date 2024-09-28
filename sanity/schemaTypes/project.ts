/**
 * Schema definitions for a Project
 */

// projectType - Photography or Videography
// projectCategory - Event, Studio, Lifestyle, Promo
// Project Title
// date (mm/yyyy)
// photos
// video

export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Project type",
      type: "reference",
      to: [{ type: "projectType" }],
    },
    {
      name: "category",
      title: "Project category",
      type: "reference",
      to: [{ type: "projectCategory" }],
    },
    {
      name: "title",
      title: "Project title",
      type: "string",
    },
  ],
};
