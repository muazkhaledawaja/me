import type { Decision } from "@/content/types";

// Rendered as a direct child pair of the parent section's grid-editorial
// container (see CaseStudyTemplate's "Technical decisions" section) — not
// its own nested grid, matching the Fragment-of-grid-items pattern already
// used in WorkIndex.
export function DecisionRecord({ decision, index }: { decision: Decision; index: number }) {
  return (
    <>
      <span className="col-start-1 col-span-1 hidden font-mono text-[length:var(--text-sm)] tabular-nums text-[var(--fg-faint)] lg:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <dl className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-10 grid gap-[var(--spacing-sm)] mb-[var(--spacing-2xl)]">
        <div>
          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Context
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">{decision.context}</dd>
        </div>
        <div>
          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
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
          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Decision
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">{decision.decision}</dd>
        </div>
        <div>
          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Consequence
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">{decision.consequence}</dd>
        </div>
      </dl>
    </>
  );
}
