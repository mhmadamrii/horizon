import { Skeleton } from '~/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 p-5">
      <Skeleton className="h-[100px] w-full bg-slate-100" />
      <Skeleton className="h-[70px] w-full bg-slate-100" />
      <Skeleton className="h-[20px] w-full bg-slate-100" />

      <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
        <Skeleton className="h-[120px] w-[120px] rounded-full bg-slate-100" />
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-[30px] w-full bg-slate-100" />
          <Skeleton className="h-[30px] w-full bg-slate-100" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3">
        <Skeleton className="h-[200px] w-full bg-slate-100" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-[50px] w-full bg-slate-100" />
          <Skeleton className="h-[50px] w-full bg-slate-100" />
        </div>
        <Skeleton className="h-[200px] w-full bg-slate-100" />
      </div>
    </div>
  );
}
