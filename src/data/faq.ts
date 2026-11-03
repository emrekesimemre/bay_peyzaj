import type { Locale } from "@/i18n/routing";

export interface FaqItem {
  question: string;
  answer: string;
}

interface BilingualFaqItem {
  question: { tr: string; en: string };
  answer: { tr: string; en: string };
}

const faqData: BilingualFaqItem[] = [
  {
    question: {
      tr: "Proje süreci nasıl ilerliyor?",
      en: "How does the project process work?",
    },
    answer: {
      tr: "İlk adım ücretsiz keşif ziyaretidir. Arazi ölçümü ve müşteri beklentileri doğrultusunda konsept tasarım hazırlanır, onayın ardından uygulama başlar. Ortalama süre proje büyüklüğüne göre 2–8 hafta arasında değişir.",
      en: "The first step is a free site visit. A concept design is prepared according to site measurements and client expectations, and execution begins after approval. The average duration ranges from 2 to 8 weeks depending on the scale of the project.",
    },
  },
  {
    question: {
      tr: "Fiyatlar nasıl belirleniyor?",
      en: "How are prices determined?",
    },
    answer: {
      tr: "Fiyat; alan büyüklüğü (m²), seçilen malzemeler, bitki türleri ve uygulama süresi gibi faktörlere göre belirlenir. Keşif sonrası size özel, şeffaf bir teklif sunulur — gizli maliyet yoktur.",
      en: "Pricing is determined by factors such as area size (m²), selected materials, plant types and execution duration. After the site visit, a personalised, transparent quote is provided — no hidden costs.",
    },
  },
  {
    question: {
      tr: "Kış mevsiminde dikim yapılabilir mi?",
      en: "Can planting be done in winter?",
    },
    answer: {
      tr: "Sert donların yaşanmadığı dönemlerde birçok ağaç ve çalı türü kış aylarında da dikilebilir. Hangi bitkilerin hangi mevsimde dikilmesi gerektiği konusunda uzman ekibimiz sizi yönlendirir.",
      en: "During periods without severe frost, many tree and shrub species can be planted in winter. Our expert team will guide you on which plants should be planted in which season.",
    },
  },
  {
    question: {
      tr: "Bakım hizmeti sunuyor musunuz?",
      en: "Do you offer maintenance services?",
    },
    answer: {
      tr: "Evet. Aylık ve mevsimlik bakım paketlerimiz mevcuttur; budama, gübreleme, sulama kontrolü ve genel bakımı kapsar. Teslim ettiğimiz projelere öncelikli bakım hizmeti verilmektedir.",
      en: "Yes. We offer monthly and seasonal maintenance packages covering pruning, fertilising, irrigation checks and general upkeep. Projects we deliver receive priority maintenance service.",
    },
  },
  {
    question: {
      tr: "Sulama sistemleri su faturamı artırır mı?",
      en: "Will irrigation systems increase my water bill?",
    },
    answer: {
      tr: "Aksine, doğru planlanan damla ve otomatik yağmurlama sistemleri su tüketimini %30–50 azaltabilir. Sensör tabanlı sistemler yağmur yağdığında sulamayı otomatik durdurur.",
      en: "On the contrary, properly planned drip and automatic sprinkler systems can reduce water consumption by 30–50%. Sensor-based systems automatically stop irrigation when it rains.",
    },
  },
  {
    question: {
      tr: "Hangi bölgelerde hizmet veriyorsunuz? Şehir dışı projeler yapıyor musunuz?",
      en: "Which regions do you serve? Do you undertake projects outside Ankara?",
    },
    answer: {
      tr: "Merkezimiz Ankara olmak üzere; Çankaya, İncek, Gölbaşı, Çayyolu, Yenimahalle başta olmak üzere tüm Ankara genelinde ve Türkiye çapındaki seçkin villa, rezidans ve ticari projelerde anahtar teslim peyzaj tasarımı ve bahçe düzenleme hizmeti sunuyoruz.",
      en: "Headquartered in Ankara, we deliver turnkey landscape architecture and garden design services across all Ankara districts (notably Çankaya, İncek, Gölbaşı, Çayyolu, Yenimahalle) as well as prominent villa, residential and commercial projects throughout Turkey.",
    },
  },
];

export function getFaq(locale: Locale): FaqItem[] {
  return faqData.map((item) => ({
    question: item.question[locale],
    answer: item.answer[locale],
  }));
}

/** @deprecated use getFaq(locale) */
export const faqItems: FaqItem[] = faqData.map((item) => ({
  question: item.question.tr,
  answer: item.answer.tr,
}));
