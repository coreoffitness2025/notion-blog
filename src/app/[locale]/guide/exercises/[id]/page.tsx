import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import {
  getExerciseById,
  getAllExerciseIds,
  EXERCISE_DATABASE,
  type Exercise,
} from "@/data/exerciseDatabase";
import { notFound } from "next/navigation";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

// ── Static Params: 99 exercises ──
export function generateStaticParams() {
  return getAllExerciseIds().map((id) => ({ id }));
}

// ── SEO Metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const exercise = getExerciseById(id);
  if (!exercise) return { title: "Not Found" };

  const isKo = locale === "ko";
  const name = isKo ? exercise.name : exercise.nameEn;
  const muscles = isKo
    ? exercise.muscles.primary.join(", ")
    : exercise.musclesEn.primary.join(", ");
  const path = `/guide/exercises/${id}`;
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  const diffLabel = isKo
    ? { beginner: "초급", intermediate: "중급", advanced: "고급" }
    : { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" };

  return {
    title: isKo
      ? `${name} 운동 방법, 올바른 자세 & 타겟 근육 | CoreVia`
      : `${name} - How to, Proper Form & Target Muscles | CoreVia`,
    description: isKo
      ? `${name} 운동의 올바른 자세와 단계별 운동 방법을 확인하세요. 타겟 근육: ${muscles}. 난이도: ${diffLabel[exercise.difficulty]}. 무료 운동 가이드.`
      : `Learn proper ${name} form with step-by-step instructions. Target muscles: ${muscles}. Difficulty: ${diffLabel[exercise.difficulty]}. Free exercise guide.`,
    keywords: isKo
      ? [name, `${name} 자세`, `${name} 운동법`, ...exercise.muscles.primary, exercise.category]
      : [name, `${name} form`, `${name} technique`, ...exercise.musclesEn.primary, exercise.categoryEn],
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: `${siteUrl}/guide/exercises/${id}`,
        en: `${siteUrl}/en/guide/exercises/${id}`,
      },
    },
    openGraph: {
      title: isKo
        ? `${name} 운동 가이드 | CoreVia`
        : `${name} Exercise Guide | CoreVia`,
      description: isKo
        ? `${name}의 올바른 자세, 타겟 근육, 운동 팁`
        : `${name} proper form, target muscles & tips`,
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "article",
    },
  };
}

// ── JSON-LD: HowTo Schema ──
function getJsonLd(exercise: Exercise, locale: string) {
  const isKo = locale === "ko";
  const name = isKo ? exercise.name : exercise.nameEn;
  const instructions = isKo ? exercise.instructions : exercise.instructionsEn;
  const tips = isKo ? exercise.tips : exercise.tipsEn;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: isKo ? `${name} 운동 방법` : `How to do ${name}`,
    description: isKo
      ? `${name} 운동의 올바른 자세와 단계별 가이드`
      : `Step-by-step guide for proper ${name} form`,
    step: instructions.map((text, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      text,
    })),
    supply: exercise.equipment.map((eq) => ({
      "@type": "HowToSupply",
      name: eq,
    })),
    tip: tips.map((t) => ({
      "@type": "HowToTip",
      text: t,
    })),
  };
}

// ── Related exercises (same body part) ──
function getRelatedExercises(exercise: Exercise, limit = 4): Exercise[] {
  return EXERCISE_DATABASE.filter(
    (e) =>
      e.id !== exercise.id &&
      e.bodyPart.some((bp) => exercise.bodyPart.includes(bp))
  ).slice(0, limit);
}

