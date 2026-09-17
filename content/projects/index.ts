import type { Project } from "../types";
import { sadaraSports } from "./sadara-sports";
import { tarweeda } from "./tarweeda";
import { gymAttendanceAnalyzer } from "./gym-attendance-analyzer";

// Single ordered source of truth. Home index and sitemap both derive from
// this so they can never drift — see plan §4(b) and §10.
export const projects: Project[] = [sadaraSports, tarweeda, gymAttendanceAnalyzer];

export function bySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Slugs of projects with a dedicated case-study page — drives
 * generateStaticParams for both /work/[slug]/page.tsx and its
 * opengraph-image.tsx, so the two route sets can never disagree. */
export function allSlugs(): string[] {
  return projects.filter((p) => p.caseStudy).map((p) => p.slug);
}

export function nextProject(slug: string): Project | undefined {
  const caseStudyProjects = projects.filter((p) => p.caseStudy);
  const index = caseStudyProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return caseStudyProjects[(index + 1) % caseStudyProjects.length];
}
