import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";
import { useTrade } from "@/contexts/trade.context";
import { CreateTradeDto } from "@/types/trades/create-trade.dto";
import { useRouter } from "next/navigation";
import { api } from "@/api";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";

export default function CreateTradeDialog() {
  const { open, onOpenChange } = useDialog({ id: "create-trade" });
  const { cardsReceivingIds, cardsSendingIds } = useTrade();
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const onSubmit = async () => {
    try {
      const cards = cardsSendingIds.map((id) => ({ cardId: id, type: "OFFERING" })).concat(cardsReceivingIds.map((id) => ({ cardId: id, type: "RECEIVING" })));
      const response = await api.trades.createTrade({ cards } as unknown as CreateTradeDto);

      toast({
        title: "Trade created",
        description: "Your trade has been created successfully, id: " + response.data.tradeId,
      });

      await queryClient.invalidateQueries({
        queryKey: ["get-trades"],
      });
      router.push(`/`);
    } catch (error) {
      toast({
        title: "Oops!",
        description: "An error occurred while creating the trade",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          Create Delete
          <DialogDescription>Are you ready to create your trade?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="w-full flex justify-between gap-2">
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>

            <Button onClick={onSubmit} variant="secondary">
              Create
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
