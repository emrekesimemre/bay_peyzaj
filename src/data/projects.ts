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

export const categoryLabels: Record<ProjectCategory, string> = {
  villa: "Villa",
  rezidans: "Rezidans",
  ticari: "Ticari",
  kamu: "Kamu",
  teras: "Teras & Yazlık",
};

export const projects: Project[] = [
  {
    id: "antalya-villa",
    title: "Antalya Villa Projesi",
    description:
      "Akdeniz ikliminin doğal zenginliğini modern peyzaj tasarımıyla harmanlayan, özel villa bahçesi projesi. Yöresel bitkiler ve doğal taş malzeme kullanılarak arazi ile uyum sağlandı.",
    category: "villa",
    location: "Antalya",
    year: 2024,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Antalya Villa Projesi — Genel Görünüm",
      },
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Antalya Villa Projesi — Bitki Detayı",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Antalya Villa Projesi — Taş Yürüyüş Yolu",
      },
      {
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Antalya Villa Projesi — Havuz Çevresi",
      },
    ],
  },
  {
    id: "istanbul-rezidans",
    title: "İstanbul Rezidans Bahçesi",
    description:
      "Şehrin yoğun temposundan arındırılmış, doğal taş yollar ve su öğeleriyle tasarlanmış lüks rezidans bahçe projesi. 2.400 m² alanda gerçekleştirilen bu proje, sakinlere huzurlu bir yeşil alan sunmaktadır.",
    category: "rezidans",
    location: "İstanbul",
    year: 2024,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "İstanbul Rezidans — Taş Yol Detayı",
      },
      {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "İstanbul Rezidans — Su Öğesi",
      },
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "İstanbul Rezidans — Genel Görünüm",
      },
    ],
  },
  {
    id: "bodrum-yazlik",
    title: "Bodrum Yazlık Terası",
    description:
      "Ege'nin eşsiz manzarasına açılan, doğal bitkilerle çerçevelenmiş deniz manzaralı teras ve çevre düzenleme projesi. Rüzgara dayanıklı Akdeniz bitkileri ile dört mevsim canlı bir görünüm sağlandı.",
    category: "teras",
    location: "Bodrum, Muğla",
    year: 2023,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Bodrum Yazlık — Teras Genel Görünüm",
      },
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Bodrum Yazlık — Bitki Aranjmanı",
      },
      {
        url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Bodrum Yazlık — Oturma Alanı",
      },
    ],
  },
  {
    id: "izmir-villa",
    title: "İzmir Kordon Villa Bahçesi",
    description:
      "Ege mimarisiyle bütünleşen, zeytin ağaçları ve lavantalarla çerçevelenmiş özel villa bahçesi. Doğal sulama sistemi ve yöresel bitki örtüsüyle minimum bakım gerektiren sürdürülebilir bir tasarım.",
    category: "villa",
    location: "İzmir",
    year: 2024,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "İzmir Villa — Genel Görünüm",
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "İzmir Villa — Zeytin Ağaçları",
      },
      {
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "İzmir Villa — Bahçe Yolu",
      },
    ],
  },
  {
    id: "ankara-ofis",
    title: "Ankara Ofis Peyzajı",
    description:
      "Kurumsal kimliği yansıtan, çalışanların dinlenebileceği iç avlular ve yeşil koridorlardan oluşan ofis kampüsü peyzaj projesi. Gölge yaratan ağaçlar ve oturma grupları ile aktif kullanım alanları oluşturuldu.",
    category: "ticari",
    location: "Ankara",
    year: 2023,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Ankara Ofis — İç Avlu",
      },
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Ankara Ofis — Bitki Detayı",
      },
      {
        url: "https://images.unsplash.com/photo-1592417817098-8fd3d4d7c0ee?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Ankara Ofis — Teras Alanı",
      },
    ],
  },
  {
    id: "bursa-kent-parki",
    title: "Bursa Kent Parkı Düzenlemesi",
    description:
      "Belediye işbirliğiyle hayata geçirilen, 8.000 m² yüzölçümündeki kamusal yeşil alan projesi. Çocuk oyun alanları, yürüyüş yolları ve açık hava dinlenme noktaları ile şehir sakinlerine nefes alma alanı sağlandı.",
    category: "kamu",
    location: "Bursa",
    year: 2023,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1487887235947-a955ef187fea?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Bursa Kent Parkı — Havadan Görünüm",
      },
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Bursa Kent Parkı — Çiçek Tarhları",
      },
      {
        url: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Bursa Kent Parkı — Yürüyüş Yolu",
      },
    ],
  },
  {
    id: "cesme-tatil-koyu",
    title: "Çeşme Tatil Köyü Terası",
    description:
      "Ege'ye nazır, Yunan adaları estetiğinden ilham alan butik tatil köyü teras ve bahçe düzenlemesi. Beyaz badanalı saksılar, eflatun lavantalar ve bougainvillea sarmaşıklarıyla özgün bir Ege atmosferi yaratıldı.",
    category: "teras",
    location: "Çeşme, İzmir",
    year: 2024,
    featured: true,
    images: [
      {
        url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Çeşme Tatil Köyü — Teras Genel Görünüm",
      },
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Çeşme Tatil Köyü — Saksı Aranjmanı",
      },
      {
        url: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Çeşme Tatil Köyü — Lounge Alanı",
      },
      {
        url: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Çeşme Tatil Köyü — Havuz Kenarı",
      },
    ],
  },
  {
    id: "ankara-rezidans",
    title: "Ankara Panorama Rezidansı",
    description:
      "Başkentin siluetine hakim konumuyla öne çıkan lüks rezidans kompleksinin ortak bahçe ve teras peyzajı. Dört ayrı tematik bahçe bölgesi ile sakinlere farklı deneyim noktaları sunuldu.",
    category: "rezidans",
    location: "Ankara",
    year: 2022,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Ankara Rezidans — Ana Bahçe",
      },
      {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Ankara Rezidans — Su Elemanı",
      },
      {
        url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Ankara Rezidans — Genel Görünüm",
      },
    ],
  },
  {
    id: "istanbul-butik-otel",
    title: "İstanbul Butik Otel Bahçesi",
    description:
      "Tarihi yarımadanın kalbinde yer alan butik otelin iç bahçesi ve rooftop teras peyzaj tasarımı. Osmanlı bahçe geleneğinden ilham alınan bu projede şimşir çitleri, güller ve çeşmeler bir arada kullanıldı.",
    category: "ticari",
    location: "İstanbul",
    year: 2023,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "İstanbul Butik Otel — İç Bahçe",
      },
      {
        url: "https://images.unsplash.com/photo-1572127236498-10e0e6af42c5?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "İstanbul Butik Otel — Bahçe Detayı",
      },
      {
        url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "İstanbul Butik Otel — Rooftop Teras",
      },
    ],
  },
  {
    id: "mugla-villa",
    title: "Muğla Doğa Villası",
    description:
      "Ormanlık araziye entegre edilmiş, doğal yapıya en az müdahale eden ekolojik villa bahçesi projesi. Yağmur suyu toplama sistemi, yerli ağaç türleri ve taş kuru duvarlarla çevre dostu bir tasarım gerçekleştirildi.",
    category: "villa",
    location: "Muğla",
    year: 2022,
    featured: false,
    images: [
      {
        url: "https://images.unsplash.com/photo-1574798834926-b39501d8eda2?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Muğla Doğa Villası — Genel Görünüm",
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Muğla Doğa Villası — Orman Geçidi",
      },
      {
        url: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200&auto=format&fit=crop",
        orientation: "landscape",
        alt: "Muğla Doğa Villası — Doğal Havuz",
      },
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
        orientation: "portrait",
        alt: "Muğla Doğa Villası — Bitki Detayı",
      },
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
