"use client";

import { useAuth } from "@/contexts/auth.context";
import { UserCircle } from "lucide-react";
import DrawerMobile from "./drawer-mobile";

export default function Header() {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="border-b-2 py-2 border-gray-400 w-full flex gap-4">
      <div className="items-center flex-1 flex">
        <DrawerMobile />

        <span className="hidden lg:block font-semibold text-lg text-gray-900">{isAuthenticated ? `Welcome, ${user?.name}` : "Welcome, Guest"}!</span>
      </div>

      <div className="flex gap-2 items-center">
        <UserCircle className="lg:size-10 size-6 text-gray-700" />

        <div className="grid">
          <span className="font-semibold text-xs text-gray-900">{isAuthenticated ? user?.name : "Guest"}</span>
          <span className="text-sm text-gray-500 hidden lg:block">
            {isAuthenticated ? (
              user?.email
            ) : (
              <a href="/login" className="hover:underline">
                You are not logged in
              </a>
            )}
          </span>
        </div>
      </div>
    </header>
  );
}
