import type { MetadataRoute } from "next";
import { divisions, divisionHref } from "@/data/divisions";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/agro-divisions",
    "/shop",
    "/compliance",
    "/projects",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...divisions.map((division) => ({
      url: `${site.url}${divisionHref(division.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
