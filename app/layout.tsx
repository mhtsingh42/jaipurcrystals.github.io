import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Jaipur Crystals — Crystal Nail Extensions & Verified Gemstones",
  description: "Zen-luxury, 3D-forward crystal nails with Digital ID verification patterns.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}