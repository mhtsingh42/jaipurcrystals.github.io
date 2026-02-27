import { supabase } from "./supabase";
import { findStoneByDigitalId, type StoneRecord } from "./demo-stones";

export async function verifyDigitalId(digitalId: string): Promise<StoneRecord | null> {
  const id = digitalId.trim().toUpperCase();
  if (!id) return null;

  if (supabase) {
    const { data, error } = await supabase
      .from("stones")
      .select("*")
      .eq("digital_id", id)
      .limit(1)
      .maybeSingle();

    if (!error && data) {
      return {
        digitalId: data.digital_id,
        name: data.name,
        type: data.type,
        reportId: data.report_id,
        lab: data.lab,
        carat: data.carat ?? undefined,
        color: data.color,
        cut: data.cut,
        origin: data.origin ?? undefined,
        buybackEligible: !!data.buyback_eligible,
        notes: data.notes ?? "",
        issuedAtISO: data.issued_at,
      } satisfies StoneRecord;
    }
  }

  return findStoneByDigitalId(id);
}