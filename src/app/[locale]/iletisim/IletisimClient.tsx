"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/data/site";
import { getServiceLabels } from "@/data/services";
import type { Locale } from "@/i18n/routing";

type FormState = "idle" | "success";

export default function IletisimClient({ locale }: { locale: Locale }) {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [state, setState] = useState<FormState>("idle");

  const serviceLabels = getServiceLabels(locale);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!kvkk) return;
    const text = t("whatsappMessage", {
      name,
      phone,
      service: service || (locale === "en" ? "Not specified" : "Belirtilmedi"),
      message,
    });
    const win = window.open(
      `${SITE.social.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    if (win) setState("success");
  }

  const infoItems = [
    {
      label: t("labelPhone"),
      value: SITE.phoneDisplay,
      href: `tel:+${SITE.phoneRaw}`,
    },
    { label: t("labelEmail"), value: SITE.email, href: `mailto:${SITE.email}` },
    {
      label: t("labelAddress"),
      value: `${SITE.address.street}\n${SITE.address.city}, ${SITE.address.country}`,
      href: SITE.address.mapsUrl,
    },
    { label: t("labelHours"), value: SITE.hoursShort[locale] },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
      <h1 className="font-serif text-5xl md:text-7xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
        {t("h1")}
      </h1>
      <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-lg mb-20 md:mb-28">
        {t("subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left — contact details */}
        <div className="space-y-10">
          {infoItems.map((item) => (
            <div key={item.label}>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-antrasit/40 mb-2">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-sans text-base text-antrasit hover:text-servi-yesili transition-colors duration-300 whitespace-pre-line leading-relaxed"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-sans text-base text-antrasit/70 whitespace-pre-line leading-relaxed">
                  {item.value}
                </p>
              )}
            </div>
          ))}

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-antrasit/40 mb-4">
              {t("labelSocial")}
            </p>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-antrasit/60 hover:text-servi-yesili transition-colors duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-4 h-4"
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
              @baypeyzajtr
            </a>
          </div>

          <div className="pt-6 border-t border-antrasit/10">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-antrasit/40 mb-3">
              {t("labelServiceArea")}
            </p>
            <p className="font-sans text-sm text-antrasit/60 leading-relaxed">
              {t("serviceAreaText")}
            </p>
          </div>
        </div>

        {/* Right — form or thank-you */}
        {state === "success" ? (
          <div className="flex flex-col justify-center gap-6 py-12">
            <div className="w-10 h-0.5 bg-servi-yesili" />
            <h2 className="font-serif text-3xl font-semibold text-antrasit">
              {t("successTitle")}
            </h2>
            <p className="font-sans text-base text-antrasit/60 leading-relaxed max-w-sm">
              {t("successText")}
            </p>
            <button
              onClick={() => {
                setName("");
                setPhone("");
                setService("");
                setMessage("");
                setKvkk(false);
                setState("idle");
              }}
              className="font-sans text-sm tracking-widest uppercase text-servi-yesili hover:text-antrasit transition-colors duration-300 text-left"
            >
              {t("newMessage")}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group">
              <label
                htmlFor="contact-name"
                className="block font-sans text-xs tracking-[0.15em] uppercase text-antrasit/50 mb-2 group-focus-within:text-servi-yesili transition-colors duration-200"
              >
                {t("formName")}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("formNamePlaceholder")}
                className="w-full bg-transparent border-0 border-b border-antrasit/20 focus:border-servi-yesili pb-3 font-sans text-base text-antrasit placeholder:text-antrasit/25 outline-none transition-colors duration-300"
              />
            </div>

            <div className="group">
              <label
                htmlFor="contact-phone"
                className="block font-sans text-xs tracking-[0.15em] uppercase text-antrasit/50 mb-2 group-focus-within:text-servi-yesili transition-colors duration-200"
              >
                {t("formPhone")}
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("formPhonePlaceholder")}
                pattern="[0-9\s\(\)\+\-]{7,15}"
                title={t("formPhoneTitle")}
                className="w-full bg-transparent border-0 border-b border-antrasit/20 focus:border-servi-yesili pb-3 font-sans text-base text-antrasit placeholder:text-antrasit/25 outline-none transition-colors duration-300"
              />
            </div>

            <div className="group">
              <label
                htmlFor="contact-service"
                className="block font-sans text-xs tracking-[0.15em] uppercase text-antrasit/50 mb-2 group-focus-within:text-servi-yesili transition-colors duration-200"
              >
                {t("formService")}
              </label>
              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-transparent border-0 border-b border-antrasit/20 focus:border-servi-yesili pb-3 font-sans text-base text-antrasit outline-none transition-colors duration-300 appearance-none cursor-pointer"
              >
                <option value="">{t("formServicePlaceholder")}</option>
                {serviceLabels.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="group">
              <label
                htmlFor="contact-message"
                className="block font-sans text-xs tracking-[0.15em] uppercase text-antrasit/50 mb-2 group-focus-within:text-servi-yesili transition-colors duration-200"
              >
                {t("formMessage")}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("formMessagePlaceholder")}
                className="w-full bg-transparent border-0 border-b border-antrasit/20 focus:border-servi-yesili pb-3 font-sans text-base text-antrasit placeholder:text-antrasit/25 outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="contact-kvkk"
                type="checkbox"
                required
                checked={kvkk}
                onChange={(e) => setKvkk(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-servi-yesili cursor-pointer"
              />
              <label
                htmlFor="contact-kvkk"
                className="font-sans text-xs text-antrasit/50 leading-relaxed cursor-pointer"
              >
                {t("kvkkBefore")}
                <Link
                  href="/kvkk"
                  target="_blank"
                  className="underline underline-offset-2 hover:text-servi-yesili transition-colors duration-200"
                >
                  {t("kvkkLink")}
                </Link>
                {t("kvkkAnd")}
                <Link
                  href="/gizlilik"
                  target="_blank"
                  className="underline underline-offset-2 hover:text-servi-yesili transition-colors duration-200"
                >
                  {t("privacyLink")}
                </Link>
                {t("kvkkText")}
              </label>
            </div>

            <button
              type="submit"
              disabled={!kvkk}
              className="w-full bg-servi-yesili text-saf-beyaz font-sans text-sm tracking-[0.2em] uppercase py-4 hover:bg-antrasit transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-servi-yesili focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-servi-yesili"
            >
              {t("formSubmit")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
