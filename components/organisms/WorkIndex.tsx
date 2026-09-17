import { Fragment } from "react";
import Link from "next/link";
import { projects } from "@/content/projects";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Hairline } from "@/components/atoms/Hairline";
import { Reveal } from "@/components/atoms/Reveal";

export function WorkIndex() {
  return (
    <section
      id="work"
      className="grid-editorial"
      style={{ paddingBlock: "var(--section-y)" }}
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className="sr-only">
        Selected work
      </h2>
      <Eyebrow number="02" className="sticky top-32 self-start col-start-1 col-span-2">
        Selected work
      </Eyebrow>

      {projects.map((project, index) => {
        const hasCaseStudy = Boolean(project.caseStudy);
        const outcomeId = `${project.slug}-outcome`;

        const titleText = (
          <span className="inline-block transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quart)] group-hover:translate-x-2">
            {project.title}
          </span>
        );

        return (
          <Fragment key={project.slug}>
            <Reveal
              delay={index * 0.07}
              className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-11"
            >
              <article className="group relative py-[var(--spacing-2xl)]">
              <div className="relative grid grid-cols-12 gap-[var(--gutter)] items-baseline">
                <span className="col-span-1 font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)] tabular-nums">
                  {project.number}
                </span>

                <h3 className="col-span-5 font-serif text-[length:var(--text-xl)] text-[var(--fg)]">
                  {hasCaseStudy ? (
                    <Link
                      href={`/work/${project.slug}`}
                      aria-describedby={outcomeId}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {titleText}
                    </Link>
                  ) : (
                    titleText
                  )}
                  {project.titleNote ? (
                    <span
                      lang="ar"
                      dir="rtl"
                      className="ms-2 font-sans text-[length:var(--text-base)] text-[var(--fg-muted)]"
                    >
                      {project.titleNote}
                    </span>
                  ) : null}
                </h3>

                <p className="col-span-2 font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)]">
                  {project.role} · {project.year}
                </p>

                <div className="col-span-3 grid">
                  <span className="col-start-1 row-start-1 font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)] opacity-100 transition-opacity duration-[var(--duration-base)] ease-[var(--ease-out-quart)] group-hover:opacity-0">
                    {project.stack.slice(0, 3).join(" . ")}
                  </span>
                  <p
                    id={outcomeId}
                    className="col-start-1 row-start-1 font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)] opacity-0 transition-opacity duration-[var(--duration-base)] ease-[var(--ease-out-quart)] group-hover:opacity-100"
                  >
                    {project.outcomeLine}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="col-span-1 justify-self-end font-mono text-[length:var(--text-sm)] text-[var(--fg-muted)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quart)] group-hover:translate-x-1.5"
                >
                  →
                </span>

                <span
                  aria-hidden="true"
                  className="absolute col-start-2 col-span-5 inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                />
              </div>
              </article>
            </Reveal>
            {index < projects.length - 1 ? <Hairline bleed /> : null}
          </Fragment>
        );
      })}
    </section>
  );
}
