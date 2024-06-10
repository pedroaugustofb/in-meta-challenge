"use client";

import CardSkeleton from "@/components/cards/card-skeleton";
import { Card } from "@/types/entities/card";
import CardUi from "@/components/cards/card";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

export default function MyCards() {
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
        <h2 className="text-lg font-semibold text-dark-700">My Cards</h2>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 w-full">
          {isFetching && Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={`skeleton-${i}`} />)}
          {!isFetching &&
            data
              //   .filter((card: Card) => card.name !== "" && card.imageUrl !== null)
              .map((card: Card) => <CardUi card={card} key={card.id} />)}
        </div>
      </div>
    </>
  );
}
