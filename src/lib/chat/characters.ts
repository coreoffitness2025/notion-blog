/**
 * 8 캐릭터 정의 (4성격 x 2성별)
 * 이미지: public/coach/ 기존 PNG 활용
 */

import { PersonalityType, ChatLocale } from "./personalities";

export interface Character {
  id: string;
  personalityType: PersonalityType;
  gender: "male" | "female";
  name: Record<ChatLocale, string>;
  description: Record<ChatLocale, string>;
  specialty: Record<ChatLocale, string>;
  cardImage: string;
  avatarImage: string;
}

export const CHARACTERS: Character[] = [
  {
    id: "tough-male",
    personalityType: "tough",
    gender: "male",
    name: { ko: "코치 케이", en: "Coach Kay" },
    description: {
      ko: "해병대 출신. 변명 듣는 거 싫어합니다.",
      en: "Ex-marine. Hates excuses.",
    },
    specialty: { ko: "강도/규율", en: "Intensity & Discipline" },
    cardImage: "/coach/male_3_front.png",
    avatarImage: "/coach/male_3_front.png",
  },
  {
    id: "tough-female",
    personalityType: "tough",
    gender: "female",
    name: { ko: "코치 키라", en: "Coach Kira" },
    description: {
      ko: "결과로 말해요. 감성 따위 필요 없죠.",
      en: "Results speak. No room for feelings.",
    },
    specialty: { ko: "강도/규율", en: "Intensity & Discipline" },
    cardImage: "/coach/female_3_front.png",
    avatarImage: "/coach/female_3_face.png",
  },
  {
    id: "cheerful-male",
    personalityType: "cheerful",
    gender: "male",
    name: { ko: "코치 솔", en: "Coach Sol" },
    description: {
      ko: "작은 성공도 같이 기뻐하는 따뜻한 코치",
      en: "Celebrates every small win with you",
    },
    specialty: { ko: "초보 친화/습관", en: "Beginner Friendly & Habits" },
    cardImage: "/coach/male_4_front.png",
    avatarImage: "/coach/male_4_front.png",
  },
  {
    id: "cheerful-female",
    personalityType: "cheerful",
    gender: "female",
    name: { ko: "코치 제인", en: "Coach Jane" },
    description: {
      ko: "넌 이미 잘하고 있어! 같이 더 높이 가자!",
      en: "You're already doing great! Let's go higher!",
    },
    specialty: { ko: "초보 친화/습관", en: "Beginner Friendly & Habits" },
    cardImage: "/coach/female_4_front.png",
    avatarImage: "/coach/female_4_face.png",
  },
  {
    id: "cool-male",
    personalityType: "cool",
    gender: "male",
    name: { ko: "코치 렉스", en: "Coach Lex" },
    description: {
      ko: "감정은 빼고 데이터로 말합니다.",
      en: "No emotions. Just data.",
    },
    specialty: { ko: "데이터 기반", en: "Data-Driven" },
    cardImage: "/coach/male_5_front.png",
    avatarImage: "/coach/male_5_front.png",
  },
  {
    id: "cool-female",
    personalityType: "cool",
    gender: "female",
    name: { ko: "코치 노바", en: "Coach Nova" },
    description: {
      ko: "수치가 거짓말을 안 해요. 팩트만 봅니다.",
      en: "Numbers don't lie. Facts only.",
    },
    specialty: { ko: "데이터 기반", en: "Data-Driven" },
    cardImage: "/coach/female_5_front.png",
    avatarImage: "/coach/female_5_front.png",
  },
  {
    id: "balanced-male",
    personalityType: "balanced",
    gender: "male",
    name: { ko: "코치 카이", en: "Coach Kai" },
    description: {
      ko: "적당히 밀고, 적당히 쉬어갑시다.",
      en: "Push when needed, rest when deserved.",
    },
    specialty: { ko: "올라운드 PT", en: "All-Round PT" },
    cardImage: "/coach/male_3_side.png",
    avatarImage: "/coach/male_3_front.png",
  },
  {
    id: "balanced-female",
    personalityType: "balanced",
    gender: "female",
    name: { ko: "코치 미아", en: "Coach Mia" },
    description: {
      ko: "균형 잡힌 코칭. 실력과 공감 모두 챙깁니다.",
      en: "Balanced coaching. Skills and empathy, both.",
    },
    specialty: { ko: "올라운드 PT", en: "All-Round PT" },
    cardImage: "/coach/female_3_side.png",
    avatarImage: "/coach/female_3_face.png",
  },
];

export function getCharacterById(id: string): Character | undefined {
  return CHARACTERS.find((c) => c.id === id);
}

export function getCharacterIds(): string[] {
  return CHARACTERS.map((c) => c.id);
}
