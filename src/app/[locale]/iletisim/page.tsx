import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import IletisimClient from "./IletisimClient";
import { SITE } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const isEn = locale === "en";
  const canonical = isEn ? `${SITE.url}/en/iletisim` : `${SITE.url}/iletisim`;
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical,
      languages: { tr: `${SITE.url}/iletisim`, en: `${SITE.url}/en/iletisim` },
    },
  };
}

export default async function IletisimPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return <IletisimClient locale={locale as "tr" | "en"} />;
}
