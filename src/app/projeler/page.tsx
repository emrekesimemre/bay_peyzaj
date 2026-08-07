import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Bay Peyzaj tarafından hayata geçirilen villa, rezidans, ticari ve kamusal peyzaj projelerini keşfedin.",
};

export default function ProjelerPage() {
  return (
    <>
      <main className="pt-32 pb-0">
        {/* Page Hero */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto mb-16 md:mb-24">
          <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-antrasit leading-tight tracking-tight mb-6">
            Tüm Projeler
          </h1>
          <p className="font-serif text-lg md:text-xl text-antrasit/60 italic leading-relaxed max-w-lg">
            Doğayla kurulan her ilişki, farklı bir hikaye anlatır. İşte o hikayelerden bir seçki.
          </p>
        </div>

        {/* Grid + Filter */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto pb-24 md:pb-36">
          <ProjectsGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
