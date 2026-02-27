import { Container } from "@/components/ui/Container";
import { Card } from "@/components/site/Cards";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/motion/MotionReveal";

export default function BuybackPage() {
  return (
    <Container className="pt-10 md:pt-12">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Liquidity</Badge>
        <Badge>Buyback</Badge>
      </div>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Buyback (explainer)</h1>
      <p className="mt-3 text-neutral-700 max-w-2xl">
        Replace this page with your final policy language + eligibility rules. This is a clean V1 placeholder.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <MotionReveal>
          <Card>
            <div className="text-sm text-neutral-500">Concept</div>
            <div className="mt-2 text-xl font-semibold">Designed to reduce buyer anxiety</div>
            <p className="mt-2 text-neutral-700">
              Some verified stones can be resold back under defined conditions to add liquidity.
            </p>
          </Card>
        </MotionReveal>

        <MotionReveal delay={0.05}>
          <Card>
            <div className="text-sm text-neutral-500">Enforcement</div>
            <div className="mt-2 text-xl font-semibold">Digital ID ties everything together</div>
            <p className="mt-2 text-neutral-700">
              Verification records + condition checks are used to decide eligibility in production.
            </p>
            <div className="mt-6">
              <Button href="/verify" variant="secondary">Verify a Digital ID</Button>
            </div>
          </Card>
        </MotionReveal>
      </div>
    </Container>
  );
}