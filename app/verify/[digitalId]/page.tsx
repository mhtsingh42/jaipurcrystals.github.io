import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { verifyDigitalId } from "@/lib/verify";
import { Card } from "@/components/site/Cards";

export default async function VerifyResultPage({ params }: { params: { digitalId: string } }) {
  const digitalId = decodeURIComponent(params.digitalId);
  const record = await verifyDigitalId(digitalId);

  return (
    <Container className="pt-10 md:pt-12">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Verification</Badge>
        <Badge>{digitalId.toUpperCase()}</Badge>
      </div>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
        {record ? "Verified result" : "No match found"}
      </h1>
      <p className="mt-3 text-neutral-700 max-w-2xl">
        {record ? "This Digital ID matches a record in the system." : "Double-check the ID from packaging."}
      </p>

      <div className="mt-8 grid md:grid-cols-12 gap-4">
        <Card className="md:col-span-7">
          {record ? (
            <div className="space-y-4">
              <div>
                <div className="text-sm text-neutral-500">Item</div>
                <div className="mt-1 text-2xl font-semibold">{record.name}</div>
                <div className="mt-1 text-neutral-700">{record.type}</div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-neutral-500">Report</div>
                  <div className="mt-1 font-medium text-neutral-900">{record.reportId}</div>
                  <div className="mt-1 text-neutral-700">{record.lab}</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Issued</div>
                  <div className="mt-1 font-medium text-neutral-900">{record.issuedAtISO}</div>
                  <div className="mt-1 text-neutral-700">Digital ID: {record.digitalId}</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-neutral-500">Cut</div>
                  <div className="mt-1 font-medium text-neutral-900">{record.cut}</div>
                  <div className="mt-1 text-neutral-700">Color: {record.color}</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Specs</div>
                  <div className="mt-1 text-neutral-700">
                    {typeof record.carat === "number" ? (
                      <>Carat: <span className="font-medium text-neutral-900">{record.carat}</span></>
                    ) : (
                      "Carat: —"
                    )}
                  </div>
                  <div className="mt-1 text-neutral-700">
                    Origin: <span className="font-medium text-neutral-900">{record.origin ?? "—"}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-sm text-neutral-500">Notes</div>
                <div className="mt-1 text-neutral-700">{record.notes}</div>
              </div>
            </div>
          ) : (
            <div className="text-neutral-700">
              No record found for <span className="font-medium text-neutral-900">{digitalId.toUpperCase()}</span>.
              <div className="mt-4">
                <Button href="/verify" variant="secondary">Try again</Button>
              </div>
            </div>
          )}
        </Card>

        <Card className="md:col-span-5">
          <div className="text-sm text-neutral-500">Status</div>
          <div className="mt-2 text-xl font-semibold">
            {record ? "Authenticity: Confirmed (demo)" : "Authenticity: Not verified"}
          </div>

          <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <div className="text-sm text-neutral-500">Buyback eligibility</div>
            <div className="mt-1 font-medium text-neutral-900">
              {record ? (record.buybackEligible ? "Eligible (demo)" : "Not eligible") : "—"}
            </div>
            <div className="mt-2 text-xs text-neutral-600">
              Enforce eligibility server-side in production.
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button href="/buyback" variant="secondary">Buyback Explainer</Button>
            <Button href="/shop/nails">Shop Crystal Nails</Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}