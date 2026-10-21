"use client";

import { useState } from "react";

// 센터 CRM 베타 도입 문의 폼 — /api/crm-inquiry 로 보낸다. 개인정보 수집·이용 동의 필수
const VERTICALS = [
  ["fitness", "피트니스·PT샵"],
  ["pilates", "필라테스·요가"],
  ["daycare", "주간보호·요양"],
  ["rehab", "재활·교정센터"],
  ["other", "기타"],
] as const;
const SIZES = [
  ["", "선택 안 함"],
  ["~50", "50명 이하"],
  ["50-150", "50~150명"],
  ["150-300", "150~300명"],
  ["300+", "300명 넘음"],
] as const;

const input =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] text-gray-800 placeholder:text-gray-400 focus:border-[var(--corevia-primary)] focus:outline-none";

export default function CrmInquiryForm() {
  const [f, setF] = useState({ centerName: "", contactName: "", email: "", phone: "", vertical: "fitness", size: "", message: "", website: "" });
  const [agree, setAgree] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (!f.centerName.trim() || !f.contactName.trim() || !f.email.trim()) { setErr("센터 이름·담당자·이메일을 넣어 주세요."); return; }
    if (!agree) { setErr("개인정보 수집·이용에 동의해 주세요."); return; }
    setState("sending");
    try {
      const r = await fetch("/api/crm-inquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...f, agree: true }) });
      if (r.ok) { setState("done"); return; }
      const j = await r.json().catch(() => ({}));
      setErr(j.error === "too-many" ? "잠시 뒤 다시 보내 주세요." : j.error === "required" ? "이메일 주소를 확인해 주세요." : "보내지 못했어요. support@coreviafitness.com 으로 메일 주셔도 돼요.");
      setState("error");
    } catch {
      setErr("보내지 못했어요. support@coreviafitness.com 으로 메일 주셔도 돼요.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 text-center">
        <p className="text-xl font-bold text-gray-800 mb-2">문의를 받았어요</p>
        <p className="text-gray-500">남겨 주신 이메일로 베타 참여 방법을 안내해 드릴게요.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-gray-700">센터 이름 *</span>
          <input className={input} value={f.centerName} onChange={set("centerName")} maxLength={60} placeholder="예: OO 피트니스" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-gray-700">업종 *</span>
          <select className={input} value={f.vertical} onChange={set("vertical")}>
            {VERTICALS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-gray-700">담당자 이름 *</span>
          <input className={input} value={f.contactName} onChange={set("contactName")} maxLength={30} />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-gray-700">이메일 *</span>
          <input className={input} type="email" value={f.email} onChange={set("email")} maxLength={120} placeholder="답변을 받을 주소" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-gray-700">연락처 (선택)</span>
          <input className={input} type="tel" value={f.phone} onChange={set("phone")} maxLength={20} placeholder="010-0000-0000" />
        </label>
        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-gray-700">이용 회원 수 (선택)</span>
          <select className={input} value={f.size} onChange={set("size")}>
            {SIZES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="text-sm font-semibold text-gray-700">궁금한 점 (선택)</span>
        <textarea className={`${input} min-h-[110px]`} value={f.message} onChange={set("message")} maxLength={1500} placeholder="지금 쓰는 프로그램, 꼭 필요한 기능, 도입 희망 시기 등을 적어 주세요." />
      </label>
      {/* 봇 함정 — 화면에 안 보인다 */}
      <input type="text" name="website" value={f.website} onChange={set("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="rounded-xl bg-gray-50 p-4 text-[13px] leading-relaxed text-gray-500">
        <p className="font-semibold text-gray-700 mb-1">개인정보 수집·이용 안내</p>
        <p>수집 항목: 센터 이름, 업종, 담당자 이름, 이메일, 연락처(선택), 이용 회원 수(선택), 문의 내용</p>
        <p>이용 목적: 센터 CRM 베타 도입 상담과 안내</p>
        <p>보관 기간: 상담이 끝나면 지체 없이 파기하며, 최대 1년까지 보관합니다.</p>
        <p>동의하지 않으셔도 되며, 이 경우 문의를 보낼 수 없습니다. 메일(support@coreviafitness.com)로도 문의하실 수 있습니다.</p>
        <label className="mt-3 flex items-center gap-2 text-gray-700 cursor-pointer">
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="h-4 w-4 accent-[var(--corevia-primary)]" />
          <span className="font-medium">위 내용에 동의합니다 (필수)</span>
        </label>
      </div>
      {err && <p className="text-sm text-red-500">{err}</p>}
      <button type="submit" disabled={state === "sending"} className="w-full md:w-auto md:justify-self-start px-8 py-3.5 bg-[var(--corevia-primary)] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50">
        {state === "sending" ? "보내는 중…" : "도입 문의 보내기"}
      </button>
    </form>
  );
}
