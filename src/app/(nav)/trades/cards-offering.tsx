"use client";

import { useTrade } from "@/contexts/trade.context";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { Card } from "@/types/entities/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Card as ShadCard } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

export default function CardsOffering() {
  const { cardsSendingIds, onChangeCardsSendingIds } = useTrade();

  const { data, isFetching } = useQuery({
    queryKey: ["get-user-cards"],
    queryFn: async () => {
      const response = await api.cards.getUserCards();
      return response.data;
    },
  });
  return (
    <>
      <div className="grid gap-2 py-4">
        <p className="font-semibold text-gray-800 whitespace-nowrap">
          Select the cards you will offer
          {cardsSendingIds.length > 0 && " (" + cardsSendingIds.length + ")"}
        </p>
      </div>
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 w-full">
        {isFetching &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={`skeleton-card-receive-${i}`} className="grid gap-2">
              <Skeleton className="h-28 w-20" />
            </div>
          ))}
        {!isFetching &&
          data
            //   .filter((card: Card) => card.name !== "" && card.imageUrl !== null)
            .map((card: Card) => {
              const active = cardsSendingIds.includes(card.id);
              return (
                <ShadCard
                  onClick={() => onChangeCardsSendingIds(card.id)}
                  className={`flex justify-start gap-2 rounded-md duration-300 hover:scale-[102.5%] p-1 hover:cursor-pointer ${
                    active && "border-2 border-secondary-500"
                  }`}
                  key={card.id}
                >
                  {card.imageUrl ? (
                    <img src={card.imageUrl} alt={card.name} className="object-cover h-28 w-20" />
                  ) : (
                    <div className="h-28 w-20 bg-gray-200 w-full rounded-md flex justify-center items-center">
                      <ImageIcon className="size-4 text-gray-700" />
                    </div>
                  )}

                  <div>
                    <span className="font-semibold">{card.name}</span>
                  </div>
                </ShadCard>
              );
            })}
      </div>
    </>
  );
}
