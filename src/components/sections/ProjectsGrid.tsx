"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";

const easeOut = [0.16, 1, 0.3, 1] as const;

const allCategories: Array<{ value: ProjectCategory | "hepsi"; label: string }> = [
  { value: "hepsi", label: "Hepsi" },
  { value: "villa", label: "Villa" },
  { value: "rezidans", label: "Rezidans" },
  { value: "ticari", label: "Ticari" },
  { value: "kamu", label: "Kamu" },
  { value: "teras", label: "Teras & Yazlık" },
];

export default function ProjectsGrid() {
  const [active, setActive] = useState<ProjectCategory | "hepsi">("hepsi");

  const filtered =
    active === "hepsi" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
        {allCategories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActive(cat.value)}
            className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
              active === cat.value
                ? "bg-servi-yesili border-servi-yesili text-saf-beyaz"
                : "border-antrasit/20 text-antrasit/60 hover:border-servi-yesili hover:text-servi-yesili"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="font-sans text-sm text-antrasit/40 mb-8">
        {filtered.length} proje gösteriliyor
      </p>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const cover = project.images[0];
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: easeOut, delay: i * 0.04 }}
              >
                <Link
                  href={`/projeler/${project.id}`}
                  className="group block overflow-hidden rounded-sm"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-4/3">
                    <Image
                      src={cover.url}
                      alt={cover.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Featured badge */}
                    {project.featured && (
                      <span className="absolute top-4 left-4 font-sans text-[10px] tracking-widest uppercase bg-servi-yesili text-saf-beyaz px-3 py-1.5">
                        Öne Çıkan
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="pt-5 pb-2">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="font-sans text-xs tracking-widest uppercase text-servi-yesili">
                        {categoryLabels[project.category]}
                      </span>
                      <span className="font-sans text-xs text-antrasit/40">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-antrasit leading-snug mb-1.5 group-hover:text-servi-yesili transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-antrasit/50 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-antrasit/40 group-hover:text-servi-yesili transition-colors duration-300">
                      <span className="font-sans text-xs tracking-widest uppercase">
                        Projeyi İncele
                      </span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
