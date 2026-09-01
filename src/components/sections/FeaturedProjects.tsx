"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { getFeaturedProjects, getCategoryLabels } from "@/data/projects";
import type { Locale } from "@/i18n/routing";

const easeOut = [0.16, 1, 0.3, 1] as const;

function ProjectCard({
  project,
  index,
  className = "",
  locale,
}: Readonly<{
  project: ReturnType<typeof getFeaturedProjects>[number];
  index: number;
  className?: string;
  locale: Locale;
}>) {
  const t = useTranslations("FeaturedProjects");
  const catLabels = getCategoryLabels(locale);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const coverImage = project.images[0];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, ease: easeOut, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-sm ${className}`}
    >
      <Link href={`/projeler/${project.id}`} className="block w-full h-full">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
            <Image src={coverImage.url} alt={coverImage.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-antrasit/80 via-antrasit/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block font-sans text-xs tracking-widest uppercase text-saf-beyaz/60 mb-3">
            {catLabels[project.category]} — {project.location}
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-saf-beyaz leading-snug mb-4">{project.title}</h3>
          <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-400">
            <span className="font-sans text-sm text-saf-beyaz/80 tracking-wide">{t("inspect")}</span>
            <svg className="w-4 h-4 text-saf-beyaz/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProjects({ locale }: { locale: Locale }) {
  const t = useTranslations("FeaturedProjects");
  const featured = getFeaturedProjects(locale).slice(0, 4);

  return (
    <section id="projeler" className="py-24 md:py-36 px-6 md:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-antrasit leading-tight tracking-tight mb-6">{t("h2")}</h2>
            <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-sm">{t("subtitle")}</p>
          </div>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-antrasit/70 hover:text-servi-yesili transition-colors duration-300 group whitespace-nowrap"
          >
            {t("viewAll")}
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {featured[0] && <ProjectCard project={featured[0]} index={0} className="md:col-span-2 h-[55vw] md:h-[52vh] max-h-140" locale={locale} />}
          {featured[1] && <ProjectCard project={featured[1]} index={1} className="md:col-span-1 h-[70vw] md:h-[52vh] max-h-140" locale={locale} />}
          {featured[2] && <ProjectCard project={featured[2]} index={2} className="md:col-span-1 h-[70vw] md:h-[52vh] max-h-140" locale={locale} />}
          {featured[3] && <ProjectCard project={featured[3]} index={3} className="md:col-span-2 h-[55vw] md:h-[52vh] max-h-140" locale={locale} />}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link href="/projeler" className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase px-10 py-4 border border-antrasit/30 text-antrasit hover:border-servi-yesili hover:text-servi-yesili transition-all duration-300">
            {t("viewAllLong")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
