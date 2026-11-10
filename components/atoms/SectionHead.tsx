import { Reveal } from "./Reveal";

// The running head that opens a section: a full-width ink rule that draws
// itself, the section name, and an optional note at the far edge.
export function SectionHead({
  id,
  title,
  note,
  as: Tag = "h2",
}: {
  id?: string;
  title: string;
  note?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="col-span-full">
      <Reveal variant="rule" className="h-px bg-[var(--fg)]" />
      <div className="flex items-baseline justify-between gap-[var(--spacing-lg)] pt-[var(--spacing-sm)]">
        <Tag id={id} className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">
          {title}
        </Tag>
        {note ? <p className="annot text-end text-[var(--fg-muted)]">{note}</p> : null}
      </div>
    </div>
  );
}
