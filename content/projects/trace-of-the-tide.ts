import type { Project } from "../types";

// Source: the 2026 CV ("Selected Projects"). No case study page yet — add a
// `caseStudy` object here and the route, sitemap and OG image follow.
export const traceOfTheTide: Project = {
  slug: "trace-of-the-tide",
  number: "03",
  title: "Trace of the Tide",
  role: "Build and maintenance",
  type: "client",
  year: "Ongoing",
  summary:
    "A multilingual editorial platform for cultural heritage, published in Arabic, English, Spanish and French with full RTL and LTR support.",
  outcomeLine: "Live at traceofthetide.org",
  plate: "editions",
  highlights: [
    "Designed the content model for multilingual editions and a standalone magazine product.",
    "Took over the infrastructure from a previous contractor: hosting and DNS migration, caching fixes and email deliverability.",
  ],
  stack: ["NestJS", "Next.js"],
  link: { label: "traceofthetide.org", href: "https://traceofthetide.org" },
};
