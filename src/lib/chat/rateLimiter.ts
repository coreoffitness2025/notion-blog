/**
 * Rate Limiter: HttpOnly 쿠키 기반 일일 메시지 카운트
 * 리셋: 자정 KST
 */

import { cookies } from "next/headers";

const COOKIE_NAME = "cv_chat_usage";
const DAILY_LIMIT = 5;

interface UsageData {
  date: string;
  total: number;
}

function getTodayKST(): string {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().split("T")[0];
}

export async function getUsage(): Promise<UsageData> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  const today = getTodayKST();

  if (!raw) return { date: today, total: 0 };

  try {
    const parsed: UsageData = JSON.parse(raw);
    if (parsed.date !== today) return { date: today, total: 0 };
    return parsed;
  } catch {
    return { date: today, total: 0 };
  }
}

export async function incrementUsage(): Promise<{
  allowed: boolean;
  remaining: number;
  total: number;
}> {
  const usage = await getUsage();
  const today = getTodayKST();

  if (usage.total >= DAILY_LIMIT) {
    return { allowed: false, remaining: 0, total: usage.total };
  }

  const newTotal = usage.total + 1;
  const newUsage: UsageData = { date: today, total: newTotal };

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(newUsage), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 24h
  });

  return {
    allowed: true,
    remaining: DAILY_LIMIT - newTotal,
    total: newTotal,
  };
}

export function getRemainingMessages(total: number): number {
  return Math.max(0, DAILY_LIMIT - total);
}

export const MESSAGE_LIMIT = DAILY_LIMIT;
