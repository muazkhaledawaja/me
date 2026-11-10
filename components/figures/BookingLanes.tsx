import { Reveal } from "@/components/atoms/Reveal";

// Plate for Tarweeda. Three booking domains stay separate at the data layer
// and meet only at a shared lifecycle; the confirmation email hangs off the
// persisted booking instead of standing in its way.
const LANES = ["Events", "Packages & catering", "Hire services"];

export function BookingLanes() {
  return (
    <Reveal as="figure" variant="plate" className="w-full">
      <div className="grid grid-cols-[minmax(0,1.15fr)_2.5rem_minmax(0,1fr)] items-stretch">
        <ol className="flex flex-col justify-between gap-[var(--spacing-xl)] py-1">
          {LANES.map((lane, i) => (
            <li key={lane} className="flex items-center gap-3">
              <span className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)] sm:text-[length:var(--text-base)]">
                {lane}
              </span>
              <span
                aria-hidden="true"
                data-grow
                className="h-px min-w-4 flex-1 bg-[var(--fg)]"
                style={{ ["--i" as string]: i }}
              />
            </li>
          ))}
        </ol>

        {/* the bracket where three lanes become one */}
        <svg aria-hidden="true" viewBox="0 0 40 120" preserveAspectRatio="none" className="h-full w-full text-[var(--fg)]">
          <path
            d="M0 11 H14 V109 H0 M0 60 H14 M14 60 H40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="flex flex-col justify-center gap-3 ps-3">
          <p className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--accent)] sm:text-[length:var(--text-base)]">
            One lifecycle contract
          </p>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-[var(--accent-mark)]" />
            <span className="annot text-[var(--fg)]">Booking persisted</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 border border-dashed border-[var(--fg)]" />
            <span className="annot text-[var(--fg-muted)]">Confirmation email, afterwards</span>
          </div>
        </div>
      </div>
      <figcaption className="annot mt-[var(--spacing-lg)] max-w-[44ch] border-t border-[var(--rule)] pt-[var(--spacing-sm)] text-[var(--fg-muted)]">
        Fig. 2 — Separate booking entities share one status contract. The write is the source of truth; email never
        gates the response.
      </figcaption>
    </Reveal>
  );
}
