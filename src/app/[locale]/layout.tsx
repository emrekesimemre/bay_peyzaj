import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Header from "@/components/layout/Header";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const isEn = locale === "en";
  const canonicalBase = isEn ? `${SITE.url}/en` : SITE.url;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${SITE.name} | ${SITE.tagline[locale as Locale]}`,
      template: `%s | ${SITE.name}`,
    },
    description: t("defaultDescription"),
    keywords: isEn
      ? ["landscape design", "garden design", "landscape architecture", "outdoor spaces", "bay peyzaj", "ankara landscape"]
      : ["peyzaj", "bahçe tasarımı", "peyzaj mimarlığı", "dış mekan", "bay peyzaj", "ankara peyzaj"],
    openGraph: {
      title: `${SITE.name} | ${SITE.tagline[locale as Locale]}`,
      description: t("defaultDescription"),
      url: canonicalBase,
      siteName: SITE.name,
      locale: isEn ? "en_US" : "tr_TR",
      type: "website",
      images: [{ url: SITE.logo.og, width: 1200, height: 630, alt: `${SITE.name} Logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE.name} | ${SITE.tagline[locale as Locale]}`,
      description: t("defaultDescription"),
      images: [SITE.logo.og],
    },
    alternates: {
      canonical: canonicalBase,
      languages: { tr: SITE.url, en: `${SITE.url}/en` },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col bg-saf-beyaz text-antrasit"
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <a href="#main-content" className="skip-link">
            {locale === "en" ? "Skip to content" : "İçeriğe geç"}
          </a>
          <JsonLd locale={locale as Locale} />
          <SmoothScroll>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <ConditionalFooter />
          </SmoothScroll>
          <WhatsAppButton />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
