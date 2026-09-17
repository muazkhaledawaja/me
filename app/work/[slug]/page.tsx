import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bySlug, allSlugs } from "@/content/projects";
import { CaseStudyTemplate } from "@/components/templates/CaseStudyTemplate";
import { projectJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = bySlug(slug);
  if (!project || !project.caseStudy) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

// JSON-LD payload is JSON.stringify() of our own content/projects/*.ts
// object, not user-supplied HTML — same documented-safe pattern as
// app/layout.tsx's PersonJsonLd.
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = bySlug(slug);
  if (!project || !project.caseStudy) notFound();

  const json = JSON.stringify(projectJsonLd(project));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      <CaseStudyTemplate project={project} />
    </>
  );
}
