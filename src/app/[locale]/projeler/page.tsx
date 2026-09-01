import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import { SITE } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const isEn = locale === "en";
  const canonical = isEn ? `${SITE.url}/en/projeler` : `${SITE.url}/projeler`;
  return {
    title: t("projectsTitle"),
    description: t("projectsDescription"),
    alternates: {
      canonical,
      languages: { tr: `${SITE.url}/projeler`, en: `${SITE.url}/en/projeler` },
    },
  };
}

export default async function ProjelerPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return (
    <div className="pt-32 pb-0">
      <div className="px-6 md:px-16 max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
          {t("h1")}
        </h1>
        <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-lg">
          {t("subtitle")}
        </p>
      </div>
      <div className="px-6 md:px-16 max-w-7xl mx-auto pb-24 md:pb-36">
        <ProjectsGrid locale={locale as Locale} />
      </div>
    </div>
  );
}
