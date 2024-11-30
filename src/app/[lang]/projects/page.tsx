/**
 * Projects page
 */
import Footer from "@/components/footer";
import { SanityFetch } from "../../../sanity/lib/client";
import { LangParams } from "@/lib/types";
import {
  ALL_PROJECTS_QUERY,
  CATEGORIES_QUERY,
} from "../../../sanity/lib/queries";
import ProjectsList from "@/components/projects/projects-list";

export default async function Projects({ params }: { params: LangParams }) {
  const { lang } = params;
  const projects = await SanityFetch({
    query: ALL_PROJECTS_QUERY,
    tags: ["project"],
  });
  const categories = await SanityFetch({
    query: CATEGORIES_QUERY,
    tags: ["project", "projectCategory"],
  });

  return (
    <>
      <div className="flex flex-col gap-y-12 lg:gap-y-24 items-center justify-between mt-20 lg:mt-24">
        <h2 className="text-4xl lg:text-6xl font-bold">Projects</h2>

        {/* projects listing section */}
        <ProjectsList projects={projects} categories={categories} lang={lang} />
        {/* footer */}
      </div>
      <Footer />
    </>
  );
}
