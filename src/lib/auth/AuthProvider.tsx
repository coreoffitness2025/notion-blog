"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { getClientAuth, getClientDb } from "@/lib/firebase/client";
import { AuthContext, type AuthUser } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [pointBalance, setPointBalance] = useState(0);

  useEffect(() => {
    const auth = getClientAuth();
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser({
          uid: u.uid,
          email: u.email,
          displayName: u.displayName,
          photoURL: u.photoURL,
          getIdToken: () => u.getIdToken(),
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (!user) {
      setPointBalance(0);
      return;
    }

    try {
      const firestore = getClientDb();
      const ref = doc(firestore, `users/${user.uid}/rewardPoints/summary`);
      const unsub = onSnapshot(
        ref,
        (snap) => {
          setPointBalance(snap.data()?.currentBalance ?? 0);
        },
        () => {
          setPointBalance(0);
        },
      );
      return unsub;
    } catch {
      setPointBalance(0);
    }
  }, [user]);

  const refreshBalance = useCallback(async () => {
    if (!user) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/points/balance", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setPointBalance(data.balance);
      }
    } catch {
      // silent
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, loading, pointBalance, refreshBalance }}
    >
      {children}
    </AuthContext.Provider>
  );
}
