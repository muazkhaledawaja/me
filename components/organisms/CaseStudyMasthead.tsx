import type { Project } from "@/content/types";
import { MetaTable } from "@/components/molecules/MetaTable";

const TYPE_LABEL: Record<Project["type"], string> = {
  flagship: "Flagship",
  client: "Client project",
  tool: "Tool",
  personal: "Personal",
};

export function CaseStudyMasthead({ project }: { project: Project }) {
  const items = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.year },
    { label: "Status", value: TYPE_LABEL[project.type] },
    { label: "Stack", value: project.stack.join(", ") },
    ...(project.link
      ? [
          {
            label: "Link",
            value: (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule"
              >
                {project.link.label}
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <header className="grid-editorial" style={{ paddingBlock: "var(--spacing-3xl) var(--spacing-2xl)" }}>
      <div className="col-span-full flex items-baseline justify-between border-t border-[var(--fg)] pt-[var(--spacing-sm)]">
        <p className="font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">Case study</p>
        <p className="annot tabular-nums text-[var(--accent)]">Project {project.number}</p>
      </div>
      <h1 className="display col-span-full mt-[var(--spacing-xl)] flex flex-col gap-x-[var(--gutter)] gap-y-2 text-[length:clamp(3.75rem,13vw,13rem)] text-[var(--fg)] lg:flex-row lg:items-end lg:justify-between">
        <span className="hero-line block">{project.title}</span>
        {project.titleNote ? (
          <span
            lang="ar"
            dir="rtl"
            className="hero-line block self-end font-[family-name:var(--font-arabic)] text-[length:clamp(3.25rem,9vw,9rem)] font-bold leading-[1.1] tracking-normal text-[var(--accent-mark)] lg:self-auto"
            style={{ ["--d" as string]: "120ms" }}
          >
            {project.titleNote}
          </span>
        ) : null}
      </h1>
      <p className="hero-fade narrative col-span-full mt-[var(--spacing-xl)] text-[length:var(--text-2xl)] leading-[1.12] tracking-[-0.01em] text-[var(--fg)] lg:col-span-6" style={{ ["--d" as string]: "260ms" }}>
        {project.summary}
      </p>
      <div className="hero-fade col-span-full mt-[var(--spacing-xl)] lg:col-start-9 lg:col-span-4" style={{ ["--d" as string]: "340ms" }}>
        <MetaTable items={items} />
      </div>
    </header>
  );
}
