import nutritionDb from "./nutrition-db.json";
import namesKo from "./nutrition-names-ko.json";
import namesEn from "./nutrition-names-en.json";

export interface NutritionItem {
  id: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  sugar?: number;
  sodium?: number;
  saturated_fat?: number;
  serving_size?: number;
  source: "kfda" | "usda";
  dataQuality: "complete" | "acceptable" | "calories_only" | "review_needed";
}

const DB = nutritionDb as NutritionItem[];
const NAMES: Record<string, Record<string, string>> = {
  ko: namesKo as Record<string, string>,
  en: namesEn as Record<string, string>,
};

// ── Public API ──

export function getNutritionById(id: string): NutritionItem | undefined {
  return DB.find((item) => item.id === id);
}

export function getNutritionName(id: string, locale: string): string {
  const lang = locale === "en" ? "en" : "ko";
  return NAMES[lang]?.[id] || NAMES["ko"]?.[id] || id;
}

export function getAllNutritionIds(): string[] {
  return DB.map((item) => item.id);
}

export function getNutritionCount(): number {
  return DB.length;
}

// 동의어 매핑 (검색 확장)
const SYNONYMS: Record<string, string[]> = {
  "치킨": ["닭", "chicken"],
  "닭": ["치킨"],
  "chicken": ["치킨", "닭"],
  "소고기": ["beef", "쇠고기"],
  "beef": ["소고기", "쇠고기"],
  "돼지": ["pork", "돈"],
  "pork": ["돼지", "돈"],
  "계란": ["달걀", "egg"],
  "달걀": ["계란"],
  "egg": ["계란", "달걀"],
  "밥": ["rice", "공기밥"],
  "rice": ["밥", "쌀"],
  "고구마": ["sweet potato"],
  "감자": ["potato"],
  "연어": ["salmon"],
  "salmon": ["연어"],
  "참치": ["tuna"],
  "tuna": ["참치"],
  "두부": ["tofu"],
  "tofu": ["두부"],
  "우유": ["milk"],
  "milk": ["우유"],
};

export function searchNutrition(
  query: string,
  locale: string,
  limit = 20
): NutritionItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return DB.slice(0, limit);

  const lang = locale === "en" ? "en" : "ko";
  const names = NAMES[lang];

  // 동의어 확장
  const queries = [q, ...(SYNONYMS[q] || [])];

  return DB.filter((item) => {
    const name = (names[item.id] || "").toLowerCase();
    return queries.some((term) => name.includes(term));
  }).slice(0, limit);
}

/** Get popular items (complete data, reasonable serving size) for initial SSR */
export function getPopularNutrition(limit = 100): NutritionItem[] {
  const complete = DB.filter(
    (item) => item.dataQuality === "complete" && item.serving_size && item.serving_size < 1000
  );
  // KFDA와 USDA를 균형 있게 섞어서 반환
  const kfda = complete.filter((i) => i.source === "kfda");
  const usda = complete.filter((i) => i.source === "usda");
  const usdaCount = Math.min(Math.floor(limit * 0.2), usda.length); // 20% USDA
  const kfdaCount = limit - usdaCount;
  return [...kfda.slice(0, kfdaCount), ...usda.slice(0, usdaCount)];
}
