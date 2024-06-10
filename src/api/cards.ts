import axios from "@/api/config/axios";

export const cards = {
  getAll: async (params: { rpp: number; page: number }) =>
    await axios.get("/cards", {
      params,
    }),
  add: async (data: { cardIds: Array<string> }) => axios.post("/me/cards", data),
  getUserCards: async () => axios.get("/me/cards"),
};
