"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Peyzaj Tasarımı",
    description:
      "Arazinizin ruhunu okuyarak özgün, zamansız ve yaşayan bahçe projeleri tasarlıyoruz.",
  },
  {
    number: "02",
    title: "Periyodik Bakım",
    description:
      "Bitkisel dokularınızı dört mevsim canlı tutmak için planlı ve uzman bakım hizmeti sunuyoruz.",
  },
  {
    number: "03",
    title: "Otomatik Sulama",
    description:
      "Su tasarruflu akıllı damla ve yağmurlama sistemleri ile bahçeniz kendi kendine yaşar.",
  },
  {
    number: "04",
    title: "Sert Zemin Uygulamaları",
    description:
      "Doğal taş, kompozit deck ve beton zemin çözümleriyle açık alanlarınıza kalıcı bir karakter katıyoruz.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="hizmetler" className="py-24 md:py-36 px-6 md:px-16 bg-saf-beyaz">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

        {/* Sol Sütun — Sticky başlık */}
        <div className="md:sticky md:top-32 self-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
              Ne
              <br />
              Yapıyoruz?
            </h2>
            <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-sm">
              Tasarımdan uygulamaya, bakımdan detaya — her projede doğayla
              uyumlu, kalıcı yaşam alanları yaratıyoruz.
            </p>
          </motion.div>
        </div>

        {/* Sağ Sütun — Hizmet listesi */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.number} variants={itemVariants}>
              {/* Animasyonlu ayırıcı çizgi */}
              <motion.div
                variants={dividerVariants}
                className="h-px bg-antrasit/10 origin-left"
                style={{ transformOrigin: "left" }}
              />

              {/* Hizmet içeriği */}
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

          {/* Son ayırıcı */}
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
