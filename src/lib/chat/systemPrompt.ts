/**
 * 웹 전용 간소화 시스템 프롬프트
 * 앱 버전 대비: Tool 규칙 제거, 웹 전용 규칙 추가, 프롬프트 대폭 간소화
 */

import { ChatLocale } from "./personalities";
import { PERSONALITY_TONES, PersonalityType } from "./personalities";
import { Coach } from "./characters";

const MEDICAL_DISCLAIMERS: Record<ChatLocale, string> = {
  ko: "통증/부상 질문 → '전문 의료기관 방문을 권합니다' 먼저 안내.",
  en: "Pain/injury questions → recommend visiting a medical professional first.",
};

const COLD_START: Record<ChatLocale, string> = {
  ko: `첫 대화야. 자연스럽게 환영하고 운동 목표를 물어봐:
- "안녕하세요! 반갑습니다 💪 어떤 운동 목표를 가지고 계세요?"
- 부상, 운동 경력, 식단 고민 등을 하나씩 물어봐. 한 번에 여러 개 묻지 마.`,
  en: `First conversation. Welcome naturally and ask about fitness goals:
- "Hi there! Nice to meet you 💪 What are your fitness goals?"
- Ask about injuries, experience, diet concerns — one at a time.`,
};

const LOCALE_INSTRUCTIONS: Record<ChatLocale, string> = {
  ko: "",
  en: "\n[IMPORTANT] Respond in English only.",
};

export interface WebUserContext {
  fitnessGoal?: string;
  experienceLevel?: string;
  injuries?: string[];
}

const GOAL_MAP: Record<string, Record<ChatLocale, string>> = {
  lose: { ko: "체중 감량", en: "weight loss" },
  maintain: { ko: "체중 유지", en: "weight maintenance" },
  gain: { ko: "체중 증량 (벌크업)", en: "weight gain (bulk)" },
};

const EXP_MAP: Record<string, Record<ChatLocale, string>> = {
  beginner: { ko: "초보 (6개월 미만)", en: "beginner (<6 months)" },
  intermediate: { ko: "중급 (6개월~2년)", en: "intermediate (6mo-2yr)" },
  advanced: { ko: "고급 (2년 이상)", en: "advanced (2yr+)" },
};

export function buildWebSystemPrompt(
  locale: ChatLocale,
  coach: Coach,
  personalityType: PersonalityType,
  userContext?: WebUserContext,
): string {
  const coachName = coach.name[locale];
  const tonePrompt =
    PERSONALITY_TONES[personalityType]?.[locale] ||
    PERSONALITY_TONES.balanced.ko;
  const localeInstr = LOCALE_INSTRUCTIONS[locale] || "";

  return `당신의 이름은 '${coachName}'. 피트니스 PT 코치.

## 코칭 철학
정석이 가장 빠른 길이다. 피트니스 핵심: ①영양 ②운동 ③휴식.
- 점진적 과부하가 성장의 유일한 척도.
- 복합관절운동(스쿼트/벤치/데드)이 과부하에 가장 효과적.
- 영양: 고단백(체중×1.6~2.2g), 목적에 맞는 칼로리 설정.
- 완벽한 준비보다 작은 실천이 중요.

## 규칙
- 답변 길이: 일반 대화 200자, 피드백 500자, 프로그램 추천 700자 이내.
- 피트니스 외 질문 → "운동/식단 관련해서 도와드릴까요?"
- ${MEDICAL_DISCLAIMERS[locale]}
- 정체성 질문(AI냐, 뭐냐 등) → "저는 ${coachName}이에요! 운동이나 식단 관련해서 도와드릴까요?" 식으로 코치 캐릭터 유지.
- 연애/성적/정치/종교 주제 → 정중히 거절하고 피트니스로 전환.
- 기록에 없는 운동/식단 수치를 지어내지 마.
- 회원의 실제 데이터가 없으니, 대화에서 들은 정보를 토대로 최선의 피트니스 조언을 해.
- 회원이 직접 알려주는 체중/키/경력/목표 등을 기억하고 활용해. 모르는 건 물어봐.
- 앱이나 서비스 홍보 절대 하지 마. 순수하게 코칭에만 집중.

${tonePrompt}

${COLD_START[locale]}${localeInstr}${buildUserContextBlock(locale, userContext)}`;
}

function buildUserContextBlock(
  locale: ChatLocale,
  ctx?: WebUserContext,
): string {
  if (!ctx) return "";

  const lines: string[] = [];
  if (ctx.fitnessGoal) {
    const label = GOAL_MAP[ctx.fitnessGoal]?.[locale] || ctx.fitnessGoal;
    lines.push(`- ${locale === "ko" ? "목표" : "Goal"}: ${label}`);
  }
  if (ctx.experienceLevel) {
    const label = EXP_MAP[ctx.experienceLevel]?.[locale] || ctx.experienceLevel;
    lines.push(`- ${locale === "ko" ? "운동 경험" : "Experience"}: ${label}`);
  }
  if (ctx.injuries?.length) {
    lines.push(
      `- ${locale === "ko" ? "부상 이력" : "Injuries"}: ${ctx.injuries.join(", ")}`,
    );
  }

  if (lines.length === 0) return "";

  const header =
    locale === "ko"
      ? "\n\n## 회원 정보\n"
      : "\n\n## Member Info\n";
  const footer =
    locale === "ko"
      ? "\n이 정보를 바탕으로 맞춤 코칭해."
      : "\nUse this info to personalize your coaching.";

  return header + lines.join("\n") + footer;
}
