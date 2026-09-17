"use client";

import { m } from "framer-motion";
import { duration, ease, revealViewport } from "@/lib/motion";

// Thin whileInView wrapper. Fires once, disconnects its observer, and
// respects prefers-reduced-motion globally via <MotionConfig> in layout.tsx.
// className is forwarded to the wrapper so grid placement (col-start/span)
// lives on THIS element, not the child — move it here at each call site.
export function Reveal({
  children,
  className,
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <m.div
      data-reveal
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: duration.reveal, ease: ease.outExpo, delay }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  );
}
