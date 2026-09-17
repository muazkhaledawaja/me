import type { Profile } from "./types";

// Source of truth: legacy/index.html. Every field here is verbatim from the
// live site unless noted otherwise.
export const profile: Profile = {
  name: "Moath K. Awaja",
  firstName: "Moath",
  lastName: "Awaja",
  role: "Backend Developer",
  location: "New Cairo, Egypt",
  origin: "Palestine",
  tagline: "Backend, made deliberate.",
  heroSubline:
    "Three+ years building reliable backend systems — APIs, data pipelines, and the architecture that holds them together.",
  pullQuote: "Good architecture is invisible. You only notice when it’s missing.",
  bio: [
    "I’m Moath K. Awaja, a backend-focused full-stack developer based in New Cairo, Egypt. I build reliable, scalable systems using Node.js, Express, and NestJS — comfortable across the full development cycle, but strongest in designing APIs, handling data flow, and optimizing performance on the server side.",
    "My background spans SQL and NoSQL databases, Docker-based deployments, and CI/CD workflows. I take pride in writing clean, testable code with clear documentation — the kind that holds up under pressure and survives the team that comes after.",
    "Beyond the code, I’ve led teams through real crises — most notably technical operations for humanitarian aid distribution during the Gaza war emergency. That experience taught me how to design systems that work when the stakes are highest.",
  ],
  status: "Open to work",
  languages: ["Arabic", "English"],
  links: {
    email: "mkaawaja5000@gmail.com",
    whatsapp: "https://wa.me/201113284111",
    whatsappDisplay: "+20 111 328 4111",
    github: "https://github.com/muazkhaledawaja",
    githubDisplay: "/muazkhaledawaja",
    linkedin: "https://www.linkedin.com/in/moath-awaja/",
    linkedinDisplay: "/in/moath-awaja",
  },
};
