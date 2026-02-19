import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import type { Post } from "@/lib/notion";

export default function BlogPreview({ posts, locale }: { posts: Post[]; locale: string }) {
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              {dict.blog.title}
            </h2>
            <p className="text-gray-500">{dict.blog.subtitle}</p>
          </div>
          <Link
            href={`${prefix}/posts`}
            className="text-sm font-semibold text-[var(--corevia-primary)] hover:underline hidden md:block"
          >
            {dict.blog.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`${prefix}/posts/${post.slug}`}
              className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              {post.coverImage && (
                <div className="relative h-44 bg-gray-200">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">
                  {new Date(post.date).toLocaleDateString(
                    locale === "ko" ? "ko-KR" : "en-US",
                  )}
                </p>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[var(--corevia-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href={`${prefix}/posts`}
          className="mt-6 block text-center text-sm font-semibold text-[var(--corevia-primary)] md:hidden"
        >
          {dict.blog.viewAll}
        </Link>
      </div>
    </section>
  );
}
