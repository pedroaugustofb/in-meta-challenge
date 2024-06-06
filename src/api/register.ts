import { RegisterDto } from "@/types/auth/register.dto";
import axios from "@/api/config/axios";

export const register = {
  register: async (data: RegisterDto) => axios.post("/register", data),
};
