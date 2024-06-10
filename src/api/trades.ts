import axios from "@/api/config/axios";

export const trades = {
  getAll: async (params: { rpp: number; page: number }) =>
    await axios.get("/trades", {
      params,
    }),
};
