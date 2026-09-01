import type { Locale } from "@/i18n/routing";

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface BilingualService {
  id: string;
  number: string;
  title: { tr: string; en: string };
  description: { tr: string; en: string };
}

const servicesData: BilingualService[] = [
  {
    id: "peyzaj-tasarimi",
    number: "01",
    title: {
      tr: "Peyzaj Tasarımı",
      en: "Landscape Design",
    },
    description: {
      tr: "Arazinizin ruhunu okuyarak özgün, zamansız ve yaşayan bahçe projeleri tasarlıyoruz.",
      en: "We design original, timeless and living garden projects by reading the soul of your land.",
    },
  },
  {
    id: "bahce-duzenlemesi",
    number: "02",
    title: {
      tr: "Bahçe Düzenlemesi",
      en: "Garden Arrangement",
    },
    description: {
      tr: "Bitki seçiminden zemin döşemesine kadar tüm bahçe düzenleme süreçlerini yönetiyoruz.",
      en: "We manage all garden arrangement processes from plant selection to ground paving.",
    },
  },
  {
    id: "periyodik-bakim",
    number: "03",
    title: {
      tr: "Periyodik Bakım",
      en: "Periodic Maintenance",
    },
    description: {
      tr: "Bitkisel dokularınızı dört mevsim canlı tutmak için planlı ve uzman bakım hizmeti sunuyoruz.",
      en: "We provide planned, expert maintenance to keep your planting vibrant throughout all four seasons.",
    },
  },
  {
    id: "sulama-sistemleri",
    number: "04",
    title: {
      tr: "Sulama Sistemleri",
      en: "Irrigation Systems",
    },
    description: {
      tr: "Su tasarruflu akıllı damla ve yağmurlama sistemleri ile bahçeniz kendi kendine yaşar.",
      en: "Water-saving smart drip and sprinkler systems let your garden thrive on its own.",
    },
  },
  {
    id: "cim-ekimi-bakim",
    number: "05",
    title: {
      tr: "Çim Ekimi & Bakım",
      en: "Lawn Seeding & Care",
    },
    description: {
      tr: "Rulo çim, tohum ekimi ve çim bakım programları ile mükemmel yeşil alanlar oluşturuyoruz.",
      en: "We create perfect green areas with roll turf, seed sowing and lawn care programmes.",
    },
  },
  {
    id: "sert-zemin-uygulamalari",
    number: "06",
    title: {
      tr: "Sert Zemin Uygulamaları",
      en: "Hardscape Applications",
    },
    description: {
      tr: "Doğal taş, beton ve ahşap gibi malzemelerle yürüyüş yolları, teraslar ve avlular tasarlıyoruz.",
      en: "We design pathways, terraces and courtyards using natural stone, concrete and timber.",
    },
  },
  {
    id: "havuz-su-ogesi",
    number: "07",
    title: {
      tr: "Havuz & Su Öğesi",
      en: "Pool & Water Features",
    },
    description: {
      tr: "Bahçe havuzları, şelaleler ve yansıtma havuzları ile doğanın sesini mekânınıza taşıyoruz.",
      en: "We bring the sound of nature to your space with garden pools, waterfalls and reflection ponds.",
    },
  },
  {
    id: "diger",
    number: "08",
    title: {
      tr: "Diğer",
      en: "Other",
    },
    description: {
      tr: "Farklı bir projeniz mi var? Detayları konuşmak için bize ulaşın.",
      en: "Have a different project in mind? Reach out and let's talk.",
    },
  },
];

export function getServices(locale: Locale): Service[] {
  return servicesData.map((s) => ({
    id: s.id,
    number: s.number,
    title: s.title[locale],
    description: s.description[locale],
  }));
}

/** Flat list of service labels for form dropdowns */
export function getServiceLabels(locale: Locale): string[] {
  return servicesData.map((s) => s.title[locale]);
}

/** @deprecated use getServices(locale) */
export const services = servicesData.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title.tr,
  description: s.description.tr,
}));

/** @deprecated use getServiceLabels(locale) */
export const serviceLabels = servicesData.map((s) => s.title.tr);
