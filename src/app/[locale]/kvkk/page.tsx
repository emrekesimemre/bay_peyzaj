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
  const canonical = isEn ? `${SITE.url}/en/kvkk` : `${SITE.url}/kvkk`;
  return {
    title: t("kvkkTitle"),
    description: t("kvkkDescription"),
    alternates: { canonical, languages: { tr: `${SITE.url}/kvkk`, en: `${SITE.url}/en/kvkk` } },
    robots: { index: false },
  };
}

export default async function KvkkPage({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "LegalKvkk" });
  const id = getLegalIdentity();
  const dateStr = formatLegalDate(locale);

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 max-w-3xl mx-auto">
      <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-antrasit mb-4">{t("title")}</h1>
      <p className="font-sans text-sm text-antrasit/40 mb-12">
        {t("subtitle")}
        <span className="block mt-2">{t("lastUpdated", { date: dateStr })}</span>
      </p>

      <div className="prose prose-slate max-w-none font-sans text-antrasit/70 leading-relaxed space-y-8">
        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s1Title")}</h2>
          <p>{t("s1Text", { name: id.name, brand: id.brand, address: id.address })}</p>
          <p className="mt-3">
            {t("s1ContactLabel")}{" "}
            <a href={`mailto:${SITE.email}`} className="text-servi-yesili hover:underline">{SITE.email}</a>
            {" · "}
            <a href={`tel:+${SITE.phoneRaw}`} className="text-servi-yesili hover:underline">{SITE.phoneDisplay}</a>
          </p>
          {id.mersis ? <p className="mt-2">{t("s1Mersis", { mersis: id.mersis })}</p> : null}
          {id.taxNumber ? (
            <p className="mt-2">{t("s1Tax", { taxOffice: id.taxOffice || "—", taxNumber: id.taxNumber })}</p>
          ) : null}
          {id.verbis === "registered" ? <p className="mt-2">{t("s1VerbisYes")}</p> : null}
          {id.verbis === "exempt" ? <p className="mt-2">{t("s1VerbisExempt")}</p> : null}
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
          <p>{t("s3Method")}</p>
          <p className="mt-3">{t("s3LegalIntro")}</p>
          <ul className="list-disc list-inside space-y-1 text-antrasit/60 mt-2">
            <li>{t("s3i1")}</li>
            <li>{t("s3i2")}</li>
            <li>{t("s3i3")}</li>
            <li>{t("s3i4")}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s4Title")}</h2>
          <ul className="list-disc list-inside space-y-1 text-antrasit/60">
            <li>{t("s4i1")}</li>
            <li>{t("s4i2")}</li>
            <li>{t("s4i3")}</li>
            <li>{t("s4i4")}</li>
            <li>{t("s4i5")}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s5Title")}</h2>
          <p>{t("s5Intro")}</p>
          <ul className="list-disc list-inside space-y-1 text-antrasit/60 mt-2">
            <li>{t("s5i1")}</li>
            <li>{t("s5i2")}</li>
            <li>{t("s5i3")}</li>
          </ul>
          <p className="mt-3">{t("s5Abroad")}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s6Title")}</h2>
          <p>{id.retentionQuote ? t("s6TextCustom", { period: id.retentionQuote }) : t("s6Text")}</p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s7Title")}</h2>
          <p>{t("s7Intro")}</p>
          <ul className="list-disc list-inside space-y-1 text-antrasit/60 mt-2">
            <li>{t("s7i1")}</li>
            <li>{t("s7i2")}</li>
            <li>{t("s7i3")}</li>
            <li>{t("s7i4")}</li>
            <li>{t("s7i5")}</li>
            <li>{t("s7i6")}</li>
            <li>{t("s7i7")}</li>
            <li>{t("s7i8")}</li>
            <li>{t("s7i9")}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s8Title")}</h2>
          <p>
            {t("s8Before")}
            <a href={`mailto:${SITE.email}`} className="text-servi-yesili hover:underline">{SITE.email}</a>
            {t("s8After")}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-antrasit mb-3">{t("s9Title")}</h2>
          <p>{t("s9Text")}</p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-antrasit/10 flex gap-4 flex-wrap">
        <Link href="/gizlilik" className="font-sans text-sm text-servi-yesili hover:underline underline-offset-2">{t("linkPrivacy")}</Link>
        <Link href="/cerez-politikasi" className="font-sans text-sm text-servi-yesili hover:underline underline-offset-2">{t("linkCookies")}</Link>
        <Link href="/" className="font-sans text-sm text-antrasit/40 hover:text-antrasit transition-colors duration-200 ml-auto">{t("linkHome")}</Link>
      </div>
    </div>
  );
}
