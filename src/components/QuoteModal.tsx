"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type QuoteModalProps = Readonly<{
  isOpen: boolean;
  onClose: () => void;
}>;

const services = [
  "Peyzaj Tasarımı",
  "Bahçe Düzenlemesi",
  "Sulama Sistemleri",
  "Çim Ekimi & Bakımı",
  "Taş & Ahşap Zemin",
  "Havuz & Su Öğeleri",
  "Aydınlatma Tasarımı",
  "Diğer",
];

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeIn = [0.4, 0, 1, 1] as const;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: easeOut } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: easeIn } },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: { duration: 0.2, ease: easeIn },
  },
};

const WHATSAPP_NUMBER = "905067876301";

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Merhaba, web sitenizden ulaşıyorum. Projem için bilgi almak istiyorum.\nAd Soyad: ${name}\nTelefon: ${phone}\nİlgilenilen Hizmet: ${selectedService}`;
    const encodedText = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`,
      "_blank",
    );
    onClose();
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="quote-modal-overlay"
          className="fixed inset-0 z-100 flex items-center justify-center px-4 cursor-default"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-lg bg-saf-beyaz shadow-2xl rounded-sm"
            variants={panelVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div className="h-0.5 w-full bg-servi-yesili rounded-t-sm" />

            <div className="px-6 py-8 sm:px-10 sm:py-12">
              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-6 right-7 text-antrasit/40 hover:text-antrasit transition-colors duration-200 p-1"
                aria-label="Modalı kapat"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
                </svg>
              </button>

              {/* Header */}
              <div className="mb-7 sm:mb-10">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-servi-yesili mb-2">
                  Ücretsiz Danışmanlık
                </p>
                <h2
                  id="modal-title"
                  className="font-serif text-2xl sm:text-3xl text-antrasit leading-tight"
                >
                  Projenizi Anlatın
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Ad Soyad */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-antrasit/50 mb-2 group-focus-within:text-servi-yesili transition-colors duration-200"
                  >
                    Ad Soyad
                  </label>
                  <input
                    ref={firstInputRef}
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Adınız ve soyadınız"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-antrasit/20 focus:border-servi-yesili pb-3 font-sans text-base text-antrasit placeholder:text-antrasit/25 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Telefon */}
                <div className="group">
                  <label
                    htmlFor="phone"
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-antrasit/50 mb-2 group-focus-within:text-servi-yesili transition-colors duration-200"
                  >
                    Telefon Numarası
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="0 (5__) ___ __ __"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-antrasit/20 focus:border-servi-yesili pb-3 font-sans text-base text-antrasit placeholder:text-antrasit/25 outline-none transition-colors duration-300"
                  />
                </div>

                {/* Hizmet */}
                <div className="group">
                  <label
                    htmlFor="service-btn"
                    className="block font-sans text-xs tracking-[0.15em] uppercase text-antrasit/50 mb-2 transition-colors duration-200"
                  >
                    Hizmet Seçimi
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      id="service-btn"
                      type="button"
                      onClick={() => setDropdownOpen((v) => !v)}
                      className={`w-full flex items-center justify-between border-b py-3 font-sans text-base outline-none transition-colors duration-300 pr-1 text-left ${
                        dropdownOpen
                          ? "border-servi-yesili"
                          : "border-antrasit/20"
                      } ${selectedService ? "text-antrasit" : "text-antrasit/40"}`}
                    >
                      <span>{selectedService || "İlgilendiğiniz hizmet"}</span>
                      <svg
                        className={`w-4 h-4 text-antrasit/40 transition-transform duration-200 shrink-0 ${dropdownOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          d="M3 6l5 5 5-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-0 right-0 top-full z-50 bg-saf-beyaz border border-antrasit/10 shadow-xl rounded-sm overflow-y-auto max-h-52"
                        >
                          {services.map((s) => (
                            <li key={s}>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedService(s);
                                  setDropdownOpen(false);
                                }}
                                className={`w-full text-left px-5 py-4 font-sans text-base transition-colors duration-150 ${
                                  selectedService === s
                                    ? "text-servi-yesili bg-servi-yesili/5"
                                    : "text-antrasit hover:bg-antrasit/5"
                                }`}
                              >
                                {s}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-servi-yesili text-saf-beyaz font-sans text-sm tracking-[0.2em] uppercase py-4 hover:bg-antrasit transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-servi-yesili focus:ring-offset-2"
                  >
                    Teklif Talep Et
                  </button>
                  <p className="text-center font-sans text-xs text-antrasit/30 mt-4 tracking-wide">
                    En geç 24 saat içinde sizi arayacağız.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
