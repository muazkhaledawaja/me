import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" className="grid-editorial" style={{ paddingBlock: "var(--spacing-5xl)" }}>
      <h2 className="col-start-1 col-span-4 lg:col-start-1 lg:col-span-9 font-serif text-[length:var(--text-3xl)] text-[var(--fg)]">
        Got an idea? I&rsquo;d love to hear it.
      </h2>

      <a
        href={`mailto:${profile.links.email}`}
        className="group relative col-start-1 col-span-4 lg:col-start-1 lg:col-span-8 inline-block w-fit font-serif text-[length:var(--text-3xl)] text-[var(--fg)]"
        style={{ marginBlockStart: "var(--spacing-xl)" }}
      >
        {profile.links.email}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
        />
      </a>

      <ul className="col-start-1 col-span-4 lg:col-start-10 lg:col-span-3 lg:row-start-2 self-end mt-[var(--spacing-xl)] lg:mt-0 flex flex-col items-start lg:items-end gap-2 text-left lg:text-right font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)] list-none p-0">
        <li>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] transition-colors"
          >
            {profile.links.githubDisplay}
          </a>
        </li>
        <li>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] transition-colors"
          >
            {profile.links.linkedinDisplay}
          </a>
        </li>
        <li>
          <a
            href={profile.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--fg)] transition-colors"
          >
            {profile.links.whatsappDisplay}
          </a>
        </li>
      </ul>
    </section>
  );
}
