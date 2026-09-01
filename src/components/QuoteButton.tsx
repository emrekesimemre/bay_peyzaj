"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import QuoteModal from "@/components/QuoteModal";

export default function QuoteButton() {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="font-sans text-sm tracking-widest uppercase px-6 py-2.5 border border-servi-yesili text-servi-yesili hover:bg-servi-yesili hover:text-saf-beyaz transition-all duration-300"
      >
        {t("cta")}
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
