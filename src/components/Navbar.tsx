"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : isHome
          ? "bg-transparent py-5"
          : "bg-[#1B3A6B] shadow-md py-4"
      }`}
    >
      <div className="wrapper flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={scrolled ? "/logo.png" : "/logo-white.png"}
            alt="Billiekia Concept"
            width={64}
            height={64}
            className="h-16 w-auto object-contain transition-all duration-300 flex-shrink-0"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span
              className={`font-bold text-lg uppercase tracking-wide transition-colors duration-300 ${scrolled ? "text-[#1B3A6B]" : "text-white"}`}
              style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)", letterSpacing: "0.06em" }}
            >
              Billiekia
            </span>
            <span
              className={`text-xs uppercase tracking-widest transition-colors duration-300 ${scrolled ? "text-[#E85420]" : "text-[#E85420]"}`}
              style={{ fontFamily: "var(--font-bw, Barlow, sans-serif)", letterSpacing: "0.12em" }}
            >
              Concept
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-medium text-sm tracking-wide uppercase transition-colors duration-200 hover:text-[#E85420] ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-bw, Barlow, sans-serif)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-orange text-sm py-3 px-6">
            Nous Contacter
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded ${scrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          style={{ color: "currentColor" }}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-800 font-medium text-base uppercase tracking-wide border-b border-gray-100 pb-3 hover:text-[#E85420] transition-colors"
                style={{ fontFamily: "var(--font-bw, Barlow, sans-serif)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-orange text-center mt-2"
            >
              Nous Contacter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
