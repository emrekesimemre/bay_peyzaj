"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

const easeOut = [0.0, 0.0, 0.2, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: easeOut, delay },
});

const paragraphs = [
  "Doğaya değer, yaşam alanlarına kalite katma vizyonuyla yola çıktık. BAY PEYZAJ; her projeye yalnızca bir bahçe tasarımı olarak değil, insanın doğayla kurduğu derin bağın mimari bir ifadesi olarak yaklaşır. Her yaprak, her taş, her su izi — hepsi özenle seçilmiş bir anlatının parçasıdır.",
  "Akdeniz'in iklim zenginliğinden, Anadolu'nun tarihi peyzaj geleneğinden ve çağdaş mimari tasarım anlayışından ilham alıyoruz. Özel villa bahçelerinden kentsel açık alanlara, havuz kenarı düzenlemelerinden terapi bahçelerine kadar her ölçekte kaliteyi ve estetiği ödünsüz hayata geçiriyoruz.",
  "Tasarım sürecinin her aşamasında şeffaf iletişim, öngörülen sürelere bağlılık ve teslimatta eksiksiz mükemmellik — bu üç ilke, BAY PEYZAJ'ın değişmeyen taahhüdüdür.",
];

const stats = [
  { value: 15, suffix: "+", etiket: "Yıllık Deneyim" },
  { value: 200, suffix: "+", etiket: "Tamamlanan Proje" },
  { value: 100, suffix: "%", etiket: "Müşteri Memnuniyeti" },
];

function AnimatedStat({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: easeOut,
    });
    return controls.stop;
  }, [isInView, motionValue, value, duration]);

  return (
    <span ref={ref} className="font-serif text-4xl font-semibold text-servi-yesili">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section
      id="hakkimizda"
      className="bg-saf-beyaz py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="mb-20">
          <motion.span
            className="font-sans text-xs tracking-[0.3em] uppercase text-servi-yesili mb-4 block"
            {...fadeUp(0)}
          >
            Biz Kimiz
          </motion.span>

          <motion.h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-antrasit tracking-tight leading-tight max-w-2xl"
            {...fadeUp(0.1)}
          >
            Hakkımızda
          </motion.h2>

          <motion.div
            className="mt-6 w-16 h-px bg-servi-yesili"
            {...fadeUp(0.2)}
          />
        </div>

        {/* İki Sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Sol — Metin */}
          <div className="flex flex-col gap-8">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className="font-sans text-base md:text-lg text-slate-700 leading-relaxed"
                {...fadeUp(0.3 + i * 0.15)}
              >
                {text}
              </motion.p>
            ))}

            <motion.blockquote
              className="mt-4 pl-6 border-l-2 border-servi-yesili"
              {...fadeUp(0.75)}
            >
              <p className="font-serif text-xl md:text-2xl text-antrasit/80 italic leading-snug">
                &ldquo;Her yeşil alan, yaşayan bir mimari eserdir.&rdquo;
              </p>
            </motion.blockquote>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-8 mt-6 pt-10 border-t border-stone-200">
              {stats.map((item, i) => (
                <motion.div
                  key={item.etiket}
                  className="flex flex-col gap-2"
                  {...fadeUp(0.85 + i * 0.1)}
                >
                  <AnimatedStat
                    value={item.value}
                    suffix={item.suffix}
                    duration={item.value > 100 ? 2.5 : 2}
                  />
                  <span className="font-sans text-xs tracking-widest uppercase text-antrasit/50">
                    {item.etiket}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sağ — Görsel */}
          <motion.div
            className="relative w-full aspect-4/5 overflow-hidden rounded-sm"
            {...fadeUp(0.35)}
          >
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop"
              alt="Bay Peyzaj — Doğa ile İç İçe Tasarım"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-antrasit/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
