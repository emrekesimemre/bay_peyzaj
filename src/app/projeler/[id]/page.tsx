import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectById, categoryLabels } from "@/data/projects";
import ProjectDetailGallery from "@/components/sections/ProjectDetailGallery";
import QuoteButton from "@/components/QuoteButton";
import Footer from "@/components/layout/Footer";

interface Props {
  readonly params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Bay Peyzaj`,
      description: project.description,
      images: [{ url: project.images[0].url }],
    },
  };
}

export default async function ProjeDetayPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  const coverImage = project.images[0];

  return (
    <>
      <main>
        {/* Full-bleed Hero */}
        <div className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
          <Image
            src={coverImage.url}
            alt={coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-antrasit/40 via-transparent to-antrasit/70" />

          {/* Back Button */}
          <Link
            href="/projeler"
            className="absolute top-24 left-6 md:left-16 flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-saf-beyaz/80 hover:text-saf-beyaz transition-colors duration-300 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Tüm Projeler
          </Link>

          {/* Hero Title */}
          <div className="absolute bottom-10 md:bottom-16 left-6 md:left-16 right-6 md:right-16">
            <span className="inline-block font-sans text-xs tracking-widest uppercase text-saf-beyaz/60 mb-4">
              {categoryLabels[project.category]} — {project.location} — {project.year}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-saf-beyaz leading-tight tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Project Info */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="md:col-span-2">
              <div className="w-10 h-0.5 bg-servi-yesili mb-8" />
              <p className="font-serif text-lg md:text-xl text-antrasit/70 italic leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-antrasit/40 mb-1">
                  Kategori
                </p>
                <p className="font-sans text-sm text-antrasit font-medium">
                  {categoryLabels[project.category]}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-antrasit/40 mb-1">
                  Lokasyon
                </p>
                <p className="font-sans text-sm text-antrasit font-medium">
                  {project.location}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-antrasit/40 mb-1">
                  Yıl
                </p>
                <p className="font-sans text-sm text-antrasit font-medium">
                  {project.year}
                </p>
              </div>
              <div className="pt-4">
                <QuoteButton />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="px-6 md:px-16 max-w-7xl mx-auto pb-24 md:pb-36">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-antrasit mb-10 md:mb-14">
            Proje Galerisi
          </h2>
          <ProjectDetailGallery images={project.images} />
        </div>
      </main>
      <Footer />
    </>
  );
}
