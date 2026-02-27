import { cn } from "@/lib/cn";
export function Badge({ children, className }:{ children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 border border-neutral-200", className)}>{children}</span>;
}