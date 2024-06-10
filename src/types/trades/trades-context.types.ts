import React from "react";

export type TradeContent = {
  cardsReceivingIds: string[];
  onChangeCardsReceivingIds: (id: string) => void;
  cardsSendingIds: string[];
  onChangeCardsSendingIds: (id: string) => void;
  deleteTradeId: string;
  setDeleteTradeId: React.Dispatch<React.SetStateAction<string>>;
};
