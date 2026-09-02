"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionMediaProps {
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  className?: string;
  /** Tailwind object-position utility, e.g. "object-[50%_15%]". Defaults to object-cover's center. */
  objectPositionClassName?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Renders an optional muted looping video with a graceful fallback to the
 * still image if the video file isn't present yet (or fails to load) —
 * never shows a broken player.
 */
export function SectionMedia({
  imageSrc,
  imageAlt,
  videoSrc,
  className,
  objectPositionClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: SectionMediaProps) {
  const [videoFailed, setVideoFailed] = useState(false);

  if (videoSrc && !videoFailed) {
    return (
      <video
        className={cn("h-full w-full object-cover", objectPositionClassName, className)}
        autoPlay
        muted
        loop
        playsInline
        poster={imageSrc}
        onError={() => setVideoFailed(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", objectPositionClassName, className)}
    />
  );
}
