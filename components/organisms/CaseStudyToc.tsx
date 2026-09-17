"use client";

import { useActiveSection } from "@/lib/useActiveSection";

const SECTIONS = [
  { id: "problem", label: "The problem" },
  { id: "research", label: "Constraints & research" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Technical decisions" },
  { id: "challenges", label: "Challenges & tradeoffs" },
  { id: "results", label: "Results" },
  { id: "lessons", label: "Lessons learned" },
];

const IDS = SECTIONS.map((s) => s.id);

export function CaseStudyToc() {
  const activeId = useActiveSection(IDS);

  return (
    <nav
      aria-label="On this page"
      className="fixed top-32 z-[var(--z-sticky)] hidden w-44 xl:block"
      style={{
        insetInlineEnd: "max(var(--container-pad), calc((100vw - var(--container-max)) / 2 + var(--container-pad)))",
      }}
    >
      <ol className="space-y-2 border-l border-[var(--rule)] pl-[var(--spacing-md)]">
        {SECTIONS.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`block font-mono text-[length:var(--text-xs)] transition-colors ${
                  isActive ? "text-[var(--fg)]" : "text-[var(--fg-faint)] hover:text-[var(--fg-muted)]"
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
