/**
 *
 * File that exports query objects.
 *
 * Uses defineQuery to create the queries
 */

import { defineQuery } from "next-sanity";

export const ALL_PROJECTS_QUERY =
  defineQuery(`*[_type == 'project'] | order(projectDate desc){
  "id": _id,
  "name": projectName,
  "slug": slug.current,
  "titles": projectTitle[]{"lang": _key, value },
  projectType,
  "projectCategory": projectCategory->category,
  "coverImage": coverImage.secure_url,
  projectDate,
  "descriptions": description[]{"lang": _key, value},
  projectImages,
  "projectVideo": projectVideo.secure_url
}`);

export const SINGLE_PROJECT_QUERY =
  defineQuery(`*[_type == 'project' && slug.current == $slug]{
  "id": _id,
  "name": projectName,
  "slug": slug.current,
  "titles": projectTitle[]{"lang": _key, value },
  projectType,
  "projectCategory": projectCategory->category,
  "coverImage": coverImage.secure_url,
  projectDate,
  "descriptions": description[]{"lang": _key, value},
  "projectImages": projectImages[]{"key": _key, "url": secure_url},
  "projectVideo": projectVideo.secure_url
}`);

export const SIMILAR_PROJECTS_QUERY =
  defineQuery(`*[_type == 'project' && projectType == $type]{
  "id": _id,
  "name": projectName,
  "slug": slug.current,
  "titles": projectTitle[]{"lang": _key, value },
  projectType,
  "projectCategory": projectCategory->category,
  "coverImage": coverImage.secure_url,
  projectDate,
  "descriptions": description[]{"lang": _key, value},
  "projectImages": projectImages[]{"key": _key, "url": secure_url},
  "projectVideo": projectVideo.secure_url
}[0...3]`);

export const PROJECTS_SLUGS_QUERY = defineQuery(
  `*[_type == 'project'].slug.current`
);

export const CATEGORIES_QUERY = defineQuery(`*[_type == 'projectCategory']{
  "id": _id,
  category
}`);
