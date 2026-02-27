"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/interactions/TiltCard";

const demoIds = ["JC-OP-7K2P-19A", "JC-RB-9Q1F-72C"];

export default function VerifyPage() {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <Container className="pt-10 md:pt-12">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Verify</Badge>
        <Badge>Digital ID Portal</Badge>
      </div>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Verify a Digital ID</h1>
      <p className="mt-3 text-neutral-700 max-w-2xl">
        Enter the Digital ID from packaging (or scan a QR in your production flow).
      </p>

      <div className="mt-8 grid md:grid-cols-12 gap-4">
        <TiltCard className="md:col-span-7 p-6 md:p-8">
          <div className="text-sm text-neutral-500">Search</div>
          <form
            className="mt-4 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const id = value.trim();
              if (!id) return;
              router.push(/verify/);
            }}
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. JC-OP-7K2P-19A"
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:border-neutral-400"
            />
            <Button type="submit">Verify</Button>
          </form>

          <div className="mt-8 text-sm text-neutral-600">
            Demo IDs:
            <div className="mt-2 flex flex-wrap gap-2">
              {demoIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setValue(id)}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 hover:border-neutral-300"
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        </TiltCard>

        <TiltCard className="md:col-span-5 p-6 md:p-8">
          <div className="text-sm text-neutral-500">What you’ll see</div>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li><span className="font-medium text-neutral-900">Report ID</span> + issuing lab</li>
            <li><span className="font-medium text-neutral-900">Gem metadata</span> (cut, color, carat)</li>
            <li><span className="font-medium text-neutral-900">Eligibility</span> for buyback (if applicable)</li>
          </ul>
          <div className="mt-6 text-xs text-neutral-500">
            Add Supabase env vars to connect to your real database. Otherwise it uses demo data.
          </div>
        </TiltCard>
      </div>
    </Container>
  );
}