"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { MorphingCrystal } from "@/components/scene/MorphingCrystal";

export function TrueMorphScene({
  progressRef,
  tone = "opal",
}: {
  progressRef: React.MutableRefObject<number>;
  tone?: "opal" | "smoky" | "amethyst" | "ruby" | "emerald";
}) {
  return (
    <div className="relative h-[72vh] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-50 to-neutral-100 shadow-soft border border-neutral-200">
      <Canvas camera={{ position: [0, 0.2, 4.2], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 6, 6]} intensity={1.2} />
        <MorphingCrystal progressRef={progressRef} tone={tone} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}