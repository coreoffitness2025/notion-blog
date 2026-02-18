import Link from "next/link";
import Image from "next/image";
import { getPostsFromCache, type Post } from "@/lib/notion";

export default function BlogPreview() {
  const posts = getPostsFromCache("Blog").slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              블로그
            </h2>
            <p className="text-gray-500">운동과 영양에 대한 유용한 이야기</p>
          </div>
          <Link
            href="/posts"
            className="text-sm font-semibold text-[var(--corevia-primary)] hover:underline hidden md:block"
          >
            전체 보기 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
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
                  {new Date(post.date).toLocaleDateString("ko-KR")}
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
          href="/posts"
          className="mt-6 block text-center text-sm font-semibold text-[var(--corevia-primary)] md:hidden"
        >
          전체 보기 →
        </Link>
      </div>
    </section>
  );
}
