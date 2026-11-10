import { profile } from "@/content/profile";
import { StatusDot } from "@/components/atoms/StatusDot";
import { ArrowLink } from "@/components/atoms/ArrowLink";

// The opening spread. The name is the image: set at poster size, edge to
// edge, with everything else subordinate to it. This is the LCP element —
// server-rendered text with a CSS-only load sequence, no JS gate.
export function Hero() {
  return (
    <section aria-labelledby="hero-name" className="relative overflow-hidden">
      {/* masthead line */}
      <div className="grid-editorial pt-[var(--spacing-lg)] lg:pt-[var(--spacing-2xl)]">
        <div className="hero-fade col-span-full flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t border-[var(--fg)] pt-[var(--spacing-sm)]">
          <p className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">{profile.role}</p>
          <p className="annot text-[var(--fg-muted)]">{profile.specialties.join(" / ")}</p>
          <p className="annot hidden text-[var(--fg-muted)] md:block">{profile.location} — 30.03° N, 31.47° E</p>
          <StatusDot label={profile.status} />
        </div>
      </div>

      {/* the name */}
      <h1
        id="hero-name"
        aria-label={profile.name}
        className="display mx-auto max-w-[var(--container-max)] px-[var(--container-pad)] pt-[var(--spacing-xl)] text-[length:clamp(4rem,23vw,12rem)] text-[var(--fg)] lg:pt-[var(--spacing-2xl)] lg:text-[length:var(--text-poster)]"
      >
        <span aria-hidden="true" className="flex flex-col lg:flex-row lg:justify-between">
          <span className="hero-line block whitespace-nowrap" style={{ ["--d" as string]: "80ms" }}>
            Moath K.
          </span>
          <span className="hero-line block text-end lg:text-start" style={{ ["--d" as string]: "200ms" }}>
            Awaja
          </span>
        </span>
      </h1>

      <div className="grid-editorial pb-[var(--spacing-4xl)] pt-[var(--spacing-lg)] lg:pt-[var(--spacing-xl)]">
        <div
          aria-hidden="true"
          className="hero-fade col-span-full h-px bg-[var(--fg)]"
          style={{ ["--d" as string]: "320ms" }}
        />

        <p
          className="hero-line narrative col-span-full pt-[var(--spacing-xl)] text-[length:var(--text-3xl)] leading-[1.02] tracking-[-0.02em] text-[var(--fg)] lg:col-span-7 lg:text-[length:var(--text-4xl)]"
          style={{ ["--d" as string]: "380ms" }}
        >
          {profile.headline}
        </p>

        <div
          className="hero-fade col-span-full flex flex-col gap-[var(--spacing-lg)] pt-[var(--spacing-xl)] lg:col-start-9 lg:col-span-4 lg:pt-[calc(var(--spacing-xl)+0.6rem)]"
          style={{ ["--d" as string]: "520ms" }}
        >
          <p className="max-w-[40ch] font-sans text-[length:var(--text-base)] text-[var(--fg-muted)]">
            {profile.intro}
          </p>
          <div className="flex flex-wrap items-center gap-x-[var(--spacing-lg)] gap-y-[var(--spacing-sm)]">
            <ArrowLink href="/#work" solid>
              Read the work
            </ArrowLink>
            <ArrowLink href="/#contact">Get in touch</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
