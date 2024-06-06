"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AuthContent } from "@/types/auth/auth-context.types";
import { LoginResponse } from "@/types/auth/login.dto";

export const AuthContext = createContext<AuthContent>({} as AuthContent);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<LoginResponse | null>(null);

  const setAuthentication = (data: LoginResponse) => {
    setAuth(data);
  };

  const deleteAuthentication = () => {
    setAuth(null);
  };

  const isAuthenticated = !!auth?.user;

  return (
    <AuthContext.Provider value={{ token: auth?.token ?? null, user: auth?.user ?? null, isAuthenticated, setAuthentication }}>{children}</AuthContext.Provider>
  );
};
