import { Reveal } from "@/components/atoms/Reveal";

// Plate for Sadara Sports. A schematic of the idea the platform is built
// on: a role is a row of data — per-module grants — not a branch in the
// code. The module names and the count of 21 roles are real; the grant
// pattern is illustrative and says so in the caption.
const MODULES = ["Players", "Contracts", "Finance", "Injuries", "Scouting", "Sessions", "Gates", "Approvals"];
const ROLE_COUNT = 21;

// 0 none · 1 read · 2 write · 3 full — deterministic, so server and client
// render the same plate.
function grant(role: number, mod: number): 0 | 1 | 2 | 3 {
  const n = (role * 7 + mod * 13 + role * mod * 3 + 5) % 9;
  if (n < 2) return 0;
  if (n < 5) return 1;
  if (n < 7) return 2;
  return 3;
}

const CELL: Record<0 | 1 | 2 | 3, string> = {
  0: "border border-[var(--rule)]",
  1: "border border-[var(--fg)]",
  2: "border border-[var(--fg)] bg-[linear-gradient(135deg,var(--fg)_50%,transparent_50%)]",
  3: "bg-[var(--accent-mark)]",
};

const LEGEND: { level: 0 | 1 | 2 | 3; label: string }[] = [
  { level: 0, label: "No access" },
  { level: 1, label: "Read" },
  { level: 2, label: "Write" },
  { level: 3, label: "Full, incl. field-level" },
];

export function PermissionMatrix() {
  return (
    <Reveal as="figure" variant="plate" className="w-full">
      <div className="flex items-end justify-between pb-2">
        <p className="annot text-[var(--fg-muted)]">Modules ↓</p>
        <p className="annot text-[var(--fg-muted)]">Roles 1 – {ROLE_COUNT} →</p>
      </div>
      <div
        role="img"
        aria-label={`Schematic permission matrix: ${ROLE_COUNT} roles across ${MODULES.length} of the platform's modules, each cell showing a level of access.`}
        className="grid items-center gap-x-[3px] gap-y-[3px] sm:gap-x-1 sm:gap-y-1"
        style={{ gridTemplateColumns: `minmax(4.5rem, auto) repeat(${ROLE_COUNT}, minmax(0, 1fr))` }}
      >
        {MODULES.map((mod, m) => (
          <div key={mod} className="contents">
            <span className="annot pe-2 text-[var(--fg)]">{mod}</span>
            {Array.from({ length: ROLE_COUNT }, (_, r) => (
              <span
                key={r}
                data-cell
                aria-hidden="true"
                className={`aspect-square ${CELL[grant(r, m)]}`}
                style={{ ["--i" as string]: r * 2 + m * 3 }}
              />
            ))}
          </div>
        ))}
      </div>
      <figcaption className="mt-[var(--spacing-md)] flex flex-col gap-[var(--spacing-sm)] border-t border-[var(--rule)] pt-[var(--spacing-sm)] sm:flex-row sm:items-start sm:justify-between">
        <span className="annot max-w-[38ch] text-[var(--fg-muted)]">
          Fig. 1 — A role is a row of data, not a branch of code. Schematic; eight of the 50+ modules shown.
        </span>
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          {LEGEND.map((item) => (
            <span key={item.label} className="annot inline-flex items-center gap-1.5 text-[var(--fg-muted)]">
              <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 ${CELL[item.level]}`} />
              {item.label}
            </span>
          ))}
        </span>
      </figcaption>
    </Reveal>
  );
}
