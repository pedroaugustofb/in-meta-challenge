"use client";

import { useAuth } from "@/contexts/auth.context";

export default function HomeHeader() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="grid">
      <h1 className="text-2xl font-semibold text-dark-700">Marketplace</h1>
      <span className="text-sm text-gray-700">
        Welcome to the marketplace, here you can trade your cards with other users.{" "}
        {!isAuthenticated && (
          <a href="/login" className="hover:underline">
            Please login to start trading.
          </a>
        )}
      </span>
    </div>
  );
}
