import { getFaq } from "@/data/faq";
import type { Locale } from "@/i18n/routing";

export default function JsonLdFaq({ locale }: { locale: Locale }) {
  const items = getFaq(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
