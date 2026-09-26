"use client";

/**
 * 전자책 수령 + 사은품 코드 등록 (2026-09-26)
 *
 * 왜 앱이 아니라 여기인가 — 애플 App Store 심사 가이드 3.1.1 은 앱이 **자체 코드로**
 * 기능을 여는 걸 금지한다("license keys ... QR codes"). 반면 3.1.3(b) 는 **웹에서 획득한**
 * 구독을 앱에서 쓰는 걸 허용한다(그 상품이 앱에서 IAP 로도 팔릴 것 — Pro 는 그렇다).
 * 그래서 코드 입력은 웹에만 두고, 앱에는 입력 UI 를 만들지 않는다.
 *
 * 왜 이메일이 아니라 주문번호인가 — 네이버가 **옵션을 통한 이메일 수집을 금지**한다
 * (상품등록 폼 고지). 주문 데이터에도 이메일이 없다(orderer = id·name·no·tel 뿐).
 * → 수령 키는 **주문번호**, 2차 요인은 **주문자 이름**이다. 주문번호는 영수증·문의글에
 *   노출될 수 있어 단독으로는 약하지만, 이름을 함께 요구하면 남이 못 쓴다.
 *
 * 부여 자체는 `redeemProCode` Cloud Function(asia-northeast3)이 하고,
 * 앱은 `ai_access_whitelist` 를 읽어 자동으로 Pro 로 보인다.
 */

import { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getFirebaseApp } from "@/lib/firebase/client";
import { signInWithGoogle, signInWithApple, signInWithEmail } from "@/lib/firebase/auth";
import { useAuth } from "@/lib/auth/AuthContext";

type Result = {
  tier: string;
  expiresAt: string;
  months: number;
  extended: boolean;
  downloadUrl?: string;
};

/** 주문번호는 숫자가 길다 — 코드(CV-…)인지 주문번호인지로 이름칸 필요 여부가 갈린다 */
const looksLikeOrderNo = (v: string) => /^\d[\d\s-]{7,}$/.test(v.trim());

