import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";

export default function CreateTradeDialog() {
  const { open, onOpenChange } = useDialog({ id: "create-trade" });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          Delete trade
          <DialogDescription>Are you sure you want to delete this trade?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
