import type { MetadataRoute } from "next";
import { allSlugs } from "@/content/projects";
import { posts } from "@/content/writing";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/work`, priority: 0.8 },
    { url: `${siteUrl}/colophon`, priority: 0.3 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = allSlugs().map((slug) => ({
    url: `${siteUrl}/work/${slug}`,
    priority: 0.9,
  }));

  const writingRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/writing/${post.slug}`,
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...writingRoutes];
}
