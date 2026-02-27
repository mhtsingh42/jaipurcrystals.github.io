import { getProductsByCategory } from "@/lib/demo-products";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/shop/ProductCard";

export default function GemsShopPage() {
  const items = getProductsByCategory("gems");
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm text-neutral-600">Shop</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Loose Gemstones</h1>
          <p className="mt-3 text-neutral-700 max-w-2xl">
            Demo catalog (replace with real inventory). Verification portal pattern included.
          </p>
        </div>
        <Badge>Report • Digital ID</Badge>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {items.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 0.05} />)}
      </div>

      <div className="mt-8 text-xs text-neutral-500">
        * Buyback is eligibility-based. Put your final policy wording on the Buyback page.
      </div>
    </div>
  );
}