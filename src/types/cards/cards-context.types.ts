import React from "react";
import { Card } from "../entities/card";

export type CardContent = {
  card: Card | null;
  setCard: React.Dispatch<React.SetStateAction<Card | null>>;
};
