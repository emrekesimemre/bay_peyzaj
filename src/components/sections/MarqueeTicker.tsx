"use client";

import { useTranslations } from "next-intl";

const Separator = () => (
  <span className="mx-8 text-servi-yesili text-lg select-none">✦</span>
);

export default function MarqueeTicker() {
  const t = useTranslations("Marquee");
  const items = [t("item1"), t("item2"), t("item3"), t("item4")];

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

  return (
    <div className="bg-antrasit overflow-hidden py-5 border-y border-white/5">
      <div
        className="flex"
        style={{
          animation: "marquee 24s linear infinite",
          width: "max-content",
        }}
      >
        <Track />
        <Track />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
