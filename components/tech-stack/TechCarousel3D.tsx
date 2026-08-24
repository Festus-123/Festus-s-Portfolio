"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

const STACKS = [
  { name: "Next.js", img: "/nextjs.webp" },
  { name: "React", img: "/react.webp" },
  { name: "TypeScript", img: "/typeScript.webp" },
  { name: "JavaScript", img: "/javascript.webp" },
  { name: "Python", img: "/python.webp" },
  { name: "Git", img: "/git.webp" },
  { name: "GitHub", img: "/github.webp" },
  { name: "Supabase", img: "/supabase.webp" },
];

export default function TechCarousel3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ring = ringRef.current;
      if (!ring) return;

      const items = gsap.utils.toArray<HTMLElement>(".stack-card");
      const totalItems = items.length;
      const angleStep = 360 / totalItems;
      const radius = 320; // Radius of 3D orbital loop

      // State variable for tracking rotation rotation angle
      const rotationState = { y: 0 };

      // 1. Initial positioning of cards on the 3D ring
      items.forEach((item, index) => {
        const angle = index * angleStep;
        gsap.set(item, {
          rotationY: angle,
          z: radius,
          transformOrigin: `50% 50% -${radius}px`,
        });
      });

      // 2. Dynamic depth calculation for cards (Scale, Opacity, Z-index sorting)
      const updateDepthEffects = () => {
        const currentRotation = rotationState.y;

        // Rotate the parent ring along Y axis
        gsap.set(ring, { rotationY: currentRotation });

        items.forEach((item, index) => {
          const itemInitialAngle = index * angleStep;
          let totalAngle = (itemInitialAngle + currentRotation) % 360;
          if (totalAngle < 0) totalAngle += 360;

          // Difference from camera focus (0 degrees)
          let diff = Math.abs(totalAngle);
          if (diff > 180) diff = 360 - diff;

          const normalizedFront = 1 - diff / 180; // 1 = directly front, 0 = directly back

          // Front items scale up, back items shrink and drop opacity
          const scale = gsap.utils.interpolate(0.7, 1.2, normalizedFront);
          const opacity = gsap.utils.interpolate(0.15, 1.0, normalizedFront);
          const zIndex = Math.round(normalizedFront * 100);

          gsap.set(item, {
            scale,
            opacity,
            zIndex,
            filter: `blur(${(1 - normalizedFront) * 4}px)`,
          });
        });
      };

      // 3. Scroll Controller using GSAP Observer
      Observer.create({
        target: containerRef.current,
        type: "wheel,touch",
        wheelSpeed: 1,
        onChangeX: (self) => {
          // Horizontal scroll input
          const delta = self.deltaX * 0.25;
          gsap.to(rotationState, {
            y: `+=${delta}`,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: updateDepthEffects,
          });
        },
        onChangeY: (self) => {
          // Allow shift+scroll or touchpad horizontal gestures mapped from vertical delta
          if (Math.abs(self.deltaX) < Math.abs(self.deltaY)) {
            const delta = self.deltaY * 0.25;
            gsap.to(rotationState, {
              y: `+=${delta}`,
              duration: 0.5,
              ease: "power2.out",
              onUpdate: updateDepthEffects,
            });
          }
        },
      });

      // Initial layout setup
      updateDepthEffects();
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-125 flex items-center justify-center overflow-hidden text-white select-none"
      style={{ perspective: "1000px" }}
    >
      {/* Background hint */}
     

      <div
        ref={ringRef}
        className="relative w-56 h-64 "
        style={{ transformStyle: "preserve-3d" }}
      >
        {STACKS.map((stack, i) => (
          <div
            key={i}
            className="stack-card absolute inset-0 rounded-2xl border border-white/10 bg-neutral-950/80 backdrop-blur-md flex flex-col items-center justify-center p-6  transition-colors hover:border-black/60"
          >
            <div className="relative w-20 h-20 mb-4 flex items-center justify-center drop-shadow-md">
              <Image
                src={stack.img}
                alt={stack.name}
                width={80}
                height={80}
                className="object-contain max-h-full max-w-full"
              />
            </div>
            <span className="text-sm font-medium tracking-wide text-neutral-200">
              {stack.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
