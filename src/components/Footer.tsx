import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

const services = [
  "Études de faisabilité",
  "Conception technique (APS/APD)",
  "Supervision des travaux",
  "Études d'impact (EIES)",
  "Assistance maîtrise d'ouvrage",
  "Conseil & Expertise",
];

const pages = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/projets", label: "Nos Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#112850] text-white">
      {/* CTA Banner */}
      <div className="bg-[#E85420] py-16 sm:py-20">
        <div className="wrapper text-center">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-5"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Contactez notre équipe d'experts pour une étude personnalisée et un accompagnement sur mesure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#E85420] font-bold uppercase tracking-widest px-10 py-4 rounded hover:bg-orange-50 transition-colors"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Démarrer un projet
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="wrapper py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <Image
            src="/logo-white.png"
            alt="Billiekia Concept"
            width={160}
            height={60}
            className="h-14 w-auto object-contain mb-6"
          />
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Cabinet de bureau d'études spécialisé en ingénierie des infrastructures. Nous
            accompagnons vos projets avec qualité, rigueur et excellence.
          </p>
          <p
            className="text-[#E85420] font-semibold text-sm uppercase tracking-widest"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Quality · Performance · Excellency
          </p>
        </div>

        {/* Services */}
        <div>
          <h4
            className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Nos Services
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-gray-300 text-sm hover:text-[#E85420] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85420] flex-shrink-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Navigation
          </h4>
          <ul className="space-y-3">
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-gray-300 text-sm hover:text-[#E85420] transition-colors flex items-center gap-2 group"
                >
                  <Icon
                    name="arrow-right"
                    size={12}
                    className="opacity-60 group-hover:opacity-100 transition-opacity [&_path]:stroke-gray-300 group-hover:[&_path]:stroke-[#E85420]"
                  />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white font-bold text-lg uppercase tracking-wide mb-6 border-b border-[#E85420] pb-3"
            style={{ fontFamily: "var(--font-bc, 'Barlow Condensed', sans-serif)" }}
          >
            Contact
          </h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3 text-gray-300 text-sm">
              <Icon name="location-pin" size={18} className="[&_path]:stroke-[#E85420] mt-0.5 flex-shrink-0" />
              <span>N'Djamena, Tchad<br />Afrique Centrale</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300 text-sm">
              <Image src="/icons/phone.svg" alt="" width={18} height={18} className="flex-shrink-0 invert opacity-80 mt-0.5" />
              <div className="space-y-1">
                <a href="tel:+23566789494" className="hover:text-[#E85420] transition-colors block">(+235) 66 78 94 94</a>
                <a href="tel:+23599000005" className="hover:text-[#E85420] transition-colors block">(+235) 99 00 00 05</a>
              </div>
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <Image src="/icons/mail.svg" alt="" width={18} height={18} className="flex-shrink-0 invert opacity-80" />
              <a href="mailto:kourdafils@yahoo.com" className="hover:text-[#E85420] transition-colors break-all">
                kourdafils@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Billiekia Concept — Tous droits réservés.</p>
          <p className="text-gray-500">
            Site conçu par{" "}
            <a
              href="https://pascalreal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E85420] hover:text-orange-400 transition-colors font-medium"
            >
              Pascal Real
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
