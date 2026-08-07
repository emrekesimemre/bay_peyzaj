"use client";

import { motion } from "framer-motion";

const items = [
  "15+ Yıllık Deneyim",
  "200+ Tamamlanan Proje",
  "Premium Peyzaj Tasarımı",
  "100% Müşteri Memnuniyeti",
  "Uzman Ekip",
  "Doğaya Saygılı Çözümler",
];

const Separator = () => (
  <span className="mx-8 text-servi-yesili text-lg select-none">✦</span>
);

const Track = () => (
  <>
    {items.map((item) => (
      <span key={item} className="inline-flex items-center shrink-0">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-white/70 whitespace-nowrap">
          {item}
        </span>
        <Separator />
      </span>
    ))}
  </>
);

export default function MarqueeTicker() {
  return (
    <div className="bg-antrasit overflow-hidden py-5 border-y border-white/5">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Track />
        <Track />
      </motion.div>
    </div>
  );
}
