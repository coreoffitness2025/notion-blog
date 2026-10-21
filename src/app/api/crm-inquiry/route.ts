import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase/admin";

// 센터 CRM 베타 도입 문의 (2026-10-21 대표 "문의 버튼을 만들어서 도입 원하는 지 파악")
// crmInquiries/{id} 에 저장만 한다 — 대표 보고는 허브(ax/engagement_alerts.py)가 매시간 텔레그램으로.
// 문의자에게 자동 답장 없음(CS = 메일, policy/cs-channels). 규칙은 기본 차단이라 서버(Admin)만 쓴다.

const VERTICALS = ["fitness", "pilates", "rehab", "daycare", "other"];
const SIZES = ["~50", "50-150", "150-300", "300+", ""];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const str = (v: unknown, n: number) => String(v ?? "").trim().slice(0, n);

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad-request" }, { status: 400 });
  }
  // 봇 함정 칸 — 사람은 안 보이는 칸이라 비어 있어야 한다. 채워져 있으면 저장 없이 성공처럼 응답
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const centerName = str(body.centerName, 60);
  const contactName = str(body.contactName, 30);
  const email = str(body.email, 120);
  const phone = str(body.phone, 20).replace(/[^\d-]/g, "");
  const vertical = VERTICALS.includes(String(body.vertical)) ? String(body.vertical) : "other";
  const size = SIZES.includes(String(body.size ?? "")) ? String(body.size ?? "") : "";
  const message = str(body.message, 1500);
  if (!centerName || !contactName || !EMAIL.test(email)) return NextResponse.json({ error: "required" }, { status: 400 });
  if (body.agree !== true) return NextResponse.json({ error: "consent" }, { status: 400 });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  const ipHash = createHash("sha256").update(`crm-inquiry:${ip}`).digest("hex").slice(0, 32);

  try {
    // 같은 곳에서 10분에 3번까지
    const rateRef = adminDb.doc(`crmInquiryRate/${ipHash}`);
    const now = Date.now();
    const limited = await adminDb.runTransaction(async (tx) => {
      const r = await tx.get(rateRef);
      const hits = ((r.get("hits") as number[] | undefined) ?? []).filter((t) => now - t < 10 * 60e3);
      if (hits.length >= 3) return true;
      tx.set(rateRef, { hits: [...hits, now] });
      return false;
    });
    if (limited) return NextResponse.json({ error: "too-many" }, { status: 429 });

    await adminDb.collection("crmInquiries").add({
      centerName, contactName, email, phone, vertical, size, message,
      consent: { agreed: true, version: "2026-10-21", at: FieldValue.serverTimestamp() },
      status: "new", notified: false, source: str(body.source, 40) || "site-products-crm",
      ipHash, userAgent: str(req.headers.get("user-agent"), 200),
      createdAt: FieldValue.serverTimestamp(),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[crm-inquiry]", e);
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
