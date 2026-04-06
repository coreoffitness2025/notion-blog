/**
 * sync-exercises.ts
 * 앱(coreviafitnesstracking)의 운동 DB를 홈페이지 포맷으로 변환
 *
 * - trainerTips 제거 (유료 기능)
 * - Japanese 필드 제거 (홈페이지는 ko/en만)
 * - movementPattern/fatigueRating/substitutes 제거 (앱 전용)
 * - musclesEn/categoryEn 매핑 추가
 *
 * Usage: pnpm tsx scripts/sync-exercises.ts
 */

import fs from "fs";
import path from "path";

// ── 근육명 한→영 매핑 (홈페이지 기존 38개 + 앱 추가 6개) ──
const MUSCLE_NAME_MAP: Record<string, string> = {
  "광배근": "Latissimus dorsi",
  "내전근": "Adductors",
  "능형근": "Rhomboids",
  "다리": "Legs",
  "대퇴사두근": "Quadriceps",
  "대흉근": "Pectoralis major",
  "대흉근 상부": "Upper pectoralis",
  "대흉근 하부": "Lower pectoralis",
  "둔근": "Glutes",
  "등": "Back",
  "등근육": "Back muscles",
  "복사근": "Obliques",
  "복직근": "Rectus abdominis",
  "복횡근": "Transverse abdominis",
  "삼각근": "Deltoids",
  "삼각근 전면": "Anterior deltoid",
  "삼각근 전체": "All deltoid heads",
  "삼각근 측면": "Lateral deltoid",
  "삼각근 후면": "Posterior deltoid",
  "삼두근": "Triceps",
  "상완근": "Brachialis",
  "상완이두근": "Biceps brachii",
  "승모근": "Trapezius",
  "승모근 상부": "Upper trapezius",
  "승모근 중하부": "Mid-lower trapezius",
  "심폐지구력": "Cardiovascular endurance",
  "어깨": "Shoulders",
  "이두근": "Biceps",
  "전면 삼각근": "Anterior deltoid",
  "전신근육": "Full body",
  "전완근": "Forearms",
  "종아리": "Calves",
  "척추기립근": "Erector spinae",
  "코어": "Core",
  "팔": "Arms",
  "하체 전체": "Full lower body",
  "햄스트링": "Hamstrings",
  "후면 삼각근": "Posterior deltoid",
  // 앱에만 있는 추가 근육명
  "가자미근": "Soleus",
  "비복근": "Gastrocnemius",
  "삼두근 장두": "Triceps long head",
  "이두근 단두": "Biceps short head",
  "이두근 장두": "Biceps long head",
  "중둔근": "Gluteus medius",
};

// ── 카테고리 한→영 매핑 ──
const CATEGORY_MAP: Record<string, string> = {
  "근력": "Strength",
  "맨몸": "Bodyweight",
  "유산소": "Cardio",
};

function translateMuscle(ko: string): string {
  return MUSCLE_NAME_MAP[ko] || ko;
}

function translateCategory(ko: string): string {
  return CATEGORY_MAP[ko] || ko;
}

// ── 앱 TS 파일에서 운동 데이터 추출 (eval 기반) ──
function extractExercisesFromAppTS(filePath: string): any[] {
  const content = fs.readFileSync(filePath, "utf-8");

  // EXERCISE_DATABASE 배열 부분만 추출
  const startMarker = "export const EXERCISE_DATABASE: Exercise[] = [";
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) throw new Error("EXERCISE_DATABASE not found");

  // 배열 끝 찾기 (대괄호 깊이 추적)
  let depth = 0;
  let arrayStart = -1;
  let arrayEnd = -1;

  for (let i = startIdx + startMarker.length - 1; i < content.length; i++) {
    if (content[i] === "[") {
      if (depth === 0) arrayStart = i;
      depth++;
    } else if (content[i] === "]") {
      depth--;
      if (depth === 0) {
        arrayEnd = i + 1;
        break;
      }
    }
  }

  if (arrayStart === -1 || arrayEnd === -1) throw new Error("Could not find array bounds");

  let arrayStr = content.substring(arrayStart, arrayEnd);

  // TS 문법 → JSON 호환 변환
  // 1. 단일 인용부호 → 이중 인용부호 (문자열 내부 제외)
  // 2. trailing commas 제거
  // 3. 프로퍼티명에 인용부호 추가

  // 간단한 방법: eval로 JS 객체 배열 파싱
  // 안전: 로컬 빌드 스크립트, 신뢰할 수 있는 소스
  const fn = new Function(`return ${arrayStr}`);
  return fn();
}

// ── 홈페이지 포맷으로 변환 ──
function transformExercise(app: any): any {
  return {
    id: app.id,
    name: app.name,
    nameEn: app.nameEn,
    category: app.category,
    categoryEn: translateCategory(app.category),
    bodyPart: app.bodyPart,
    equipment: app.equipment,
    difficulty: app.difficulty,
    instructions: app.instructions,
    instructionsEn: app.instructionsEn || app.instructions,
    tips: app.tips,
    tipsEn: app.tipsEn || app.tips,
    muscles: app.muscles,
    musclesEn: {
      primary: (app.muscles?.primary || []).map(translateMuscle),
      secondary: (app.muscles?.secondary || []).map(translateMuscle),
    },
    ...(app.gifUrl ? { gifUrl: app.gifUrl } : {}),
  };
}