export default function RedeemClient({ initialCode = "" }: { initialCode?: string }) {
  const { user, loading } = useAuth();
  const [code, setCode] = useState(initialCode);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mail, setMail] = useState("");
  const [pw, setPw] = useState("");

  const isOrder = looksLikeOrderNo(code);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const fn = httpsCallable<{ code: string; name?: string }, Result>(
        getFunctions(getFirebaseApp(), "asia-northeast3"),
        "redeemProCode",
      );
      const { data } = await fn({ code, name: name.trim() || undefined });
      setResult(data);
    } catch (err) {
      // Cloud Function 이 HttpsError 로 한국어 사유를 담아 보낸다. 없으면 일반 문구.
      const msg = (err as { message?: string })?.message;
      setError(msg && msg.length < 200 ? msg : "확인하지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <p className="text-sm text-gray-500">불러오는 중…</p>;

  if (result) {
    const until = new Date(result.expiresAt).toLocaleDateString("ko-KR", {
      year: "numeric", month: "long", day: "numeric",
    });
    return (
      <div className="space-y-4">
        {result.downloadUrl && (
          <div className="rounded-2xl border border-[#00347F]/20 bg-[#00347F]/5 p-6">
            <h2 className="text-xl font-bold text-[#00347F]">전자책을 받으실 수 있습니다</h2>
            <a
              href={result.downloadUrl}
              className="mt-4 inline-block rounded-lg bg-[#00347F] px-5 py-3 font-semibold text-white"
            >
              PDF 내려받기
            </a>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              파일에는 주문번호와 구매자 성함이 옅게 표기되어 있습니다. 개인 열람용으로만 사용해
              주세요. 이 링크는 이 페이지를 닫으면 다시 열 수 없으니 파일을 저장해 두시는 편이 좋습니다.
            </p>
          </div>
        )}
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-900">
            {result.extended ? "Pro 기간이 연장됐습니다" : "Pro가 적용됐습니다"}
          </h2>
          <p className="mt-2 text-emerald-900">
            <b>{until}</b>까지 Pro를 쓰실 수 있습니다.
          </p>
          <p className="mt-4 text-sm leading-6 text-emerald-800">
            앱에 바로 반영되지 않으면 <b>앱을 껐다 다시 켜 주세요.</b> 권한을 잠시 저장해 두기 때문에
            최대 5분쯤 걸릴 수 있습니다. 로그인한 계정이 앱 계정과 같아야 합니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {!user ? (
        <div className="rounded-2xl border border-gray-200 p-6">
          <p className="text-gray-700">
            Pro 이용 기간은 <b>앱에서 쓰시는 계정</b>에 적용됩니다.{" "}
            <b>앱에 가입할 때 쓴 방법 그대로</b> 로그인해 주세요.
          </p>
          <div className="mt-4 grid gap-2">
            <button onClick={() => signInWithGoogle().catch(() => setError("구글 로그인을 마치지 못했습니다."))}
              className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800">
              Google로 로그인
            </button>
            <button onClick={() => signInWithApple().catch(() => setError("Apple 로그인을 마치지 못했습니다."))}
              className="rounded-lg bg-black px-5 py-3 font-semibold text-white">
              Apple로 로그인
            </button>
          </div>
          <details className="mt-4">
            <summary className="cursor-pointer text-sm text-gray-600">이메일로 가입했어요</summary>
            <div className="mt-3 grid gap-2">
              <input type="email" placeholder="이메일" value={mail}
                onChange={(e) => setMail(e.target.value)} autoComplete="email"
                className="rounded-lg border border-gray-300 px-4 py-3" />
              <input type="password" placeholder="비밀번호" value={pw}
                onChange={(e) => setPw(e.target.value)} autoComplete="current-password"
                className="rounded-lg border border-gray-300 px-4 py-3" />
              <button
                onClick={() => signInWithEmail(mail, pw).catch(() => setError("이메일 또는 비밀번호가 맞지 않습니다."))}
                className="rounded-lg bg-[#00347F] px-5 py-3 font-semibold text-white">
                이메일로 로그인
              </button>
            </div>
          </details>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </div>
      ) : (
        <form onSubmit={submit} className="rounded-2xl border border-gray-200 p-6">
          <p className="text-sm text-gray-600">
            로그인 계정: <b>{user.email ?? user.uid}</b>
          </p>
          <label className="mt-4 block text-sm font-semibold text-gray-800" htmlFor="code">
            주문번호 또는 코드
          </label>
          <input
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="주문번호 또는 CV-XXXX-XXXX-XXXX"
            autoComplete="off"
            spellCheck={false}
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 font-mono tracking-wider"
          />
          <p className="mt-2 text-xs text-gray-500">
            스마트스토어에서 사신 경우, 네이버 <b>내 주문 내역</b>에 적힌 주문번호를 넣어 주세요.
          </p>

          {isOrder && (
            <>
              <label className="mt-5 block text-sm font-semibold text-gray-800" htmlFor="name">
                주문자 성함
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="주문하신 분 이름"
                autoComplete="name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              />
              <p className="mt-2 text-xs text-gray-500">
                주문번호만으로는 확인하지 않습니다. 주문하신 분 본인만 받으실 수 있게 하기 위한 것입니다.
              </p>
            </>
          )}

          <button
            type="submit"
            disabled={busy || code.trim().length < 6 || (isOrder && !name.trim())}
            className="mt-5 w-full rounded-lg bg-[#00347F] px-5 py-3 font-semibold text-white disabled:opacity-40"
          >
            {busy ? "확인 중…" : "받기"}
          </button>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </form>
      )}

      <div className="text-sm leading-6 text-gray-600">
        <p>· 주문번호와 코드는 1회만 사용할 수 있고, 등록한 계정에만 적용됩니다.</p>
        <p>· 이미 무료 기간이 남아 있으면 그 뒤로 이어 붙습니다.</p>
        <p>· 기간이 끝나면 자동으로 원래 상태로 돌아갑니다. 결제되지 않습니다.</p>
        <p>· 결제 직후에는 주문 확인에 시간이 조금 걸릴 수 있습니다. 안 되면 잠시 뒤 다시 시도해 주세요.</p>
      </div>
    </div>
  );
}
