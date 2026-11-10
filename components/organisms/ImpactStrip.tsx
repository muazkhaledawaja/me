import { impactStats } from "@/content/impact";
import { Reveal } from "@/components/atoms/Reveal";
import { Parallax } from "@/components/atoms/Parallax";

// Impact. The one dark sheet in the journal. Each figure is set as a
// sentence — numeral first, at poster size, the rest of the sentence hung
// from it — and the rows alternate sides so the page reads as a
// composition rather than a row of counters.
export function ImpactStrip() {
  return (
    <section data-scheme="dark" aria-labelledby="impact-heading" className="overflow-hidden">
      <div className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
        <div className="col-span-full flex items-baseline justify-between border-t border-[var(--fg)] pt-[var(--spacing-sm)]">
          <h2 id="impact-heading" className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">
            Impact
          </h2>
          <p className="annot text-[var(--fg-muted)]">Figures from shipped work</p>
        </div>

        <ul className="col-span-full mt-[var(--spacing-xl)]">
          {impactStats.map((stat, i) => {
            const flip = i % 2 === 1;
            return (
              <li
                key={stat.value + stat.source}
                className={`flex flex-col gap-x-[var(--gutter)] border-b border-[var(--rule)] py-[var(--spacing-lg)] lg:items-end lg:py-[var(--spacing-xl)] ${
                  flip ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <Parallax axis="x" distance={flip ? -24 : 24} className={flip ? "self-end lg:self-auto" : ""}>
                  <Reveal
                    as="span"
                    variant="mask"
                    className="display block text-[length:var(--text-numeral)] leading-[0.78] tabular-nums text-[var(--fg)]"
                  >
                    {stat.value}
                  </Reveal>
                </Parallax>
                <Reveal
                  delay={0.12}
                  className={`mt-[var(--spacing-md)] max-w-[30rem] lg:mt-0 lg:max-w-[34%] lg:pb-[1.2vw] ${
                    flip ? "self-end text-end lg:self-auto lg:me-auto lg:text-start" : "lg:ms-auto"
                  }`}
                >
                  <p className="narrative text-[length:var(--text-2xl)] leading-[1.08] tracking-[-0.01em] text-[var(--fg)]">{stat.label}</p>
                  <p className="annot mt-[var(--spacing-sm)] text-[var(--accent)]">{stat.source}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
