export type CreateTradeDto = {
  cards: {
    cardId: string;
    type: "OFFERING" | "RECEIVING";
  };
};
