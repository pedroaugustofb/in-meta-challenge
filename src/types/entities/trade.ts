import { Card } from "./card";

export type Trade = {
  createdAt: string;
  id: string;
  user: {
    name: string;
  };
  userId: string;
  tradeCards: Array<{
    cardId: string;
    id: string;
    tradeId: string;
    type: "OFFERING" | "RECEIVING";
    card: Card;
  }>;
};
