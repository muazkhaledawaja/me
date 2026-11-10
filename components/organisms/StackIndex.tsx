import { stack } from "@/content/stack";
import { projects } from "@/content/projects";
import { SectionHead } from "@/components/atoms/SectionHead";
import { Reveal } from "@/components/atoms/Reveal";

const norm = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Project numbers whose stack lists this technology — the "page
 * references" of the index. Derived from content/projects, never typed by
 * hand, so the index can't claim a use the project pages don't show. */
function references(item: string): string[] {
  const key = norm(item);
  return projects
    .filter((project) =>
      project.stack.some((tech) => {
        const other = norm(tech);
        return other.startsWith(key) || key.startsWith(other);
      }),
    )
    .map((project) => project.number);
}

// Technical Index. Set like the index at the back of a book: a heading per
// subject, entries in running columns, and after each entry the numbers of
// the projects above where it was used.
export function StackIndex() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="grid-editorial" style={{ paddingBlock: "var(--section-y)" }}>
      <SectionHead id="stack-heading" title="Technical index" note="Numbers refer to the projects above" />

      <div className="col-span-full mt-[var(--spacing-xl)]">
        {stack.map((group) => (
          <div
            key={group.name}
            className="grid gap-x-[var(--gutter)] gap-y-[var(--spacing-sm)] border-b border-[var(--rule)] py-[var(--spacing-lg)] lg:grid-cols-12 lg:items-baseline"
          >
            <h3 className="display text-[length:var(--text-3xl)] text-[var(--fg)] lg:col-span-4">
              <Reveal as="span" variant="mask" className="block">
                {group.name}
              </Reveal>
            </h3>
            <ul className="columns-2 gap-x-[var(--gutter)] sm:columns-3 lg:col-span-8">
              {group.items.map((item) => {
                const refs = references(item);
                return (
                  <li key={item} className="mb-1.5 break-inside-avoid">
                    <span className="narrative text-[length:var(--text-lede)] leading-[1.25] text-[var(--fg)]">{item}</span>
                    {refs.length > 0 ? (
                      <span className="annot ms-2 whitespace-nowrap tabular-nums text-[var(--accent)]">
                        <span className="sr-only">used in project </span>
                        {refs.map((ref, i) => (
                          <span key={ref}>
                            {i > 0 ? ", " : ""}
                            <a href={`/#project-${ref}`} className="hover:underline">
                              {ref}
                            </a>
                          </span>
                        ))}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
