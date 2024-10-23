"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectImageType } from "@/lib/types";
import clsx from "clsx";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

/**
 * ProjectImagesCarousel component to render a slideshow of project images, controlled by buttons.
 * @param projectName name of the project the Images belong to
 * @param images list of image objects making up the project images
 * @returns JSX.Element
 */
export default function ProjectImagesCarousel({
  projectName,
  images,
}: {
  projectName: string;
  images: ProjectImageType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    // change the currentIndex to the previous
    // current index should never go below 0
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    // change the currentIndex to the next
    // currentIndex should never go above images.length
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md relative h-96 lg:h-[36rem] border border-white/5">
        {images.reverse().map((image, index) => (
          <Image
            key={image.key}
            src={image.url}
            width={1000}
            height={1000}
            alt={`${projectName} ${image.key}`}
            className={clsx("object-cover object-center h-full rounded-md", {
              hidden: index !== currentIndex,
              absolute: index === currentIndex,
            })}
          />
        ))}
      </div>

      {/* buttons */}
      <div className="flex items-center justify-between w-full">
        <button
          type="button"
          className="flex gap-2 items-center py-1.5 px-3 bg-white/5 rounded-md border border-white/5 text-white text-sm"
          onClick={handlePrevious}
        >
          <CaretLeft size={16} weight="bold" /> Back
        </button>
        <button
          type="button"
          className="flex gap-2 items-center py-1.5 px-3 bg-white/5 rounded-md border border-white/5 text-white text-sm"
          onClick={handleNext}
        >
          Next<CaretRight size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}
