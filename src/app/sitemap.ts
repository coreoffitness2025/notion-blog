import { getPostsFromCache, Post } from "@/lib/notion";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://coreviahomepage.vercel.app";

  const posts = getPostsFromCache();
  const postUrls = posts.map((post: Post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticPages = [
    { path: "", priority: 1, freq: "daily" as const },
    { path: "/coach", priority: 0.9, freq: "weekly" as const },
    { path: "/guide", priority: 0.8, freq: "weekly" as const },
    { path: "/guide/calorie", priority: 0.8, freq: "monthly" as const },
    { path: "/guide/1rm", priority: 0.8, freq: "monthly" as const },
    { path: "/guide/exercises", priority: 0.8, freq: "monthly" as const },
    { path: "/guide/programs", priority: 0.7, freq: "monthly" as const },
    { path: "/guide/meal-plans", priority: 0.7, freq: "monthly" as const },
    { path: "/guide/handbook", priority: 0.7, freq: "monthly" as const },
    { path: "/posts", priority: 0.8, freq: "daily" as const },
    { path: "/contact", priority: 0.5, freq: "monthly" as const },
  ];

  const staticUrls = staticPages.map((p) => ({
    url: `${siteUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  return [...staticUrls, ...postUrls];
}
