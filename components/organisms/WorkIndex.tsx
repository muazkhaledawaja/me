import Link from "next/link";
import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { SectionHead } from "@/components/atoms/SectionHead";
import { Reveal } from "@/components/atoms/Reveal";
import { Parallax } from "@/components/atoms/Parallax";
import { ArrowLink } from "@/components/atoms/ArrowLink";
import { PermissionMatrix } from "@/components/figures/PermissionMatrix";
import { BookingLanes } from "@/components/figures/BookingLanes";
import { EditionStack } from "@/components/figures/EditionStack";
import { AttendancePipeline } from "@/components/figures/AttendancePipeline";

const PLATES: Record<Project["plate"], React.ComponentType> = {
  matrix: PermissionMatrix,
  lanes: BookingLanes,
  editions: EditionStack,
  pipeline: AttendancePipeline,
};

/* ---- shared small parts ------------------------------------------------ */

function Meta({ project }: { project: Project }) {
  return (
    <dl className="annot grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[var(--fg-muted)]">
      <dt>Role</dt>
      <dd className="text-[var(--fg)]">{project.role}</dd>
      <dt>Period</dt>
      <dd className="text-[var(--fg)]">{project.year}</dd>
    </dl>
  );
}

function Stack({ project }: { project: Project }) {
  return (
    <p className="annot text-[var(--fg-muted)]">
      <span className="sr-only">Technologies: </span>
      {project.stack.join(" / ")}
    </p>
  );
}

function Explore({ project }: { project: Project }) {
  if (!project.caseStudy && !project.link) {
    return <p className="annot text-[var(--fg-muted)]">Private tool — no public link.</p>;
  }
  return (
    <div className="flex flex-wrap items-center gap-x-[var(--spacing-lg)] gap-y-[var(--spacing-sm)]">
      {project.caseStudy ? (
        <ArrowLink href={`/work/${project.slug}`}>Read the {project.title} case study</ArrowLink>
      ) : null}
      {project.link ? (
        <ArrowLink href={project.link.href} external>
          Visit {project.link.label}
        </ArrowLink>
      ) : null}
    </div>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="border-t border-[var(--fg)] pt-[var(--spacing-sm)] font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)]">
        {title}
      </h4>
      <ul className="mt-[var(--spacing-md)] space-y-[var(--spacing-md)]">{children}</ul>
    </div>
  );
}

