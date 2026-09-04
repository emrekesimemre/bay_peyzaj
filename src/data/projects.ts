import type { Locale } from "@/i18n/routing";

export type ProjectCategory =
  | "villa"
  | "rezidans"
  | "ticari"
  | "kamu"
  | "teras";

export interface ProjectImage {
  url: string;
  orientation: "landscape" | "portrait";
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  location: string;
  year: number;
  featured: boolean;
  images: ProjectImage[];
}

interface BilingualImage {
  url: string;
  orientation: "landscape" | "portrait";
  alt: { tr: string; en: string };
}

interface BilingualProject {
  id: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  category: ProjectCategory;
  location: string;
  year: number;
  featured: boolean;
  images: BilingualImage[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  villa: "Villa",
  rezidans: "Rezidans",
  ticari: "Ticari",
  kamu: "Kamu",
  teras: "Teras & Yazlık",
};

export const categoryLabelsEn: Record<ProjectCategory, string> = {
  villa: "Villa",
  rezidans: "Residential",
  ticari: "Commercial",
  kamu: "Public",
  teras: "Terrace & Summer",
};

export function getCategoryLabels(
  locale: Locale,
): Record<ProjectCategory, string> {
  return locale === "en" ? categoryLabelsEn : categoryLabels;
}

export const projectsData: BilingualProject[] = [
  {
    id: "bahce-duzenleme-01",
    title: {
      tr: "İşletme Peyzaj Düzenlemesi",
      en: "Commercial Landscape Design",
    },
    description: {
      tr: "Doğal çakıl taşları ve rengarenk bitkilerle oluşturulan özel bahçe tasarımı. Modern çizgilerle doğanın ferahlığı bir arada.",
      en: "A private garden design crafted with natural pebble stones and colourful plants. Modern lines meet the freshness of nature.",
    },
    category: "ticari",
    location: "Ankara",
    year: 2024,
    featured: true,
    images: [
      {
        url: "/images/projects/proje-01.jpg",
        orientation: "portrait",
        alt: {
          tr: "İşletme Peyzaj — Çakıl Taşı ve Bitkiler",
          en: "Commercial Landscape — Pebble Stone and Plants",
        },
      },
    ],
  },
  {
    id: "bahce-duzenleme-02",
    title: {
      tr: "Ticari Peyzaj Uygulaması",
      en: "Commercial Landscape Application",
    },
    description: {
      tr: "Geniş yeşil çimenler, dekoratif ağaçlar ve beyaz çakıl taşlarıyla oluşturulan lüks villa bahçesi.",
      en: "A luxury villa garden created with expansive green lawns, decorative trees and white pebble stones.",
    },
    category: "ticari",
    location: "Ankara",
    year: 2024,
    featured: true,
    images: [
      {
        url: "/images/projects/proje-02.jpg",
        orientation: "portrait",
        alt: {
          tr: "Villa Peyzaj — Geniş Yeşil Alan",
          en: "Villa Landscape — Expansive Green Area",
        },
      },
    ],
  },
  {
    id: "bahce-duzenleme-03",
    title: {
      tr: "Villa Projesi",
      en: "Villa Project",
    },
    description: {
      tr: "Mevsimlik çiçekler, doğal taşlar ve ağaç diplerini çevreleyen dekoratif düzenlemelerden oluşan çiçek bahçesi.",
      en: "A flower garden featuring seasonal blooms, natural stones and decorative arrangements surrounding tree bases.",
    },
    category: "villa",
    location: "Ankara",
    year: 2024,
    featured: true,
    images: [
      {
        url: "/images/projects/proje-03.jpg",
        orientation: "portrait",
        alt: {
          tr: "Çiçek Bahçesi — Mevsimlik Çiçekler",
          en: "Flower Garden — Seasonal Blooms",
        },
      },
    ],
  },
  {
    id: "site-peyzaj-01",
    title: {
      tr: "Site Projesi",
      en: "Residential Complex Project",
    },
    description: {
      tr: "Rezidans sitesi ortak alanının çevre düzenlemesi. Doğal çakıl taşı kaplama, mozaik detaylar ve yeşil bitkilerle hayat bulan ferah bir dış mekân peyzajı.",
      en: "Landscape design for the common area of a residential complex. An airy outdoor arrangement brought to life with natural pebble paving, mosaic details, and lush greenery.",
    },
    category: "rezidans",
    location: "Ankara",
    year: 2025,
    featured: true,
    images: [
      {
        url: "/images/projects/proje-04.jpg",
        orientation: "landscape",
        alt: {
          tr: "Site Peyzaj — Taş Mozaik Çeşme",
          en: "Residential Landscape — Stone Mosaic Fountain",
        },
      },
    ],
  },
  {
    id: "site-peyzaj-02",
    title: {
      tr: "Site Ortak Alan Peyzajı",
      en: "Residential Common Area Landscaping",
    },
    description: {
      tr: "Yapay çim zemin, beyaz küp saksılar içinde servi ağaçları ve oturma alanlarıyla düzenlenen rezidans site bahçesi. Ahşap çardak ve dekoratif sınır taşlarıyla tamamlanan ferah dış mekân tasarımı.",
      en: "A residential complex garden arranged with artificial turf, cypress trees in white cubic planters, and seating areas. An airy outdoor design completed with a wooden gazebo and decorative border stones.",
    },
    category: "rezidans",
    location: "Ankara",
    year: 2025,
    featured: true,
    images: [
      {
        url: "/images/projects/proje-05.jpg",
        orientation: "landscape",
        alt: {
          tr: "Site Peyzaj — Yapay Çim ve Servi Ağaçları",
          en: "Residential Landscape — Artificial Turf and Cypress Trees",
        },
      },
    ],
  },
];

export function getProjects(locale: Locale): Project[] {
  return projectsData.map((p) => ({
    id: p.id,
    title: p.title[locale],
    description: p.description[locale],
    category: p.category,
    location: p.location,
    year: p.year,
    featured: p.featured,
    images: p.images.map((img) => ({
      url: img.url,
      orientation: img.orientation,
      alt: img.alt[locale],
    })),
  }));
}

export function getProjectById(
  id: string,
  locale: Locale = "tr",
): Project | undefined {
  const raw = projectsData.find((p) => p.id === id);
  if (!raw) return undefined;
  return {
    id: raw.id,
    title: raw.title[locale],
    description: raw.description[locale],
    category: raw.category,
    location: raw.location,
    year: raw.year,
    featured: raw.featured,
    images: raw.images.map((img) => ({
      url: img.url,
      orientation: img.orientation,
      alt: img.alt[locale],
    })),
  };
}

export function getFeaturedProjects(locale: Locale = "tr"): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}

/** @deprecated use getProjects(locale) */
export const projects: Project[] = projectsData.map((p) => ({
  id: p.id,
  title: p.title.tr,
  description: p.description.tr,
  category: p.category,
  location: p.location,
  year: p.year,
  featured: p.featured,
  images: p.images.map((img) => ({
    url: img.url,
    orientation: img.orientation,
    alt: img.alt.tr,
  })),
}));
