import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Newsreader } from "next/font/google";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { Nav } from "@/components/organisms/Nav";
import { Footer } from "@/components/organisms/Footer";
import { personJsonLd } from "@/lib/jsonld";
import { siteUrl, siteTitle, siteDescription } from "@/lib/site";
import "./globals.css";

// Archivo is variable on weight and width — the width axis is what turns
// one family into both the poster display face and the interface sans.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  preload: true,
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  preload: true,
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  preload: false,
  display: "swap",
});

// Arabic is used for the Sadara title and the Arabic edition name only.
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "700",
  variable: "--font-plex-arabic",
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s — Moath K. Awaja" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Moath K. Awaja", url: siteUrl }],
  creator: "Moath K. Awaja",
};

// JSON-LD payload is JSON.stringify() of our own static content/profile.ts
// object — no user-supplied or third-party HTML ever flows through this,
// so dangerouslySetInnerHTML is the documented-safe Next.js pattern here,
// not an XSS surface.
function PersonJsonLd() {
  const json = JSON.stringify(personJsonLd());
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable} ${plexMono.variable} ${plexArabic.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal],[data-reveal] [data-cell],[data-reveal] [data-grow]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <PersonJsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <LazyMotion features={domAnimation} strict>
            <Nav />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </LazyMotion>
        </MotionConfig>
      </body>
    </html>
  );
}
