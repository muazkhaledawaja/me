import type { Decision } from "@/content/types";

// Rendered as a direct child pair of the parent section's grid-editorial
// container (see CaseStudyTemplate's "Technical decisions" section) — not
// its own nested grid, matching the Fragment-of-grid-items pattern already
// used in WorkIndex.
export function DecisionRecord({ decision, index }: { decision: Decision; index: number }) {
  return (
    <>
      <span className="col-start-1 col-span-1 annot hidden tabular-nums text-[var(--accent)] lg:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <dl className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-10 grid gap-[var(--spacing-sm)] mb-[var(--spacing-2xl)]">
        <div className="mb-[var(--spacing-xs)]">
          <dt className="sr-only">Decision</dt>
          <dd className="narrative text-[length:var(--text-xl)] leading-[1.15] text-[var(--fg)]">{decision.title}</dd>
        </div>
        <div>
          <dt className="annot text-[var(--fg-muted)]">
            Context
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">{decision.context}</dd>
        </div>
        <div>
          <dt className="annot text-[var(--fg-muted)]">
            Options considered
          </dt>
          <dd>
            <ul className="list-disc pl-[var(--spacing-lg)] font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
              {decision.options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="annot text-[var(--fg-muted)]">
            What we chose
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">{decision.decision}</dd>
        </div>
        <div>
          <dt className="annot text-[var(--fg-muted)]">
            Consequence
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">{decision.consequence}</dd>
        </div>
      </dl>
    </>
  );
}
