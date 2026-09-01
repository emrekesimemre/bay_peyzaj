import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { SITE, getLegalIdentity, formatLegalDate } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const isEn = locale === "en";
  const canonical = isEn ? `${SITE.url}/en/gizlilik` : `${SITE.url}/gizlilik`;
  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    alternates: { canonical, languages: { tr: `${SITE.url}/gizlilik`, en: `${SITE.url}/en/gizlilik` } },
    robots: { index: false },
  };
}

export default async function GizlilikPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "LegalPrivacy" });
  const id = getLegalIdentity();
  const dateStr = formatLegalDate(locale);

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-3xl mx-auto">
      <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-antrasit mb-4">{t("title")}</h1>
      <p className="font-sans text-sm text-antrasit/40 mb-12">{t("lastUpdated", { date: dateStr })}</p>

      <div className="font-sans text-antrasit/70 leading-relaxed space-y-8">
        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s1Title")}</h2>
          <p>{t("s1Text")}</p>
          <ul className="list-disc list-inside space-y-1 text-antrasit/60 mt-2">
            <li>{t("s1i1")}</li>
            <li>{t("s1i2")}</li>
            <li>{t("s1i3")}</li>
            <li>{t("s1i4")}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s2Title")}</h2>
          <p>{t("s2Intro")}</p>
          <ul className="list-disc list-inside space-y-1 text-antrasit/60 mt-2">
            <li>{t("s2i1")}</li>
            <li>{t("s2i2")}</li>
            <li>{t("s2i3")}</li>
            <li>{t("s2i4")}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s3Title")}</h2>
          <p>{t("s3Text")}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s4Title")}</h2>
          <p>
            {t("s4Text")}{" "}
            <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-servi-yesili hover:underline">
              {t("s4LinkAnalytics")}
            </a>
            {t("s4Mid")}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-servi-yesili hover:underline">
              {t("s4LinkVercel")}
            </a>
            {t("s4Suffix")}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s5Title")}</h2>
          <p>
            {t("s5Text")}{" "}
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-servi-yesili hover:underline">
              {t("s5LinkWhatsApp")}
            </a>
            {t("s5After")}
          </p>
          <p className="mt-3">{t("s5Hosting")}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s6Title")}</h2>
          <p>{id.retentionQuote ? t("s6TextCustom", { period: id.retentionQuote }) : t("s6Text")}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s7Title")}</h2>
          <p>
            {t("s7Before")}
            <Link href="/kvkk" className="text-servi-yesili hover:underline">{t("s7Link")}</Link>
            {t("s7Mid")}
            <a href={`mailto:${SITE.email}`} className="text-servi-yesili hover:underline">{SITE.email}</a>
            {t("s7After")}
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-antrasit/10 flex gap-4 flex-wrap">
        <Link href="/kvkk" className="font-sans text-sm text-servi-yesili hover:underline underline-offset-2">{t("linkKvkk")}</Link>
        <Link href="/cerez-politikasi" className="font-sans text-sm text-servi-yesili hover:underline underline-offset-2">{t("linkCookies")}</Link>
        <Link href="/" className="font-sans text-sm text-antrasit/40 hover:text-antrasit transition-colors duration-200 ml-auto">{t("linkHome")}</Link>
      </div>
    </div>
  );
}
