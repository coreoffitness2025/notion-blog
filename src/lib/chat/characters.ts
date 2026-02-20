/**
 * 코치 2명 (케이/제인) × 성격 4종 = 8 채팅 옵션
 * 이미지: public/coach/ 기존 PNG (level 3 = 기본 외형)
 */

import { PersonalityType, ChatLocale } from "./personalities";

export interface Coach {
  gender: "male" | "female";
  name: Record<ChatLocale, string>;
  description: Record<ChatLocale, string>;
  cardImage: string;
  avatarImage: string;
}

export const COACHES: Record<"male" | "female", Coach> = {
  male: {
    gender: "male",
    name: { ko: "코치 케이", en: "Coach Kay" },
    description: {
      ko: "선수 출신, 실전 경험으로 코칭합니다",
      en: "Former athlete, coaching from real experience",
    },
    cardImage: "/coach/male_3_front.png",
    avatarImage: "/coach/male_3_front.png",
  },
  female: {
    gender: "female",
    name: { ko: "코치 제인", en: "Coach Jane" },
    description: {
      ko: "체계적이고 따뜻한 코칭 스타일",
      en: "Systematic and warm coaching style",
    },
    cardImage: "/coach/female_3_front.png",
    avatarImage: "/coach/female_3_face.png",
  },
};

export interface PersonalityOption {
  type: PersonalityType;
  emoji: string;
  label: Record<ChatLocale, string>;
  shortDesc: Record<ChatLocale, string>;
}

export const PERSONALITIES: PersonalityOption[] = [
  {
    type: "tough",
    emoji: "😤",
    label: { ko: "독설형", en: "Tough" },
    shortDesc: { ko: "직설적 자극으로 동기부여", en: "Motivation through challenge" },
  },
  {
    type: "cheerful",
    emoji: "🤗",
    label: { ko: "격려형", en: "Cheerful" },
    shortDesc: { ko: "작은 성과도 함께 축하", en: "Celebrates every small win" },
  },
  {
    type: "cool",
    emoji: "🧊",
    label: { ko: "냉정형", en: "Analytical" },
    shortDesc: { ko: "데이터와 팩트로 소통", en: "Data and facts only" },
  },
  {
    type: "balanced",
    emoji: "⚖️",
    label: { ko: "밸런스형", en: "Balanced" },
    shortDesc: { ko: "적당히 밀고 적당히 쉬어가기", en: "Push and rest in balance" },
  },
];

/** characterId = "male-tough", "female-cheerful" 등 */
export function parseCharacterId(id: string): {
  gender: "male" | "female";
  personality: PersonalityType;
} | null {
  const [gender, personality] = id.split("-");
  if (
    (gender === "male" || gender === "female") &&
    ["tough", "cheerful", "cool", "balanced"].includes(personality)
  ) {
    return { gender: gender as "male" | "female", personality: personality as PersonalityType };
  }
  return null;
}

export function getCoach(gender: "male" | "female"): Coach {
  return COACHES[gender];
}

export function getValidCharacterIds(): string[] {
  const genders: Array<"male" | "female"> = ["male", "female"];
  const types: PersonalityType[] = ["tough", "cheerful", "cool", "balanced"];
  return genders.flatMap((g) => types.map((t) => `${g}-${t}`));
}
