"use client";

import { createContext, useContext, ReactNode } from "react";
import { AuthContent } from "@/types/auth/auth-context.types";
import { LoginResponse } from "@/types/auth/login.dto";
import useSessionStorage from "@/hooks/useSessionStorage";

export const AuthContext = createContext<AuthContent>({} as AuthContent);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useSessionStorage<LoginResponse | null>({ key: "auth", initialValue: null });

  const isAuthenticated = !!auth?.user;

  return <AuthContext.Provider value={{ token: auth?.token ?? null, user: auth?.user ?? null, isAuthenticated, setAuth }}>{children}</AuthContext.Provider>;
};
