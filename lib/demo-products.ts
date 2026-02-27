export type Product = {
  id: string;
  slug: string;
  title: string;
  category: "nails" | "gems";
  priceInr: number;
  subtitle: string;
  highlights: string[];
};

export const demoProducts: Product[] = [
  {
    id: "n1",
    slug: "opal-prism-tip",
    title: "Opal Prism Tip",
    category: "nails",
    priceInr: 3499,
    subtitle: "Milky opal crystal tips with rainbow fire — inspired by Jaipur bridal glam.",
    highlights: ["Opal fire finish", "Salon-grade fit", "Digital ID ready"],
  },
  {
    id: "n2",
    slug: "smoky-quartz-edge",
    title: "Smoky Quartz Edge",
    category: "nails",
    priceInr: 2999,
    subtitle: "Smoky faceted crystal nails — sleek, high contrast, night-lux.",
    highlights: ["Faceted cut look", "Comfort wear", "Signature silhouette"],
  },
  {
    id: "g1",
    slug: "natural-emerald-0-8ct",
    title: "Natural Emerald 0.8ct",
    category: "gems",
    priceInr: 18999,
    subtitle: "Verified stone with report + Digital ID (demo).",
    highlights: ["Report attached", "Digital ID verification", "Buyback eligible*"],
  },
  {
    id: "g2",
    slug: "natural-ruby-0-9ct",
    title: "Natural Ruby 0.9ct",
    category: "gems",
    priceInr: 21999,
    subtitle: "Deep saturation, clean cut, portfolio-ready (demo).",
    highlights: ["Transparent pricing", "Report attached", "Provenance track"],
  },
];

export function getProductBySlug(slug: string) {
  return demoProducts.find(p => p.slug === slug) ?? null;
}
export function getProductsByCategory(category: Product["category"]) {
  return demoProducts.filter(p => p.category === category);
}