"use client";

import { Card as CardShadcn, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Card } from "@/types/entities/card";
import { Image, PlusCircle } from "lucide-react";
import { useAuth } from "@/contexts/auth.context";
import { Button } from "@/components/ui/button";
import { useDialog } from "@/hooks/useDialog";
import { useCard } from "@/contexts/card.context";
import { formatDate } from "@/utils/date";

export default function CardUi({ card }: { card: Card }) {
  const { isAuthenticated } = useAuth();
  const { onOpenChange } = useDialog({ id: "add-card" });
  const { setCard } = useCard();
  return (
    <CardShadcn className="h-fit hover:scale-[102.5%] duration-300">
      <CardHeader className="">
        {card.imageUrl ? (
          <img src={card.imageUrl} alt={card.name} className="object-contain" />
        ) : (
          <div className="h-32 bg-gray-200 w-full rounded-md flex justify-center items-center">
            <Image className="size-8 text-gray-700" />
          </div>
        )}
      </CardHeader>
      <CardContent className="grid gap-1">
        <CardTitle>{card.name}</CardTitle>
        <CardDescription>Created at {formatDate(card.createdAt)}</CardDescription>
        <CardDescription>{card.description}</CardDescription>
      </CardContent>
      {isAuthenticated && (
        <CardFooter>
          <Button
            className="w-full"
            variant="secondary"
            onClick={() => {
              setCard(card);
              onOpenChange();
            }}
          >
            Add to account
            <PlusCircle className="size-4 ml-2" />
          </Button>
        </CardFooter>
      )}
    </CardShadcn>
  );
}
