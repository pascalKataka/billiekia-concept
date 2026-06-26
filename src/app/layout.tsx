import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bc",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-bw",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-it",
  display: "swap",
});

const BASE_URL = "https://billiekia-concept.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Billiekia Concept | Bureau d'Études & Ingénierie",
    template: "%s | Billiekia Concept",
  },
  description:
    "Cabinet de bureau d'études spécialisé en ingénierie des infrastructures au Tchad. Qualité, Performance, Excellence — nous accompagnons vos projets de la conception à la réalisation.",
  keywords: [
    "bureau d'études Tchad",
    "ingénierie infrastructure",
    "études techniques",
    "Billiekia Concept",
    "EIES impact environnemental",
    "maîtrise d'ouvrage",
    "supervision travaux",
    "N'Djamena",
    "Afrique Centrale",
    "APS APD",
    "bureau études ingénierie Tchad",
  ],
  authors: [{ name: "Billiekia Concept" }],
  creator: "Billiekia Concept",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "Billiekia Concept",
    title: "Billiekia Concept | Bureau d'Études & Ingénierie",
    description:
      "Cabinet de bureau d'études spécialisé en ingénierie des infrastructures. Quality · Performance · Excellency",
    images: [
      {
        url: "/images/bc/bc-25.jpg",
        width: 1200,
        height: 630,
        alt: "Billiekia Concept — Ingénieurs sur le terrain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billiekia Concept | Bureau d'Études & Ingénierie",
    description:
      "Cabinet de bureau d'études spécialisé en ingénierie des infrastructures au Tchad.",
    images: ["/images/bc/bc-25.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://billiekia-concept.com/#organization",
      name: "Billiekia Concept",
      url: "https://billiekia-concept.com",
      logo: "https://billiekia-concept.com/logo.png",
      description:
        "Cabinet de bureau d'études spécialisé en ingénierie des infrastructures au Tchad.",
      email: "billiekia.concept@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenue Lieutenant Mahmout Abderrahmane Haggar, Rue de 30",
        postalCode: "7580",
        addressLocality: "N'Djamena",
        addressCountry: "TD",
      },
      sameAs: [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://billiekia-concept.com/#localbusiness",
      name: "Billiekia Concept",
      image: "https://billiekia-concept.com/images/bc/bc-25.jpg",
      email: "billiekia.concept@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenue Lieutenant Mahmout Abderrahmane Haggar, Rue de 30",
        postalCode: "7580",
        addressLocality: "N'Djamena",
        addressCountry: "TD",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${barlowCondensed.variable} ${barlow.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
