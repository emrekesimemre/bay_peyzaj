"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { getProjects, type ProjectCategory, type ProjectImage } from "@/data/projects";
import type { Locale } from "@/i18n/routing";
import Lightbox from "@/components/Lightbox";

const easeOut = [0.16, 1, 0.3, 1] as const;

const allCategoryValues: Array<ProjectCategory | "hepsi"> = [
  "hepsi",
  "villa",
  "rezidans",
  "ticari",
  "kamu",
  "teras",
];

function GalleryPhoto({
  src,
  alt,
  title,
  index,
  className = "",
  onClick,
}: Readonly<{
  src: string;
  alt: string;
  title: string;
  index: number;
  className?: string;
  onClick: () => void;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <motion.div
      ref={containerRef}
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px 0px" }}
      transition={{ duration: 0.9, ease: easeOut, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-sm cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
        />
      </motion.div>
      {/* Gradient + başlık */}
      <div className="absolute inset-0 bg-linear-to-t from-antrasit/65 via-transparent to-transparent" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-antrasit/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border border-saf-beyaz/70 flex items-center justify-center">
          <svg className="w-5 h-5 text-saf-beyaz" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
        <p className="font-serif text-lg md:text-xl font-semibold text-saf-beyaz leading-snug">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

function GalleryGrid({
  filtered,
  onPhotoClick,
  emptyLabel,
}: Readonly<{
  filtered: ReturnType<typeof getProjects>;
  onPhotoClick: (images: ProjectImage[], index: number) => void;
  emptyLabel: string;
}>) {
  if (filtered.length === 0) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="font-serif text-lg text-antrasit/40 italic py-24 text-center"
      >
        {emptyLabel}
      </motion.p>
    );
  }

  if (filtered.length === 1) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 gap-3 md:gap-4"
      >
        <GalleryPhoto
          src={filtered[0].images[0].url}
          alt={filtered[0].images[0].alt}
          title={filtered[0].title}
          index={0}
          className="h-[75vw] md:h-[65vh]"
          onClick={() => onPhotoClick(filtered[0].images, 0)}
        />
      </motion.div>
    );
  }

  if (filtered.length === 2) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
      >
        {filtered.map((p, i) => (
          <GalleryPhoto
            key={p.id}
            src={p.images[0].url}
            alt={p.images[0].alt}
            title={p.title}
            index={i}
            className="h-[75vw] md:h-[58vh]"
            onClick={() => onPhotoClick(p.images, 0)}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
    >
      <GalleryPhoto
        src={filtered[0].images[0].url}
        alt={filtered[0].images[0].alt}
        title={filtered[0].title}
        index={0}
        className="md:col-span-2 h-[75vw] md:h-[55vh]"
        onClick={() => onPhotoClick(filtered[0].images, 0)}
      />
      <GalleryPhoto
        src={filtered[1].images[0].url}
        alt={filtered[1].images[0].alt}
        title={filtered[1].title}
        index={1}
        className="md:col-span-1 h-[75vw] md:h-[55vh]"
        onClick={() => onPhotoClick(filtered[1].images, 0)}
      />
      <GalleryPhoto
        src={filtered[2].images[0].url}
        alt={filtered[2].images[0].alt}
        title={filtered[2].title}
        index={2}
        className="md:col-span-3 h-[60vw] md:h-[45vh]"
        onClick={() => onPhotoClick(filtered[2].images, 0)}
      />
    </motion.div>
  );
}

export default function ProjectsGrid({ locale }: Readonly<{ locale: Locale }>) {
  const t = useTranslations("ProjectsPage");
  const projects = getProjects(locale);
  const [active, setActive] = useState<ProjectCategory | "hepsi">("hepsi");
  const [lightbox, setLightbox] = useState<{
    images: ProjectImage[];
    index: number;
  } | null>(null);

  const filterLabels: Record<ProjectCategory | "hepsi", string> = {
    hepsi: t("filterAll"),
    villa: t("filterVilla"),
    rezidans: t("filterRezidans"),
    ticari: t("filterTicari"),
    kamu: t("filterKamu"),
    teras: t("filterTeras"),
  };

  const filtered =
    active === "hepsi"
      ? projects
      : projects.filter((p) => p.category === active);

  const openLightbox = (images: ProjectImage[], index: number) =>
    setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
    );
  const nextPhoto = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
    );

  return (
    <>
      <div>
        {/* Aktif filtreler */}
        <div className="flex flex-wrap gap-3 mb-16 md:mb-20">
          {allCategoryValues.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setActive(val)}
              className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                active === val
                  ? "bg-servi-yesili border-servi-yesili text-saf-beyaz"
                  : "border-antrasit/20 text-antrasit/60 hover:border-servi-yesili hover:text-servi-yesili"
              }`}
            >
              {filterLabels[val]}
            </button>
          ))}
        </div>

        {/* Editorial asimetrik galeri */}
        <AnimatePresence mode="wait">
          <GalleryGrid key={active} filtered={filtered} onPhotoClick={openLightbox} emptyLabel={t("noProjects")} />
        </AnimatePresence>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}
