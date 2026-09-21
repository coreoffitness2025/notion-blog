/**
 * 본문에 실제로 보이는 FAQ 섹션에서 질문·답을 뽑는다 (2026-09-21).
 * 블로그 템플릿(blog-writer §8-3)이 모든 글에 "FAQ 3개"를 H3 물음표 제목으로 두게 돼 있어,
 * 화면에 없는 내용을 지어내지 않고 그대로 FAQPage 구조화 데이터로 내보낼 수 있다.
 * (구조화 데이터가 가시 텍스트와 달라지면 인용 신뢰를 잃는다 — 그래서 본문에서만 뽑는다)
 */
export interface FaqPair {
  q: string;
  a: string;
}

export function extractFaq(md: string | undefined): FaqPair[] {
  if (!md) return [];
  const lines = md.split("\n");
  const out: FaqPair[] = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^###\s+(.+\?)\s*$/);
    if (!m) continue;
    const q = m[1].trim();
    const buf: string[] = [];
    for (let j = i + 1; j < lines.length; j++) {
      if (/^#{1,6}\s/.test(lines[j]) || /^---\s*$/.test(lines[j])) break;
      buf.push(lines[j]);
    }
    const a = buf
      .join("\n")
      .replace(/\[(\d+)\]/g, "")                       // 각주 번호
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")         // 링크 → 글자만
      .replace(/[*_`>]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (a.length >= 20) out.push({ q, a });
  }
  return out;
}
