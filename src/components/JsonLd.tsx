import { getTranslations } from "next-intl/server";
import { SITE } from "@/data/site";
import type { Locale } from "@/i18n/routing";

export default async function JsonLd({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    description: t("jsonLdDescription"),
    url: SITE.url,
    telephone: `+${SITE.phoneRaw}`,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.9586,
      longitude: 32.8591,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [SITE.social.instagram],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 39.9586, longitude: 32.8591 },
      geoRadius: "80000",
    },
    priceRange: "₺₺₺",
    image: `${SITE.url}${SITE.logo.mark}`,
    logo: `${SITE.url}${SITE.logo.mark}`,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