function Title({ project, className }: { project: Project; className: string }) {
  const inner = (
    <Reveal as="span" variant="mask" className="block">
      {project.title}
    </Reveal>
  );
  return (
    <h3 className={`display text-[var(--fg)] ${className}`}>
      {project.caseStudy ? (
        <Link
          href={`/work/${project.slug}`}
          className="block transition-colors duration-[var(--duration-base)] hover:text-[var(--accent)]"
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </h3>
  );
}

function Number({ project }: { project: Project }) {
  return (
    <span className="annot tabular-nums text-[var(--accent)]" id={`project-${project.number}`}>
      Project {project.number}
    </span>
  );
}

/* ---- 01 · flagship spread: title across the sheet, plate dominant ------ */

function FlagshipSpread({ project }: { project: Project }) {
  const Plate = PLATES[project.plate];
  const cs = project.caseStudy;

  return (
    <article className="grid-editorial pt-[var(--spacing-2xl)]">
      <div className="col-span-full flex items-baseline justify-between">
        <Number project={project} />
        <span className="annot text-[var(--fg-muted)]">Flagship</span>
      </div>

      <div className="col-span-full mt-[var(--spacing-md)] flex flex-col gap-x-[var(--gutter)] gap-y-2 lg:flex-row lg:items-end lg:justify-between">
        <Title project={project} className="text-[length:clamp(3.75rem,13vw,13rem)]" />
        {project.titleNote ? (
          <Parallax distance={28} className="self-end lg:self-auto">
            <span
              lang="ar"
              dir="rtl"
              className="block font-[family-name:var(--font-arabic)] text-[length:clamp(3.25rem,9vw,9rem)] font-bold leading-[1.1] text-[var(--accent-mark)]"
            >
              {project.titleNote}
            </span>
          </Parallax>
        ) : null}
      </div>

      <div className="col-span-full mt-[var(--spacing-xl)] lg:col-span-4 lg:mt-[var(--spacing-2xl)]">
        <p className="narrative text-[length:var(--text-lg)] leading-[1.3] text-[var(--fg)]">{project.summary}</p>
        <div className="mt-[var(--spacing-lg)]">
          <Meta project={project} />
        </div>
      </div>

      <div className="col-span-full mt-[var(--spacing-xl)] lg:col-start-6 lg:col-span-7 lg:mt-[var(--spacing-2xl)]">
        <Plate />
      </div>

      {cs ? (
        <div className="col-span-full mt-[var(--spacing-2xl)] grid gap-x-[var(--gutter)] gap-y-[var(--spacing-xl)] md:grid-cols-3">
          <Column title="What made it hard">
            {cs.challenges.map((item) => (
              <li key={item.challenge} className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
                {item.challenge}
              </li>
            ))}
          </Column>
          <Column title="Engineering decisions">
            {cs.decisions.map((decision) => (
              <li key={decision.title} className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
                {decision.title}
              </li>
            ))}
          </Column>
          <Column title="What shipped">
            {(project.highlights ?? []).map((line) => (
              <li key={line} className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
                {line}
              </li>
            ))}
          </Column>
        </div>
      ) : null}

      <div className="col-span-full mt-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-md)] lg:flex-row lg:items-baseline lg:justify-between">
        <Stack project={project} />
        <Explore project={project} />
      </div>
    </article>
  );
}

/* ---- 02 · mirrored spread: plate first, text hung from the right ------- */

function MirroredSpread({ project }: { project: Project }) {
  const Plate = PLATES[project.plate];
  const cs = project.caseStudy;

  return (
    <article className="grid-editorial pt-[var(--section-y)]">
      <div className="col-span-full border-t border-[var(--rule)] pt-[var(--spacing-sm)] lg:col-start-7 lg:col-span-6">
        <Number project={project} />
      </div>

      <div className="col-span-full row-start-3 mt-[var(--spacing-xl)] bg-[var(--surface-2)] p-[var(--spacing-lg)] lg:col-span-5 lg:sticky lg:top-24 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:self-start lg:p-[var(--spacing-xl)]">
        <Plate />
      </div>

      <div className="col-span-full mt-[var(--spacing-md)] lg:col-start-7 lg:col-span-6">
        <Title project={project} className="text-[length:clamp(3.5rem,10vw,9.5rem)]" />
        <p className="narrative mt-[var(--spacing-lg)] max-w-[34ch] text-[length:var(--text-lg)] leading-[1.3] text-[var(--fg)]">
          {project.summary}
        </p>
        <div className="mt-[var(--spacing-lg)]">
          <Meta project={project} />
        </div>
      </div>

      {cs ? (
        <div className="col-span-full mt-[var(--spacing-xl)] grid gap-x-[var(--gutter)] gap-y-[var(--spacing-xl)] sm:grid-cols-2 lg:col-start-7 lg:col-span-6">
          <Column title="What made it hard">
            {cs.challenges.map((item) => (
              <li key={item.challenge} className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
                {item.challenge}
              </li>
            ))}
          </Column>
          <Column title="Engineering decisions">
            {cs.decisions.map((decision) => (
              <li key={decision.title} className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">
                {decision.title}
              </li>
            ))}
          </Column>
        </div>
      ) : null}

      <div className="col-span-full mt-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-md)] lg:col-start-7 lg:col-span-6">
        <Stack project={project} />
        <Explore project={project} />
      </div>
    </article>
  );
}

/* ---- 03 + 04 · a shared sheet: one tall column, one wide note ---------- */

function ColumnEntry({ project }: { project: Project }) {
  const Plate = PLATES[project.plate];
  return (
    <article className="col-span-full lg:col-span-5">
      <div className="border-t border-[var(--rule)] pt-[var(--spacing-sm)]">
        <Number project={project} />
      </div>
      <Title project={project} className="mt-[var(--spacing-md)] text-[length:clamp(3rem,6.2vw,6rem)]" />
      <p className="narrative mt-[var(--spacing-lg)] text-[length:var(--text-lede)] leading-[1.35] text-[var(--fg)]">
        {project.summary}
      </p>
      <div className="mt-[var(--spacing-xl)]">
        <Plate />
      </div>
      {project.highlights ? (
        <ul className="mt-[var(--spacing-xl)] space-y-[var(--spacing-md)]">
          {project.highlights.map((line) => (
            <li key={line} className="font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
              {line}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-md)]">
        <Meta project={project} />
        <Stack project={project} />
        <Explore project={project} />
      </div>
    </article>
  );
}

function NoteEntry({ project }: { project: Project }) {
  const Plate = PLATES[project.plate];
  return (
    <article className="col-span-full mt-[var(--spacing-3xl)] lg:col-start-7 lg:col-span-6 lg:mt-[var(--spacing-6xl)]">
      <div className="border-t border-[var(--rule)] pt-[var(--spacing-sm)]">
        <Number project={project} />
      </div>
      <Title project={project} className="mt-[var(--spacing-md)] text-[length:clamp(2.5rem,4.6vw,4.5rem)]" />
      <div className="mt-[var(--spacing-xl)]">
        <Plate />
      </div>
      <p className="narrative mt-[var(--spacing-xl)] max-w-[46ch] text-[length:var(--text-lede)] leading-[1.35] text-[var(--fg)]">
        {project.summary}
      </p>
      <div className="mt-[var(--spacing-lg)] flex flex-col gap-[var(--spacing-md)]">
        <Meta project={project} />
        <Stack project={project} />
        <Explore project={project} />
      </div>
    </article>
  );
}

/* ----------------------------------------------------------------------- */

export function WorkIndex({ asPage = false }: { asPage?: boolean }) {
  const [flagship, second, ...rest] = projects;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      style={{ paddingBlock: asPage ? "var(--spacing-3xl) var(--section-y)" : "0 var(--section-y)" }}
    >
      <div className="grid-editorial">
        <SectionHead
          id="work-heading"
          title="Selected work"
          note={`${projects.length} projects, 2024 – 2026`}
          as={asPage ? "h1" : "h2"}
        />
      </div>

      {flagship ? <FlagshipSpread project={flagship} /> : null}
      {second ? <MirroredSpread project={second} /> : null}

      {rest.length > 0 ? (
        <div className="grid-editorial items-start pt-[var(--section-y)]">
          {rest.map((project, i) =>
            i % 2 === 0 ? (
              <ColumnEntry key={project.slug} project={project} />
            ) : (
              <NoteEntry key={project.slug} project={project} />
            ),
          )}
        </div>
      ) : null}
    </section>
  );
}
