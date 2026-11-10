"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Controlled parallax: the element drifts a fixed number of pixels along
// one axis while it crosses the viewport. Used for two things only — the
// Arabic title on the Sadara spread and the Impact numerals.
export function Parallax({
  children,
  distance = 40,
  axis = "y",
  className,
}: {
  children: React.ReactNode;
  distance?: number;
  axis?: "x" | "y";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const shift = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <m.div ref={ref} className={className} style={reduce ? undefined : axis === "x" ? { x: shift } : { y: shift }}>
      {children}
    </m.div>
  );
}
