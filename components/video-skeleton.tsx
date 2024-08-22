import { Skeleton } from "./ui/skeleton";

export function VideoSkeleton() {
  return (
    <div className="mx-auto p-2">
      <Skeleton className="h-[110px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]" />
    </div>
  );
}
