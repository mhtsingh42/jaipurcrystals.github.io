"use client";

import { useState } from "react";
import True3DMorphHero from "@/components/interactions/True3DMorphHero";

const options = [
  { key: "opal", label: "Opal" },
  { key: "emerald", label: "Emerald" },
  { key: "ruby", label: "Ruby" },
  { key: "amethyst", label: "Amethyst" },
  { key: "smoky", label: "Smoky" },
] as const;

type Tone = (typeof options)[number]["key"];

export default function GemSelector() {
  const [tone, setTone] = useState<Tone>("opal");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o.key === tone;
          return (
            <button
              key={o.key}
              onClick={() => setTone(o.key)}
              className={[
                "rounded-full px-4 py-2 text-sm border transition",
                active
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300",
              ].join(" ")}
            >
              {o.label}
            </button>
          );
        })}
      </div>

      <True3DMorphHero tone={tone} />

      <div className="text-xs text-neutral-600">
        Default is <span className="font-medium text-neutral-900">Opal</span> (matches your reference opal look).
      </div>
    </div>
  );
}