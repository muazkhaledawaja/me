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
                className="underline decoration-[var(--rule)] underline-offset-2 hover:decoration-[var(--accent)]"
              >
                {project.link.label}
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <header className="grid-editorial" style={{ paddingBlock: "var(--spacing-4xl)" }}>
      <h1 className="col-start-1 col-span-4 lg:col-span-7 font-serif text-[length:var(--text-4xl)] leading-[0.94] tracking-[-0.025em] text-[var(--fg)]">
        {project.title}
        {project.titleNote ? (
          <span lang="ar" dir="rtl" className="ms-3 text-[var(--fg-muted)]">
            {project.titleNote}
          </span>
        ) : null}
      </h1>
      <div className="col-start-1 col-span-4 lg:col-start-8 lg:col-span-5 mt-[var(--spacing-xl)] lg:mt-[var(--offset-step)]">
        <MetaTable items={items} />
      </div>
    </header>
  );
}
