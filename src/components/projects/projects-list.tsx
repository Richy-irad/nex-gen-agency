"use client";

import { useState } from "react";
import { CategoryType, ProjectType } from "@/lib/types";
import ProjectExcerpt from "./project-excerpt";
import ProjectTypesFilter from "./filters/project-type";
import ProjectCategoriesFilter from "./filters/project-category";

export default function ProjectsList({
  projects,
  categories,
  lang,
}: {
  projects: ProjectType[];
  categories: CategoryType[];
  lang: string;
}) {
  const [projectTypeFilter, setProjectTypeFilter] = useState("all");
  const [categoriesFilter, setCategoriesFilter] = useState("all");
  let filteredCategories: CategoryType[] = [];

  // method to change the projects filter
  const handleProjectsTypesFilters = (filter: string) => {
    setProjectTypeFilter(filter);
  };

  // function to change categories filter
  const handleProjectsCategoryFilters = (filter: string) => {
    setCategoriesFilter(filter);
  };

  /**
   * This is a utility Function to filter projects by projectType and category.
   *
   *
   * if categoriesFilter is `all`, return projects filtered by the current projectsFilter only.
   *
   * else return projects filtered by current projectsFilter and selected categoriesFilter
   * @param projectsTypeFilter
   * @param categoriesFilter
   * @returns
   */
  const filterProjectsByType = (
    projectsTypeFilter: string,
    categoriesFilter: string
  ) => {
    let fProjects = [];
    if (projectsTypeFilter === "all") {
      fProjects = projects;
    } else {
      fProjects = projects.filter(
        (project) => project.projectType === projectsTypeFilter
      );
    }

    if (categoriesFilter !== "all") {
      fProjects = fProjects.filter(
        (project) => project.projectCategory === categoriesFilter
      );
    }

    return fProjects;
  };

  const filteredProjects: ProjectType[] = filterProjectsByType(
    projectTypeFilter,
    categoriesFilter
  );

  // check if there are projects in the first place and return an appropriate UI

  return (
    <>
      {/* the filters */}
      <div className="flex flex-col gap-4 w-full divide-y-1 divide-slate-600">
        {/* <h3 className="text-zinc-300 text-xl">Filter by</h3> */}
        {/* project type filters */}
        <ProjectTypesFilter
          currentFilter={projectTypeFilter}
          handleProjectsTypesFilters={handleProjectsTypesFilters}
        />
        <ProjectCategoriesFilter
          categories={categories}
          categoriesFilter={categoriesFilter}
          handleProjectsCategoryFilters={handleProjectsCategoryFilters}
        />
      </div>
      {projects.length > 0 ? (
        <>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
              {filteredProjects.map((project: ProjectType) => (
                <ProjectExcerpt
                  key={project.id}
                  lang={lang}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-start h-vdh w-full p-12">
              <p>We don't have projects that match your filters. Try others</p>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-start h-vdh w-full p-12">
          <p>Our projects showcase are coming soon.</p>
          <p>Check again later</p>
        </div>
      )}
    </>
  );
}
