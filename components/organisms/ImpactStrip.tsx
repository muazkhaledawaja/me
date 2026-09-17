import { impactStats } from "@/content/impact";
import { Reveal } from "@/components/atoms/Reveal";

export function ImpactStrip() {
  return (
    <section
      data-scheme="dark"
      className="bleed"
      style={{ paddingBlock: "var(--spacing-2xl)" }}
      aria-labelledby="impact-strip-heading"
    >
      <h2 id="impact-strip-heading" className="sr-only">
        Impact
      </h2>
      <div className="grid-editorial">
        <dl
          className="col-span-full grid grid-cols-2 gap-y-[var(--spacing-lg)] lg:flex lg:gap-0"
          style={{ columnGap: "var(--gutter)" }}
        >
          {impactStats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.12}
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                flex: i === 0 ? "4 1 0%" : i === 3 ? "2 1 0%" : "3 1 0%",
              }}
            >
              <dt className="font-serif text-[length:var(--text-base)] text-[var(--fg-muted)]">{stat.label}</dt>
              <dd className="font-mono text-[length:var(--text-3xl)] font-medium tabular-nums text-[var(--fg)] m-0">
                {stat.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
