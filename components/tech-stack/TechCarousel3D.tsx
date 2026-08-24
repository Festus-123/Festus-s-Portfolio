"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

const STACKS = ["Next.js", "React", "TypeScript", "Python", "Git", "GitHub", "React Native"];

export default function TechCarousel3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".card-2d");
    const container = containerRef.current;
    if (!container) return;

    const updateScales = () => {
      const containerBounds = container.getBoundingClientRect();
      const centerX = containerBounds.left + containerBounds.width / 2;

      cards.forEach((card) => {
        const cardBounds = card.getBoundingClientRect();
        const cardCenterX = cardBounds.left + cardBounds.width / 2;
        const distFromCenter = Math.abs(centerX - cardCenterX);

        // Max scale at center (1.3), min scale at edges (0.8)
        const maxDist = containerBounds.width / 2;
        const progress = Math.max(0, 1 - distFromCenter / maxDist);

        const scale = gsap.utils.interpolate(0.8, 1.3, progress);
        const opacity = gsap.utils.interpolate(0.3, 1.0, progress);

        gsap.set(card, { scale, opacity });
      });
    };

    // Make track horizontally draggable
    Draggable.create(".track-2d", {
      type: "x",
      bounds: container,
      inertia: true,
      onDrag: updateScales,
      onThrowUpdate: updateScales,
    });

    updateScales();
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="w-full h-64 bg-neutral-900 flex items-center overflow-hidden relative"
    >
      <div className="track-2d flex gap-8 px-[50%] cursor-grab active:cursor-grabbing">
        {STACKS.map((stack, idx) => (
          <div
            key={idx}
            className="card-2d min-w-[140px] h-32 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white font-bold text-lg shadow-xl"
          >
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
}