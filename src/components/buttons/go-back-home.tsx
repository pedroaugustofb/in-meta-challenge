import { SquareChevronLeft } from "lucide-react";

export default function GoToHome() {
  return (
    <a href="/" className="flex gap-2 text-xs items-center font-semibold py-1 rounded-md w-fit -translate-y-10">
      <SquareChevronLeft className="size-5" />
      Go back to home page
    </a>
  );
}
