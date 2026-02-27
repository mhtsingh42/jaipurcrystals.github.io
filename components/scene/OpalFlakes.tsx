"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function OpalFlakes({ count = 520, radius = 0.9 }:{ count?: number; radius?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { geometry, seeds } = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const s = new Float32Array(count);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const rr = radius * Math.pow(Math.random(), 1.8);

      const x = rr * Math.sin(phi) * Math.cos(theta);
      const y = rr * Math.sin(phi) * Math.sin(theta);
      const z = rr * Math.cos(phi);

      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      s[i] = Math.random();
      color.setHSL(0.55 + 0.35 * s[i], 0.85, 0.65);
      colors[i * 3 + 0] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return { geometry: g, seeds: s };
  }, [count, radius]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pts = pointsRef.current;
    if (!pts) return;

    const c = geometry.getAttribute("color") as THREE.BufferAttribute;
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      const hue = 0.55 + 0.35 * Math.sin(t * (0.35 + s * 0.8) + s * 6.28);
      color.setHSL(hue, 0.9, 0.68);
      c.array[i * 3 + 0] = color.r;
      c.array[i * 3 + 1] = color.g;
      c.array[i * 3 + 2] = color.b;
    }
    c.needsUpdate = true;

    pts.rotation.y = t * 0.08;
    pts.rotation.x = t * 0.04;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}