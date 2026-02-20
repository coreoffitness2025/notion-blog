/**
 * 입력 정제 + 응답 필터
 * 포팅 소스: functions/src/agentCoach/utils/sanitize.ts
 */

const BLOCKED_INPUT_PATTERNS = [
  // 직접적 프롬프트 오버라이드 시도
  /ignore\s+(all\s+)?previous\s+instructions/gi,
  /disregard\s+(all\s+)?prior/gi,
  /forget\s+(your|all|the)\s+instructions/gi,
  /override\s+(your|system|all)\s+(instructions|rules|prompt)/gi,
  /you\s+are\s+now\s+a/gi,
  /act\s+as\s+if\s+you\s+(are|were)/gi,
  /pretend\s+(you\s+are|to\s+be)/gi,
  /new\s+instructions?\s*:/gi,
  // 시스템 프롬프트 탈취 시도
  /system\s*prompt/gi,
  /reveal\s+your\s+(prompt|instructions|rules)/gi,
  /show\s+me\s+your\s+(instructions|rules|prompt|system)/gi,
  /what\s+are\s+your\s+(rules|instructions|guidelines)/gi,
  /repeat\s+(your|the)\s+(system|initial)\s+(prompt|message|instructions)/gi,
  /print\s+(your|the)\s+system\s*(prompt|message)/gi,
  // 역할 전환 시도
  /\bDAN\b/g,
  /jailbreak/gi,
  /do\s+anything\s+now/gi,
  // 비영어 인젝션
  /你是/gi,
  /あなたは今から/gi,
  // 구분자 인젝션
  /---+\s*system/gi,
  /\[INST\]/gi,
  /<<SYS>>/gi,
];

/** 사용자 메시지 정제 (최대 2000자 + 인젝션 필터) */
export function sanitizeUserMessage(message: string): string {
  let content = message.slice(0, 2000);
  for (const pattern of BLOCKED_INPUT_PATTERNS) {
    content = content.replace(pattern, "");
  }
  return content.trim();
}

const BLOCKED_OUTPUT_TERMS = [
  "GPT",
  "ChatGPT",
  "OpenAI",
  "Claude",
  "Anthropic",
  "Gemini",
  "Google AI",
  "Google DeepMind",
  "AI 모델",
  "언어모델",
  "LLM",
  "인공지능 모델",
  "language model",
  "AI model",
  "large language model",
  "GPT-4",
  "GPT-3",
  "gpt-4o",
  "gpt-4o-mini",
];

/** 응답 금지어 필터링 */
export function filterResponse(response: string): string {
  let filtered = response;
  for (const term of BLOCKED_OUTPUT_TERMS) {
    const regex = new RegExp(term, "gi");
    filtered = filtered.replace(regex, "코어비아 코치");
  }
  return filtered;
}
