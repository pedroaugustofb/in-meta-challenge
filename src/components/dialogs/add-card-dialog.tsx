"use client";

import { PlusCircle } from "lucide-react";
import { useCard } from "@/contexts/card.context";
import { useDialog } from "@/hooks/useDialog";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "../ui/dialog";
import { useToast } from "../ui/use-toast";
import { api } from "@/api";

export default function AddCardDialog() {
  const { open, onOpenChange } = useDialog({ id: "add-card" });
  const { card } = useCard();
  const { toast } = useToast();

  const onConfirm = async () => {
    try {
      const response = await api.cards.add({ cardIds: [card?.id as string] });

      if (response.status !== 200) throw new Error("An error occurred while adding the card to your collection.");

      onOpenChange();

      toast({
        title: "Card added!",
        description: `The card ${card?.name} has been added to your collection.`,
      });
    } catch {
      toast({
        title: "Oops! An error occurred.",
        description: "An error occurred while adding the card to your collection.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          Add a new card
          <DialogDescription>
            Are you sure you want to add the card <strong>{card?.name}</strong> to your collection?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="w-full flex justify-between gap-2">
            <Button onClick={onOpenChange} variant={"outline"}>
              Cancel
            </Button>

            <Button onClick={onConfirm} variant={"secondary"}>
              Add card
              <PlusCircle className="size-4 ml-2" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
