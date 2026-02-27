import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/site/Section";
import { Card } from "@/components/site/Cards";
import { MotionReveal } from "@/components/motion/MotionReveal";
import GemSelector from "@/components/home/GemSelector";

export default function HomePage() {
  return (
    <div>
      <Container className="pt-8 md:pt-12">
        <div className="grid gap-8 md:gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-7 flex flex-col justify-center">
            <MotionReveal>
              <div className="flex flex-wrap gap-2">
                <Badge>Jaipur Crystals</Badge>
                <Badge>True 3D Morph</Badge>
                <Badge>Opal Fire</Badge>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
                Crystal nail extensions that feel like fine jewelry.
              </h1>

              <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
                A zen-lux experience: 3D crystal visuals, verification-ready storytelling, and collections
                inspired by Jaipur’s gemstone heritage.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/shop/nails">Shop Crystal Nails</Button>
                <Button href="/verify" variant="secondary">Verify a Digital ID</Button>
                <Button href="/shop/gems" variant="ghost">Explore Loose Gems</Button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-neutral-700">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="font-medium text-neutral-900">Opal-inspired</div>
                  <div className="mt-1">Milky body + play-of-color “fire”.</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="font-medium text-neutral-900">True 3D morph</div>
                  <div className="mt-1">Gem → nail crystal tip as you scroll.</div>
                </div>
              </div>
            </MotionReveal>
          </div>

          <div className="md:col-span-5">
            <GemSelector />
          </div>
        </div>

        <Section
          title="A new category: gemstone aesthetics, nail-native."
          subtitle="Inspired by faceted crystal tips, bridal glam, and opal fire."
        >
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Crystal silhouettes", d: "Stiletto / prism shapes designed to catch light like gemstones." },
              { t: "Opal fire finish", d: "Milky translucence + rainbow fragments (signature hero look)." },
              { t: "Verification-ready", d: "Digital ID portal pattern built-in for scaling trust." },
            ].map((x, i) => (
              <MotionReveal key={x.t} delay={i * 0.05}>
                <Card>
                  <div className="text-sm text-neutral-500">Pillar</div>
                  <div className="mt-2 text-lg font-semibold">{x.t}</div>
                  <div className="mt-2 text-neutral-700">{x.d}</div>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </Section>

        <Section
          title="Moodboard (replace with your own images)"
          subtitle="Put your images into /public/inspo as inspo-1.jpeg ... inspo-8.jpeg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, idx) => {
              const n = idx + 1;
              return (
                <div key={n} className="rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={/inspo/inspo-.jpeg} alt={Inspiration } className="w-full h-[220px] object-cover" />
                </div>
              );
            })}
          </div>
        </Section>
      </Container>
    </div>
  );
}