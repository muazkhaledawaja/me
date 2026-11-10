import { profile } from "@/content/profile";
import { Reveal } from "@/components/atoms/Reveal";
import { StatusDot } from "@/components/atoms/StatusDot";

const CHANNELS = [
  { label: "GitHub", display: profile.links.githubDisplay, href: profile.links.github },
  { label: "LinkedIn", display: profile.links.linkedinDisplay, href: profile.links.linkedin },
  { label: "WhatsApp", display: profile.links.whatsappDisplay, href: profile.links.whatsapp },
];

// Contact. The closing sheet: one question, one address at display size,
// and the other channels as a short register.
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
      <div className="col-span-full flex items-baseline justify-between border-t border-[var(--fg)] pt-[var(--spacing-sm)]">
        <p className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">Contact</p>
        <StatusDot label={profile.status} />
      </div>

      <h2
        id="contact-heading"
        className="narrative col-span-full mt-[var(--spacing-2xl)] text-[length:var(--text-3xl)] leading-[1.04] tracking-[-0.02em] text-[var(--fg)] lg:col-span-8 lg:text-[length:var(--text-4xl)]"
      >
        Got an idea? I&rsquo;d love to hear it.
      </h2>

      <a
        href={`mailto:${profile.links.email}`}
        className="display group col-span-full mt-[var(--spacing-2xl)] block text-[length:clamp(1.9rem,8.3vw,9.5rem)] lowercase text-[var(--fg)] transition-colors duration-[var(--duration-base)] hover:text-[var(--accent)]"
      >
        <Reveal as="span" variant="mask" className="block">
          {profile.links.email}
        </Reveal>
        <span
          aria-hidden="true"
          className="mt-[0.12em] block h-[3px] origin-left scale-x-100 bg-current transition-transform duration-[var(--duration-slower)] ease-[var(--ease-out-expo)] group-hover:scale-x-0 group-hover:origin-right"
        />
      </a>

      <ul className="col-span-full mt-[var(--spacing-2xl)] grid gap-x-[var(--gutter)] sm:grid-cols-3">
        {CHANNELS.map((channel) => (
          <li key={channel.label} className="border-t border-[var(--rule)] py-[var(--spacing-sm)]">
            <span className="annot block text-[var(--fg-muted)]">{channel.label}</span>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule font-sans text-[length:var(--text-base)] font-semibold text-[var(--fg)]"
            >
              {channel.display}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
