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
  mailQueued?: boolean;
};

/**
 * 주문번호는 숫자가 길다 — 코드(CV-…)인지 주문번호인지로 이름칸 필요 여부가 갈린다.
 * 스타트팩·체중계 주문은 메일 링크가 `주문번호-SP` / `주문번호-SC` 로 온다
 * (허브 naver_orders_sync.py 의 suffix — 같은 주문의 전자책 단품과 문서 키가 겹치지 않게).
 */
const looksLikeOrderNo = (v: string) => /^\d[\d\s-]{7,}(?:-?(?:SP|SC))?$/i.test(v.trim());
/** 체중계(-SC) 주문에는 전자책이 없다 → PDF 메일 칸을 띄우지 않는다 */
const isScaleOrder = (v: string) => /SC$/i.test(v.trim());

export default function RedeemClient({ initialCode = "" }: { initialCode?: string }) {
  const { user, loading } = useAuth();
  const [code, setCode] = useState(initialCode);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mail, setMail] = useState("");
  const [pw, setPw] = useState("");
  // Pro 를 받을 앱 계정의 이메일. 로그인하지 않아도 이것만 있으면 부여된다 —
  // 서버가 uid 로 못 찾으면 이메일로 다시 찾기 때문(functions resolveUserTier).
  const [proEmail, setProEmail] = useState("");

  const isOrder = looksLikeOrderNo(code);
  const hasEbook = isOrder && !isScaleOrder(code);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const fn = httpsCallable<{ code: string; name?: string; deliverTo?: string; proEmail?: string }, Result>(
        getFunctions(getFirebaseApp(), "asia-northeast3"),
        "redeemProCode",
      );
      const { data } = await fn({
        code,
        name: name.trim() || undefined,
        // 2026-10-08 대표 "굳이 왜 다운로드하게 해, 이메일 받아두고" — 전자책은 내려받기 대신
        // 적어 주신 이메일로 보낸다(허브 10분 잡이 발송). 칸을 따로 두지 않고 Pro 이메일을 그대로 쓴다.
        deliverTo: (hasEbook && proEmail.trim()) || undefined,
        proEmail: proEmail.trim() || undefined,
      });
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
        <div className="rounded-2xl border border-[#00347F]/20 bg-[#00347F]/5 p-6">
          <h2 className="text-xl font-bold text-[#00347F]">
            {result.extended ? "Pro 기간이 연장됐습니다" : "Pro가 적용됐습니다"}
          </h2>
          <p className="mt-2 text-gray-900">
            {result.months > 0 && <>Pro {result.months}개월 — </>}<b>{until}</b>까지 Pro를 쓰실 수 있습니다.
          </p>
          <p className="mt-4 text-sm leading-6 text-gray-700">
            앱에 바로 반영되지 않으면 <b>앱을 껐다 다시 켜 주세요.</b> 권한을 잠시 저장해 두기 때문에
            최대 5분쯤 걸릴 수 있습니다.{" "}
            {user ? (
              "로그인한 계정이 앱 계정과 같아야 합니다."
            ) : (
              <>앱에서 <b>{proEmail.trim()}</b> 계정으로 로그인하시면 Pro로 보입니다.</>
            )}
          </p>
        </div>
        {result.mailQueued && (
          <div className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900">전자책은 메일로 보내드립니다</h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              <b>{proEmail.trim()}</b> 로 10분 안에 도착합니다. 보이지 않으면 스팸함도 확인해 주세요.
            </p>
            <p className="mt-3 text-xs leading-5 text-gray-500">
              파일 모든 페이지에 구매자 성함 · 이메일이 표기되어 있습니다. 개인 열람용으로만 사용해 주세요.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {false ? (
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
          {user && (
            <p className="text-sm text-gray-600">
              로그인 계정: <b>{user.email ?? user.uid}</b> — 이 계정에 바로 적용됩니다
            </p>
          )}
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

              <label className="mt-5 block text-sm font-semibold text-gray-800" htmlFor="proEmail">
                {hasEbook ? "Pro 이용권·전자책을 받으실 이메일" : "Pro 이용권을 받으실 이메일"}
              </label>
              <input
                id="proEmail"
                type="email"
                value={proEmail}
                onChange={(e) => setProEmail(e.target.value)}
                placeholder="앱에 가입하신 이메일"
                autoComplete="email"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              />
              <p className="mt-2 text-xs text-gray-500">
                <b>앱에 가입할 때 쓰신 이메일</b>을 적어 주세요. 그 계정에 주문하신 상품의 Pro 기간이 더해집니다.
                구글·애플로 가입하셨다면 그때 쓰신 주소입니다. 로그인은 하지 않으셔도 됩니다.
                {hasEbook && " 전자책 PDF도 이 주소로 보내드립니다."}
              </p>

            </>
          )}

          <button
            type="submit"
            disabled={busy || code.trim().length < 6 || (isOrder && (!name.trim() || !proEmail.trim()))}
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
