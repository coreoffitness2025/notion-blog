"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function AuthProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [Provider, setProvider] = useState<React.ComponentType<{
    children: ReactNode;
  }> | null>(null);

  useEffect(() => {
    // Skip if Firebase is not configured
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) return;

    import("./AuthProvider")
      .then((mod) => {
        setProvider(() => mod.AuthProvider);
      })
      .catch(() => {
        // Firebase not available — render without auth
      });
  }, []);

  if (Provider) {
    return <Provider>{children}</Provider>;
  }

  // Before AuthProvider loads or if Firebase is unavailable, render children without auth
  return <>{children}</>;
}