// ── Page Component ──
export default async function ExerciseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const exercise = getExerciseById(id);
  if (!exercise) notFound();

  const dict = getDictionary(locale);
  const t = dict.guideSubpages.exercises;
  const isEn = locale === "en";
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const name = isEn ? exercise.nameEn : exercise.name;
  const secondaryName = isEn ? exercise.name : exercise.nameEn;
  const instructions = isEn ? exercise.instructionsEn : exercise.instructions;
  const tips = isEn ? exercise.tipsEn : exercise.tips;
  const primaryMuscles = isEn ? exercise.musclesEn.primary : exercise.muscles.primary;
  const secondaryMuscles = isEn ? exercise.musclesEn.secondary : exercise.muscles.secondary;
  const category = isEn ? exercise.categoryEn : exercise.category;
  const related = getRelatedExercises(exercise);

  const difficultyLabel = t.difficulty[exercise.difficulty as keyof typeof t.difficulty] || exercise.difficulty;
  const difficultyColor = {
    beginner: "bg-green-50 text-green-700 border-green-200",
    intermediate: "bg-blue-50 text-blue-700 border-blue-200",
    advanced: "bg-red-50 text-red-700 border-red-200",
  }[exercise.difficulty] || "bg-gray-100 text-gray-500";

  const equipmentLabels: Record<string, { ko: string; en: string }> = {
    barbell: { ko: "바벨", en: "Barbell" },
    dumbbell: { ko: "덤벨", en: "Dumbbell" },
    machine: { ko: "머신", en: "Machine" },
    cable: { ko: "케이블", en: "Cable" },
    bench: { ko: "벤치", en: "Bench" },
    "pull-up-bar": { ko: "풀업 바", en: "Pull-up Bar" },
    treadmill: { ko: "트레드밀", en: "Treadmill" },
    cycling: { ko: "사이클", en: "Cycling Machine" },
    elliptical: { ko: "일립티컬", en: "Elliptical" },
    rowing: { ko: "로잉 머신", en: "Rowing Machine" },
    stepmill: { ko: "스텝밀", en: "Stepmill" },
    "ez-bar": { ko: "EZ 바", en: "EZ Bar" },
    "smith-machine": { ko: "스미스 머신", en: "Smith Machine" },
    "leg-press-machine": { ko: "레그프레스 머신", en: "Leg Press Machine" },
    "hack-squat-machine": { ko: "핵스쿼트 머신", en: "Hack Squat Machine" },
    "lat-pulldown-machine": { ko: "랫 풀다운 머신", en: "Lat Pulldown Machine" },
    "cable-machine": { ko: "케이블 머신", en: "Cable Machine" },
    "pec-deck": { ko: "펙덱 머신", en: "Pec Deck Machine" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(exercise, locale)) }}
      />
      <main className="min-h-screen bg-[var(--corevia-bg)]">
        {/* Breadcrumb */}
        <nav className="border-b border-gray-200 py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
            <Link href={`${prefix}/guide`} className="hover:text-gray-800 transition-colors">
              {dict.nav.guide}
            </Link>
            <span>/</span>
            <Link
              href={`${prefix}/guide/exercises`}
              className="hover:text-gray-800 transition-colors"
            >
              {t.title}
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">{name}</span>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">{name}</h1>
            <p className="text-lg text-gray-500 mb-4">{secondaryName}</p>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${difficultyColor}`}>
                {difficultyLabel}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {category}
              </span>
            </div>
          </div>

          {/* Target Muscles */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {isEn ? "Target Muscles" : "타겟 근육"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {primaryMuscles.map((muscle) => (
                <span
                  key={muscle}
                  className="px-3 py-1.5 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-sm font-medium"
                >
                  {muscle} {isEn ? "(primary)" : "(주동근)"}
                </span>
              ))}
              {secondaryMuscles.map((muscle) => (
                <span
                  key={muscle}
                  className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </section>

          {/* Equipment */}
          {exercise.equipment.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {isEn ? "Equipment" : "필요 장비"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {exercise.equipment.map((eq) => (
                  <span
                    key={eq}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200"
                  >
                    {equipmentLabels[eq]?.[isEn ? "en" : "ko"] || eq}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Instructions */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {isEn ? "How to Perform" : "운동 방법"}
            </h2>
            <ol className="space-y-3">
              {instructions.map((instruction, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed pt-0.5">{instruction}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Tips */}
          <section className="mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {isEn ? "Tips" : "팁"}
              </h2>
              <ul className="space-y-2">
                {tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700">
                    <span className="text-[var(--corevia-primary)] flex-shrink-0">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* App CTA (instead of trainerTips) */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-gray-800 mb-2">
                {isEn
                  ? "Want expert trainer tips for this exercise?"
                  : "이 운동의 전문 트레이너 팁이 궁금하다면?"}
              </p>
              <p className="text-gray-600 mb-4">
                {isEn
                  ? "Get personalized coaching tips backed by research in the CoreVia app."
                  : "CoreVia 앱에서 논문 기반 전문 트레이너 팁을 확인하세요."}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://apps.apple.com/app/corevia-fitness/id6739446554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </section>

          {/* Related Exercises */}
          {related.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {isEn ? "Related Exercises" : "관련 운동"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`${prefix}/guide/exercises/${rel.id}`}
                    className="bg-white border border-gray-100 rounded-xl p-4 hover:border-[var(--corevia-primary)]/30 transition-all"
                  >
                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                      {isEn ? rel.nameEn : rel.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {(isEn ? rel.musclesEn.primary : rel.muscles.primary).slice(0, 2).join(", ")}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
