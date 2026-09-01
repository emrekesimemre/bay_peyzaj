"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Nav");

  function switchLocale(next: Locale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <nav aria-label={t("switchLanguage")} className="flex items-center gap-1">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && (
            <span className="mx-1.5 text-antrasit/20 select-none text-xs">·</span>
          )}
          <button
            type="button"
            onClick={() => switchLocale(l as Locale)}
            aria-current={l === locale ? "true" : undefined}
            className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
              l === locale
                ? "text-servi-yesili"
                : "text-antrasit/35 hover:text-antrasit"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </nav>
  );
}
