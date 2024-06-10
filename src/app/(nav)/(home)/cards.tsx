"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { api } from "@/api";
import { Card } from "@/types/entities/card";
import { Card as CardShadcn, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { formatDate } from "@/utils/date";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Image } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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

        <div className="grid grid-cols-4 gap-4 w-full">
          {isFetching &&
            Array.from({ length: rpp }).map((_, i) => (
              <div key={`skeleton-card-${i}`} className="bg-gray-50 w-full rounded-lg grid gap-2">
                <Skeleton className="h-80 w-full" />
                <Skeleton className="h-4 w-2/5" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-16 mt-4 w-full" />
              </div>
            ))}
          {!isFetching &&
            data?.list
              //   .filter((card: Card) => card.name !== "" && card.imageUrl !== null)
              .map((card: Card) => (
                <CardShadcn key={card.id} className="h-fit hover:scale-[102.5%] duration-300">
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
                </CardShadcn>
              ))}
        </div>
      </div>
    </>
  );
}
