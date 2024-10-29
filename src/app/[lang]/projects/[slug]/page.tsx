import { client, SanityFetch } from "../../../../sanity/lib/client";
import { DynamicParams, ProjectType } from "@/lib/types";
import {
  PROJECTS_SLUGS_QUERY,
  SIMILAR_PROJECTS_QUERY,
  SINGLE_PROJECT_QUERY,
} from "../../../../sanity/lib/queries";
import ProjectTypeExcerpt from "@/components/projects/descriptors/project-type";
import ProjectCategoryExcerpt from "@/components/projects/descriptors/project-category";
import ProjectImagesCarousel from "@/components/projects/project-images-carousel";
import ProjectVideoPlayer from "@/components/projects/project-video";
import ProjectExcerpt from "@/components/projects/project-excerpt";

/**
 *  generateStaticParams function to generate slugs, and prefetch pages in advance
 *
 * @returns slugs[]
 */

export async function generateStaticParams() {
  const slugs = client
    .withConfig({ useCdn: false })
    .fetch(PROJECTS_SLUGS_QUERY);

  return slugs;
}

/**
 * Project details page. Shows all Details about a project
 *
 * @param params props used to load data
 * @returns JSX.Element
 */
export default async function ProjectDetails({
  params,
}: {
  params: DynamicParams;
}) {
  const { slug, lang } = params;

  /**
   * Fetch the project from Sanity
   *
   * projectResponse returns an array since it's a filter. We pass `slug` as an argument to the query.
   *
   * After getting the response, we reduce it to obtain only the project
   */
  const projectResponse = await SanityFetch({
    query: SINGLE_PROJECT_QUERY,
    params: {
      slug: slug,
    },
    revalidate: 3600,
  });
  const project: ProjectType = await projectResponse.reduce(
    (proj: ProjectType) => proj
  );

  // get similar projects
  const similarProjects = await SanityFetch({
    query: SIMILAR_PROJECTS_QUERY,
    params: {
      type: project.projectType,
    },
  });

  /**
   * The structure of title and description returned is as follows
   * [
   *  {lang: "en", value: "value"},
   * {{lang: "fr", value: "value"}}
   * ]
   *
   * That's why based on the `lang` param, then we find the appropriate translated title and description for the project.
   */

  const title = project.titles.find(
    (t: { lang: string; value: string }) => t.lang === lang
  )?.value;
  const description = project.descriptions.find(
    (t: { lang: string; value: string }) => t.lang === lang
  )?.value;

  return (
    <div className="flex flex-col gap-y-20 lg:gap-y-32 items-center justify-between mt-20 lg:mt-24">
      <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {project.projectType === "photography" ? (
          <>
            {/* the images carousel */}
            <div className="basis-full lg:basis-1/2 order-last lg:order-1">
              <ProjectImagesCarousel
                projectName={project.name}
                images={project.projectImages}
              />
            </div>
          </>
        ) : (
          <>
            {/* project video */}
            <div className="basis-full lg:basis-1/2 order-last lg:order-1 w-full">
              <ProjectVideoPlayer
                projectId={project.id}
                videoUrl={project.projectVideo}
              />
            </div>
          </>
        )}
        {/* the project description and details */}
        <div className="basis-full lg:basis-1/2 flex flex-col order-1 lg:order-last gap-6">
          <div className="flex gap-2 justify-start flex-wrap">
            <ProjectTypeExcerpt type={project.projectType} lang={lang} />
            <ProjectCategoryExcerpt category={project.projectCategory} />
          </div>
          <p className="text-zinc-300">{description}</p>
          <div className="flex flex-col gap-2">
            <h3 className="uppercase text-white font-semibold text-sm">
              completion date
            </h3>
            <p className="text-zinc-300">
              {project.projectDate.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
      {/* similar projects */}
      {similarProjects.length > 0 && (
        <div className="flex flex-col gap-y-12">
          <h2 className="text-3xl lg:text-5xl self-center text-white font-semibold">
            Similar projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
            {similarProjects.map((project: ProjectType) => (
              <ProjectExcerpt key={project.id} lang={lang} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
