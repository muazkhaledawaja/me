"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { Wordmark } from "@/components/atoms/Wordmark";
import { StatusDot } from "@/components/atoms/StatusDot";
import { navItems } from "@/lib/site";
import { duration, ease } from "@/lib/motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/work/") && pathname !== "/work";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  return (
    <header
      className="sticky top-0 z-[var(--z-header)] border-b transition-[height,background-color] duration-[var(--duration-base)] ease-[var(--ease-out-quart)]"
      style={{
        height: scrolled ? "64px" : "88px",
        backgroundColor: scrolled ? "color-mix(in srgb, var(--surface) 92%, transparent)" : "transparent",
        borderColor: scrolled ? "var(--rule)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div
        className="mx-auto flex h-full items-center justify-between"
        style={{ maxWidth: "var(--container-max)", paddingInline: "var(--container-pad)" }}
      >
        {isCaseStudy ? (
          <Link
            href="/#work"
            className="font-mono text-[length:var(--text-sm)] text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
          >
            ← Work
          </Link>
        ) : (
          <Link href="/" aria-label="Home">
            <Wordmark />
          </Link>
        )}

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[length:var(--text-sm)] font-medium tracking-[0.01em] text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <StatusDot label="Open to work" />
        </nav>

        <button
          type="button"
          aria-expanded={sheetOpen}
          aria-controls="mobile-nav-sheet"
          aria-label={sheetOpen ? "Close menu" : "Open menu"}
          onClick={() => setSheetOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            aria-hidden="true"
            className="h-px w-6 bg-[var(--fg)] transition-transform duration-[var(--duration-base)]"
            style={sheetOpen ? { transform: "translateY(3.5px) rotate(45deg)" } : undefined}
          />
          <span
            aria-hidden="true"
            className="h-px w-6 bg-[var(--fg)] transition-transform duration-[var(--duration-base)]"
            style={sheetOpen ? { transform: "translateY(-3.5px) rotate(-45deg)" } : undefined}
          />
        </button>
      </div>

      <AnimatePresence>
        {sheetOpen ? (
          <m.div
            id="mobile-nav-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.fast }}
            className="fixed inset-x-0 top-16 bottom-0 z-[var(--z-overlay)] flex flex-col justify-center gap-8 bg-[var(--surface)] px-[var(--container-pad)] md:hidden"
          >
            {navItems.map((item, i) => (
              <m.div
                key={item.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: duration.slow, ease: ease.outExpo, delay: i * 0.04 }}
              >
                <Link href={item.href} className="font-serif text-[length:var(--text-2xl)] text-[var(--fg)]">
                  {item.label}
                </Link>
              </m.div>
            ))}
            <StatusDot label="Open to work" />
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
