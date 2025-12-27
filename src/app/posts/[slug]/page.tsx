import { getPostsFromCache, getWordCount } from "@/lib/notion";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { calculateReadingTime } from "@/lib/utils";
import { components } from "@/components/mdx-component";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

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

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteUrl}/posts/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteUrl}/posts/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: post.author ? [post.author] : [],
      tags: post.tags,
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
      images: [post.coverImage || `${siteUrl}/opengraph-image.png`],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;

  const posts = getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const wordCount = post.content ? getWordCount(post.content) : 0;

  return (
    <article className="max-w-3xl mx-auto prose dark:prose-invert">
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
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
