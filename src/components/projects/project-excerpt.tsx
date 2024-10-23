import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/lib/types";
import ProjectTypeExcerpt from "./descriptors/project-type";
import ProjectCategoryExcerpt from "./descriptors/project-category";

export default function ProjectExcerpt({
  project,
  lang,
}: {
  project: ProjectType;
  lang: string;
}) {
  const title = project.titles.find((t) => t.lang === lang)?.value;
  const description = project.descriptions.find((d) => d.lang === lang)?.value;

  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      key={project.id}
      className="basis-full lg:basis-1/3 grow-0 flex flex-col gap-y-6 items-start w-full p-4  transition ease-in-out duration-500 hover:scale-105 lg:p-0 rounded-lg lg:rounded-none bg-background-200 lg:bg-transparent"
    >
      {/* cover image */}
      <Image
        src={project.coverImage}
        width={1000}
        height={1000}
        alt={`${project.name}`}
        className="w-full grow-0 rounded-lg object-cover object-center max-h-40"
      />
      {/* project details */}
      <div className="basis-5/12 flex flex-col gap-5 items-start text-start">
        <h3 className="text-xl lg:text-[28px] font-bold">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        <div className="flex gap-2 justify-start flex-wrap">
          <ProjectTypeExcerpt type={project.projectType} lang={lang} />
          <ProjectCategoryExcerpt category={project.projectCategory} />
        </div>
      </div>
    </Link>
  );
}
