"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TrueMorphScene } from "@/components/scene/TrueMorphScene";

gsap.registerPlugin(ScrollTrigger);

export default function True3DMorphHero({
  tone = "opal",
}: {
  tone?: "opal" | "smoky" | "amethyst" | "ruby" | "emerald";
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      gsap.to(progressRef, {
        current: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative grain">
      <TrueMorphScene progressRef={progressRef} tone={tone} />
      <div className="absolute left-5 bottom-5 md:left-8 md:bottom-8 text-xs md:text-sm text-neutral-600">
        Scroll → gemstone morphs into nail crystal tip (true 3D)
      </div>
    </div>
  );
}