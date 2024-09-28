/**
 * Schema defintions for a Project type. Will be used by editors to control what project types they put into their systems
 */

export default {
  name: "projectType",
  title: "Project Type",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Project Type",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};
