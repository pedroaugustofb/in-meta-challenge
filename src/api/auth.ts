import { RegisterDto } from "@/types/auth/register.dto";
import axios from "@/api/config/axios";
import { LoginDto } from "../types/auth/login.dto";

export const auth = {
  register: async (data: RegisterDto) => axios.post("/register", data),
  login: async (data: LoginDto) => axios.post("/login", data),
};
