"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { TradeContent } from "../types/trades/trades-context.types";

export const TradeContext = createContext<TradeContent>({} as TradeContent);

export const useTrade = () => useContext(TradeContext);

export const TradeProvider = ({ children }: { children: ReactNode }) => {
  const [cardsReceivingIds, setCardsReceivingIds] = useState<string[]>([]);
  const [cardsSendingIds, setCardsSendingIds] = useState<string[]>([]);
  const [deleteTradeId, setDeleteTradeId] = useState<string>("");

  const onChangeCardsReceivingIds = (id: string) => {
    setCardsReceivingIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((cardId) => cardId !== id);
      }
      return [...prev, id];
    });
  };

  const onChangeCardsSendingIds = (id: string) => {
    setCardsSendingIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((cardId) => cardId !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <TradeContext.Provider value={{ cardsReceivingIds, onChangeCardsReceivingIds, cardsSendingIds, onChangeCardsSendingIds, deleteTradeId, setDeleteTradeId }}>
      {children}
    </TradeContext.Provider>
  );
};
