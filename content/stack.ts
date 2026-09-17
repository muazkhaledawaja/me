import type { StackGroup } from "./types";

// Source: legacy/index.html "Toolkit" section. Rendered as the Stack Index
// (plan §4(a)) — a colophon list, not a card grid.
export const stack: StackGroup[] = [
  {
    name: "Backend",
    items: ["Node.js", "Express", "NestJS", "TypeScript", "REST APIs", "tRPC"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "OracleDB", "Redis", "Supabase", "Prisma"],
  },
  {
    name: "DevOps",
    items: ["Docker", "CI/CD", "Git", "GitHub", "GCP Cloud Run", "Vercel"],
  },
  {
    name: "Full-Stack",
    items: ["React", "Next.js", "TanStack Query", "Tailwind"],
  },
  {
    name: "Testing",
    items: ["Unit Testing", "Integration", "Error Handling"],
  },
  {
    name: "Architecture",
    items: [
      "API Design",
      "Data Modeling",
      "Authentication",
      "Performance Tuning",
      "Clean Architecture",
    ],
  },
];
