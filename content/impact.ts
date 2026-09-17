import type { ResultFact } from "./types";

// Cross-cutting facts for the home Impact band — not owned by a single
// project. The 25% figure belongs to SAVCOM (content/experience.ts), not
// Sadara (see plan §0 row 7) — it appears here as a standalone verified
// fact, not attributed to a project case study.
export const impactStats: ResultFact[] = [
  { label: "Configurable roles in Sadara's RBAC", value: "21", measured: false },
  { label: "Backend modules shipped in Sadara", value: "50+", measured: false },
  { label: "Faster API response times at SAVCOM", value: "25%", measured: true },
  { label: "Interface locales, RTL + LTR", value: "2", measured: false },
];
