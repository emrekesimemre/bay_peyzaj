"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import type { ProjectImage } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

const easeOut = [0.16, 1, 0.3, 1] as const;

function GalleryItem({
  image,
  index,
  onClick,
}: Readonly<{ image: ProjectImage; index: number; onClick: () => void }>) {
  const t = useTranslations("ProjectDetail");
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
      className={`relative overflow-hidden rounded-sm cursor-zoom-in group ${
        isLandscape
          ? "md:col-span-2 h-[50vw] md:h-[55vh] max-h-140"
          : "h-[65vw] md:h-[65vh] max-h-160"
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={t("enlargePhoto", { alt: image.alt })}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover transition-brightness duration-500 group-hover:brightness-90"
          sizes={isLandscape ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        />
      </motion.div>
      {/* Zoom hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m-3-3h6" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectDetailGallery({
  images,
}: Readonly<{ images: ProjectImage[] }>) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {images.map((image, idx) => (
          <GalleryItem
            key={`${image.url}-${idx}`}
            image={image}
            index={idx}
            onClick={() => setLightboxIndex(idx)}
          />
        ))}
      </div>
      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
