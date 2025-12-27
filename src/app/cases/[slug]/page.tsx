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

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: CasePageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const cases = getPostsFromCache("Case");
  const caseItem = cases.find((p) => p.slug === slug);

  if (!caseItem) {
    return { title: "Case Not Found" };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";

  return {
    title: caseItem.title,
    description: caseItem.description,
    alternates: { canonical: `${siteUrl}/cases/${caseItem.slug}` },
    openGraph: {
      title: caseItem.title,
      description: caseItem.description,
      type: "article",
      url: `${siteUrl}/cases/${caseItem.slug}`,
      publishedTime: new Date(caseItem.date).toISOString(),
      authors: caseItem.author ? [caseItem.author] : [],
      tags: caseItem.tags,
      images: [
        {
          url: caseItem.coverImage || `${siteUrl}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: caseItem.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseItem.title,
      description: caseItem.description,
      images: [caseItem.coverImage || `${siteUrl}/opengraph-image.png`],
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;

  const cases = getPostsFromCache("Case");
  const caseItem = cases.find((p) => p.slug === slug);

  if (!caseItem) notFound();

  const wordCount = caseItem.content ? getWordCount(caseItem.content) : 0;

  return (
    <article className="max-w-3xl mx-auto prose dark:prose-invert">
      {caseItem.coverImage && (
        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={caseItem.coverImage}
            alt={caseItem.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
          <Badge variant="secondary">고객 사례</Badge>
          <time>{format(new Date(caseItem.date), "yyyy.MM.dd")}</time>
          {caseItem.author && <span>By {caseItem.author}</span>}
          <span>{calculateReadingTime(wordCount)}</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-foreground">
          {caseItem.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-4">
          {caseItem.tags?.map((tag) => (
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
          rehypePlugins={[rehypeRaw]}
        >
          {caseItem.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

