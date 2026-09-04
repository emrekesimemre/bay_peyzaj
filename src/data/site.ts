/**
 * Single source of truth for contact and brand details.
 * Header, Footer, WhatsApp FAB, QuoteModal, JSON-LD, and sitemap
 * all read from this file — no duplicated constants.
 */

export const SITE = {
  name: "Bay Peyzaj",
  tagline: {
    tr: "Premium Peyzaj & Mimari Tasarım",
    en: "Premium Landscape & Architectural Design",
  },
  url: "https://baypeyzaj.com",

  logo: {
    /** Circular seal — header, footer, favicon, JSON-LD */
    mark: "/images/logo.png",
    /** Stacked lockup — Open Graph and light-background brand */
    lockup: "/images/logo-lockup.png",
    og: "https://bay-peyzaj.vercel.app/images/og.jpg",
  },

  /** Display string. Use phoneRaw for tel: and wa.me links. */
  phoneDisplay: "+90 507 763 12 06",
  /** International format, no leading + (for tel: and wa.me) */
  phoneRaw: "905077631206",

  email: "baypeyzaj06@gmail.com",

  address: {
    street: "Anadolu Bulvarı No 148",
    city: "Yenimahalle, Ankara",
    country: "Türkiye",
    countryCode: "TR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Anadolu+Bulvar%C4%B1+No+148+Yenimahalle+Ankara",
  },

  hours: {
    tr: "Pazartesi – Cumartesi 08:00 – 18:00",
    en: "Monday – Saturday 08:00 – 18:00",
  },
  /** Two-line format for narrow footer columns */
  hoursShort: {
    tr: "Pzt – Cmt\n08:00 – 18:00",
    en: "Mon – Sat\n08:00 – 18:00",
  },

  social: {
    instagram: "https://www.instagram.com/baypeyzajtr/",
    whatsapp: `https://wa.me/905077631206`,
  },
} as const;

/**
 * KVKK / legal identity. Empty optional fields are omitted from legal pages.
 * Fill when the business provides registered name, MERSIS, VERBIS, etc.
 */
export const LEGAL = {
  /** ISO date of last policy revision (privacy + cookie pages). */
  lastUpdated: "2026-08-31",
  /** Registered person / trade name (şahıs). Empty → SITE.name. */
  tradeName: "Sinan Savuş",
  /** Full postal address. Empty → SITE.address. */
  fullAddress: "",
  mersis: "",
  taxOffice: "",
  taxNumber: "",
  /** "registered" | "exempt" | "unknown" — unknown omits the VERBIS line. */
  verbis: "exempt" as "registered" | "exempt" | "unknown",
  /** Human-readable retention for quote/contact data. Empty → generic wording. */
  retentionQuote: "",
} as const;

export function getLegalIdentity() {
  const name = LEGAL.tradeName || SITE.name;
  const address =
    LEGAL.fullAddress ||
    `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.country}`;

  return {
    name,
    brand: SITE.name,
    address,
    email: SITE.email,
    phone: SITE.phoneDisplay,
    phoneHref: `tel:+${SITE.phoneRaw}`,
    mersis: LEGAL.mersis,
    taxOffice: LEGAL.taxOffice,
    taxNumber: LEGAL.taxNumber,
    verbis: LEGAL.verbis,
    retentionQuote: LEGAL.retentionQuote,
    lastUpdated: LEGAL.lastUpdated,
  };
}

export function formatLegalDate(locale: string) {
  const dateLocale = locale === "en" ? "en-GB" : "tr-TR";
  return new Date(`${LEGAL.lastUpdated}T00:00:00`).toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export type SiteConfig = typeof SITE;
