import Link from "next/link";
import { getDictionary } from "@/lib/i18n";

export default function NotFound() {
  const dict = getDictionary("ko");

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-200 mb-4">404</h1>
      <p className="text-lg text-gray-500 mb-8">
        {dict.notFound.message}
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--corevia-primary)] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
      >
        {dict.notFound.goHome}
      </Link>
    </div>
  );
}
