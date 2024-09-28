/**
 * Schema defintions for a project category. will be used by editors to create new categories for their projects
 */

export default {
  name: "projectCategory",
  title: "Project Category",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Project category",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required,
    },
  ],
};
