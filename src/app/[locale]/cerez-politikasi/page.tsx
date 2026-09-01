import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { SITE, formatLegalDate } from "@/data/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const isEn = locale === "en";
  const canonical = isEn ? `${SITE.url}/en/cerez-politikasi` : `${SITE.url}/cerez-politikasi`;
  return {
    title: t("cookiesTitle"),
    description: t("cookiesDescription"),
    alternates: { canonical, languages: { tr: `${SITE.url}/cerez-politikasi`, en: `${SITE.url}/en/cerez-politikasi` } },
    robots: { index: false },
  };
}

export default async function CerezPolitikasiPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "LegalCookies" });
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
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s2Title")}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-antrasit/10">
                  <th className="text-left py-3 pr-6 font-semibold text-antrasit">{t("tableHead1")}</th>
                  <th className="text-left py-3 pr-6 font-semibold text-antrasit">{t("tableHead2")}</th>
                  <th className="text-left py-3 font-semibold text-antrasit">{t("tableHead3")}</th>
                </tr>
              </thead>
              <tbody className="text-antrasit/60">
                <tr className="border-b border-antrasit/5">
                  <td className="py-3 pr-6">{t("tableRow1Col1")}</td>
                  <td className="py-3 pr-6">{t("tableRow1Col2")}</td>
                  <td className="py-3">{t("tableRow1Col3")}</td>
                </tr>
                <tr className="border-b border-antrasit/5">
                  <td className="py-3 pr-6">{t("tableRow2Col1")}</td>
                  <td className="py-3 pr-6">{t("tableRow2Col2")}</td>
                  <td className="py-3">{t("tableRow2Col3")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-antrasit/50 text-sm">{t("tableNote")}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s3Title")}</h2>
          <p>{t("s3Text")}</p>
          <ul className="list-disc list-inside space-y-1 text-antrasit/60 mt-2">
            <li>{t("s3i1")}</li>
            <li>{t("s3i2")}</li>
            <li>{t("s3i3")}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s4Title")}</h2>
          <p>
            {t("s4TextBefore")}
            <a href={`mailto:${SITE.email}`} className="text-servi-yesili hover:underline">{SITE.email}</a>
            {t("s4TextAfter")}
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-antrasit/10 flex gap-4 flex-wrap">
        <Link href="/kvkk" className="font-sans text-sm text-servi-yesili hover:underline underline-offset-2">{t("linkKvkk")}</Link>
        <Link href="/gizlilik" className="font-sans text-sm text-servi-yesili hover:underline underline-offset-2">{t("linkPrivacy")}</Link>
        <Link href="/" className="font-sans text-sm text-antrasit/40 hover:text-antrasit transition-colors duration-200 ml-auto">{t("linkHome")}</Link>
      </div>
    </div>
  );
}
