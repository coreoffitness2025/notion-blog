import { getPostsFromCache, getWordCount } from "@/lib/notion";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import type { ResolvingMetadata } from "next";
import { Badge } from "@/components/ui/badge";
import { calculateReadingTime } from "@/lib/utils";
import { components } from "@/components/mdx-component";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// fs를 쓰는 getPostsFromCache가 있으니 안전하게 node runtime 고정
export const runtime = "nodejs";

interface PostPageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: PostPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  const posts = getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";
  const dateIso = post.date ? new Date(post.date).toISOString() : undefined;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/posts/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteUrl}/posts/${post.slug}`,
      publishedTime: dateIso,
      authors: post.author ? [post.author] : [],
      tags: post.tags ?? [],
      images: [
        {
          url: post.coverImage || `${siteUrl}/opengraph-image.png`,
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
      images: [
        {
          url: post.coverImage || `${siteUrl}/opengraph-image.png`,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  const posts = getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const wordCount = post.content ? getWordCount(post.content) : 0;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";
  const dateIso = post.date ? new Date(post.date).toISOString() : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage || `${siteUrl}/opengraph-image.png`,
    datePublished: dateIso,
    author: {
      "@type": "Person",
      name: post.author || "Guest Author",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Site Name",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/posts/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto prose dark:prose-invert">
        {post.coverImage && (
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            {post.date ? (
              <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
            ) : null}
            {post.author && <span>By {post.author}</span>}
            <span>{calculateReadingTime(wordCount)}</span>
            <span>{wordCount} words</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {post.title}
          </h1>

          <div className="flex gap-2 flex-wrap mb-4">
            {post.category && <Badge variant="secondary">{post.category}</Badge>}
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="max-w-none">
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]} // 주의: HTML이 섞이면 그대로 렌더됨(노션에서 HTML 넣지 않으면 OK)
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}
