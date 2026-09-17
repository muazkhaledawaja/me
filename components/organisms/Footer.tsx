import Link from "next/link";
import { Hairline } from "@/components/atoms/Hairline";

export function Footer() {
  return (
    <footer className="grid-editorial py-[var(--spacing-2xl)]">
      <div className="bleed">
        <Hairline />
      </div>
      <div className="col-span-full mt-[var(--spacing-lg)] flex flex-wrap items-center justify-between gap-4 font-mono text-[length:var(--text-xs)] text-[var(--fg-faint)]">
        <p>© 2026 Moath K. Awaja — Crafted in Cairo, rooted in Palestine</p>
        <Link href="/colophon" className="hover:text-[var(--fg)] transition-colors">
          Colophon
        </Link>
      </div>
    </footer>
  );
}
