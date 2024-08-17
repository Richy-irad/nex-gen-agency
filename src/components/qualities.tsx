"use client";

import {
  ArrowTrendingUpIcon,
  LightBulbIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const qualities = [
  {
    name: "Passionate Team",
    description:
      "Our young and dynamic team is dedicated to delivering results with creativity and enthusiasm.",
    icon: <UserGroupIcon />,
  },
  {
    name: "Trend Awareness",
    description:
      "We leverage our understanding of the latest trends to create content that resonates with today&apos;s audiences.",
    icon: <ArrowTrendingUpIcon />,
  },
  {
    name: "Fresh Ideas",
    description:
      "We bring innovative solutions tailored to your brand’s needs, helping you stay ahead of the competition.",
    icon: <LightBulbIcon />,
  },
  {
    name: "Outside-the-Box Thinking",
    description:
      "Our approach is fresh and innovative, ensuring your content stands out in a crowded marketplace.",
    icon: <SparklesIcon />,
  },
  {
    name: "Real Results",
    description:
      "Our content doesn&pos;t just look good; it drives tangible outcomes for your business.",
    icon: <TrophyIcon />,
  },
];

export default function QualitiesList() {
  return (
    <div className="flex flex-wrap gap-5 w-full">
      {qualities.map((quality, index) => (
        <div
          key={index}
          className="basis-full lg:basis-1/4 grow px-2.5 py-3 lg:px-7 lg:py-6 rounded-lg flex flex-col gap-y-6 transition ease-in-out duration-500 hover:scale-110"
        >
          <div className="flex items-start gap-4">
            <div className="w-8 h-8">{quality.icon}</div>
            <span className="capitalize font-bold text-[20px]">
              {quality.name}
            </span>
          </div>
          <p className="text-zinc-300">{quality.description}</p>
        </div>
      ))}
    </div>
  );
}
