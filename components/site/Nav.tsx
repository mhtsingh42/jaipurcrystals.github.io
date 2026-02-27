import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[rgba(250,250,249,0.75)] backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Jaipur Crystals <span className="ml-2 text-xs font-normal text-neutral-500">v1.2</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <Link href="/shop/nails" className="hover:text-neutral-900">Shop Nails</Link>
          <Link href="/shop/gems" className="hover:text-neutral-900">Loose Gems</Link>
          <Link href="/verify" className="hover:text-neutral-900">Verify</Link>
          <Link href="/buyback" className="hover:text-neutral-900">Buyback</Link>
          <Link href="/about" className="hover:text-neutral-900">Trust</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/verify" variant="secondary" className="hidden sm:inline-flex">Verify</Button>
          <Button href="/shop/nails">Shop</Button>
        </div>
      </Container>
    </header>
  );
}