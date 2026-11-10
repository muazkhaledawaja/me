import { profile } from "@/content/profile";
import { SectionHead } from "@/components/atoms/SectionHead";
import { SignatureMark } from "@/components/atoms/SignatureMark";
import { Reveal } from "@/components/atoms/Reveal";

const FACTS = [
  { label: "Based in", value: profile.location },
  { label: "From", value: profile.origin },
  { label: "Languages", value: profile.languages.join(", ") },
  { label: "Status", value: profile.status },
];

// About, set as the journal's one long-form page: a pull quote as the
// opening line, the narrative in the serif with a drop cap, and a narrow
// fact column signed off with the signature mark.
export function About() {
  const [first, ...rest] = profile.bio;

  return (
    <section id="about" aria-labelledby="about-heading" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
      <SectionHead id="about-heading" title="About" note="A short profile" />

      <blockquote className="col-span-full mt-[var(--spacing-2xl)] lg:col-span-10">
        <Reveal
          as="span"
          variant="mask"
          className="narrative block text-[length:var(--text-3xl)] italic leading-[1.04] tracking-[-0.02em] text-[var(--fg)] lg:text-[length:var(--text-4xl)]"
        >
          “{profile.pullQuote}”
        </Reveal>
      </blockquote>

      <div className="narrative col-span-full mt-[var(--spacing-2xl)] space-y-[var(--spacing-lg)] text-[length:var(--text-lede)] text-[var(--fg)] lg:col-start-4 lg:col-span-6 lg:mt-[var(--spacing-3xl)]">
        <p className="first-letter:float-start first-letter:me-3 first-letter:font-[family-name:var(--font-display)] first-letter:text-[5.2em] first-letter:font-extrabold first-letter:leading-[0.74] first-letter:text-[var(--accent-mark)] first-letter:[font-stretch:62%]">
          {first}
        </p>
        {rest.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <aside
        aria-label="At a glance"
        className="col-span-full mt-[var(--spacing-2xl)] lg:col-start-11 lg:col-span-2 lg:mt-[var(--spacing-3xl)]"
      >
        <dl className="space-y-[var(--spacing-md)] border-t border-[var(--fg)] pt-[var(--spacing-sm)]">
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="annot text-[var(--fg-muted)]">{fact.label}</dt>
              <dd className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <SignatureMark size={56} strokeColor="var(--accent-mark)" className="mt-[var(--spacing-xl)]" />
      </aside>
    </section>
  );
}
