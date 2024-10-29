"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function ProjectVideoPlayer({
  projectId,
  videoUrl,
}: {
  projectId: string;
  videoUrl: string;
}) {
  return (
    <CldVideoPlayer
      id={projectId}
      width={1920}
      height={1080}
      src={videoUrl}
      className="rounded-lg w-full h-96 lg:h-[36rem]"
      colors={{
        base: "#1d4ed8",
        text: "#ffffff",
      }}
    />
  );
}
