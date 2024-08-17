"use client";

import {
  CheckBadgeIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const qualities = [
  {
    name: "Expertise",
    description:
      "Our team comprises industry veterans with years of experience in photography and videography.",
    icon: <UserGroupIcon />,
  },
  {
    name: "Quality",
    description:
      "We use state-of-the-art equipment and techniques to ensure the highest quality output.",
    icon: <CheckBadgeIcon />,
  },
  {
    name: "Tailored Solutions",
    description:
      "Custom photography and videography services designed to meet your specific needs.",
    icon: <PuzzlePieceIcon />,
  },
  {
    name: "Fast Turnaround",
    description:
      "We understand the importance of time in the industry and ensure quick delivery without compromising quality.",
    icon: <RocketLaunchIcon />,
  },
  {
    name: "Comprehensive Services",
    description:
      "From pre-production planning to post-production editing, we handle it all.",
    icon: <TrophyIcon />,
  },
];

export default function QualitiesList() {
  return (
    <div className="flex flex-wrap gap-5 w-full">
      {qualities.map((quality, index) => (
        <div
          key={index}
          className="basis-1/4 grow px-7 py-6 rounded-lg flex flex-col gap-y-6 transition ease-in-out duration-500 hover:scale-110 hover:bg-gray-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-8 h-8">{quality.icon}</div>
            <span className="text-light-200 capitalize font-bold text-[20px]">
              {quality.name}
            </span>
          </div>
          <p className="text-light-300">{quality.description}</p>
        </div>
      ))}
    </div>
  );
}
