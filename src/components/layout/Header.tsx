"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import QuoteModal from "@/components/QuoteModal";

const navLinks = [
  { label: "Hizmetler", href: "/#hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "İletişim", href: "/#iletisim" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  const handleHashLink = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#")) return;
      setMenuOpen(false);
      if (pathname !== "/") return;
      e.preventDefault();
      const id = href.slice(2);
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [pathname]
  );

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-saf-beyaz/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              setMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.jpg"
                alt="Bay Peyzaj Logo"
                fill
                sizes="48px"
                className="object-contain rounded-full"
                priority
              />
            </div>
            <span className="hidden sm:block font-serif text-lg font-semibold tracking-wider text-antrasit uppercase">
              Bay Peyzaj
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleHashLink(e, link.href)}
                className="font-sans text-sm tracking-widest uppercase text-antrasit/70 hover:text-servi-yesili transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="font-sans text-sm tracking-widest uppercase px-6 py-2.5 border border-servi-yesili text-servi-yesili hover:bg-servi-yesili hover:text-saf-beyaz transition-all duration-300"
            >
              Teklif Al
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <span
              className={`block w-6 h-0.5 bg-antrasit transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-antrasit transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-antrasit transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-saf-beyaz border-t border-antrasit/10 ${
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleHashLink(e, link.href)}
              className="font-sans text-base tracking-widest uppercase text-antrasit/80 hover:text-servi-yesili transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => { setMenuOpen(false); setIsModalOpen(true); }}
            className="font-sans text-sm tracking-widest uppercase px-6 py-3 border border-servi-yesili text-servi-yesili hover:bg-servi-yesili hover:text-saf-beyaz transition-all duration-300 text-center"
          >
            Teklif Al
          </button>
        </nav>
      </div>
    </header>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
