import { experience } from "@/content/experience";
import { SectionHead } from "@/components/atoms/SectionHead";
import { Reveal } from "@/components/atoms/Reveal";
import { CareerChart } from "@/components/figures/CareerChart";

// Experience. First the chronology drawn to scale (Fig. 5), then each role
// in full, newest first, then education and training as a short register.
export function Experience() {
  const roles = experience.filter((entry) => entry.kind === "role");
  const learning = experience.filter((entry) => entry.kind !== "role");

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="grid-editorial"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <SectionHead id="experience-heading" title="Experience" note="Newest first" />

      <div className="col-span-full mt-[var(--spacing-2xl)]">
        <CareerChart entries={experience} />
      </div>

      <ol className="col-span-full mt-[var(--spacing-3xl)]">
        {roles.map((entry) => (
          <li key={entry.id} className="border-t border-[var(--fg)]">
            <article className="grid gap-x-[var(--gutter)] gap-y-[var(--spacing-md)] py-[var(--spacing-xl)] lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="annot tabular-nums text-[var(--fg)]">{entry.range}</p>
                {entry.location ? <p className="annot text-[var(--fg-muted)]">{entry.location}</p> : null}
                {entry.concurrent ? <p className="annot text-[var(--accent)]">Held concurrently</p> : null}
              </div>

              <div className="lg:col-span-4">
                <h3 className="display text-[length:var(--text-3xl)] text-[var(--fg)]">
                  <Reveal as="span" variant="mask" className="block">
                    {entry.org}
                  </Reveal>
                </h3>
                <p className="narrative mt-[var(--spacing-sm)] text-[length:var(--text-lg)] italic leading-[1.2] text-[var(--fg)]">
                  {entry.title}
                </p>
              </div>

              <div className="lg:col-span-5">
                {entry.summary ? (
                  <p className="narrative mb-[var(--spacing-md)] text-[length:var(--text-base)] text-[var(--fg)]">
                    {entry.summary}
                  </p>
                ) : null}
                <ul className="space-y-[var(--spacing-sm)]">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative ps-5 font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)] before:absolute before:start-0 before:top-[0.72em] before:h-px before:w-3 before:bg-[var(--fg)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="col-span-full border-t border-[var(--fg)] pt-[var(--spacing-sm)] lg:col-start-4 lg:col-span-9">
        <h3 className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">Education and training</h3>
        <ul className="mt-[var(--spacing-md)]">
          {learning.map((entry) => (
            <li
              key={entry.id}
              className="grid gap-x-[var(--gutter)] border-b border-[var(--rule)] py-[var(--spacing-sm)] sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] sm:items-baseline"
            >
              <span className="narrative text-[length:var(--text-lede)] text-[var(--fg)]">{entry.title}</span>
              <span className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">{entry.org}</span>
              <span className="annot tabular-nums text-[var(--fg-muted)]">{entry.range}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
