import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { MEAL_PLAN_DATA, type MealPlan } from "@/data/mealPlanData";
import { notFound } from "next/navigation";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export const revalidate = 604800; // 7 days

export function generateStaticParams() {
  return MEAL_PLAN_DATA.map((plan) => ({ id: plan.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const plan = MEAL_PLAN_DATA.find((p) => p.id === id);
  if (!plan) return { title: "Not Found" };

  const isKo = locale === "ko";
  const title = isKo ? plan.title : plan.titleEn;
  const path = `/guide/nutrition/meal-plans/${id}`;
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? `${title} - ${plan.calories}kcal 식단 플랜`
      : `${title} - ${plan.calories}kcal Meal Plan`,
    description: isKo
      ? `${title}: ${plan.calories}kcal, 단백질 ${plan.protein}g, 탄수화물 ${plan.carbs}g, 지방 ${plan.fat}g. ${plan.description}`
      : `${title}: ${plan.calories}kcal, ${plan.protein}g protein, ${plan.carbs}g carbs, ${plan.fat}g fat. ${plan.descriptionEn}`,
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: `${siteUrl}/guide/nutrition/meal-plans/${id}`,
        en: `${siteUrl}/en/guide/nutrition/meal-plans/${id}`,
      },
    },
    openGraph: {
      title: `${title}`,
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "article",
    },
  };
}

export default async function MealPlanDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const plan = MEAL_PLAN_DATA.find((p) => p.id === id);
  if (!plan) notFound();

  const dict = getDictionary(locale);
  const t = dict.guideSubpages.mealPlans;
  const isEn = locale === "en";
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const title = isEn ? plan.titleEn : plan.title;
  const description = isEn ? plan.descriptionEn : plan.description;

  const allIngredients = plan.meals.flatMap((m) => isEn ? m.itemsEn : m.items);
  const jsonLd = [
    {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: title,
    description: description,
    image: `${siteUrl}/og-${isEn ? "en" : "ko"}.png`,
    author: { "@type": "Organization", name: "CoreVia Fitness", url: siteUrl },
    prepTime: "PT10M",
    cookTime: "PT20M",
    totalTime: "PT30M",
    recipeYield: "1 serving",
    recipeIngredient: allIngredients,
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${plan.calories} calories`,
      proteinContent: `${plan.protein} g`,
      carbohydrateContent: `${plan.carbs} g`,
      fatContent: `${plan.fat} g`,
    },
    recipeCategory: isEn ? "Meal Plan" : "식단 플랜",
    recipeCuisine: isEn ? "Korean" : "한식",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fitness Guide", item: `${siteUrl}${prefix}/guide` },
        { "@type": "ListItem", position: 2, name: "Nutrition Guide", item: `${siteUrl}${prefix}/guide/nutrition` },
        { "@type": "ListItem", position: 3, name: isEn ? "Meal Plans" : "식단 추천", item: `${siteUrl}${prefix}/guide/nutrition/meal-plans` },
        { "@type": "ListItem", position: 4, name: title },
      ],
    },
  ];

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href={`${prefix}/guide/nutrition`} className="hover:text-gray-800 transition-colors">
            Nutrition Guide
          </Link>
          <span>/</span>
          <Link href={`${prefix}/guide/nutrition/meal-plans`} className="hover:text-gray-800 transition-colors">
            {isEn ? "Meal Plans" : "식단 추천"}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate max-w-[200px]">{title}</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>

        {/* Macros */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-800">{plan.calories}</p>
            <p className="text-xs text-gray-500">kcal</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-800">{plan.protein}g</p>
            <p className="text-xs text-gray-500">{isEn ? "Protein" : "단백질"}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-800">{plan.carbs}g</p>
            <p className="text-xs text-gray-500">{isEn ? "Carbs" : "탄수화물"}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-800">{plan.fat}g</p>
            <p className="text-xs text-gray-500">{isEn ? "Fat" : "지방"}</p>
          </div>
        </div>

        {/* Meals */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {isEn ? "Meals" : "식단 구성"}
        </h2>
        <div className="space-y-4 mb-8">
          {plan.meals.map((meal, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">{isEn ? meal.nameEn : meal.name}</h3>
              <ul className="space-y-1.5">
                {(isEn ? meal.itemsEn : meal.items).map((item, itemIdx) => (
                  <li key={itemIdx} className="text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0" />
                    <Link
                      href={`${prefix}/guide/nutrition?q=${encodeURIComponent(item.split("(")[0].split(",")[0].trim())}`}
                      className="text-gray-600 hover:text-[var(--corevia-primary)] hover:underline transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tags */}
        {plan.tags && (
          <div className="flex flex-wrap gap-2 mb-8">
            {(isEn ? plan.tagsEn ?? plan.tags : plan.tags).map((tag) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <section className="rounded-2xl overflow-hidden border border-gray-200">
          <img
            src={isEn ? "/cta-banner-en.png" : "/cta-banner.png"}
            alt="CoreVia Fitness"
            className="w-full h-auto"
          />
          <div className="bg-white px-6 py-5 text-center">
            <p className="text-lg font-bold text-gray-800 mb-1">
              {isEn
                ? "Get personalized meal plans in the app"
                : "앱에서 나만의 맞춤 식단을 받아보세요"}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              {isEn
                ? "AI-powered nutrition tracking and personalized coaching."
                : "AI 영양 분석과 맞춤 코칭을 경험해보세요."}
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://apps.apple.com/app/corevia-fitness/id6753667196"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--corevia-primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.808 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                Google Play
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
