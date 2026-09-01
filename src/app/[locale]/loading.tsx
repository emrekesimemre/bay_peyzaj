"use client";

import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("Loading");
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-antrasit/10 border-t-servi-yesili rounded-full animate-spin" />
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-antrasit/30">
          {t("text")}
        </p>
      </div>
    </div>
  );
}
