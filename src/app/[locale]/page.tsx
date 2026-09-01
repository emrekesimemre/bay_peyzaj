import JsonLdFaq from "@/components/JsonLdFaq";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { SITE } from "@/data/site";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const isEn = locale === "en";
  const canonical = isEn ? `${SITE.url}/en` : SITE.url;
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates: {
      canonical,
      languages: { tr: SITE.url, en: `${SITE.url}/en` },
    },
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [{ url: SITE.logo.og, width: 1200, height: 630 }],
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return (
    <>
      <JsonLdFaq locale={locale as "tr" | "en"} />
      <HeroSection />
      <MarqueeTicker />
      <ServicesSection locale={locale as "tr" | "en"} />
      <FeaturedProjects locale={locale as "tr" | "en"} />
      <ProcessSection />
      <AboutSection />
      <FaqSection locale={locale as "tr" | "en"} />
    </>
  );
}
