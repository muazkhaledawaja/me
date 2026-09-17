// Content layer types. One `Project` object feeds both the home work index
// and the `/work/[slug]` case study — see plan §4(b). Nothing here is UI;
// components import from `content/*` and render.

export type StackGroup = {
  name: string;
  items: string[];
};

export type Decision = {
  context: string;
  options: string[];
  decision: string;
  consequence: string;
};

export type Challenge = {
  challenge: string;
  tradeoff: string;
};

export type ResultFact = {
  label: string;
  value: string;
  /** true if the number is a structural fact (role count, module count) vs
   * a measured metric (response time, adoption). Sadara has zero of the
   * latter — see plan §0 row 7. Never set this true without a verifiable
   * source. */
  measured: boolean;
};

export type CaseStudy = {
  problem: string[];
  constraints: string[];
  research: string[];
  architectureDiagram: "sadara" | "tarweeda";
  decisions: Decision[];
  challenges: Challenge[];
  results: ResultFact[];
  lessons: string[];
};

export type Project = {
  slug: string;
  number: string; // "01", "02", ... — display index, not array index
  title: string;
  titleNote?: string; // e.g. "(صدارة)" — rendered lang="ar" dir="rtl"
  role: string;
  type: "flagship" | "client" | "tool" | "personal";
  year: string; // display string, e.g. "2024 → now"
  summary: string;
  outcomeLine: string; // shown on hover in the home work index
  stack: string[];
  link?: { label: string; href: string };
  /** present only for projects with a dedicated case-study page. */
  caseStudy?: CaseStudy;
};

export type ExperienceEntry = {
  id: string;
  kind: "role" | "education" | "certificate";
  title: string;
  org: string;
  location?: string;
  range: string; // display string — ranges are NOT parsed into a shared timeline, see plan §0 row 8
  concurrent?: boolean;
  bullets: string[];
  tags: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type Profile = {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  origin: string;
  tagline: string;
  heroSubline: string;
  pullQuote: string;
  bio: string[];
  status: string;
  languages: string[];
  links: {
    email: string;
    whatsapp: string;
    whatsappDisplay: string;
    github: string;
    githubDisplay: string;
    linkedin: string;
    linkedinDisplay: string;
  };
};
