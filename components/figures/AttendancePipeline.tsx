import { Reveal } from "@/components/atoms/Reveal";

// Plate for the Gym Staff Attendance Analyzer. The whole tool is this
// sequence, and all of it runs in the browser.
const STEPS = [
  { title: "Fingerprint export", note: "Excel or PDF" },
  { title: "Parsed in the browser", note: "No upload, no server" },
  { title: "Rules applied", note: "Late, absent, overtime" },
  { title: "Printable report", note: "PDF summary" },
];

export function AttendancePipeline() {
  return (
    <Reveal as="figure" variant="plate" className="w-full">
      <ol className="grid grid-cols-2 gap-x-[var(--gutter)] gap-y-[var(--spacing-lg)] sm:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative pt-4">
            <span
              aria-hidden="true"
              data-grow
              className={`absolute inset-x-0 top-0 h-[3px] ${
                i === STEPS.length - 1 ? "bg-[var(--accent-mark)]" : "bg-[var(--fg)]"
              }`}
              style={{ ["--i" as string]: i * 2 }}
            />
            <span className="annot block tabular-nums text-[var(--fg-muted)]">Step {i + 1}</span>
            <span className="mt-1 block font-sans text-[length:var(--text-base)] font-semibold leading-tight text-[var(--fg)]">
              {step.title}
            </span>
            <span className="annot mt-1 block text-[var(--fg-muted)]">{step.note}</span>
          </li>
        ))}
      </ol>
      <figcaption className="annot mt-[var(--spacing-lg)] text-[var(--fg-muted)]">
        Fig. 4 — Export in, report out. Nothing leaves the machine.
      </figcaption>
    </Reveal>
  );
}
