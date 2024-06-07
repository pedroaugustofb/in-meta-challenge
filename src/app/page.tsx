"use client";

import { useAuth } from "../contexts/auth.context";

export default function Home() {
  const { user } = useAuth();

  return <>{user?.name}</>;
}
