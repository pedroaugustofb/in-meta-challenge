import axios from "@/api/config/axios";

export const cards = {
  getAll: async (params: { rpp: number; page: number }) =>
    await axios.get("/cards", {
      params,
    }),
};
