import { profile } from "@/content/profile";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Prose } from "@/components/atoms/Prose";
import { SignatureMark } from "@/components/atoms/SignatureMark";
import { Reveal } from "@/components/atoms/Reveal";

export function About() {
  return (
    <section id="about" className="grid-editorial relative" style={{ paddingBlock: "var(--section-y)" }}>
      <Eyebrow as="h2" number="03" className="col-start-1 col-span-2">
        About
      </Eyebrow>

      <Prose measure="prose" className="col-start-1 col-span-4 lg:col-start-2 lg:col-span-6">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </Prose>

      <Reveal className="col-start-1 col-span-4 lg:col-span-8">
        <blockquote
          className="font-serif italic text-[length:var(--text-2xl)] text-[var(--fg)]"
          style={{ textIndent: "-0.5em" }}
        >
          “{profile.pullQuote}”
        </blockquote>
      </Reveal>

      <SignatureMark
        size={220}
        strokeColor="var(--fg)"
        className="absolute col-start-10 col-span-3 hidden opacity-[0.06] pointer-events-none lg:block"
      />

      <div className="col-start-1 col-span-4 mt-[var(--spacing-2xl)] lg:sticky lg:top-32 lg:col-start-9 lg:col-span-4 lg:mt-[var(--offset-step)]">
        <dl>
          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Role
          </dt>
          <dd className="mb-[var(--spacing-md)] font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
            {profile.role}
          </dd>

          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Location
          </dt>
          <dd className="mb-[var(--spacing-md)] font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
            {profile.location}
          </dd>

          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Origin
          </dt>
          <dd className="mb-[var(--spacing-md)] font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
            {profile.origin}
          </dd>

          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Status
          </dt>
          <dd className="mb-[var(--spacing-md)] font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
            {profile.status}
          </dd>

          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Languages
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
            {profile.languages.join(" . ")}
          </dd>
        </dl>
      </div>
    </section>
  );
}
