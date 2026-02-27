"use client";

import Link from "next/link";
import { TiltCard } from "@/components/interactions/TiltCard";
import { MotionReveal } from "@/components/motion/MotionReveal";
import type { Product } from "@/lib/demo-products";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <MotionReveal delay={delay}>
      <Link href={/shop/product/}>
        <TiltCard className="p-6 md:p-8 hover:translate-y-[-2px] transition">
          <div className="text-sm text-neutral-500">
            {product.category === "nails" ? "Crystal Nails" : "Loose Gems"}
          </div>
          <div className="mt-2 text-xl font-semibold">{product.title}</div>
          <div className="mt-2 text-neutral-700">{product.subtitle}</div>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.highlights.map((h) => (
              <span
                key={h}
                className="text-xs rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-700"
              >
                {h}
              </span>
            ))}
          </div>
          <div className="mt-6 text-sm font-medium text-neutral-900">
            ₹{product.priceInr.toLocaleString("en-IN")}
          </div>
        </TiltCard>
      </Link>
    </MotionReveal>
  );
}