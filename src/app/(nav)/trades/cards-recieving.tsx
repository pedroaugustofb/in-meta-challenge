"use client";

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Card } from "@/types/entities/card";
import { Card as ShadCard } from "@/components/ui/card";
import { Image } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTrade } from "@/contexts/trade.context";
import { api } from "@/api";

export default function CardsRecieving() {
  const { cardsReceivingIds, onChangeCardsReceivingIds } = useTrade();
  const [page, setPage] = useState(1);
  const rpp = 18;
  const { data, isFetching } = useQuery({
    queryKey: ["get-cards", { page }],
    queryFn: async () => {
      const response = await api.cards.getAll({
        rpp,
        page,
      });
      return response.data;
    },
  });
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800 whitespace-nowrap">
          Select the cards you will receive
          {cardsReceivingIds.length > 0 && " (" + cardsReceivingIds.length + ")"}
        </p>
        <Pagination className="justify-end">
          <PaginationContent>
            {page > 1 && (
              <>
                <PaginationItem>
                  <PaginationPrevious className="cursor-pointer hover:bg-gray-400" onClick={() => setPage((prev) => prev - 1)} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="cursor-pointer hover:bg-gray-400" onClick={() => setPage((prev) => prev - 1)}>
                    {page - 1}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            <PaginationItem>
              <PaginationLink className="hover:bg-white" isActive>
                {page}
              </PaginationLink>
            </PaginationItem>
            <button disabled={!data?.more} className="disabled:cursor-not-allowed group" onClick={() => setPage((prev) => prev + 1)}>
              <PaginationNext className="cursor-pointer group-disabled:cursor-not-allowed hover:bg-gray-400" />
            </button>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 w-full">
        {isFetching &&
          Array.from({ length: rpp }).map((_, i) => (
            <div key={`skeleton-card-receive-${i}`} className="grid gap-2">
              <Skeleton className="h-28 w-20" />
            </div>
          ))}
        {!isFetching &&
          data?.list
            //   .filter((card: Card) => card.name !== "" && card.imageUrl !== null)
            .map((card: Card) => {
              const active = cardsReceivingIds.includes(card.id);
              return (
                <ShadCard
                  onClick={() => onChangeCardsReceivingIds(card.id)}
                  className={`flex justify-start gap-2 rounded-md duration-300 hover:scale-[102.5%] p-1 hover:cursor-pointer ${
                    active && "border-2 border-secondary-500"
                  }`}
                  key={card.id}
                >
                  {card.imageUrl ? (
                    <img src={card.imageUrl} alt={card.name} className="object-cover h-28 w-20" />
                  ) : (
                    <div className="h-28 w-20 bg-gray-200 w-full rounded-md flex justify-center items-center">
                      <Image className="size-4 text-gray-700" />
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
