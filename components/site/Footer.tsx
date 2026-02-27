import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold">Jaipur Crystals</div>
            <div className="text-sm text-neutral-600 mt-1">
              Crystal nail extensions & verified gemstones — zen-lux, transparent by design.
            </div>
          </div>

          <div className="flex gap-5 text-sm text-neutral-700">
            <Link href="/verify" className="hover:text-neutral-900">Verify</Link>
            <Link href="/buyback" className="hover:text-neutral-900">Buyback</Link>
            <Link href="/about" className="hover:text-neutral-900">Trust</Link>
          </div>
        </div>

        <div className="text-xs text-neutral-500 mt-8">
          © {new Date().getFullYear()} Jaipur Crystals.
        </div>
      </Container>
    </footer>
  );
}