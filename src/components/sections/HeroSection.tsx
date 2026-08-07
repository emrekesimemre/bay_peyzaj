"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import QuoteModal from "@/components/QuoteModal";

const easeOut = [0.0, 0.0, 0.2, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: easeOut, delay },
});

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Geçici arka plan — müşteriden görsel gelince Image ile değiştirilecek */}
        <div className="absolute inset-0 bg-stone-100" />

        {/* İçerik */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{ y: textY, opacity }}
        >
          <motion.span
            className="inline-block font-sans text-xs tracking-[0.35em] uppercase text-antrasit/50 mb-6"
            {...fadeUp(0.1)}
          >
            Premium Peyzaj & Mimari Tasarım
          </motion.span>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-antrasit tracking-tight leading-tight mb-6"
            {...fadeUp(0.25)}
          >
            Doğayla Uyumlu
            <br />
            <span className="italic text-antrasit/70">Yaşam Alanları</span>
          </motion.h1>

          <motion.p
            className="font-serif text-lg md:text-xl text-antrasit/60 italic max-w-xl mx-auto mb-10"
            {...fadeUp(0.4)}
          >
            Doğaya değer, yaşam alanlarına kalite.
          </motion.p>

          {/* CTA Butonları */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            {...fadeUp(0.55)}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="font-sans text-sm tracking-[0.2em] uppercase px-8 py-4 bg-servi-yesili text-saf-beyaz hover:bg-antrasit transition-all duration-400 min-w-44"
            >
              Teklif Al
            </button>
            <a
              href="#projeler"
              className="font-sans text-sm tracking-[0.2em] uppercase px-8 py-4 border border-antrasit/30 text-antrasit/70 hover:border-antrasit hover:text-antrasit transition-all duration-400 min-w-44"
            >
              Projelerimiz
            </a>
          </motion.div>

          <motion.div
            className="mt-12 w-12 h-px bg-servi-yesili mx-auto"
            {...fadeUp(0.65)}
          />
        </motion.div>

        {/* Aşağı Kaydır İpucu */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{ opacity }}
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-antrasit/30">
            Keşfet
          </span>
          <motion.div
            className="w-px h-8 bg-antrasit/20"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
