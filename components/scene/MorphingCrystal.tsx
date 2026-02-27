"use client";

import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { OpalFlakes } from "@/components/scene/OpalFlakes";

export function MorphingCrystal({
  progressRef,
  tone = "opal",
}: {
  progressRef: React.MutableRefObject<number>;
  tone?: "opal" | "smoky" | "amethyst" | "ruby" | "emerald";
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1, 4), []);
  const basePositions = useMemo(() => {
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const arr = new Float32Array(pos.array.length);
    arr.set(pos.array as Float32Array);
    return arr;
  }, [geometry]);

  const tint = useMemo(() => {
    switch (tone) {
      case "smoky": return new THREE.Color("#2a2a2a");
      case "amethyst": return new THREE.Color("#6d28d9");
      case "ruby": return new THREE.Color("#b91c1c");
      case "emerald": return new THREE.Color("#10b981");
      case "opal":
      default: return new THREE.Color("#ffffff");
    }
  }, [tone]);

  useEffect(() => { geometry.computeVertexNormals(); }, [geometry]);

  useFrame(() => {
    const t = THREE.MathUtils.clamp(progressRef.current, 0, 1);
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const a = pos.array as Float32Array;

    for (let i = 0; i < a.length; i += 3) {
      const bx = basePositions[i + 0];
      const by = basePositions[i + 1];
      const bz = basePositions[i + 2];

      const len = Math.sqrt(bx * bx + by * by + bz * bz) || 1;
      const nx = bx / len;
      const ny = by / len;
      const nz = bz / len;

      const y = ny;
      const tip = THREE.MathUtils.smoothstep(y, 0.15, 1.0);
      const base = 1.0 - THREE.MathUtils.smoothstep(y, -1.0, -0.15);

      const taper = THREE.MathUtils.lerp(1.05, 0.18, tip);
      const elongY = THREE.MathUtils.lerp(1.0, 2.35, t);

      const leanZ = THREE.MathUtils.lerp(0.0, 0.35, t) * tip;
      const flattenBase = THREE.MathUtils.lerp(0.0, 0.55, t) * base;

      const facet = 1.0 + (Math.sin((bx + by + bz) * 18.0) * 0.015);

      const tx = nx * taper * 1.0 * facet;
      const ty = ny * elongY * facet - flattenBase;
      const tz = nz * taper * 0.82 * facet + leanZ;

      a[i + 0] = THREE.MathUtils.lerp(bx, tx, t);
      a[i + 1] = THREE.MathUtils.lerp(by, ty, t);
      a[i + 2] = THREE.MathUtils.lerp(bz, tz, t);
    }

    pos.needsUpdate = true;
    geometry.computeVertexNormals();

    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(0.15, 0.35, t);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(0.0, -0.22, t);
      meshRef.current.position.y = THREE.MathUtils.lerp(0.0, -0.15, t);
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshTransmissionMaterial
        transmission={1}
        thickness={2.2}
        roughness={0.06}
        ior={1.9}
        chromaticAberration={tone === "opal" ? 0.08 : 0.03}
        anisotropy={tone === "opal" ? 0.18 : 0.12}
        distortion={tone === "opal" ? 0.22 : 0.08}
        distortionScale={tone === "opal" ? 0.6 : 0.35}
        temporalDistortion={tone === "opal" ? 0.22 : 0.15}
        color={tone === "opal" ? "#ffffff" : tint.getStyle()}
        iridescence={tone === "opal" ? 0.85 : 0.15}
        iridescenceIOR={tone === "opal" ? 1.6 : 1.3}
        iridescenceThicknessRange={(tone === "opal" ? [120, 520] : [40, 160]) as any}
      />
      {tone === "opal" ? <OpalFlakes count={560} radius={0.88} /> : null}
    </mesh>
  );
}