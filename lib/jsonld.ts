import { profile } from "@/content/profile";
import type { Project } from "@/content/types";
import { siteUrl } from "./site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    email: `mailto:${profile.links.email}`,
    telephone: "+201113284111",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Cairo",
      addressCountry: "EG",
    },
    sameAs: [profile.links.github, profile.links.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Palestine",
    },
    knowsLanguage: ["ar", "en"],
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "REST APIs",
      "Next.js",
    ],
  };
}

export function projectJsonLd(project: Project) {
  const type = project.link ? "SoftwareApplication" : "CreativeWork";
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: project.title,
    description: project.summary,
    author: { "@type": "Person", name: profile.name },
    about: project.role,
    keywords: project.stack.join(", "),
    ...(project.link ? { url: project.link.href } : {}),
  };
}
