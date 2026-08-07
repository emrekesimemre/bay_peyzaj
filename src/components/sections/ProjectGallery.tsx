"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, type ProjectImage } from "@/data/projects";

const easeOut = [0.16, 1, 0.3, 1] as const;

function GalleryItem({ image }: Readonly<{ image: ProjectImage }>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const isLandscape = image.orientation === "landscape";

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-sm ${
        isLandscape ? "md:col-span-2 h-[50vh] md:h-[60vh]" : "h-[60vh] md:h-[72vh]"
      }`}
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover"
          sizes={
            isLandscape
              ? "100vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />
      </motion.div>
    </div>
  );
}

export default function ProjectGallery() {
  return (
    <section id="projeler" className="py-24 md:py-36 px-6 md:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">

        {/* Bölüm Başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-16 md:mb-24"
        >
          <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
            Projelerimiz
          </h2>
          <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-sm">
            Her proje, toprağa ve insana duyulan saygının somut bir ifadesidir.
          </p>
        </motion.div>

        {/* Proje Listesi */}
        {projects.map((project) => (
          <div key={project.id} className="mb-20 md:mb-32 last:mb-0">

            {/* Proje Başlığı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mb-8 md:mb-12"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-antrasit font-semibold mb-3">
                {project.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-antrasit/50 leading-relaxed max-w-xl">
                {project.description}
              </p>
            </motion.div>

            {/* Asimetrik Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {project.images.map((image, idx) => (
                <GalleryItem key={`${project.id}-${idx}`} image={image} />
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
