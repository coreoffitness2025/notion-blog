import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/sitemap.xml", destination: "/api/sitemap" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      { source: "/guide/1rm", destination: "/guide/workout/1rm", permanent: true },
      { source: "/guide/programs", destination: "/guide/workout/programs", permanent: true },
      { source: "/guide/exercises", destination: "/guide/workout/exercises", permanent: true },
      { source: "/guide/exercises/:id", destination: "/guide/workout/exercises/:id", permanent: true },
      { source: "/guide/calorie", destination: "/guide/nutrition/calorie", permanent: true },
      { source: "/guide/meal-plans", destination: "/guide/nutrition/meal-plans", permanent: true },
      { source: "/guide/handbook", destination: "/posts", permanent: true },
      { source: "/en/guide/1rm", destination: "/en/guide/workout/1rm", permanent: true },
      { source: "/en/guide/programs", destination: "/en/guide/workout/programs", permanent: true },
      { source: "/en/guide/exercises", destination: "/en/guide/workout/exercises", permanent: true },
      { source: "/en/guide/exercises/:id", destination: "/en/guide/workout/exercises/:id", permanent: true },
      { source: "/en/guide/calorie", destination: "/en/guide/nutrition/calorie", permanent: true },
      { source: "/en/guide/meal-plans", destination: "/en/guide/nutrition/meal-plans", permanent: true },
      { source: "/en/guide/handbook", destination: "/en/posts", permanent: true },
    ];
  },
};

export default nextConfig;
