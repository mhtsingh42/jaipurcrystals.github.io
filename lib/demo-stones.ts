export type StoneRecord = {
  digitalId: string;
  name: string;
  type: "Nail Gem" | "Loose Gemstone";
  reportId: string;
  lab: string;
  carat?: number;
  color: string;
  cut: string;
  origin?: string;
  buybackEligible: boolean;
  notes: string;
  issuedAtISO: string;
};

export const demoStones: StoneRecord[] = [
  {
    digitalId: "JC-OP-7K2P-19A",
    name: "Opal Prism Tip",
    type: "Nail Gem",
    reportId: "LAB-JPR-2026-00192",
    lab: "Govt-Certified Lab (Demo)",
    color: "Milky Opal",
    cut: "Prism / micro-facet",
    buybackEligible: false,
    notes: "Nail crystal set with Digital ID packaging.",
    issuedAtISO: "2026-02-10",
  },
  {
    digitalId: "JC-RB-9Q1F-72C",
    name: "Natural Ruby 0.9ct",
    type: "Loose Gemstone",
    reportId: "LAB-JPR-2026-00411",
    lab: "Govt-Certified Lab (Demo)",
    carat: 0.9,
    color: "Crimson Red",
    cut: "Oval",
    origin: "Mozambique (Demo)",
    buybackEligible: true,
    notes: "Buyback eligible (demo flag).",
    issuedAtISO: "2026-02-04",
  },
];

export function findStoneByDigitalId(digitalId: string) {
  const id = digitalId.trim().toUpperCase();
  return demoStones.find(s => s.digitalId.toUpperCase() === id) ?? null;
}