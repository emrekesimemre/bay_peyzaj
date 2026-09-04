"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const easeOut = [0.0, 0.0, 0.2, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "100px" },
  transition: { duration: 0.8, ease: easeOut, delay },
});

export default function AboutSection() {
  const t = useTranslations("About");
  const paragraphs = [t("p1"), t("p2"), t("p3")];

  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="hakkimizda"
      className="bg-saf-beyaz py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-8">
            <div className="mb-4">
              <motion.span
                className="font-sans text-xs tracking-[0.3em] uppercase text-servi-yesili mb-4 block"
                {...fadeUp(0)}
              >
                {t("eyebrow")}
              </motion.span>
              <motion.h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-antrasit tracking-tight leading-tight"
                {...fadeUp(0.1)}
              >
                {t("h2")}
              </motion.h2>
              <motion.div
                className="mt-6 w-16 h-px bg-servi-yesili"
                {...fadeUp(0.2)}
              />
            </div>
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="font-sans text-base md:text-lg text-slate-700 leading-relaxed"
                {...fadeUp(0.3 + i * 0.15)}
              >
                {text}
              </motion.p>
            ))}
            <motion.blockquote
              className="mt-4 pl-6 border-l-2 border-servi-yesili"
              {...fadeUp(0.75)}
            >
              <p className="font-serif text-xl md:text-2xl text-antrasit/80 italic leading-snug">
                &ldquo;{t("quote")}&rdquo;
              </p>
            </motion.blockquote>
          </div>

          <motion.div
            ref={imageRef}
            className="relative w-full aspect-4/5 overflow-hidden rounded-sm"
            {...fadeUp(0.35)}
          >
            <motion.div style={{ scale }} className="absolute inset-0">
              <Image
                src="/images/projects/proje-02.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-linear-to-t from-antrasit/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
