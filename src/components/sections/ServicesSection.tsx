"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { getServices } from "@/data/services";
import type { Locale } from "@/i18n/routing";

const easeOut = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: easeOut } },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease: easeOut } },
};

export default function ServicesSection({ locale }: { locale: Locale }) {
  const t = useTranslations("Services");
  const services = getServices(locale);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px 0px" });

  return (
    <section
      id="hizmetler"
      className="py-24 md:py-36 px-6 md:px-16 bg-saf-beyaz"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div className="md:sticky md:top-32 self-start">
          <motion.div
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
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.number} variants={itemVariants}>
              <motion.div
                variants={dividerVariants}
                className="h-px bg-antrasit/10 origin-left"
                style={{ transformOrigin: "left" }}
              />
              <div className="py-8 flex gap-6 items-start">
                <span className="font-sans text-xs tracking-widest text-servi-yesili pt-1 shrink-0 select-none">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-antrasit mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-antrasit/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            variants={dividerVariants}
            className="h-px bg-antrasit/10 origin-left"
            style={{ transformOrigin: "left" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
