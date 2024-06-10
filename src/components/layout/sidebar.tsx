"use client";

import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { twMerge } from "tailwind-merge";
import { HomeIcon, Replace, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "../buttons/logout";
import { useAuth } from "../../contexts/auth.context";

export const links = [
  {
    label: "Marketplace",
    path: "/",
    icon: <HomeIcon className="size-6" />,
  },
  {
    label: "Trades",
    path: "/trades",
    icon: <Replace className="size-6" />,
  },
  {
    label: "My Cards",
    path: "/my-cards",
    icon: <WalletCards className="size-6" />,
  },
];

export const navButtonClass = `flex items-center gap-4 rounded-[4px] duration-300 hover:cursor-pointer px-3 py-2 group-hover:px-6`;
export const navButtonLabelClass = `hidden whitespace-nowrap duration-300 group-hover:block`;

export default function Sidebar() {
  const pathname = usePathname();
  const active = links.findIndex((link) => link.path === pathname);

  const { isAuthenticated } = useAuth();

  return (
    <nav className="group fixed z-40 hidden h-full w-[84px] overflow-hidden bg-white shadow-md shadow-gray-700 duration-300 hover:w-[246px] lg:block">
      <div className="flex h-full flex-col items-center py-6">
        <div className="relative w-full pl-4">
          <Image src={Logo} alt="in-meta-logo" className={`size-12`} />
        </div>
        <div className="flex-1">
          <div className="grid gap-4 pt-36">
            {links.map(({ label, path, icon }, index) => (
              <Link
                href={path}
                key={`${label}-${path}`}
                className={twMerge(`${active === index ? "bg-secondary-500" : "hover:bg-primary-400/80"}`, navButtonClass)}
              >
                {icon}
                <span className={navButtonLabelClass}>{label}</span>
              </Link>
            ))}
          </div>
        </div>
        {isAuthenticated && (
          <div className="flex w-full justify-center pb-24 group-hover:justify-start group-hover:px-6">
            <LogoutButton />
          </div>
        )}
      </div>
    </nav>
  );
}
