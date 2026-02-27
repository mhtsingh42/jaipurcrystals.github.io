import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/demo-products";
import { Card } from "@/components/site/Cards";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="pt-10 md:pt-12">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{product.category === "nails" ? "Crystal Nails" : "Loose Gems"}</Badge>
        <Badge>Demo</Badge>
      </div>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">{product.title}</h1>
      <p className="mt-3 text-neutral-700 max-w-2xl">{product.subtitle}</p>

      <div className="mt-8 grid md:grid-cols-12 gap-4">
        <Card className="md:col-span-7">
          <div className="text-sm text-neutral-500">Details</div>
          <div className="mt-3 space-y-2 text-neutral-700">
            {product.highlights.map((h) => (
              <div key={h} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                <div>{h}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-neutral-600">
            Next step: add photo gallery + certification attachment + 3D viewer per SKU.
          </div>
        </Card>

        <Card className="md:col-span-5">
          <div className="text-sm text-neutral-500">Purchase</div>
          <div className="mt-2 text-2xl font-semibold">₹{product.priceInr.toLocaleString("en-IN")}</div>
          <div className="mt-3 text-neutral-700">
            Checkout is not wired in demo. Connect Shopify/Medusa next.
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button href="/verify" variant="secondary">Verify a Digital ID</Button>
            <Button href={product.category === "nails" ? "/shop/nails" : "/shop/gems"}>Back to shop</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}