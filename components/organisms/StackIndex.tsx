import { Eyebrow } from "@/components/atoms/Eyebrow";
import { stack } from "@/content/stack";
import { Reveal } from "@/components/atoms/Reveal";

export function StackIndex() {
  return (
    <section
      id="stack"
      className="grid-editorial"
      style={{ paddingBlock: "var(--section-y)" }}
      aria-labelledby="stack-heading"
    >
      <h2 id="stack-heading" className="sr-only">
        Stack
      </h2>
      <Eyebrow number="05" className="col-start-1 col-span-2">
        Stack
      </Eyebrow>

      <dl className="col-start-1 col-span-4 lg:col-start-3 lg:col-span-10 flex flex-col gap-[var(--spacing-lg)]">
        {stack.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.05} style={{ display: "flex", alignItems: "baseline" }}>
            <dt className="font-serif text-[length:var(--text-lg)] text-[var(--fg)]">{group.name}</dt>
            <span
              aria-hidden="true"
              className="mx-[var(--spacing-md)] flex-1 self-end border-b border-dotted border-[var(--rule)]"
            />
            <dd className="font-mono text-[length:var(--text-xs)] tracking-[0.06em] text-[var(--fg-muted)]">
              {group.items.join(", ")}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
