import type { ComponentType } from "react";
import Link from "next/link";
import type { CaseStudy, Project } from "@/content/types";
import { nextProject } from "@/content/projects";
import { CaseStudyMasthead } from "@/components/organisms/CaseStudyMasthead";
import { CaseStudyToc } from "@/components/organisms/CaseStudyToc";
import { ReadingProgress } from "@/components/organisms/ReadingProgress";
import { DecisionRecord } from "@/components/molecules/DecisionRecord";
import { Prose } from "@/components/atoms/Prose";
import { SadaraArchitecture } from "@/components/diagrams/SadaraArchitecture";

const DIAGRAMS: Partial<Record<CaseStudy["architectureDiagram"], ComponentType>> = {
  sadara: SadaraArchitecture,
};

// The fixed section sequence shared by every case study page. See plan §6.
export function CaseStudyTemplate({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;

  const Diagram = DIAGRAMS[cs.architectureDiagram];
  const next = nextProject(project.slug);

  return (
    <>
      <ReadingProgress />
      <CaseStudyToc />

      <CaseStudyMasthead project={project} />

      <section id="problem" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
        <Prose measure="prose" className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-7">
          {cs.problem.map((paragraph, i) => (
            <p
              key={paragraph}
              className={i === 0 ? "text-[length:var(--text-lede)] text-[var(--fg)]" : undefined}
            >
              {paragraph}
            </p>
          ))}
        </Prose>
      </section>

      <section id="research" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
        <div className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-5">
          <h2 className="font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]">
            Constraints
          </h2>
          <ol className="mt-[var(--spacing-md)] space-y-[var(--spacing-md)]">
            {cs.constraints.map((constraint, i) => (
              <li key={constraint} className="flex gap-[var(--spacing-sm)]">
                <span className="font-mono text-[length:var(--text-xs)] tabular-nums text-[var(--fg-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">{constraint}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="col-start-1 col-span-4 mt-[var(--spacing-2xl)] lg:col-start-7 lg:col-span-5 lg:mt-[var(--offset-step)]">
          <h3 className="font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]">
            Research
          </h3>
          <ul className="mt-[var(--spacing-md)] space-y-[var(--spacing-md)] font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
            {cs.research.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="architecture" className="bleed" style={{ paddingBlock: "var(--section-y)" }}>
        <div className="grid-editorial">
          <h2 className="col-start-1 col-span-4 lg:col-span-12 font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]">
            Architecture
          </h2>
          <div className="col-start-1 col-span-4 lg:col-span-12 mt-[var(--spacing-xl)]">
            {Diagram ? <Diagram /> : null}
          </div>
        </div>
      </section>

      <section id="decisions" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
        <h2 className="col-start-1 col-span-4 lg:col-span-12 mb-[var(--spacing-xl)] font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]">
          Technical decisions
        </h2>
        {cs.decisions.map((decision, i) => (
          <DecisionRecord key={decision.decision} decision={decision} index={i} />
        ))}
      </section>

      <section id="challenges" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
        <h2 className="col-start-1 col-span-4 lg:col-span-12 font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]">
          Challenges & tradeoffs
        </h2>
        <div className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-10 mt-[var(--spacing-xl)]">
          {cs.challenges.map((item, i) => (
            <div
              key={item.challenge}
              className={`grid grid-cols-1 gap-[var(--spacing-lg)] py-[var(--spacing-lg)] lg:grid-cols-2 ${
                i > 0 ? "border-t border-[var(--rule)]" : ""
              }`}
            >
              <div>
                <p className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                  Challenge
                </p>
                <p className="mt-[var(--spacing-xs)] font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
                  {item.challenge}
                </p>
              </div>
              <div>
                <p className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                  What we traded
                </p>
                <p className="mt-[var(--spacing-xs)] font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
                  {item.tradeoff}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
        <h2 className="col-start-1 col-span-4 lg:col-span-12 font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]">
          Results
        </h2>
        <div className="col-start-1 col-span-4 lg:col-span-10 mt-[var(--spacing-xl)] overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{`Results for ${project.title}`}</caption>
            <thead>
              <tr className="border-b border-[var(--rule)]">
                <th scope="col" className="py-[var(--spacing-sm)] font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                  Metric
                </th>
                <th scope="col" className="py-[var(--spacing-sm)] font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {cs.results.map((fact) => (
                <tr key={fact.label} className="border-b border-[var(--rule)]">
                  <td className="py-[var(--spacing-sm)] font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
                    {fact.label}
                  </td>
                  <td className="py-[var(--spacing-sm)] font-mono text-[length:var(--text-sm)] text-[var(--fg)] tabular-nums">
                    {fact.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="lessons" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
        <h2 className="col-start-1 col-span-4 lg:col-start-3 lg:col-span-7 font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]">
          Lessons learned
        </h2>
        <ol className="col-start-1 col-span-4 lg:col-start-3 lg:col-span-7 mt-[var(--spacing-md)] space-y-[var(--spacing-lg)]">
          {cs.lessons.map((lesson, i) => (
            <li key={lesson} className="flex gap-[var(--spacing-md)]">
              <span className="font-mono text-[length:var(--text-xs)] tabular-nums text-[var(--fg-faint)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">{lesson}</span>
            </li>
          ))}
        </ol>
      </section>

      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="group grid-editorial bleed block border-t border-[var(--rule)] transition-colors hover:bg-[var(--surface-2)]"
          style={{ paddingBlock: "var(--spacing-3xl)" }}
        >
          <p className="col-start-1 col-span-4 lg:col-span-12 font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Next project
          </p>
          <p className="col-start-1 col-span-4 lg:col-span-12 mt-[var(--spacing-xs)] font-serif text-[length:var(--text-3xl)] text-[var(--fg)] transition-transform group-hover:translate-x-2">
            {next.title}
          </p>
        </Link>
      ) : null}
    </>
  );
}
