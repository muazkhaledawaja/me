import type { Project } from "../types";

// Source: legacy/index.html + legacy of moath-portfolio.html v2 (fuller
// technical detail). No public link exists for Sadara — do not add one.
// Results carry structural facts only; the 25% API figure belongs to
// SAVCOM (content/experience.ts), not here. See plan §0 row 7.
export const sadaraSports: Project = {
  slug: "sadara-sports",
  number: "01",
  title: "Sadara Sports",
  titleNote: "صدارة",
  role: "AI-assisted Lead Engineer",
  type: "flagship",
  year: "2024 → now",
  summary:
    "Bilingual Arabic RTL + English LTR SaaS platform for professional football agencies across MENA.",
  outcomeLine: "21-role RBAC · 50+ backend modules · 2 locales",
  stack: [
    "Node.js",
    "Express",
    "TypeScript",
    "PostgreSQL 17",
    "Redis",
    "Next.js 15",
    "React 18",
    "TanStack Query",
    "Tailwind",
    "Docker",
    "GCP Cloud Run",
    "Vercel",
  ],
  caseStudy: {
    problem: [
      "Football agencies across MENA run on spreadsheets, WhatsApp threads, and paper contracts. Player representation touches finance, scouting, injuries, sessions, gate access, and legal approvals — each with different stakeholders who need different views of the same underlying data, in two languages read in opposite directions.",
      "The brief was a single platform that could serve an agency's full operation without hard-coding who gets to see what. Roles needed to be configurable per agency, at runtime, without a deploy.",
    ],
    constraints: [
      "Bilingual from day one: Arabic RTL and English LTR in the same component tree, not two separate builds.",
      "Access control had to be data-driven — an agency admin defines roles and permissions; the codebase should never need a new `if (role === ...)` branch to support a new one.",
      "Every write in a domain this sensitive (contracts, finance, minors' data) needed an audit trail by default, not bolted on later.",
    ],
    research: [
      "Evaluated flat role enums (fast to ship, impossible to extend without redeploying) against a fully data-driven RBAC model (more upfront modeling, zero-deploy extensibility).",
      "Looked at how existing sports-management SaaS (TransferRoom, Wyscout) structure their permission systems — most hard-code role tiers, which is exactly the constraint an MENA agency's varied internal structures ruled out.",
    ],
    architectureDiagram: "sadara",
    decisions: [
      {
        context:
          "Roles and permissions needed to be configurable per agency without code changes.",
        options: [
          "Hard-coded role enum with switch statements per module",
          "Database-driven RBAC with module-level CRUD and field-level access, evaluated at request time",
        ],
        decision:
          "Database-driven RBAC — 21 roles across the platform, each composed of per-module CRUD grants plus field-level access rules, all configurable at runtime.",
        consequence:
          "New roles ship as data, not deploys. The cost is a permission check on every request path instead of a compile-time guarantee — mitigated with Redis-cached permission lookups.",
      },
      {
        context: "Sessions needed to survive token theft without forcing re-logins constantly.",
        options: [
          "Long-lived JWT in localStorage",
          "Short-lived JWT in an HttpOnly cookie with refresh-token rotation",
        ],
        decision:
          "JWT auth via HttpOnly cookies with refresh-token rotation — access tokens are short-lived, refresh tokens rotate on use and are revoked on reuse detection.",
        consequence:
          "Immune to XSS token theft (no JS-readable token) at the cost of needing a rotation endpoint and reuse-detection logic the team had to get right once, carefully.",
      },
      {
        context: "50+ backend modules needed a shared shape so new modules didn't reinvent structure.",
        options: [
          "Ad hoc per-module structure",
          "MVC with a factory pattern for module scaffolding",
        ],
        decision:
          "MVC + factory pattern — every module (players, contracts, finance, injuries, scouting, sessions, gates, approvals, …) is generated from the same factory, so controller/service/repository shape is uniform across all 50+.",
        consequence:
          "Faster to onboard a new module, but any shared bug in the factory propagates to every module it generated — the factory itself carries the highest test burden in the codebase.",
      },
      {
        context: "Approval-heavy workflows (contracts, transfers) needed status changes visible in real time without polling.",
        options: ["Client polling", "WebSockets", "Server-Sent Events"],
        decision:
          "Server-Sent Events for real-time notifications, paired with e-signature workflows that automate the approval chain.",
        consequence:
          "SSE is one-directional and simpler to operate than WebSockets for this notification-only use case, at the cost of needing a separate channel if bidirectional features are added later.",
      },
    ],
    challenges: [
      {
        challenge: "Bilingual RTL/LTR in one component tree without duplicating layout logic.",
        tradeoff:
          "Used CSS logical properties (`margin-inline-start` over `margin-left`) throughout instead of a mirrored component set — slower to retrofit onto any component written direction-naively, faster for every component written after the convention landed.",
      },
      {
        challenge: "Field-level access control adds a permission check to every field on every response.",
        tradeoff:
          "Redis-cached permission lookups keep this fast, but it means permission changes have a cache-invalidation window instead of being instantaneous.",
      },
      {
        challenge: "A factory-generated module is fast to scaffold but harder to special-case.",
        tradeoff:
          "Modules with genuinely unique logic (finance, e-signature) break out of the factory pattern deliberately rather than forcing them through it — consistency was a means, not a goal.",
      },
    ],
    results: [
      { label: "Configurable roles", value: "21", measured: false },
      { label: "Backend modules", value: "50+", measured: false },
      { label: "Interface locales", value: "2 (RTL + LTR)", measured: false },
      { label: "Public deployment", value: "Private — client platform, no public link", measured: false },
    ],
    lessons: [
      "Data-driven access control pays for itself the first time a client asks for a role nobody anticipated — but only if the permission model is designed before the third module ships, not after.",
      "RTL support is a layout discipline, not a translation task. It has to be a constraint from the first component, not a pass applied at the end.",
      "A factory pattern is a force multiplier for uniform modules and a straitjacket for unique ones — knowing which is which before writing the module saves a rewrite.",
    ],
  },
};
