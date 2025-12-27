"use client";

import { useState } from "react";
import Link from "next/link";
import { HANDBOOK_DATA, HandbookArticle } from "@/data/handbookData";
import ReactMarkdown from "react-markdown";

export default function HandbookPage() {
  const [selectedArticle, setSelectedArticle] = useState<HandbookArticle | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/guide"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            가이드로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">피트니스 핸드북</h1>
          <p className="text-gray-400">
            운동과 영양에 대한 {HANDBOOK_DATA.length}개의 심층 가이드
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Article List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HANDBOOK_DATA.map((article) => (
            <button
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="text-left bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-purple-500/50 hover:bg-gray-800 transition-all group"
            >
              <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-3">
                {article.summary}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-800 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedArticle.title}</h2>
                <p className="text-gray-400 mt-1">{selectedArticle.summary}</p>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors flex-shrink-0"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto prose prose-invert prose-purple max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-2xl font-bold text-white mt-6 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-bold text-white mt-6 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-semibold text-white mt-4 mb-2">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="text-gray-300">{children}</li>,
                  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-purple-500 pl-4 my-4 text-gray-400 italic">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {selectedArticle.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

