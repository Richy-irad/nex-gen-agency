"use client";

import {
  ArrowTrendingUpIcon,
  LightBulbIcon,
  SparklesIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const qualitiesEn = [
  {
    name: "Passionate Team",
    description:
      "Our young and dynamic team is dedicated to delivering results with creativity and enthusiasm.",
    icon: <UserGroupIcon />,
  },
  {
    name: "Trend Awareness",
    description:
      "We leverage our understanding of the latest trends to create content that resonates with today's audiences.",
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
      "Our content doesn't just look good; it drives tangible outcomes for your business.",
    icon: <TrophyIcon />,
  },
];

const qualitiesFr = [
  {
    name: "Une équipe passionnée",
    description:
      "Notre équipe jeune et dynamique se consacre à fournir des résultats avec créativité et enthousiasme.",
    icon: <UserGroupIcon />,
  },
  {
    name: "Sensibilisation aux tendances",
    description:
      "Nous exploitons notre compréhension des dernières tendances pour créer du contenu qui trouve un écho auprès du public d'aujourd'hui.",
    icon: <ArrowTrendingUpIcon />,
  },
  {
    name: "Des idées nouvelles",
    description:
      "WNous apportons des solutions innovantes adaptées aux besoins de votre marque, vous aidant à garder une longueur d’avance sur la concurrence.",
    icon: <LightBulbIcon />,
  },
  {
    name: "Une pensée hors du commun",
    description:
      "Notre approche est fraîche et innovante, garantissant que votre contenu se démarque sur un marché encombré.",
    icon: <SparklesIcon />,
  },
  {
    name: "Résultats réels",
    description:
      "Notre contenu n’est pas seulement esthétique ; il génère des résultats tangibles pour votre entreprise.",
    icon: <TrophyIcon />,
  },
];

export default function QualitiesList({ lang }: { lang: string }) {
  let qualities: any = [];

  if (lang == "en") {
    qualities = qualitiesEn;
  } else {
    qualities = qualitiesFr;
  }
  return (
    <div className="flex flex-wrap gap-5 w-full">
      {qualities.map((quality: any, index: number) => (
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
