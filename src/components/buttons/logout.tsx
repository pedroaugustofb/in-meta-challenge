"use client";

import { LogOut } from "lucide-react";
import { navButtonClass, navButtonLabelClass } from "../layout/sidebar";
import { twMerge } from "tailwind-merge";
import { useAuth } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";
import axios from "../../api/config/axios";

export default function LogoutButton() {
  const { setAuth } = useAuth();
  const router = useRouter();

  const onLogout = () => {
    setAuth(null);
    axios.defaults.headers["Authorization"] = null;
    router.push("/");
  };
  return (
    <button className={twMerge("flex flex-1 justify-center hover:bg-secondary-500 group-hover:justify-start", navButtonClass)} onClick={onLogout}>
      <LogOut className="size-6" />
      <span className={navButtonLabelClass}>Sair</span>
    </button>
  );
}
