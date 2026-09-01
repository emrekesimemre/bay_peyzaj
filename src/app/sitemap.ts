import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projectsData.flatMap((p) => [
    {
      url: `${SITE.url}/projeler/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: { tr: `${SITE.url}/projeler/${p.id}`, en: `${SITE.url}/en/projeler/${p.id}` } },
    },
  ]);

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { tr: SITE.url, en: `${SITE.url}/en` } },
    },
    {
      url: `${SITE.url}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { languages: { tr: SITE.url, en: `${SITE.url}/en` } },
    },
    {
      url: `${SITE.url}/projeler`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { tr: `${SITE.url}/projeler`, en: `${SITE.url}/en/projeler` } },
    },
    {
      url: `${SITE.url}/en/projeler`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: { languages: { tr: `${SITE.url}/projeler`, en: `${SITE.url}/en/projeler` } },
    },
    {
      url: `${SITE.url}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { tr: `${SITE.url}/iletisim`, en: `${SITE.url}/en/iletisim` } },
    },
    {
      url: `${SITE.url}/en/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { tr: `${SITE.url}/iletisim`, en: `${SITE.url}/en/iletisim` } },
    },
    {
      url: `${SITE.url}/kvkk`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { tr: `${SITE.url}/kvkk`, en: `${SITE.url}/en/kvkk` } },
    },
    {
      url: `${SITE.url}/en/kvkk`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { tr: `${SITE.url}/kvkk`, en: `${SITE.url}/en/kvkk` } },
    },
    {
      url: `${SITE.url}/gizlilik`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { tr: `${SITE.url}/gizlilik`, en: `${SITE.url}/en/gizlilik` } },
    },
    {
      url: `${SITE.url}/en/gizlilik`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { tr: `${SITE.url}/gizlilik`, en: `${SITE.url}/en/gizlilik` } },
    },
    {
      url: `${SITE.url}/cerez-politikasi`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { tr: `${SITE.url}/cerez-politikasi`, en: `${SITE.url}/en/cerez-politikasi` } },
    },
    {
      url: `${SITE.url}/en/cerez-politikasi`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { tr: `${SITE.url}/cerez-politikasi`, en: `${SITE.url}/en/cerez-politikasi` } },
    },
    ...projectUrls,
  ];
}
