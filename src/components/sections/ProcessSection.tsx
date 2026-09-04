"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

const easeOut = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
    titleKey: "step1Title" as const,
    descKey: "step1Desc" as const,
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    titleKey: "step2Title" as const,
    descKey: "step2Desc" as const,
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    titleKey: "step3Title" as const,
    descKey: "step3Desc" as const,
  },
  {
    number: "04",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    titleKey: "step4Title" as const,
    descKey: "step4Desc" as const,
  },
];

export default function ProcessSection() {
  const t = useTranslations("Process");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });

  return (
    <section className="py-24 md:py-36 px-6 md:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-16 md:mb-20"
        >
          <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl font-semibold text-antrasit leading-tight tracking-tight mb-4">
            {t("h2Line1")}
            <br />
            {t("h2Line2")}
          </h2>
          <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-md">
            {t("subtitle")}
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: easeOut, delay: i * 0.13 }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-10 left-full w-full h-px bg-antrasit/10 z-0 -translate-x-1/2"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: easeOut,
                    delay: 0.4 + i * 0.13,
                  }}
                  style={{ transformOrigin: "left", width: "100%" }}
                />
              )}
              <div className="relative z-10 p-8 lg:pr-12 border-b sm:border-b-0 sm:border-r border-antrasit/8 last:border-r-0 last:border-b-0">
                <div className="flex items-start justify-between mb-8">
                  <div className="text-servi-yesili">{step.icon}</div>
                  <span className="font-sans text-4xl font-semibold text-antrasit/6 select-none leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-antrasit mb-3 leading-snug">
                  {t(step.titleKey)}
                </h3>
                <p className="font-sans text-sm text-antrasit/50 leading-relaxed">
                  {t(step.descKey)}
                </p>
                <div className="mt-6 w-0 h-px bg-servi-yesili group-hover:w-10 transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
