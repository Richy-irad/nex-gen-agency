"use client";

import { ProjectsFilterHandler } from "@/lib/types";
import { Aperture, Images, Video } from "@phosphor-icons/react";
import clsx from "clsx";

export default function ProjectTypesFilter({
  currentFilter,
  handleProjectsTypesFilters,
}: {
  currentFilter: string;
  handleProjectsTypesFilters: ProjectsFilterHandler;
}) {
  const projectTypesFilter: string[] = ["all", "photography", "videography"];

  return (
    <div className="flex gap-2 items-center w-full">
      <p className="text-zinc-300 w-40">Project types</p>
      <div className="flex gap-4 items-center w-full overflow-x-scroll">
        {projectTypesFilter.map((type) => (
          <button
            key={type}
            className={clsx(
              "px-3 py-2.5 flex gap-2 justify-center hover:bg-purple-600 text-zinc-300Ï hover: text-white text-sm capitalize font-medium rounded-full transition ease-in-out duration-300",
              {
                "bg-purple-600 text-white": currentFilter === type,
                " bg-transparent": currentFilter !== type,
              }
            )}
            onClick={() => handleProjectsTypesFilters(type)}
          >
            {type === "photography" && (
              <Images size={20} className="text-white" />
            )}{" "}
            {type === "videography" && (
              <Video size={20} className="text-white" />
            )}
            {type == "all" && <Aperture size={20} />}
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
