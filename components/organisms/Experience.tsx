import { experience } from "@/content/experience";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";

export function Experience() {
  return (
    <section id="experience" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
      <div className="col-start-1 col-span-2 sticky" style={{ top: "8rem" }}>
        <Eyebrow as="h2" number="04">Experience</Eyebrow>
      </div>

      {experience.map((entry, index) => {
        const muted = entry.kind !== "role";
        const metaParts = [entry.org, entry.location, entry.range].filter(Boolean);

        return (
          <Reveal
            key={entry.id}
            delay={Math.min(index, 4) * 0.08}
            className={
              index % 2 === 0
                ? "col-start-1 col-span-4 lg:col-start-4 lg:col-span-8"
                : "col-start-1 col-span-4 lg:col-start-5 lg:col-span-7"
            }
            style={{ display: "block", marginBlockEnd: "var(--spacing-3xl)" }}
          >
          <article>
            <h3
              className={`font-sans font-medium text-[length:var(--text-lg)] ${
                muted ? "text-[var(--fg-muted)]" : "text-[var(--fg)]"
              }`}
            >
              {entry.title}
            </h3>

            <p
              className="font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)]"
              style={{ marginBlockStart: "var(--spacing-xs)" }}
            >
              {metaParts.join(" . ")}
              {entry.concurrent ? (
                <span className="uppercase text-[var(--accent)]"> . concurrent</span>
              ) : null}
            </p>

            {entry.bullets.length > 0 ? (
              <ul
                className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)] max-w-[58ch]"
                style={{ marginBlockStart: "var(--spacing-md)" }}
              >
                {entry.bullets.map((bullet) => (
                  <li key={bullet} style={{ marginBlockEnd: "0.5em" }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
          </Reveal>
        );
      })}
    </section>
  );
}
