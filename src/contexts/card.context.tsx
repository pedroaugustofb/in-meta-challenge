"use client";

import { createContext, useContext, ReactNode, useState } from "react";
import { Card } from "../types/entities/card";
import { CardContent } from "../types/cards/cards-context.types";

export const CardContext = createContext<CardContent>({} as CardContent);

export const useCard = () => useContext(CardContext);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [card, setCard] = useState<Card | null>(null);

  return <CardContext.Provider value={{ card, setCard }}>{children}</CardContext.Provider>;
};
