"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, Settings } from "lucide-react";
import ChatBubble from "@/components/chat/ChatBubble";
import ChatInput from "@/components/chat/ChatInput";
import TypingIndicator from "@/components/chat/TypingIndicator";
import PointLimitModal from "@/components/chat/PointLimitModal";
import PointBalanceBadge from "./PointBalanceBadge";
import { getCoach, PERSONALITIES } from "@/lib/chat/characters";
import { useAuth } from "@/lib/auth/AuthContext";
import type { Dictionary } from "@/lib/i18n";
import type { PersonalizationData } from "./PersonalizationForm";

interface Message {
  id: string;
  role: "user" | "coach";
  text: string;
}

interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

const POINT_COST = 8;

interface Step3Props {
  locale: string;
  dict: Dictionary;
  personalization: PersonalizationData;
  onBack: () => void;
}

export default function Step3Chat({
  locale,
  dict,
  personalization,
  onBack,
}: Step3Props) {
  const { user, pointBalance } = useAuth();
  const loc = (locale === "en" ? "en" : "ko") as "ko" | "en";

  const coach = getCoach(personalization.coachGender);
  const personality = PERSONALITIES.find(
    (p) => p.type === personalization.personalityType,
  )!;
  const characterId = `${personalization.coachGender}-${personalization.personalityType}`;

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [localBalance, setLocalBalance] = useState(pointBalance);
  const [showLimitModal, setShowLimitModal] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync balance from context
  useEffect(() => {
    setLocalBalance(pointBalance);
  }, [pointBalance]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Restore session
  useEffect(() => {
    const saved = sessionStorage.getItem(`chat_auth_${characterId}`);
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setMessages(p.messages || []);
      } catch {
        // ignore
      }
    }
  }, [characterId]);

  // Persist session
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(
        `chat_auth_${characterId}`,
        JSON.stringify({ messages }),
      );
    }
  }, [messages, characterId]);

  const buildHistory = useCallback((): GeminiMessage[] => {
    return messages.map((m) => ({
      role: m.role === "coach" ? "model" : "user",
      parts: [{ text: m.text }],
    }));
  }, [messages]);

  const handleSend = useCallback(
    async (text: string) => {
      if (isLoading || !user) return;

      if (localBalance < POINT_COST) {
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
        const token = await user.getIdToken();
        const history = buildHistory();

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: text,
            characterId,
            locale,
            history,
          }),
        });

        if (res.status === 401) {
          // Token expired — should re-auth
          setIsLoading(false);
          return;
        }

        if (res.status === 402) {
          setShowLimitModal(true);
          setIsLoading(false);
          return;
        }

        if (!res.ok || !res.body) {
          throw new Error("Stream failed");
        }

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
              const j = JSON.parse(data);
              if (j.error) continue;
              if (j.text) {
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === coachMsgId
                      ? { ...m, text: m.text + j.text }
                      : m,
                  ),
                );
              }
              if (j.pointBalance !== undefined) {
                setLocalBalance(j.pointBalance);
              }
            } catch {
              // ignore
            }
          }
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
      user,
      localBalance,
      buildHistory,
      characterId,
      locale,
      dict.chat.errorMessage,
    ],
  );

  const avatarClass =
    personalization.coachGender === "male"
      ? "object-cover object-[center_15%] scale-[2.5]"
      : "object-cover object-top";

  const quickGoals = [
    dict.chat.goalLoseWeight,
    dict.chat.goalBuildMuscle,
    dict.chat.goalGetFit,
  ];

  const showWelcome = messages.length === 0;
  const isKo = loc === "ko";

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <button
          onClick={onBack}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={coach.avatarImage}
            alt={coach.name[loc]}
            width={36}
            height={36}
            className={`w-full h-full ${avatarClass}`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-bold text-gray-800 truncate">
            {coach.name[loc]}
          </h2>
          <p className="text-xs text-gray-400">
            {personality.emoji} {personality.label[loc]}
          </p>
        </div>
        <PointBalanceBadge balance={localBalance} />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Disclaimer */}
        <div className="text-center py-2">
          <p className="text-xs text-gray-400 bg-gray-50 inline-block px-3 py-1 rounded-full">
            {dict.chat.aiDisclaimer}
          </p>
        </div>

        {/* Point cost info */}
        <div className="text-center">
          <p className="text-xs text-gray-400">
            {isKo
              ? `메시지당 ${POINT_COST}pt 차감`
              : `${POINT_COST}pt per message`}
          </p>
        </div>

        {/* Welcome */}
        {showWelcome && (
          <div className="flex flex-col items-center gap-6 py-8">
            <div className="w-32 h-48 relative">
              <Image
                src={coach.cardImage}
                alt={coach.name[loc]}
                fill
                className="object-contain object-bottom"
                sizes="128px"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">
                {coach.name[loc]}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {personality.emoji} {personality.shortDesc[loc]}
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

        {/* Messages */}
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            role={msg.role}
            text={msg.text}
            avatarSrc={msg.role === "coach" ? coach.avatarImage : undefined}
            coachName={msg.role === "coach" ? coach.name[loc] : undefined}
            avatarClassName={msg.role === "coach" ? avatarClass : undefined}
          />
        ))}

        {/* Typing */}
        {isLoading &&
          !messages.some(
            (m) => m.role === "coach" && m.id.startsWith("coach-") && m.text,
          ) && (
            <TypingIndicator
              avatarSrc={coach.avatarImage}
              coachName={coach.name[loc]}
              avatarClassName={avatarClass}
            />
          )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100 bg-white">
        <ChatInput
          onSend={handleSend}
          disabled={isLoading || localBalance < POINT_COST}
          placeholder={
            localBalance < POINT_COST
              ? isKo
                ? "포인트가 부족합니다"
                : "Not enough points"
              : dict.chat.inputPlaceholder
          }
        />
      </div>

      {/* Point Limit Modal */}
      <PointLimitModal
        show={showLimitModal}
        onClose={() => setShowLimitModal(false)}
        locale={locale}
      />
    </div>
  );
}
