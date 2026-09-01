"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-10 h-0.5 bg-servi-yesili mb-8 mx-auto" />
      <p className="font-sans text-xs tracking-[0.35em] uppercase text-antrasit/40 mb-4">
        {t("eyebrow")}
      </p>
      <h1 className="font-serif text-5xl md:text-7xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
        {t("h1")}
      </h1>
      <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-sm mb-12">
        {t("subtitle")}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="font-sans text-sm tracking-widest uppercase px-8 py-3 bg-servi-yesili text-saf-beyaz hover:bg-antrasit transition-colors duration-500"
        >
          {t("goHome")}
        </Link>
        <Link
          href="/projeler"
          className="font-sans text-sm tracking-widest uppercase px-8 py-3 border border-antrasit/20 text-antrasit hover:border-servi-yesili hover:text-servi-yesili transition-colors duration-300"
        >
          {t("viewProjects")}
        </Link>
      </div>
    </div>
  );
}
