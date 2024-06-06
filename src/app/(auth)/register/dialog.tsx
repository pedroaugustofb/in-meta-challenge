"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CheckIcon from "@/assets/check.svg";

export default function RegisterDialog() {
  const { open, onOpenChange } = useDialog({ id: "success-register" });

  const router = useRouter();

  const onClose = () => {
    onOpenChange();
    router.push("/");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="w-full flex justify-center">
          <div className="flex justify-center items-center rounded-[28px] size-14 bg-alert-success/20">
            <Image src={CheckIcon} alt="check-icon" className="size-10 rounded-[28px] p-0.5 bg-alert-success/20" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <DialogHeader className="font-bold">Account created successfully</DialogHeader>
          <DialogDescription className="text-center">After you close this dialog, you will be redirected to the login page.</DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// /* glow */

// width: 48px;
// height: 48px;

// background: #D1FAE6;
// /* Success/100 */
// border: 8px solid #ECFDF5;
// border-radius: 28px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
// z-index: 0;
