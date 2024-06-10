"use client";

import { CardStackIcon } from "@radix-ui/react-icons";
import { Trade } from "@/types/entities/trade";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/date";
import { useAuth } from "@/contexts/auth.context";
import { useToast } from "@/components/ui/use-toast";
import { useDialog } from "../../hooks/useDialog";
import { useTrade } from "../../contexts/trade.context";

export default function TradeCard({
  trade,
}: Readonly<{
  trade: Trade;
}>) {
  const { isAuthenticated, user } = useAuth();
  const { toast } = useToast();
  const { onOpenChange } = useDialog({ id: "delete-trade" });
  const { setDeleteTradeId } = useTrade();

  const onDelete = async (id: string) => {
    setDeleteTradeId(id);
    onOpenChange();
  };

  return (
    <Card className="w-full rounded-md">
      <CardHeader>
        <CardTitle className="text-lg">Trade by {trade.user.name}</CardTitle>
        <CardDescription>Created at {formatDate(trade.createdAt)}</CardDescription>
        {/* <CardDescription className="text-2xs">Trade ID: {trade.id}</CardDescription> */}
      </CardHeader>
      <CardContent className="font-semibold">
        <CardDescription className="flex gap-2 items-center">
          <CardStackIcon className="size-4" />
          Trade Cards: {trade.tradeCards.length}
        </CardDescription>
        <CardDescription className="flex gap-2 items-center">
          <Skull className="size-4 text-dark-900" />
          Offering: {trade.tradeCards.filter((elem) => elem.type === "OFFERING").length}
        </CardDescription>
        <CardDescription className="flex gap-2 items-center">
          <Crown className="size-4 text-yellow-500" />
          Receiving: {trade.tradeCards.filter((elem) => elem.type === "RECEIVING").length}
        </CardDescription>
      </CardContent>
      <CardFooter className="grid gap-2">
        <Button
          className="w-full"
          disabled={!isAuthenticated}
          onClick={() => {
            toast({
              title: "Feature not implemented",
              description: "This feature is not yet implemented.",
              variant: "default",
            });
          }}
        >
          {isAuthenticated ? "View cards" : "Sign in to view cards"}
        </Button>

        {isAuthenticated && user?.id === trade.userId && (
          <Button onClick={() => onDelete(trade.id)} variant="destructive" className=" w-full">
            Delete trade
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
