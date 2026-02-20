import { NextResponse } from "next/server";
import { getUsage, getRemainingMessages, MESSAGE_LIMIT } from "@/lib/chat/rateLimiter";

export async function GET() {
  const usage = await getUsage();
  return NextResponse.json({
    total: usage.total,
    remaining: getRemainingMessages(usage.total),
    limit: MESSAGE_LIMIT,
  });
}
