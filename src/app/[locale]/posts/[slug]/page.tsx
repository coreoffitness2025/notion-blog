import { getPostsFromCache, getWordCount, type Post } from "@/lib/notion";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { calculateReadingTime } from "@/lib/utils";
import { components } from "@/components/mdx-component";
import { getDictionary } from "@/lib/i18n";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export const revalidate = 3600;

export function generateStaticParams() {
  const posts = getPostsFromCache();
  return posts.flatMap((post) =>
    ["ko", "en"].map((locale) => ({ locale, slug: post.slug })),
  );
}

function getJsonLd(post: Post, locale: string, wordCount: number) {
  const isKo = locale === "ko";
  const prefix = isKo ? "" : "/en";
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: new Date(post.date).toISOString(),
      ...(post.author
        ? { author: { "@type": "Person", name: post.author } }
        : {}),
      image: post.coverImage || `${siteUrl}/og-ko.png`,
      url: `${siteUrl}${prefix}/posts/${post.slug}`,
      publisher: {
        "@type": "Organization",
        name: "CoreVia Fitness",
        url: siteUrl,
      },
      wordCount,
      ...(post.tags.length > 0 ? { keywords: post.tags.join(", ") } : {}),
      ...(post.category ? { articleSection: post.category } : {}),
      inLanguage: isKo ? "ko" : "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: isKo ? "홈" : "Home",
          item: `${siteUrl}${prefix}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: isKo ? "블로그" : "Blog",
          item: `${siteUrl}${prefix}/posts`,
        },
        { "@type": "ListItem", position: 3, name: post.title },
      ],
    },
  ];
}

interface PostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}
export async function generateMetadata(
  { params }: PostPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale, slug } = await params;

  const posts = getPostsFromCache(undefined, locale);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const prefix = locale === "ko" ? "" : `/${locale}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteUrl}${prefix}/posts/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteUrl}${prefix}/posts/${post.slug}`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      publishedTime: new Date(post.date).toISOString(),
      authors: post.author ? [post.author] : [],
      tags: post.tags,
      images: [
        {
          url: post.coverImage || `${siteUrl}/og-${locale === "ko" ? "ko" : "en"}.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage || `${siteUrl}/og-${locale === "ko" ? "ko" : "en"}.png`],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const posts = getPostsFromCache(undefined, locale);
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const wordCount = post.content ? getWordCount(post.content) : 0;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLd(post, locale, wordCount)),
        }}
      />
      <article className="max-w-3xl mx-auto prose dark:prose-invert">
      {/* Back to blog list */}
      <div className="mb-6 not-prose">
        <Link
          href={`${prefix}/posts`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {dict.blog.back}
        </Link>
      </div>

      {post.coverImage && (
        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      )}

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
          <time>{format(new Date(post.date), "yyyy.MM.dd")}</time>
          {post.author && <span>By {post.author}</span>}
          <span>{calculateReadingTime(wordCount)}</span>
          <span>{wordCount} words</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-foreground">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.category && <Badge variant="secondary">{post.category}</Badge>}
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="max-w-none">
        <ReactMarkdown components={components} remarkPlugins={[[remarkGfm, { singleTilde: false }]]} rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* App CTA — 영양 상세 페이지와 동일 */}
      <section className="not-prose mt-12 rounded-2xl overflow-hidden border border-gray-200">
        <img
          src={locale === "en" ? "/cta-banner-en.png" : "/cta-banner.png"}
          alt="CoreVia Fitness - 진짜 온라인 PT"
          className="w-full h-auto"
        />
        <div className="bg-white px-6 py-5 text-center">
          <p className="text-lg font-bold text-gray-800 mb-1">
            {locale === "en"
              ? "Start your healthy journey with CoreVia Fitness"
              : "진짜 온라인 PT, CoreVia Fitness와 함께 시작해보세요"}
          </p>
          <p className="text-gray-500 text-sm mb-4">
            {locale === "en"
              ? "AI-powered meal tracking, personalized coaching, and more — all in one app."
              : "AI 음식 분석, 맞춤 코칭, 운동 기록까지 — 하나의 앱으로."}
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://apps.apple.com/app/corevia-fitness/id6753667196"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--corevia-primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.808 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
              Google Play
            </a>
          </div>
        </div>
      </section>
    </article>
    </>
  );
}
