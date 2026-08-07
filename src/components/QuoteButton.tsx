"use client";

import { useState } from "react";
import QuoteModal from "@/components/QuoteModal";

export default function QuoteButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase px-8 py-3.5 bg-servi-yesili text-saf-beyaz hover:bg-antrasit transition-colors duration-300"
      >
        Teklif Al
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
