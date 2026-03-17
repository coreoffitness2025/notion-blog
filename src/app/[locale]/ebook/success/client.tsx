"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

type Status = "loading" | "confirmed" | "downloading" | "done" | "error";

export default function EbookSuccessClient({ dict }: { dict: Dictionary }) {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const confirmedRef = useRef(false);

  const t = dict.ebookSuccess;

  // 1. 결제 승인
  useEffect(() => {
    if (confirmedRef.current) return;
    confirmedRef.current = true;

    const paymentKey = searchParams.get("paymentKey");
    const orderId = searchParams.get("orderId");
    const amount = searchParams.get("amount");

    if (!paymentKey || !orderId || !amount) {
      setStatus("error");
      setErrorMsg(t.errorInvalid);
      return;
    }

    fetch("/api/ebook/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount: Number(amount),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("confirm failed");
        setStatus("confirmed");
      })
      .catch(() => {
        setStatus("error");
        setErrorMsg(t.errorConfirm);
      });
  }, [searchParams, t]);

  // 2. 다운로드
  const handleDownload = useCallback(async () => {
    setStatus("downloading");

    const paymentKey = searchParams.get("paymentKey");
    const customerName = sessionStorage.getItem("ebook_customerName") || "";
    const customerPhone = sessionStorage.getItem("ebook_customerPhone") || "";

    try {
      const res = await fetch("/api/ebook/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentKey, customerName, customerPhone }),
      });

      if (!res.ok) throw new Error("download failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Core-of-Fitness.pdf";
      a.click();
      URL.revokeObjectURL(url);

      setStatus("done");
    } catch {
      setStatus("error");
      setErrorMsg(t.errorDownload);
    }
  }, [searchParams, t]);

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-10 max-w-md w-full text-center border border-gray-200"
      >
        {status === "loading" && (
          <>
            <div className="w-10 h-10 border-3 border-gray-200 border-t-[var(--corevia-primary)] rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">{t.confirming}</p>
          </>
        )}

        {status === "confirmed" && (
          <>
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{t.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{t.subtitle}</p>
            <button
              onClick={handleDownload}
              className="w-full py-4 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              {t.downloadButton}
            </button>
          </>
        )}

        {status === "downloading" && (
          <>
            <div className="w-10 h-10 border-3 border-gray-200 border-t-[var(--corevia-primary)] rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">{t.generating}</p>
          </>
        )}

        {status === "done" && (
          <>
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{t.doneTitle}</h1>
            <p className="text-sm text-gray-500 mb-6">{t.doneSubtitle}</p>
            <button
              onClick={handleDownload}
              className="w-full py-3 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
            >
              {t.redownload}
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-2">{t.errorTitle}</h1>
            <p className="text-sm text-gray-500">{errorMsg}</p>
          </>
        )}
      </motion.div>
    </main>
  );
}
