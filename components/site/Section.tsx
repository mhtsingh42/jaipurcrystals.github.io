import { cn } from "@/lib/cn";

export function Section({ title, subtitle, children, className }:{
  title: string; subtitle?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <section className={cn("py-14 md:py-20", className)}>
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-3 text-neutral-700">{subtitle}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}