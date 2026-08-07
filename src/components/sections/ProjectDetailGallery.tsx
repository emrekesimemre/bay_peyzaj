"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ProjectImage } from "@/data/projects";

const easeOut = [0.16, 1, 0.3, 1] as const;

function GalleryItem({ image, index }: Readonly<{ image: ProjectImage; index: number }>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const isLandscape = image.orientation === "landscape";

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.8, ease: easeOut, delay: index * 0.08 }}
      className={`relative overflow-hidden rounded-sm ${
        isLandscape
          ? "md:col-span-2 h-[50vw] md:h-[55vh] max-h-140"
          : "h-[65vw] md:h-[65vh] max-h-160"
      }`}
    >
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover"
          sizes={isLandscape ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectDetailGallery({
  images,
}: Readonly<{ images: ProjectImage[] }>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      {images.map((image, idx) => (
        <GalleryItem key={`${image.url}-${idx}`} image={image} index={idx} />
      ))}
    </div>
  );
}
