import { Skeleton } from "../ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="bg-gray-50 w-full rounded-lg grid gap-2">
      <Skeleton className="h-80 w-full" />
      <Skeleton className="h-4 w-2/5" />
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-16 mt-4 w-full" />
    </div>
  );
}
