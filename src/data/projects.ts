import type { Locale } from "@/i18n/routing";

export type ProjectCategory = "villa" | "rezidans" | "ticari" | "kamu" | "teras";

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

export function getCategoryLabels(locale: Locale): Record<ProjectCategory, string> {
  return locale === "en" ? categoryLabelsEn : categoryLabels;
}

export const projectsData: BilingualProject[] = [
  {
    id: "antalya-villa",
    title: {
      tr: "Antalya Villa Projesi",
      en: "Antalya Villa Project",
    },
    description: {
      tr: "Akdeniz ikliminin doğal zenginliğini modern peyzaj tasarımıyla harmanlayan, özel villa bahçesi projesi. Yöresel bitkiler ve doğal taş malzeme kullanılarak arazi ile uyum sağlandı.",
      en: "A private villa garden project that blends the natural richness of the Mediterranean climate with modern landscape design. Local plants and natural stone were used to harmonise with the terrain.",
    },
    category: "villa",
    location: "Antalya",
    year: 2024,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Antalya Villa Projesi — Genel Görünüm", en: "Antalya Villa Project — General View" },
      },
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Antalya Villa Projesi — Bitki Detayı", en: "Antalya Villa Project — Plant Detail" },
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Antalya Villa Projesi — Taş Yürüyüş Yolu", en: "Antalya Villa Project — Stone Pathway" },
      },
      {
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Antalya Villa Projesi — Havuz Çevresi", en: "Antalya Villa Project — Pool Surroundings" },
      },
    ],
  },
  {
    id: "istanbul-rezidans",
    title: {
      tr: "İstanbul Rezidans Bahçesi",
      en: "Istanbul Residential Garden",
    },
    description: {
      tr: "Şehrin yoğun temposundan arındırılmış, doğal taş yollar ve su öğeleriyle tasarlanmış lüks rezidans bahçe projesi. 2.400 m² alanda gerçekleştirilen bu proje, sakinlere huzurlu bir yeşil alan sunmaktadır.",
      en: "A luxury residential garden project designed with natural stone paths and water features, offering a retreat from the city's hectic pace. Covering 2,400 m², this project provides residents with a tranquil green space.",
    },
    category: "rezidans",
    location: "İstanbul",
    year: 2024,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "İstanbul Rezidans — Taş Yol Detayı", en: "Istanbul Residential — Stone Path Detail" },
      },
      {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "İstanbul Rezidans — Su Öğesi", en: "Istanbul Residential — Water Feature" },
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "İstanbul Rezidans — Genel Görünüm", en: "Istanbul Residential — General View" },
      },
    ],
  },
  {
    id: "bodrum-yazlik",
    title: {
      tr: "Bodrum Yazlık Terası",
      en: "Bodrum Summer Terrace",
    },
    description: {
      tr: "Ege'nin eşsiz manzarasına açılan, doğal bitkilerle çerçevelenmiş deniz manzaralı teras ve çevre düzenleme projesi. Rüzgara dayanıklı Akdeniz bitkileri ile dört mevsim canlı bir görünüm sağlandı.",
      en: "A sea-view terrace and landscaping project framed with native plants, opening to the unique Aegean vista. Wind-resistant Mediterranean plants ensure a vibrant appearance throughout all four seasons.",
    },
    category: "teras",
    location: "Bodrum, Muğla",
    year: 2023,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Bodrum Yazlık — Teras Genel Görünüm", en: "Bodrum Summer — Terrace General View" },
      },
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Bodrum Yazlık — Bitki Aranjmanı", en: "Bodrum Summer — Plant Arrangement" },
      },
      {
        url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Bodrum Yazlık — Oturma Alanı", en: "Bodrum Summer — Seating Area" },
      },
    ],
  },
  {
    id: "izmir-villa",
    title: {
      tr: "İzmir Kordon Villa Bahçesi",
      en: "Izmir Kordon Villa Garden",
    },
    description: {
      tr: "Ege mimarisiyle bütünleşen, zeytin ağaçları ve lavantalarla çerçevelenmiş özel villa bahçesi. Doğal sulama sistemi ve yöresel bitki örtüsüyle minimum bakım gerektiren sürdürülebilir bir tasarım.",
      en: "A private villa garden integrated with Aegean architecture, framed by olive trees and lavender. A sustainable design requiring minimal maintenance through natural irrigation and native vegetation.",
    },
    category: "villa",
    location: "İzmir",
    year: 2024,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "İzmir Villa — Genel Görünüm", en: "Izmir Villa — General View" },
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "İzmir Villa — Zeytin Ağaçları", en: "Izmir Villa — Olive Trees" },
      },
      {
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "İzmir Villa — Bahçe Yolu", en: "Izmir Villa — Garden Path" },
      },
    ],
  },
  {
    id: "ankara-ofis",
    title: {
      tr: "Ankara Ofis Peyzajı",
      en: "Ankara Office Landscape",
    },
    description: {
      tr: "Kurumsal kimliği yansıtan, çalışanların dinlenebileceği iç avlular ve yeşil koridorlardan oluşan ofis kampüsü peyzaj projesi. Gölge yaratan ağaçlar ve oturma grupları ile aktif kullanım alanları oluşturuldu.",
      en: "An office campus landscape project reflecting corporate identity, featuring inner courtyards and green corridors where employees can relax. Shade trees and seating groups create active use areas.",
    },
    category: "ticari",
    location: "Ankara",
    year: 2023,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Ankara Ofis — İç Avlu", en: "Ankara Office — Inner Courtyard" },
      },
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Ankara Ofis — Bitki Detayı", en: "Ankara Office — Plant Detail" },
      },
      {
        url: "https://images.unsplash.com/photo-1592417817098-8fd3d4d7c0ee?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Ankara Ofis — Teras Alanı", en: "Ankara Office — Terrace Area" },
      },
    ],
  },
  {
    id: "bursa-kent-parki",
    title: {
      tr: "Bursa Kent Parkı Düzenlemesi",
      en: "Bursa City Park Arrangement",
    },
    description: {
      tr: "Belediye işbirliğiyle hayata geçirilen, 8.000 m² yüzölçümündeki kamusal yeşil alan projesi. Çocuk oyun alanları, yürüyüş yolları ve açık hava dinlenme noktaları ile şehir sakinlerine nefes alma alanı sağlandı.",
      en: "A public green space project of 8,000 m² realised in collaboration with the municipality. Children's play areas, walking paths and outdoor rest points provide city residents with breathing space.",
    },
    category: "kamu",
    location: "Bursa",
    year: 2023,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1487887235947-a955ef187fea?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Bursa Kent Parkı — Havadan Görünüm", en: "Bursa City Park — Aerial View" },
      },
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Bursa Kent Parkı — Çiçek Tarhları", en: "Bursa City Park — Flower Beds" },
      },
      {
        url: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Bursa Kent Parkı — Yürüyüş Yolu", en: "Bursa City Park — Walking Path" },
      },
    ],
  },
  {
    id: "cesme-tatil-koyu",
    title: {
      tr: "Çeşme Tatil Köyü Terası",
      en: "Çeşme Holiday Village Terrace",
    },
    description: {
      tr: "Ege'ye nazır, Yunan adaları estetiğinden ilham alan butik tatil köyü teras ve bahçe düzenlemesi. Beyaz badanalı saksılar, eflatun lavantalar ve bougainvillea sarmaşıklarıyla özgün bir Ege atmosferi yaratıldı.",
      en: "A boutique holiday village terrace and garden arrangement overlooking the Aegean, inspired by Greek island aesthetics. Whitewashed pots, purple lavender and bougainvillea vines create an authentic Aegean atmosphere.",
    },
    category: "teras",
    location: "Çeşme, İzmir",
    year: 2024,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Çeşme Tatil Köyü — Teras Genel Görünüm", en: "Çeşme Holiday Village — Terrace General View" },
      },
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Çeşme Tatil Köyü — Saksı Aranjmanı", en: "Çeşme Holiday Village — Pot Arrangement" },
      },
      {
        url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Çeşme Tatil Köyü — Lounge Alanı", en: "Çeşme Holiday Village — Lounge Area" },
      },
      {
        url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Çeşme Tatil Köyü — Havuz Kenarı", en: "Çeşme Holiday Village — Poolside" },
      },
    ],
  },
  {
    id: "ankara-rezidans",
    title: {
      tr: "Ankara Panorama Rezidansı",
      en: "Ankara Panorama Residence",
    },
    description: {
      tr: "Başkentin siluetine hakim konumuyla öne çıkan lüks rezidans kompleksinin ortak bahçe ve teras peyzajı. Dört ayrı tematik bahçe bölgesi ile sakinlere farklı deneyim noktaları sunuldu.",
      en: "Shared garden and terrace landscape of a luxury residential complex commanding the capital's skyline. Four distinct thematic garden zones provide residents with varied experience areas.",
    },
    category: "rezidans",
    location: "Ankara",
    year: 2022,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Ankara Rezidans — Ana Bahçe", en: "Ankara Residence — Main Garden" },
      },
      {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Ankara Rezidans — Su Elemanı", en: "Ankara Residence — Water Element" },
      },
      {
        url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Ankara Rezidans — Genel Görünüm", en: "Ankara Residence — General View" },
      },
    ],
  },
  {
    id: "istanbul-butik-otel",
    title: {
      tr: "İstanbul Butik Otel Bahçesi",
      en: "Istanbul Boutique Hotel Garden",
    },
    description: {
      tr: "Tarihi yarımadanın kalbinde yer alan butik otelin iç bahçesi ve rooftop teras peyzaj tasarımı. Osmanlı bahçe geleneğinden ilham alınan bu projede şimşir çitleri, güller ve çeşmeler bir arada kullanıldı.",
      en: "Interior garden and rooftop terrace landscape design of a boutique hotel in the heart of the historic peninsula. Inspired by Ottoman garden tradition, this project combines boxwood hedges, roses and fountains.",
    },
    category: "ticari",
    location: "İstanbul",
    year: 2023,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "İstanbul Butik Otel — İç Bahçe", en: "Istanbul Boutique Hotel — Inner Garden" },
      },
      {
        url: "https://images.unsplash.com/photo-1572127236498-10e0e6af42c5?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "İstanbul Butik Otel — Bahçe Detayı", en: "Istanbul Boutique Hotel — Garden Detail" },
      },
      {
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "İstanbul Butik Otel — Rooftop Teras", en: "Istanbul Boutique Hotel — Rooftop Terrace" },
      },
    ],
  },
  {
    id: "mugla-villa",
    title: {
      tr: "Muğla Doğa Villası",
      en: "Muğla Nature Villa",
    },
    description: {
      tr: "Ormanlık araziye entegre edilmiş, doğal yapıya en az müdahale eden ekolojik villa bahçesi projesi. Yağmur suyu toplama sistemi, yerli ağaç türleri ve taş kuru duvarlarla çevre dostu bir tasarım gerçekleştirildi.",
      en: "An ecological villa garden project integrated into forested terrain, minimising intervention in the natural landscape. An eco-friendly design was realised using rainwater harvesting, native tree species and dry stone walls.",
    },
    category: "villa",
    location: "Muğla",
    year: 2022,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Muğla Doğa Villası — Genel Görünüm", en: "Muğla Nature Villa — General View" },
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Muğla Doğa Villası — Orman Geçidi", en: "Muğla Nature Villa — Forest Passage" },
      },
      {
        url: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: { tr: "Muğla Doğa Villası — Doğal Havuz", en: "Muğla Nature Villa — Natural Pool" },
      },
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: { tr: "Muğla Doğa Villası — Bitki Detayı", en: "Muğla Nature Villa — Plant Detail" },
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

export function getProjectById(id: string, locale: Locale = "tr"): Project | undefined {
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
