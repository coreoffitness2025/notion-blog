import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { sanitizeUserMessage, filterResponse } from "@/lib/chat/sanitize";
import { buildWebSystemPrompt } from "@/lib/chat/systemPrompt";
import { parseCharacterId, getCoach } from "@/lib/chat/characters";
import { ChatLocale } from "@/lib/chat/personalities";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { deductPoints } from "@/lib/points/pointService";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SLIDING_WINDOW = 6;
const MAX_OUTPUT_TOKENS = 500;

// UID-based rate limiting (in-memory, resets per minute)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(uid: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(uid);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(uid, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export async function POST(request: NextRequest) {
  try {
    // --- Auth check ---
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "unauthorized", message: "Login required" },
        { status: 401 },
      );
    }

    const token = authHeader.slice(7);
    let uid: string;
    try {
      const decoded = await adminAuth.verifyIdToken(token);
      uid = decoded.uid;
    } catch {
      return NextResponse.json(
        { error: "unauthorized", message: "Invalid token" },
        { status: 401 },
      );
    }

    // --- Rate limit ---
    if (!checkRateLimit(uid)) {
      return NextResponse.json(
        { error: "rate_limit", message: "Too many requests" },
        { status: 429 },
      );
    }

    // --- Deduct points ---
    const pointResult = await deductPoints(uid);
    if (!pointResult.success) {
      return NextResponse.json(
        {
          error: "insufficient_points",
          balance: pointResult.balance,
        },
        { status: 402 },
      );
    }

    // --- Parse request ---
    const body = await request.json();
    const {
      message,
      characterId,
      locale = "ko",
      history = [],
    } = body as {
      message: string;
      characterId: string;
      locale: string;
      history: ChatMessage[];
    };

    // Validate character
    const parsed = parseCharacterId(characterId);
    if (!parsed) {
      return NextResponse.json(
        { error: "invalid_character" },
        { status: 400 },
      );
    }

    const coach = getCoach(parsed.gender);

    // Sanitize input
    const sanitizedMessage = sanitizeUserMessage(message);
    if (!sanitizedMessage) {
      return NextResponse.json({ error: "empty_message" }, { status: 400 });
    }

    // --- Load personalization ---
    let userContext: {
      fitnessGoal?: string;
      experienceLevel?: string;
      injuries?: string[];
    } | undefined;

    try {
      const userSnap = await adminDb.doc(`users/${uid}`).get();
      const userData = userSnap.data();
      if (userData?.webPersonalization) {
        userContext = userData.webPersonalization;
      }
    } catch {
      // proceed without personalization
    }

    // --- Build system prompt ---
    const chatLocale: ChatLocale = locale === "en" ? "en" : "ko";
    const systemPrompt = buildWebSystemPrompt(
      chatLocale,
      coach,
      parsed.personality,
      userContext,
    );

    // Sliding window
    const recentHistory = history.slice(-SLIDING_WINDOW);

    // Create model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: systemPrompt,
      generationConfig: {
        maxOutputTokens: MAX_OUTPUT_TOKENS,
        temperature: 0.8,
      },
    });

    const chat = model.startChat({ history: recentHistory });
    const result = await chat.sendMessageStream(sanitizedMessage);

    // --- Stream response ---
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              const filtered = filterResponse(text);
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({
                    text: filtered,
                    pointBalance: pointResult.balance,
                  })}\n\n`,
                ),
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          console.error("Stream error:", err);
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: "stream_error" })}\n\n`,
            ),
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "internal_error" },
      { status: 500 },
    );
  }
}
