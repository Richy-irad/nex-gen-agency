export default function ProjectCategoryExcerpt({ category }: { category: string }) {
  return (
    <span className="px-3 py-2.5 bg-indigo-600 text-foreground text-sm capitalize font-medium rounded-full">
      {category}
    </span>
  );
}
