"use client"

import { Images, Video } from "@phosphor-icons/react";

export default function ProjectTypeExcerpt({
  type,
  lang,
}: {
  type: string;
  lang: string;
}) {
  let typeText;

  if (type === "photography") {
    if (lang === "en") {
      typeText = "photography";
    } else {
      typeText = "photographie";
    }
  } else {
    if (lang === "en") {
      typeText = "videography";
    } else {
      typeText = "vidéographie";
    }
  }
  return (
    <span className="px-3 py-2.5 flex gap-2 justify-center bg-purple-600 text-foreground text-sm capitalize font-medium rounded-full">
      {type === "photography" ? (
        <Images size={20} className="text-white" />
      ) : (
        <Video size={20} className="text-white" />
      )}
      {typeText}
    </span>
  );
}
