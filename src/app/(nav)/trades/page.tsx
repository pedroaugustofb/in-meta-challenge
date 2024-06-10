"use client";

import { Replace } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardsOffering from "./cards-offering";
import CardsRecieving from "./cards-recieving";
import { useTrade } from "@/contexts/trade.context";
import { CreateTradeDto } from "../../../types/trades/create-trade.dto";
import { api } from "../../../api";
import { useToast } from "../../../components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function TradesPage() {
  const { cardsReceivingIds, cardsSendingIds } = useTrade();
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const cards = cardsSendingIds.map((id) => ({ cardId: id, type: "OFFERING" })).concat(cardsReceivingIds.map((id) => ({ cardId: id, type: "RECEIVING" })));
      const response = await api.trades.createTrade({ cards } as unknown as CreateTradeDto);

      toast({
        title: "Trade created",
        description: "Your trade has been created successfully, id: " + response.data.tradeId,
      });

      router.push(`/`);
    } catch (error) {
      console.error(error);

      toast({
        title: "Oops!",
        description: "An error occurred while creating the trade",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid gap-2 py-4">
      <h2 className="text-lg font-semibold text-dark-700">Create a trade</h2>
      <CardsOffering />
      <hr className="border-t border-gray-200 my-2" />
      <CardsRecieving />

      <div className="w-full flex justify-end pt-8">
        <Button onClick={onSubmit} className="px-4" variant={"secondary"}>
          Create trade
          <Replace className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  );
}
