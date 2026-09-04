"use client";

import { getFeaturedProjects } from "@/data/projects";
import type { ProjectImage } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import Lightbox from "@/components/Lightbox";

const easeOut = [0.16, 1, 0.3, 1] as const;

function ProjectCard({
  project,
  index,
  className = "",
  locale,
  onClick,
}: Readonly<{
  project: ReturnType<typeof getFeaturedProjects>[number];
  index: number;
  className?: string;
  locale: Locale;
  onClick: () => void;
}>) {
  const containerRef = useRef<HTMLDivElement>(null);
  // locale kept for future i18n use (e.g. localised alt text)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const coverImage = project.images[0];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px 0px" }}
      transition={{ duration: 0.8, ease: easeOut, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-sm cursor-pointer ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ scale }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={coverImage.url}
            alt={coverImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-antrasit/70 via-antrasit/10 to-transparent" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-antrasit/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border border-saf-beyaz/70 flex items-center justify-center">
          <svg className="w-5 h-5 text-saf-beyaz" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-saf-beyaz leading-snug">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects({
  locale,
}: Readonly<{ locale: Locale }>) {
  const t = useTranslations("FeaturedProjects");
  const featured = getFeaturedProjects(locale).slice(0, 3);

  const [lightbox, setLightbox] = useState<{
    images: ProjectImage[];
    index: number;
  } | null>(null);

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
      <section id="projeler" className="py-24 md:py-36 px-6 md:px-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px 0px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
              <h2 className="font-serif text-5xl md:text-6xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
                {t("h2")}
              </h2>
              <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-sm">
                {t("subtitle")}
              </p>
            </div>
            <Link
              href="/projeler"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-antrasit/70 hover:text-servi-yesili transition-colors duration-300 group whitespace-nowrap"
            >
              {t("viewAll")}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Bento grid — 3 fotoğraf: geniş + dar + tam genişlik */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {featured[0] && (
              <ProjectCard
                project={featured[0]}
                index={0}
                className="md:col-span-2 h-[70vw] md:h-[56vh] max-h-125"
                locale={locale}
                onClick={() => openLightbox(featured[0].images, 0)}
              />
            )}
            {featured[1] && (
              <ProjectCard
                project={featured[1]}
                index={1}
                className="md:col-span-1 h-[70vw] md:h-[56vh] max-h-125"
                locale={locale}
                onClick={() => openLightbox(featured[1].images, 0)}
              />
            )}
            {featured[2] && (
              <ProjectCard
                project={featured[2]}
                index={2}
                className="md:col-span-3 h-[60vw] md:h-[42vh] max-h-95"
                locale={locale}
                onClick={() => openLightbox(featured[2].images, 0)}
              />
            )}
          </div>
        </div>
      </section>

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
