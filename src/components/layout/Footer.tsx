"use client";

import { motion, useInView, type Transition } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { SITE } from "@/data/site";
import type { Locale } from "@/i18n/routing";

const ease = [0.0, 0.0, 0.2, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay } as Transition,
});

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale() as Locale;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animProps = (delay = 0) => ({
    ...fadeUp(delay),
    animate: isInView ? fadeUp(delay).animate : fadeUp(delay).initial,
  });

  const contactItems = [
    {
      label: t("labelAddress"),
      value: `${SITE.address.street}\n${SITE.address.city}, ${SITE.address.country}`,
    },
    { label: t("labelEmail"), value: SITE.email, href: `mailto:${SITE.email}` },
    {
      label: t("labelPhone"),
      value: SITE.phoneDisplay,
      href: `tel:+${SITE.phoneRaw}`,
    },
    { label: t("labelHours"), value: SITE.hoursShort[locale] },
  ];

  const legalLinks = [
    { label: t("legalFaq"), href: "/#sss" },
    { label: t("legalKvkk"), href: "/kvkk" },
    { label: t("legalPrivacy"), href: "/gizlilik" },
    { label: t("legalCookies"), href: "/cerez-politikasi" },
  ];

  return (
    <footer
      ref={ref}
      id="iletisim"
      className="bg-antrasit text-saf-beyaz py-24 md:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 md:mb-24 border-b border-white/10 pb-12 md:pb-16"
          {...animProps(0)}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40 mb-5">
            {t("contactEyebrow")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-saf-beyaz max-w-2xl">
            {t("h2")}
            <br />
            <span className="text-servi-yesili italic">{t("h2Italic")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20 md:mb-24">
          {contactItems.map((item, i) => (
            <motion.div key={item.label} {...animProps(0.1 + i * 0.08)}>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/35 mb-3">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-sans text-sm md:text-base text-white/75 hover:text-servi-yesili transition-colors duration-300 whitespace-pre-line leading-relaxed"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-sans text-sm md:text-base text-white/75 whitespace-pre-line leading-relaxed">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10"
          {...animProps(0.45)}
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-saf-beyaz shrink-0">
              <Image
                src={SITE.logo.mark}
                alt={`${SITE.name} Logo`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <span className="font-serif text-sm font-semibold tracking-wider text-white/40 uppercase">
              {SITE.name}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <p className="font-sans text-xs text-white/30 tracking-wide text-center">
              © {new Date().getFullYear()} {SITE.name}. {t("copyright")}
            </p>
            <p className="font-sans text-[10px] text-white/20 tracking-widest text-center uppercase">
              Designed &amp; Developed by{" "}
              <a
                href="https://github.com/emrekesimemre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-servi-yesili transition-colors duration-300"
              >
                Emre Kesim
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-5">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("ariaInstagram")}
                className="text-white/30 hover:text-servi-yesili transition-colors duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href={SITE.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("ariaWhatsApp")}
                className="text-white/30 hover:text-servi-yesili transition-colors duration-300"
              >
                <svg
                  viewBox="0 0 448 512"
                  className="w-4 h-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
            <nav aria-label={t("ariaLegal")}>
              <ul className="flex items-center gap-4 flex-wrap">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href as "/"}
                      className="font-sans text-[10px] tracking-widest uppercase text-white/25 hover:text-white/50 transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
