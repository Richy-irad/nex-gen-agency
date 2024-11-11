import { CategoryType, ProjectsFilterHandler } from "@/lib/types";
import clsx from "clsx";

export default function ProjectCategoriesFilter({
  categories,
  categoriesFilter,
  handleProjectsCategoryFilters,
}: {
  categories: CategoryType[];
  categoriesFilter: string;
  handleProjectsCategoryFilters: ProjectsFilterHandler;
}) {
  return (
    <div className="flex gap-2 items-center pt-4 w-full">
      <p className="text-zinc-300 w-40 shrink-0">Project categories</p>
      <div className="flex gap-4 items-center w-full overflow-x-scroll">
        <button
          className={clsx(
            "px-5 py-2.5 hover:bg-indigo-600 text-zinc-300 hover:text-white text-sm capitalize font-medium rounded-full transition ease-in-out duration-300",
            {
              "bg-indigo-600": categoriesFilter === "all",
              "bg-transparent": categoriesFilter !== "all",
            }
          )}
          onClick={() => handleProjectsCategoryFilters("all")}
        >
          all
        </button>
        {categories.map((category: CategoryType) => (
          <button
            key={category.id}
            className={clsx(
              "px-4 py-2.5 hover:bg-indigo-600 text-zinc-300 hover:text-white text-sm capitalize font-medium rounded-full",
              {
                "bg-indigo-600": categoriesFilter === category.category,
                "bg-transparent": categoriesFilter !== category.category,
              }
            )}
            onClick={() => handleProjectsCategoryFilters(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>
    </div>
  );
}
