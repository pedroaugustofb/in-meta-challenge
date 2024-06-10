"use client";

import { useAuth } from "@/contexts/auth.context";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "@/components/ui/button";
import { PlusCircle, Replace } from "lucide-react";

export default function HomeHeader() {
  const { isAuthenticated } = useAuth();
  const { onOpenChange: addCard } = useDialog({ id: "add-card" });
  const { onOpenChange: createTrade } = useDialog({ id: "create-trade" });

  return (
    <div className="flex gap-2 justify-between w-full items-center">
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

      {isAuthenticated && (
        <div className="md:flex gap-2 sm:grid hidden">
          <Button onClick={addCard}>
            Add card to your account
            <PlusCircle className="ml-2 size-4" />
          </Button>
          <Button onClick={createTrade} variant={"secondary"}>
            Create a trade
            <Replace className="ml-2 size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
