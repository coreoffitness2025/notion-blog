"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth/AuthContext";
import Step1Onboarding from "./components/Step1Onboarding";
import Step2Setup from "./components/Step2Setup";
import Step3Chat from "./components/Step3Chat";
import type { PersonalizationData } from "./components/PersonalizationForm";
import type { Dictionary } from "@/lib/i18n";
import { doc, getDoc } from "firebase/firestore";
import { getClientDb } from "@/lib/firebase/client";

type Step = 1 | 2 | 3;

// Inner component that uses auth context
function ChatFlowInner({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  const { user, loading } = useAuth();
  const [step, setStep] = useState<Step>(1);
  const [personalization, setPersonalization] =
    useState<PersonalizationData | null>(null);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      if (step === 3) setStep(1);
      return;
    }

    const checkOnboarding = async () => {
      try {
        const firestore = getClientDb();
        const userSnap = await getDoc(doc(firestore, `users/${user.uid}`));
        const userData = userSnap.data();

        if (userData?.webOnboardingCompleted && userData?.webPersonalization) {
          const charSnap = await getDoc(
            doc(firestore, `users/${user.uid}/coachCharacter/default`),
          );
          const charData = charSnap.data();

          const saved: PersonalizationData = {
            fitnessGoal: userData.webPersonalization.fitnessGoal || "lose",
            experienceLevel:
              userData.webPersonalization.experienceLevel || "beginner",
            coachGender: charData?.characterGender || "male",
            personalityType: charData?.personalityType || "balanced",
            injuries: userData.webPersonalization.injuries || [],
          };
          setPersonalization(saved);
          setStep(3);
        } else {
          setStep(2);
        }
      } catch {
        setStep(2);
      }
    };

    checkOnboarding();
  }, [user, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleStep1Start = () => setStep(2);

  const handleStep2Complete = (data: PersonalizationData) => {
    setPersonalization(data);
    setStep(3);
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#4285F4] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  switch (step) {
    case 1:
      return (
        <Step1Onboarding
          locale={locale}
          dict={dict}
          onStart={handleStep1Start}
        />
      );
    case 2:
      return (
        <Step2Setup
          locale={locale}
          dict={dict}
          onComplete={handleStep2Complete}
        />
      );
    case 3:
      return personalization ? (
        <Step3Chat
          locale={locale}
          dict={dict}
          personalization={personalization}
          onBack={() => setStep(2)}
        />
      ) : null;
    default:
      return null;
  }
}

// Auth context is provided by AuthProviderWrapper in layout
export default function ChatFlowContainer({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  return <ChatFlowInner locale={locale} dict={dict} />;
}
