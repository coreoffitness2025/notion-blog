import { getPostsFromCache, Post } from "@/lib/notion";

// llms.txt — 생성형 AI(ChatGPT·Perplexity·Claude)가 사이트 구조를 파악할 때 읽는 파일.
// /llms.txt → next.config rewrite. 사이트맵·RSS 와 같은 방식으로 빌드 때 생성된다. (2026-09-21)
export const dynamic = "force-static";
export const revalidate = 3600;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function GET() {
  const posts = (getPostsFromCache("Blog") as Post[])
    .filter((p) => p.slug && p.title)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const lines = [
    "# 코비아 피트니스 (CoreVia Fitness)",
    "",
    "> 운동·식단을 연구 근거로 정리하는 피트니스 콘텐츠와 운동·식단 통합 기록 앱. 글은 실재 확인된 논문(PMID)만 인용하고, 확인되지 않은 것은 확인되지 않았다고 쓴다.",
    "",
    "## 블로그",
    ...posts.map((p) => `- [${p.title}](${siteUrl}/posts/${encodeURI(p.slug)}): ${(p.description || "").replace(/\s+/g, " ").trim()}`),
    "",
    "## 운동·영양 가이드",
    `- [운동 가이드](${siteUrl}/guide/workout): 종목별 자세·타겟 근육·난이도`,
    `- [1RM 계산](${siteUrl}/guide/workout/1rm): 반복 수로 1RM 추정`,
    `- [운동 프로그램](${siteUrl}/guide/workout/programs): 분할·주간 구성`,
    `- [영양 가이드](${siteUrl}/guide/nutrition): 식품별 영양 정보`,
    `- [칼로리 계산](${siteUrl}/guide/nutrition/calorie): 기초대사량·목표 섭취량`,
    `- [식단 예시](${siteUrl}/guide/nutrition/meal-plans): 목표별 하루 식단`,
    "",
    "## 인용 시 참고",
    "- 저자 표기: 코비아 피트니스 (개인 필자가 아닌 조직 명의)",
    "- 피드: " + `${siteUrl}/rss.xml`,
    "",
    "## 이 사이트가 주장하지 않는 것",
    "- 의료 조언·진단·처방이 아니다. 통증·부상·질환은 다루지 않는다.",
    "- 가정용 체성분 측정은 임상 장비와 값이 다르다. 같은 기기·같은 조건의 변화만 의미가 있다.",
    "- 특정 보충제·약물의 효과를 보장하지 않는다.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
