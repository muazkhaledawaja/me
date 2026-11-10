import type { StackGroup } from "./types";

// Source: the "Skills" section of the 2026 CV, regrouped under the six
// headings of the Technical Index (plus AI, which the CV lists separately).
export const stack: StackGroup[] = [
  {
    name: "Backend",
    items: ["Node.js", "TypeScript", "JavaScript", "NestJS", "Express", "tRPC"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "Oracle", "Redis", "Supabase", "SQL"],
  },
  {
    name: "DevOps",
    items: ["Docker", "CI/CD", "Git / GitHub", "Fly.io", "GCP Cloud Run", "Vercel", "Cloudflare", "Sentry"],
  },
  {
    name: "Full-Stack",
    items: ["React", "Next.js", "Tailwind CSS", "Arabic RTL / i18n"],
  },
  {
    name: "Testing",
    items: ["Vitest", "Playwright", "Unit testing", "Integration testing"],
  },
  {
    name: "Architecture",
    items: [
      "REST API design",
      "OpenAPI / Swagger",
      "JWT authentication",
      "RBAC",
      "Data modeling",
      "BullMQ",
      "SSE",
      "WebSockets",
    ],
  },
  {
    name: "AI",
    items: ["LLM agent and tool-calling integration", "Claude Code"],
  },
];
