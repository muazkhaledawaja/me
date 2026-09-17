import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { Nav } from "@/components/organisms/Nav";
import { Footer } from "@/components/organisms/Footer";
import { personJsonLd } from "@/lib/jsonld";
import { siteUrl, siteTitle, siteDescription } from "@/lib/site";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  preload: true,
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
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
