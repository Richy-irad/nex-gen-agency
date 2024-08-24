"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function HeroVideo() {
  return (
    <CldVideoPlayer
      width={1920}
      height={1080}
      src="https://res.cloudinary.com/richy-irad/video/upload/v1724466817/hero-video_p6jvxd.mp4"
      className="rounded-lg w-full h-auto"
      poster="https://res.cloudinary.com/richy-irad/image/upload/v1724535466/billy-k-image_om3wuy.jpg"
      colors={{
        base: "#1d4ed8",
        text: "#ffffff",
      }}
    />
  );
}
