"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useDialog = ({ id }: { id: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const open = searchParams.get(id) === "active";

  const onOpenChange = () => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    //TODO: use InMeta API to register user

    if (open) {
      params.delete(id);
    } else {
      params.set(id, "active");
    }

    return router.push(`${pathname}?${params.toString()}`);
  };

  return { open, onOpenChange };
};
