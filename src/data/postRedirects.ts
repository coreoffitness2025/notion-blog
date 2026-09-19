// 교체된 블로그 글의 옛 slug → 새 slug. 옛 글이 사라진 뒤에만 동작(글이 있으면 그 글을 그대로 보여줌).
// 2026-09-20: 2025-12 "초보자가 가슴/등 운동을 해도 팔에만…" → back-day-arm-pump
export const POST_REDIRECTS: Record<string, string> = {
  "초보자가-가슴-등-운동을-해도-팔에만-자극이-오는-이유-feat-운동-후-팔-아픈-이유": "back-day-arm-pump",
};
