import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ href, onClick, children, variant="primary", className, type="button" }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition active:scale-[0.99]";
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-soft",
    secondary: "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300",
    ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100",
  }[variant];

  if (href) return <Link className={cn(base, variants, className)} href={href}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cn(base, variants, className)}>{children}</button>;
}