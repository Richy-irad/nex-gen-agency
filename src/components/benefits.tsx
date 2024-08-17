"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const benefits = [
  {
    title: "Personalized Strategy Session",
    description:
      "Get tailored ideas and a creative plan that align with your brand’s unique goals.",
  },
  {
    title: "Expert Insights & Recommendations",
    description:
      "Receive actionable insights and innovative ideas from our passionate team.",
  },
  {
    title: "Comprehensive Service Overview",
    description:
      "Explore our range of services, from content creation to strategy execution, designed to boost your business.",
  },
];

export default function Benefits() {
  return (
    <div className="flex flex-col gap-3 items-center w-full">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="w-full lg:w-3/4 px-3 py-3 rounded-lg flex gap-6 items-start lg:items-center transition ease-in-out duration-500 hover:scale-110"
        >
          <div className="w-8 h-8 shrink-0">
            <CheckBadgeIcon />
          </div>
          <div className="space-2">
            <p className="capitalize font-bold text-[20px]">
              {benefit.title}
            </p>
            <p className="text-zinc-300">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
