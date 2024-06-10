"use client";

import { Replace } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardsOffering from "./cards-offering";
import CardsRecieving from "./cards-recieving";
import { useDialog } from "@/hooks/useDialog";
import CreateTradeDialog from "./create-dialog";

export default function TradesPage() {
  const { onOpenChange } = useDialog({ id: "create-trade" });

  const onSubmit = async () => {
    onOpenChange();
  };

  return (
    <div className="grid gap-2 py-4">
      <CreateTradeDialog />
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
