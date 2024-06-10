import axios from "@/api/config/axios";
import { CreateTradeDto } from "../types/trades/create-trade.dto";

export const trades = {
  getAll: async (params: { rpp: number; page: number }) =>
    await axios.get("/trades", {
      params,
    }),
  createTrade: async (data: CreateTradeDto) => axios.post("/trades", data),
  delete: async (id: string) => axios.delete(`/trades/${id}`),
};
