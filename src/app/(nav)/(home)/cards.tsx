"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "@/api";
import { Card } from "@/types/entities/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import CardSkeleton from "@/components/cards/card-skeleton";
import CardUi from "@/components/cards/card";

export default function Cards() {
  const [page, setPage] = useState(1);
  const rpp = 8;

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
      <div className="grid gap-2 py-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-dark-700">Cards</h2>
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

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 w-full">
          {isFetching && Array.from({ length: rpp }).map((_, i) => <CardSkeleton key={`skeleton-${i}`} />)}
          {!isFetching &&
            data?.list
              //   .filter((card: Card) => card.name !== "" && card.imageUrl !== null)
              .map((card: Card) => <CardUi card={card} key={card.id} />)}
        </div>
      </div>
    </>
  );
}
