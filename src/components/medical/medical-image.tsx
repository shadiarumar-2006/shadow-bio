"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { MedicalImage } from "@/lib/medical-images";

type MedicalImageProps = {
  image: MedicalImage;
  className?: string;
  imgClassName?: string;
  /** Show caption with source attribution */
  showCaption?: boolean;
  /** rounded corner radius */
  rounded?: "sm" | "md" | "lg" | "xl";
  /** aspect ratio class */
  aspect?: "square" | "video" | "wide" | "tall" | "auto";
};

const ASPECT_CLASS: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[16/10]",
  tall: "aspect-[3/4]",
  auto: "",
};

const ROUNDED: Record<string, string> = {
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
};

export function MedicalImageComponent({
  image,
  className,
  imgClassName,
  showCaption = false,
  rounded = "lg",
  aspect = "auto",
}: MedicalImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <figure className={cn("relative overflow-hidden bg-muted", ROUNDED[rounded], ASPECT_CLASS[aspect], className)}>
      {/* Skeleton placeholder while loading */}
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-muted-foreground/10 to-muted" />
      )}
      {/* Error fallback */}
      {errored && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground p-4 text-center bg-muted">
          {image.alt}
        </div>
      )}
      <motion.img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 hover:scale-105",
          imgClassName
        )}
      />
      {/* Subtle gradient overlay for caption readability */}
      {showCaption && loaded && (
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-2 text-[10px] text-white/90">
          <span className="opacity-80">Source: {image.source}</span>
        </figcaption>
      )}
    </figure>
  );
}
