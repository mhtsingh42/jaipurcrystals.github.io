import { cn } from "@/lib/cn";
export function Card({ children, className }:{ children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-soft", className)}>{children}</div>;
}