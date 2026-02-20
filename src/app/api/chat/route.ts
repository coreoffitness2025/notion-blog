import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { sanitizeUserMessage, filterResponse } from "@/lib/chat/sanitize";
import { buildWebSystemPrompt } from "@/lib/chat/systemPrompt";
import { getCharacterById } from "@/lib/chat/characters";
import { ChatLocale } from "@/lib/chat/personalities";
import { incrementUsage } from "@/lib/chat/rateLimiter";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SLIDING_WINDOW = 6;
const MAX_OUTPUT_TOKENS = 500;

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit check
    const { allowed, remaining, total } = await incrementUsage();
    if (!allowed) {
      return NextResponse.json(
        {
          error: "daily_limit",
          message: "Daily message limit reached",
          remaining: 0,
          total,
        },
        { status: 429 },
      );
    }

    const body = await request.json();
    const {
      message,
      characterId,
      locale = "ko",
      history = [],
      turnstileToken,
    } = body as {
      message: string;
      characterId: string;
      locale: string;
      history: ChatMessage[];
      turnstileToken?: string;
    };

    // Turnstile verification (if configured)
    if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
      const turnstileRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        },
      );
      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        return NextResponse.json(
          { error: "turnstile_failed" },
          { status: 403 },
        );
      }
    }

    // Validate character
    const character = getCharacterById(characterId);
    if (!character) {
      return NextResponse.json(
        { error: "invalid_character" },
        { status: 400 },
      );
    }

    // Sanitize input
    const sanitizedMessage = sanitizeUserMessage(message);
    if (!sanitizedMessage) {
      return NextResponse.json({ error: "empty_message" }, { status: 400 });
    }

    // Build system prompt
    const chatLocale: ChatLocale = locale === "en" ? "en" : "ko";
    const systemPrompt = buildWebSystemPrompt(
      chatLocale,
      character,
      character.personalityType,
    );

    // Sliding window: keep last N messages
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

    // Start chat with history
    const chat = model.startChat({
      history: recentHistory,
    });

    // Stream response
    const result = await chat.sendMessageStream(sanitizedMessage);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              const filtered = filterResponse(text);
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: filtered, remaining })}\n\n`),
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
