import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold leading-tight">
          Corevia — 기록 기반 피트니스 시스템
        </h1>
        <p className="text-base opacity-80">
          운동/식단 기록을 “실행 가능한 형태”로 정리하고, 블로그와 앱으로 연결합니다.
        </p>

        <div className="flex gap-3 pt-2">
          <Link
            href="/solution"
            className="rounded-md border px-4 py-2 text-sm"
          >
            솔루션 보기
          </Link>
          <Link
            href="/posts"
            className="rounded-md border px-4 py-2 text-sm"
          >
            블로그 보기
          </Link>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-5">
          <div className="font-semibold">1) 사업 소개</div>
          <div className="mt-2 text-sm opacity-80">
            브랜드/비전/운영 방식
          </div>
        </div>
        <div className="rounded-lg border p-5">
          <div className="font-semibold">2) 솔루션 소개</div>
          <div className="mt-2 text-sm opacity-80">
            앱 구조, 사용 흐름, 핵심 가치
          </div>
        </div>
        <div className="rounded-lg border p-5">
          <div className="font-semibold">3) 블로그</div>
          <div className="mt-2 text-sm opacity-80">
            노션 DB로 발행되는 글 모음
          </div>
        </div>
      </section>
    </main>
  );
}
