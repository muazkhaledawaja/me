export function Footer() {
  return (
    <footer className="grid-editorial pb-[var(--spacing-xl)]">
      <div className="col-span-full flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-[var(--fg)] pt-[var(--spacing-sm)]">
        <p className="annot text-[var(--fg-muted)]">© 2026 Moath K. Awaja — Crafted in Cairo, rooted in Palestine</p>
        <p className="annot text-[var(--fg-muted)]">Set in Archivo, Newsreader and IBM Plex Mono</p>
        <a href="#main" className="annot link-rule text-[var(--fg)]">
          Back to top
        </a>
      </div>
    </footer>
  );
}
