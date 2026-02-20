"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoogleSignInButton from "./GoogleSignInButton";
import PersonalizationForm, {
  type PersonalizationData,
} from "./PersonalizationForm";
import { useAuth } from "@/lib/auth/AuthContext";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getClientDb } from "@/lib/firebase/client";
import type { Dictionary } from "@/lib/i18n";

interface Step2Props {
  locale: string;
  dict: Dictionary;
  onComplete: (data: PersonalizationData) => void;
}

export default function Step2Setup({
  locale,
  dict,
  onComplete,
}: Step2Props) {
  const { user } = useAuth();
  const [saving, setSaving] = useState(false);
  const isKo = locale !== "en";

  const handleSignInSuccess = () => {
    // AuthProvider will update user state automatically
  };

  const handlePersonalization = async (data: PersonalizationData) => {
    if (!user) return;
    setSaving(true);

    try {
      // Save personalization to Firestore
      const firestore = getClientDb();
      const userRef = doc(firestore, `users/${user.uid}`);
      await setDoc(
        userRef,
        {
          webPersonalization: {
            fitnessGoal: data.fitnessGoal,
            experienceLevel: data.experienceLevel,
            injuries: data.injuries,
          },
          webOnboardingCompleted: true,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      // Save coach character
      const charRef = doc(firestore, `users/${user.uid}/coachCharacter/default`);
      await setDoc(
        charRef,
        {
          characterGender: data.coachGender,
          personalityType: data.personalityType,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );

      onComplete(data);
    } catch (error) {
      console.error("Save personalization error:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {!user ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 text-center space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {isKo
                    ? "Google 계정으로 시작하기"
                    : "Get Started with Google"}
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  {isKo
                    ? "3초면 시작할 수 있어요"
                    : "Start in just 3 seconds"}
                </p>
              </div>

              <GoogleSignInButton
                label={
                  isKo ? "Google로 로그인" : "Sign in with Google"
                }
                onSuccess={handleSignInSuccess}
              />

              <p className="text-sm text-purple-600 font-medium">
                {isKo
                  ? "가입 시 50pt 무료 지급 🎁"
                  : "50pt free on signup 🎁"}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="personalization"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
            >
              <PersonalizationForm
                locale={locale}
                onSubmit={handlePersonalization}
                loading={saving}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
