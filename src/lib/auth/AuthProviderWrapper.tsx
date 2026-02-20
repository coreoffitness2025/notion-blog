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
    // Lazy load AuthProvider only on client side
    import("./AuthProvider").then((mod) => {
      setProvider(() => mod.AuthProvider);
    });
  }, []);

  if (Provider) {
    return <Provider>{children}</Provider>;
  }

  // Before AuthProvider loads, render children without auth context
  return <>{children}</>;
}
