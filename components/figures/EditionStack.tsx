import { Reveal } from "@/components/atoms/Reveal";

// Plate for Trace of the Tide. The four editions, each set in its own
// language and its own reading direction.
const EDITIONS = [
  { name: "العربية", lang: "ar", dir: "rtl" as const, note: "RTL" },
  { name: "English", lang: "en", dir: "ltr" as const, note: "LTR" },
  { name: "Español", lang: "es", dir: "ltr" as const, note: "LTR" },
  { name: "Français", lang: "fr", dir: "ltr" as const, note: "LTR" },
];

export function EditionStack() {
  return (
    <figure className="w-full">
      <ul className="border-b border-[var(--fg)]">
        {EDITIONS.map((edition, i) => (
          <li
            key={edition.lang}
            className={`flex items-baseline gap-4 border-t border-[var(--fg)] py-2 ${
              edition.dir === "rtl" ? "flex-row-reverse" : ""
            }`}
          >
            <Reveal
              as="span"
              variant="mask"
              delay={i * 0.07}
              className={`block flex-1 text-[length:var(--text-3xl)] leading-[1.15] text-[var(--fg)] ${
                edition.dir === "rtl"
                  ? "font-[family-name:var(--font-arabic)] font-bold"
                  : "font-serif italic tracking-[-0.01em]"
              }`}
            >
              <span lang={edition.lang} dir={edition.dir} className="block">
                {edition.name}
              </span>
            </Reveal>
            <span className="annot text-[var(--fg-muted)]">{edition.note}</span>
          </li>
        ))}
      </ul>
      <figcaption className="annot mt-[var(--spacing-sm)] max-w-[40ch] text-[var(--fg-muted)]">
        Fig. 3 — Four editions from one content model, in two reading directions.
      </figcaption>
    </figure>
  );
}
