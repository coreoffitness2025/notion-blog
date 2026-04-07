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

export function searchNutrition(
  query: string,
  locale: string,
  limit = 20
): NutritionItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return DB.slice(0, limit);

  const lang = locale === "en" ? "en" : "ko";
  const names = NAMES[lang];

  return DB.filter((item) => {
    const name = names[item.id] || "";
    return name.toLowerCase().includes(q);
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
