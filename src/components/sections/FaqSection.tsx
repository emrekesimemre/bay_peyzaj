"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { getFaq } from "@/data/faq";
import type { Locale } from "@/i18n/routing";

const easeOut = [0.0, 0.0, 0.2, 1] as const;

export default function FaqSection({ locale }: { locale: Locale }) {
  const t = useTranslations("Faq");
  const faqItems = getFaq(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });

  return (
    <section
      ref={ref}
      id="sss"
      className="py-24 md:py-36 px-6 md:px-16 bg-saf-beyaz"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          className="md:sticky md:top-32 self-start"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
            {t("h2Line1")}
            <br />
            {t("h2Line2")}
          </h2>
          <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-sm">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
        >
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-antrasit/10">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-start justify-between gap-4 py-6 text-left"
              >
                <span className="font-serif text-lg md:text-xl text-antrasit leading-snug">
                  {item.question}
                </span>
                <span
                  className={`mt-1 shrink-0 text-servi-yesili transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-base text-antrasit/60 leading-relaxed pb-6">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
