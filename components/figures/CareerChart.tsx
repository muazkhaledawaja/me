import type { ExperienceEntry } from "@/content/types";
import { Reveal } from "@/components/atoms/Reveal";

// The chronology, drawn to scale. Every entry sits on one month-accurate
// axis, so overlapping work (SAVCOM and Ahel Gaza, the degree and the
// training programs) reads as overlap instead of being flattened into a
// single line.
const AXIS_START = 2019;
const AXIS_END = 2027; // exclusive
const MONTHS = (AXIS_END - AXIS_START) * 12;
const YEARS = Array.from({ length: AXIS_END - AXIS_START }, (_, i) => AXIS_START + i);

function monthIndex(stamp: string): number {
  const [year, month] = stamp.split("-").map(Number);
  return ((year ?? AXIS_START) - AXIS_START) * 12 + ((month ?? 1) - 1);
}

const BAR: Record<ExperienceEntry["kind"], string> = {
  role: "bg-[var(--fg)]",
  training: "border border-[var(--fg)] bg-[repeating-linear-gradient(135deg,var(--fg)_0_1px,transparent_1px_5px)]",
  education: "border border-[var(--fg)]",
};

const KIND_LABEL: Record<ExperienceEntry["kind"], string> = {
  role: "Role",
  training: "Training",
  education: "Degree",
};

export function CareerChart({ entries }: { entries: ExperienceEntry[] }) {
  // oldest first: the chart reads left to right, top to bottom, like time
  const rows = [...entries].sort((a, b) => monthIndex(a.start) - monthIndex(b.start));

  return (
    <Reveal as="figure" variant="plate" className="w-full">
      <div
        role="img"
        aria-label={`Career chart from ${AXIS_START} to ${AXIS_END - 1}. ${rows
          .map((row) => `${row.org}, ${row.title}, ${row.range}`)
          .join(". ")}.`}
      >
        {/* year scale */}
        <div className="grid lg:grid-cols-[15rem_minmax(0,1fr)]">
          <span className="hidden lg:block" />
          <div className="relative flex border-b border-[var(--fg)]">
            {YEARS.map((year) => (
              <span
                key={year}
                className="annot flex-1 border-s border-[var(--fg)] ps-1 pb-1 tabular-nums text-[var(--fg-muted)]"
              >
                <span className="sm:hidden">’{String(year).slice(2)}</span>
                <span className="hidden sm:inline">{year}</span>
              </span>
            ))}
          </div>
        </div>

        {rows.map((row, i) => {
          const start = monthIndex(row.start);
          const end = row.end ? monthIndex(row.end) + 1 : MONTHS;
          return (
            <div
              key={row.id}
              aria-hidden="true"
              className="grid items-center border-b border-[var(--rule)] py-2 lg:grid-cols-[15rem_minmax(0,1fr)] lg:py-0"
            >
              <span className="flex items-baseline gap-2 pe-3 lg:py-2.5">
                <span className="font-sans text-[length:var(--text-sm)] font-semibold leading-tight text-[var(--fg)]">
                  {row.org}
                </span>
              </span>
              <span
                className="relative block h-7 lg:h-full lg:min-h-10"
                style={{
                  backgroundImage: "linear-gradient(to right, var(--rule) 1px, transparent 1px)",
                  backgroundSize: `${100 / YEARS.length}% 100%`,
                }}
              >
                <span
                  data-grow
                  className={`absolute top-1/2 h-3 -translate-y-1/2 ${BAR[row.kind]}`}
                  style={{
                    insetInlineStart: `${(start / MONTHS) * 100}%`,
                    width: `max(4px, ${((end - start) / MONTHS) * 100}%)`,
                    ["--i" as string]: i,
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>

      <figcaption className="mt-[var(--spacing-sm)] flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <span className="annot text-[var(--fg-muted)]">Fig. 5 — 2019 to 2026, to scale. Overlaps are real.</span>
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          {(Object.keys(KIND_LABEL) as ExperienceEntry["kind"][]).map((kind) => (
            <span key={kind} className="annot inline-flex items-center gap-1.5 text-[var(--fg-muted)]">
              <span aria-hidden="true" className={`inline-block h-2.5 w-5 ${BAR[kind]}`} />
              {KIND_LABEL[kind]}
            </span>
          ))}
        </span>
      </figcaption>
    </Reveal>
  );
}
