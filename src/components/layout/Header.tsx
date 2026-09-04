"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { useState, useEffect, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useLenis } from "lenis/react";
import { routing } from "@/i18n/routing";
import QuoteModal from "@/components/QuoteModal";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { SITE } from "@/data/site";

export default function Header() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const lenis = useLenis();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { label: t("services"), href: "/#hizmetler" },
    { label: t("projects"), href: "/projeler" },
    { label: t("about"), href: "/#hakkimizda" },
    { label: t("contact"), href: "/iletisim" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const timer = setTimeout(() => {
      const target = document.getElementById(hash);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleHashLink = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setMenuOpen(false);
      if (!href.startsWith("/#")) return;
      if (pathname !== "/") return;
      e.preventDefault();
      const localizedHref =
        locale !== routing.defaultLocale ? `/${locale}${href}` : href;
      window.history.pushState({}, "", localizedHref);
      const id = href.slice(2);
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [pathname],
  );

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-antrasit/20 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

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
                  window.history.pushState(
                    {},
                    "",
                    locale === "en" ? "/en" : "/",
                  );
                  lenis?.scrollTo(0);
                }
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={SITE.logo.mark}
                  alt={SITE.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="hidden sm:block font-serif text-lg font-semibold tracking-wider text-antrasit uppercase">
                {SITE.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href as "/"}
                  onClick={(e) => handleHashLink(e, link.href)}
                  className="font-sans text-sm tracking-widest uppercase text-antrasit/70 hover:text-servi-yesili transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}

              {/* Language switcher */}
              <LanguageSwitcher />

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="font-sans text-sm tracking-widest uppercase px-6 py-2.5 border border-servi-yesili text-servi-yesili hover:bg-servi-yesili hover:text-saf-beyaz transition-all duration-300"
              >
                {t("cta")}
              </button>
            </nav>

            {/* Mobile: Language + Hamburger */}
            <div className="md:hidden flex items-center gap-4">
              <LanguageSwitcher />
              <button
                type="button"
                className="flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={t("toggleMenu")}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
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
        </div>

        {/* Mobile Menu Drawer */}
        <div
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className={`md:hidden overflow-hidden transition-all duration-500 bg-saf-beyaz border-t border-antrasit/10 ${menuOpen ? "max-h-screen py-6" : "max-h-0"}`}
        >
          <nav className="flex flex-col px-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href as "/"}
                onClick={(e) => handleHashLink(e, link.href)}
                className="font-sans text-base tracking-widest uppercase text-antrasit/80 hover:text-servi-yesili transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="font-sans text-sm tracking-widest uppercase px-6 py-3 border border-servi-yesili text-servi-yesili hover:bg-servi-yesili hover:text-saf-beyaz transition-all duration-300 text-center"
            >
              {t("cta")}
            </button>
          </nav>
        </div>
      </header>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
