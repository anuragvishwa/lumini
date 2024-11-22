"use client";

import { useRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface VideoPlayerProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function VideoPlayer({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="shrink-0" data-aos="fade-left">
      {/* Video thumbnail */}
      {/* <div className="flex justify-center items-center">
        <div className="relative">
          <div
            className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10"
            aria-hidden="true"
          ></div>
          <Image
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
          />
        </div>
      </div> */}
      {/* End: Video thumbnail */}

      {/* Video player */}
      <div className="max-w-6xl mx-auto mt-6">
        <video
          ref={videoRef}
          width={videoWidth}
          height={videoHeight}
          loop
          controls
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* End: Video player */}
    </div>
  );
}
