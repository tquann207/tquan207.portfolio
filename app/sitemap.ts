import type { MetadataRoute } from "next";
import { projects } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://quan-tran-engineering.tvmquan-us.chatgpt.site";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
