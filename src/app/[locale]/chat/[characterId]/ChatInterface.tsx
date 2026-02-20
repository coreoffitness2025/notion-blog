"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ChatBubble from "@/components/chat/ChatBubble";
import ChatInput from "@/components/chat/ChatInput";
import TypingIndicator from "@/components/chat/TypingIndicator";
import MessageLimitBanner from "@/components/chat/MessageLimitBanner";
import AppDownloadPrompt from "@/components/chat/AppDownloadPrompt";
import { getCharacterById } from "@/lib/chat/characters";
import type { Dictionary } from "@/lib/i18n";

interface Message {
  id: string;
  role: "user" | "coach";
  text: string;
}

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

const CTA_AFTER_TURN = 3;

export default function ChatInterface({
  locale,
  characterId,
  dict,
}: {
  locale: string;
  characterId: string;
  dict: Dictionary;
}) {
  const character = getCharacterById(characterId)!;
  const loc = (locale === "en" ? "en" : "ko") as "ko" | "en";
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [remaining, setRemaining] = useState(5);
  const [limit] = useState(5);
  const [showInlineCta, setShowInlineCta] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const [dismissedCta, setDismissedCta] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Fetch initial usage
  useEffect(() => {
    fetch("/api/chat/usage")
      .then((r) => r.json())
      .then((data) => setRemaining(data.remaining))
      .catch(() => {});
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Save/restore from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem(`chat_${characterId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed.messages || []);
        setTurnCount(parsed.turnCount || 0);
      } catch {
        // ignore
      }
    }
  }, [characterId]);

  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(
        `chat_${characterId}`,
        JSON.stringify({ messages, turnCount }),
      );
    }
  }, [messages, turnCount, characterId]);

  const buildHistory = useCallback((): GeminiMessage[] => {
    return messages.map((m) => ({
      role: m.role === "coach" ? "model" : "user",
      parts: [{ text: m.text }],
    }));
  }, [messages]);

  const handleSend = useCallback(
    async (text: string) => {
      if (isLoading) return;

      if (remaining <= 0) {
        setShowLimitModal(true);
        return;
      }

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        text,
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      const coachMsgId = `coach-${Date.now()}`;

      try {
        const history = buildHistory();

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            characterId,
            locale,
            history,
          }),
        });

        if (res.status === 429) {
          setRemaining(0);
          setShowLimitModal(true);
          setIsLoading(false);
          return;
        }

        if (!res.ok || !res.body) {
          throw new Error("Stream failed");
        }

        // Add empty coach message
        setMessages((prev) => [
          ...prev,
          { id: coachMsgId, role: "coach", text: "" },
        ]);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6);
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              if (parsed.error) continue;
              if (parsed.text) {
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === coachMsgId
                      ? { ...m, text: m.text + parsed.text }
                      : m,
                  ),
                );
                if (parsed.remaining !== undefined) {
                  setRemaining(parsed.remaining);
                }
              }
            } catch {
              // ignore parse errors
            }
          }
        }

        const newTurn = turnCount + 1;
        setTurnCount(newTurn);

        // Show inline CTA after N turns
        if (newTurn === CTA_AFTER_TURN && !dismissedCta) {
          setShowInlineCta(true);
        }
      } catch (error) {
        console.error("Chat error:", error);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === coachMsgId
              ? { ...m, text: dict.chat.errorMessage }
              : m,
          ),
        );
      } finally {
        setIsLoading(false);
      }
    },
    [
      isLoading,
      remaining,
      buildHistory,
      characterId,
      locale,
      turnCount,
      dismissedCta,
      dict.chat.errorMessage,
    ],
  );

  // Quick-select goals
  const quickGoals = [
    dict.chat.goalLoseWeight,
    dict.chat.goalBuildMuscle,
    dict.chat.goalGetFit,
  ];

  const showWelcome = messages.length === 0;

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <Link
          href={`${prefix}/chat`}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={character.avatarImage}
            alt={character.name[loc]}
            width={36}
            height={36}
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-bold text-gray-800 truncate">
            {character.name[loc]}
          </h2>
          <p className="text-xs text-gray-400">{character.specialty[loc]}</p>
        </div>
        <MessageLimitBanner
          remaining={remaining}
          limit={limit}
          labels={dict.chat.limitLabels}
        />
      </div>

      {/* Messages */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
      >
        {/* AI Disclaimer */}
        <div className="text-center py-2">
          <p className="text-xs text-gray-400 bg-gray-50 inline-block px-3 py-1 rounded-full">
            {dict.chat.aiDisclaimer}
          </p>
        </div>

        {/* Welcome screen */}
        {showWelcome && (
          <div className="flex flex-col items-center gap-6 py-8">
            <div className="w-32 h-40 relative">
              <Image
                src={character.cardImage}
                alt={character.name[loc]}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {character.name[loc]}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {character.description[loc]}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => handleSend(goal)}
                  disabled={isLoading}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 rounded-full border border-gray-200 transition-colors disabled:opacity-50"
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat messages */}
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            role={msg.role}
            text={msg.text}
            avatarSrc={msg.role === "coach" ? character.avatarImage : undefined}
            coachName={msg.role === "coach" ? character.name[loc] : undefined}
          />
        ))}

        {/* Typing indicator */}
        {isLoading &&
          !messages.some(
            (m) => m.role === "coach" && m.id.startsWith("coach-") && m.text,
          ) && (
            <TypingIndicator
              avatarSrc={character.avatarImage}
              coachName={character.name[loc]}
            />
          )}

        {/* Inline CTA */}
        <AppDownloadPrompt
          type="inline"
          show={showInlineCta && !dismissedCta}
          onClose={() => {
            setShowInlineCta(false);
            setDismissedCta(true);
          }}
          labels={dict.chat.ctaLabels}
        />

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100 bg-white">
        <ChatInput
          onSend={handleSend}
          disabled={isLoading || remaining <= 0}
          placeholder={
            remaining <= 0
              ? dict.chat.limitReached
              : dict.chat.inputPlaceholder
          }
        />
      </div>

      {/* Limit modal */}
      <AppDownloadPrompt
        type="modal"
        show={showLimitModal}
        onClose={() => setShowLimitModal(false)}
        labels={dict.chat.ctaLabels}
      />
    </div>
  );
}
