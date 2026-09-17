import { highlight } from "@/lib/highlight";

// Build-time syntax highlighting via shiki, dual light/dark theme through
// CSS variables so it inverts with data-scheme for free — no client JS.
// The HTML is shiki's own deterministic output over our own hardcoded code
// strings in content/projects/*.ts (never user input), which is the
// documented way to render shiki — not an XSS surface.
export async function CodeBlock({ code, lang, filename }: { code: string; lang: string; filename?: string }) {
  const html = await highlight(code, lang);

  return (
    <figure className="overflow-hidden border border-[var(--rule)]">
      {filename ? (
        <figcaption className="border-b border-[var(--rule)] bg-[var(--surface-2)] px-[var(--spacing-md)] py-[var(--spacing-xs)] font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)]">
          {filename}
        </figcaption>
      ) : null}
      <div
        className="overflow-x-auto p-[var(--spacing-md)] text-[length:var(--text-sm)] leading-[1.7] [&_pre]:bg-transparent! [&_pre]:m-0"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </figure>
  );
}
