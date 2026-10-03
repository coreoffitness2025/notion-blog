/**
 * 가이드 페이지 → 블로그 글 내부 링크 (2026-10-03).
 *
 * 왜: 사이트 조회의 87%가 자동 생성 가이드(영양 5,681·운동 99)에 떨어지고(네이버 검색 유입),
 * 블로그 글은 7%뿐이다. 이미 들어온 방문을 블로그로 흘려보내고, 검색엔진에도 글로 가는
 * 링크를 준다(구글은 블로그 글을 아직 발견하지 못한 상태 — GSC 10/3).
 *
 * 규칙: 글 제목·태그에 가이드 대상(운동 이름·부위·음식 이름·영양소)이 들어 있으면 가산.
 * 맞는 글이 없으면 같은 성격(운동 / 영양) 분류의 최신 글로 채운다. 빌드 시점 캐시만 읽는다 —
 * 가이드 페이지 렌더를 느리게 하지 않는다.
 */
import { getPostsFromCache, type Post } from "@/lib/notion";

// 기본 가산 분류 = '일반' 글만. '부위별 운동'(특정 운동 글)은 이름·부위가 맞을 때만 붙는다 —
// 아니면 사이드 레터럴 레이즈 페이지에 스쿼트 가이드가 붙는다(10/3 시험)
const WORKOUT_CATS = ["운동", "근비대", "초보자", "부상 방지"];
const NUTRITION_CATS = ["영양", "다이어트", "보충제"];

const norm = (s: string) => (s || "").replace(/\s+/g, "").toLowerCase();

function haystack(p: Post, isEn: boolean) {
  return norm(
    isEn
      ? `${p.titleEn || ""} ${(p.tagsEn || []).join(" ")} ${p.descriptionEn || ""}`
      : `${p.title} ${(p.tags || []).join(" ")} ${p.description || ""}`,
  );
}

function pick(
  isEn: boolean,
  cats: string[],
  terms: { t: string; w: number }[],
  limit: number,
  skip: (p: Post, hay: string) => boolean = () => false,
): Post[] {
  // 영어 페이지는 영어 본문이 있는 글만 — /en 의 한국어 글은 중복 문서다(사이트맵 정책 9/20)
  const posts = getPostsFromCache("Blog").filter((p) => (isEn ? !!p.contentEn : true));
  const scored = posts.map((p) => {
    const h = haystack(p, isEn);
    if (skip(p, h)) return { p, s: 0, d: 0 };
    let s = cats.includes(p.category || "") ? 1 : 0;
    for (const { t, w } of terms) if (t && t.length >= 2 && h.includes(norm(t))) s += w;
    return { p, s, d: new Date(p.date).getTime() || 0 };
  });
  return scored
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || b.d - a.d)
    .slice(0, limit)
    .map((x) => x.p);
}

export function relatedPostsForExercise(
  ex: { name: string; nameEn: string; category: string; categoryEn: string; bodyPart?: string[]; muscles: { primary: string[] }; musclesEn: { primary: string[] } },
  isEn: boolean,
  limit = 3,
): Post[] {
  const terms = isEn
    ? [{ t: ex.nameEn, w: 5 }, ...ex.musclesEn.primary.map((m) => ({ t: m, w: 2 })), { t: ex.categoryEn, w: 2 }]
    : [{ t: ex.name, w: 5 }, ...ex.muscles.primary.map((m) => ({ t: m, w: 2 })), { t: ex.category, w: 2 },
       ...(ex.bodyPart || []).map((b) => ({ t: b, w: 2 }))];
  return pick(isEn, WORKOUT_CATS, terms, limit);
}

export function relatedPostsForNutrition(
  item: { protein: number; carbs: number; fat: number },
  name: string,
  isEn: boolean,
  limit = 3,
): Post[] {
  // 음식 이름의 첫 단어(예: "고구마, 찐것" → 고구마)가 제목에 있으면 가장 강하게
  const head = name.split(/[,(·_\s]/)[0];
  const terms: { t: string; w: number }[] = [{ t: head, w: 5 }];
  if (item.protein >= 15) terms.push({ t: isEn ? "protein" : "단백질", w: 3 });
  if (item.carbs >= 25) terms.push({ t: isEn ? "carb" : "탄수화물", w: 3 });
  if (item.fat >= 20) terms.push({ t: isEn ? "fat" : "지방", w: 2 });
  terms.push({ t: isEn ? "diet" : "다이어트", w: 1 });
  // "모닝빵 칼로리:"처럼 특정 음식을 다룬 글은 그 음식 페이지에만 — 김치국에 슈슈버거가 붙지 않게(10/3 시험)
  const foodSpecific = /^[^:：]{1,20}\s(칼로리|열량|calories)/;
  const h = norm(head);
  return pick(isEn, NUTRITION_CATS, terms, limit,
    (p, hay) => foodSpecific.test(isEn ? p.titleEn || "" : p.title) && !(h.length >= 2 && hay.includes(h)));
}
