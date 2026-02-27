import { Container } from "@/components/ui/Container";
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <Container className="pt-10 md:pt-12">{children}</Container>;
}