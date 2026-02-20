"use client";

import { createContext, useContext } from "react";

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  getIdToken: () => Promise<string>;
}

export interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  pointBalance: number;
  refreshBalance: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: false,
  pointBalance: 0,
  refreshBalance: () => {},
});

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
