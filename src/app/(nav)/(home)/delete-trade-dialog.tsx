"use client";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "@/components/ui/button";
import { api } from "@/api";
import { useToast } from "@/components/ui/use-toast";
import { useTrade } from "@/contexts/trade.context";

export default function DeleteTradeDialog() {
  const { open, onOpenChange } = useDialog({ id: "delete-trade" });
  const { toast } = useToast();
  const { deleteTradeId } = useTrade();

  const onDelete = async () => {
    await api.trades.delete(deleteTradeId);

    toast({
      title: "Trade deleted",
      description: "The trade has been deleted successfully",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          Delete trade
          <DialogDescription>Are you sure you want to delete this trade?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="w-full flex justify-between gap-2">
            <DialogClose>
              <Button variant="outline">Close</Button>
            </DialogClose>

            <Button onClick={onDelete} variant="destructive">
              Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
