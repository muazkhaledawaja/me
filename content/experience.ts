import type { ExperienceEntry } from "./types";

// Source: legacy/index.html "Journey" section. Ordered by end date, newest
// first. Entries 3 & 4 overlap in the source (Oct 2023–Apr 2024 vs Aug
// 2023–Oct 2024) — preserved as-is, not smoothed into a fake timeline. See
// plan §0 row 8: the rail renders per-entry ranges, never a continuous spine.
export const experience: ExperienceEntry[] = [
  {
    id: "dar",
    kind: "role",
    title: "Full-Stack Developer",
    org: "DAR",
    location: "Startup, Remote",
    range: "Feb 2025 — May 2025",
    bullets: [
      "Built backend features with Next.js and tRPC, including a bulk file upload system and Google Sheets integration for dynamic data fetching.",
      "Deployed on Vercel with scalability and fast response times in mind.",
      "Contributed to the frontend in React, implementing Verlet Integration and other logic-heavy interactive components.",
    ],
    tags: ["Next.js", "tRPC", "React", "Vercel"],
  },
  {
    id: "tap",
    kind: "role",
    title: "Backend Development",
    org: "TAP Training Program",
    range: "Jun 2024 — Aug 2024",
    bullets: [
      "Designed and implemented secure, scalable RESTful APIs with Node.js and TypeScript.",
      "Took a leadership role in team-based projects — providing guidance, reviewing code, and ensuring timely delivery.",
      "Strengthened backend architecture skills through intensive, real-world assignments and developed business communication through structured workshops.",
    ],
    tags: ["Node.js", "TypeScript", "Leadership"],
  },
  {
    id: "savcom",
    kind: "role",
    title: "Backend Developer",
    org: "SAVCOM",
    location: "Remote",
    range: "Aug 2023 — Oct 2024",
    concurrent: true,
    bullets: [
      "Designed and built a scalable e-commerce platform with NestJS, achieving a 25% improvement in API response times.",
      "Developed dynamic product modules and personalized shopping logic, optimized backend infrastructure for high traffic.",
      "Mentored junior developers in code quality and peer review practices.",
    ],
    tags: ["NestJS", "E-commerce", "Mentorship"],
  },
  {
    id: "ahel-gaza",
    kind: "role",
    title: "Technical Team Lead",
    org: "Ahel Gaza — War Emergency Response",
    range: "Oct 2023 — Apr 2024",
    concurrent: true,
    bullets: [
      "Directed all technical operations for data collection, processing, and analysis supporting humanitarian aid distribution during the Gaza war.",
      "Designed and implemented large-scale data pipelines that produced actionable insights for field operations.",
      "Managed and mentored a team of data analysts under crisis conditions, delivering reporting dashboards that improved decision-making and transparency for stakeholders on the ground.",
    ],
    tags: ["Team Leadership", "Data Pipelines", "Crisis Operations"],
  },
  {
    id: "dash",
    kind: "role",
    title: "Backend Development Trainee",
    org: "Dash Training Program",
    range: "Nov 2022 — Apr 2023",
    bullets: [
      "Built full-stack web applications with a strong focus on scalable backend architecture using TypeScript and NestJS.",
      "Stepped into leadership roles within Agile team projects to facilitate communication and task coordination.",
      "Managed Git workflows and branching strategies to ensure smooth collaboration.",
    ],
    tags: ["TypeScript", "NestJS", "Agile"],
  },
  {
    id: "education",
    kind: "education",
    title: "Bachelor's in Software Engineering",
    org: "University of Palestine",
    range: "2019 — 2024",
    bullets: [],
    tags: [],
  },
  {
    id: "cert-tap",
    kind: "certificate",
    title: "Advanced Backend Development",
    org: "TAP Training Program",
    range: "",
    bullets: [],
    tags: [],
  },
  {
    id: "cert-dash",
    kind: "certificate",
    title: "Full-Stack Development",
    org: "Dash Training Program",
    range: "",
    bullets: [],
    tags: [],
  },
];
