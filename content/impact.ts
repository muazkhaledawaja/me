import type { ResultFact } from "./types";

// Cross-cutting facts for the home Impact section. The 25% figure belongs
// to SAVCOM (content/experience.ts), not Sadara. `source` names where each
// figure comes from so the page never implies otherwise.
export const impactStats: (ResultFact & { source: string })[] = [
  {
    value: "21",
    label: "configurable roles, managed by agency admins without a developer in the loop.",
    source: "Sadara Sports — access control",
    measured: false,
  },
  {
    value: "50+",
    label: "backend modules, every one generated from the same factory.",
    source: "Sadara Sports — backend",
    measured: false,
  },
  {
    value: "25%",
    label: "faster API response times on an e-commerce backend.",
    source: "SAVCOM — NestJS platform",
    measured: true,
  },
  {
    value: "2",
    label: "interface locales in one component tree: Arabic, right to left, and English, left to right.",
    source: "Sadara Sports — interface",
    measured: false,
  },
];
