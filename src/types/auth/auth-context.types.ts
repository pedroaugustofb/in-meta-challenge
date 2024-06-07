import React from "react";
import { User } from "../entities/user";
import { LoginResponse } from "./login.dto";

export type AuthContent = {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setAuth: React.Dispatch<React.SetStateAction<LoginResponse | null>>;
};