// ── TS 출력 생성 ──
function generateTSOutput(exercises: any[]): string {
  const lines: string[] = [];

  lines.push(`export interface Exercise {`);
  lines.push(`  id: string;`);
  lines.push(`  name: string;`);
  lines.push(`  nameEn: string;`);
  lines.push(`  category: string;`);
  lines.push(`  categoryEn: string;`);
  lines.push(`  bodyPart: string[];`);
  lines.push(`  equipment: string[];`);
  lines.push(`  difficulty: 'beginner' | 'intermediate' | 'advanced';`);
  lines.push(`  instructions: string[];`);
  lines.push(`  instructionsEn: string[];`);
  lines.push(`  tips: string[];`);
  lines.push(`  tipsEn: string[];`);
  lines.push(`  muscles: {`);
  lines.push(`    primary: string[];`);
  lines.push(`    secondary: string[];`);
  lines.push(`  };`);
  lines.push(`  musclesEn: {`);
  lines.push(`    primary: string[];`);
  lines.push(`    secondary: string[];`);
  lines.push(`  };`);
  lines.push(`  gifUrl?: string;`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export const EXERCISE_DATABASE: Exercise[] = ${JSON.stringify(exercises, null, 2)};`);
  lines.push(``);

  // 헬퍼 함수
  lines.push(`// ── Helper functions ──`);
  lines.push(``);
  lines.push(`export function getExerciseById(id: string): Exercise | undefined {`);
  lines.push(`  return EXERCISE_DATABASE.find((e) => e.id === id);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export function getAllExerciseIds(): string[] {`);
  lines.push(`  return EXERCISE_DATABASE.map((e) => e.id);`);
  lines.push(`}`);
  lines.push(``);
  lines.push(`export function searchExercises(`);
  lines.push(`  query: string,`);
  lines.push(`  filters?: { bodyPart?: string; difficulty?: string }`);
  lines.push(`): Exercise[] {`);
  lines.push(`  const q = query.toLowerCase().trim();`);
  lines.push(`  return EXERCISE_DATABASE.filter((exercise) => {`);
  lines.push(`    if (filters?.bodyPart && !exercise.bodyPart.includes(filters.bodyPart)) return false;`);
  lines.push(`    if (filters?.difficulty && exercise.difficulty !== filters.difficulty) return false;`);
  lines.push(`    if (!q) return true;`);
  lines.push(`    return (`);
  lines.push(`      exercise.name.toLowerCase().includes(q) ||`);
  lines.push(`      exercise.nameEn.toLowerCase().includes(q)`);
  lines.push(`    );`);
  lines.push(`  });`);
  lines.push(`}`);
  lines.push(``);

  return lines.join("\n");
}

// ── Main ──
async function main() {
  const appDbPath = path.resolve("C:/dev/coreviafitnesstracking/src/data/exerciseDatabase.ts");

  if (!fs.existsSync(appDbPath)) {
    console.error(`App exercise database not found: ${appDbPath}`);
    process.exit(1);
  }

  console.log("[sync-exercises] Reading app exercise database...");
  const appExercises = extractExercisesFromAppTS(appDbPath);
  console.log(`[sync-exercises] Found ${appExercises.length} exercises in app`);

  // trainerTips 누출 검증
  const leakedTips = appExercises.filter(
    (e: any) => e.trainerTips || e.trainerTipsEn || e.trainerTipsJa
  );
  if (leakedTips.length > 0) {
    console.log(`[sync-exercises] Stripping trainerTips from ${leakedTips.length} exercises...`);
  }

  // 변환
  const homepageExercises = appExercises.map(transformExercise);
  console.log(`[sync-exercises] Transformed ${homepageExercises.length} exercises`);

  // 미번역 근육명 체크
  const untranslated = new Set<string>();
  homepageExercises.forEach((e: any) => {
    [...e.musclesEn.primary, ...e.musclesEn.secondary].forEach((m: string) => {
      // 한국어가 그대로 남아있으면 미번역
      if (/[가-힣]/.test(m)) untranslated.add(m);
    });
  });
  if (untranslated.size > 0) {
    console.warn(`[sync-exercises] WARNING: Untranslated muscle names:`, [...untranslated]);
  }

  // 출력
  const outputPath = path.resolve("src/data/exerciseDatabase.ts");
  const output = generateTSOutput(homepageExercises);
  fs.writeFileSync(outputPath, output, "utf-8");
  console.log(`[sync-exercises] Written ${homepageExercises.length} exercises to ${outputPath}`);

  // 최종 검증: trainerTips 문자열이 출력에 없는지
  if (output.includes("trainerTip")) {
    console.error("[sync-exercises] FATAL: trainerTips leaked into output!");
    process.exit(1);
  }
  console.log("[sync-exercises] Verified: no trainerTips in output");
}

main().catch((err) => {
  console.error("[sync-exercises] Error:", err);
  process.exit(1);
});
