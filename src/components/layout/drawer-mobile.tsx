"use client";

import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "../ui/drawer";
import Image from "next/image";
import Logo from "@/app/favicon.ico";
import Link from "next/link";
import { links, navButtonClass } from "./sidebar";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import LogoutButton from "../buttons/logout";

export default function DrawerMobile() {
  const pathname = usePathname();
  const active = links.findIndex((link) => link.path === pathname);

  return (
    <Drawer direction="right">
      <DrawerTrigger className="lg:hidden block">
        <Menu className="size-6 text-gray-700" />
      </DrawerTrigger>
      <DrawerContent className="top-0 right-0 w-screen max-w-80 h-full">
        <DrawerHeader>
          <Image src={Logo} alt="in-meta-logo" className={`size-12`} />
        </DrawerHeader>
        <div className="flex-1">
          <div className="grid gap-4 p-4">
            {links.map(({ label, path, icon }, index) => (
              <Link
                href={path}
                key={`${label}-${path}`}
                className={twMerge(`${active === index ? "bg-secondary-500" : "hover:bg-primary-400/80"}`, navButtonClass)}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
