import type { Profile } from "./types";

// Source of truth: the 2026 CV (main.tex). Wording follows the CV summary;
// the third bio paragraph and the pull quote carry over from the previous
// site.
export const profile: Profile = {
  name: "Moath K. Awaja",
  firstName: "Moath",
  lastName: "Awaja",
  role: "Backend Software Engineer",
  location: "New Cairo, Egypt",
  origin: "Palestine",
  headline: "Engineering systems that make complexity work.",
  specialties: ["Node.js", "TypeScript", "NestJS"],
  intro:
    "Three-plus years building production APIs and SaaS platforms in Node.js and TypeScript. Strongest in API design, data modeling, access control and application security.",
  pullQuote: "Good architecture is invisible. You only notice when it’s missing.",
  bio: [
    "I’m Moath K. Awaja, a backend software engineer based in New Cairo, Egypt, with more than three years of experience building production APIs and SaaS platforms in Node.js and TypeScript.",
    "I built and shipped a bilingual Arabic and English SaaS platform for football agencies as its sole engineer, from first commit to production. I’m strongest in API design, data modeling, authentication and access control, and application security — and I can own the frontend and the deployment when the work needs it.",
    "Beyond the code, I’ve led teams through real crises — most notably technical operations for humanitarian aid distribution during the Gaza war emergency. That experience taught me how to design systems that work when the stakes are highest.",
  ],
  status: "Open to work",
  languages: ["Arabic (native)", "English (fluent)"],
  links: {
    email: "mkaawaja5000@gmail.com",
    whatsapp: "https://wa.me/201113284111",
    whatsappDisplay: "+20 111 328 4111",
    github: "https://github.com/muazkhaledawaja",
    githubDisplay: "github.com/muazkhaledawaja",
    linkedin: "https://www.linkedin.com/in/moath-awaja/",
    linkedinDisplay: "linkedin.com/in/moath-awaja",
  },
};
