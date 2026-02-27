import { Container } from "@/components/ui/Container";
import { Card } from "@/components/site/Cards";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/motion/MotionReveal";

export default function AboutPage() {
  return (
    <Container className="pt-10 md:pt-12">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Trust</Badge>
        <Badge>Transparency</Badge>
        <Badge>Verification</Badge>
      </div>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Built for trust + beauty</h1>
      <p className="mt-3 text-neutral-700 max-w-2xl">
        Jaipur Crystals blends luxury aesthetics with verification-first product storytelling. This is your credibility hub.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <MotionReveal>
          <Card>
            <div className="text-sm text-neutral-500">Principle</div>
            <div className="mt-2 text-xl font-semibold">Transparency by default</div>
            <p className="mt-2 text-neutral-700">
              Eligible products tie to a report + Digital ID so authenticity is measurable.
            </p>
          </Card>
        </MotionReveal>

        <MotionReveal delay={0.05}>
          <Card>
            <div className="text-sm text-neutral-500">Principle</div>
            <div className="mt-2 text-xl font-semibold">Verification as UX</div>
            <p className="mt-2 text-neutral-700">
              Buyers should validate in seconds — not through vague claims. The portal pattern is ready to scale.
            </p>
            <div className="mt-6">
              <Button href="/verify" variant="secondary">Open Verification Portal</Button>
            </div>
          </Card>
        </MotionReveal>
      </div>
    </Container>
  );
}