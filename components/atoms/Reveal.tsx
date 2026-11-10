"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

type RevealProps = {
  children?: React.ReactNode;
  /** rise: fade + lift (blocks of text). mask: clipped slide-up (large
   * type). rule: a hairline drawing itself. plate: staggers the figure's
   * [data-cell] / [data-grow] children. */
  variant?: "rise" | "mask" | "rule" | "plate";
  as?: "div" | "span" | "li" | "figure" | "article";
  className?: string;
  style?: React.CSSProperties;
  /** seconds */
  delay?: number;
};

// The page's only scroll trigger. It flips one data attribute, once, and
// app/globals.css does the rest — no per-frame React work, and the
// reduced-motion and <noscript> fallbacks are plain CSS.
export function Reveal({ children, variant = "rise", as: Tag = "div", className, style, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px", amount: 0.15 });

  return (
    <Tag
      // one ref type for every tag this component can render
      ref={ref as React.Ref<never>}
      data-reveal={variant}
      data-inview={inView ? "true" : "false"}
      className={className}
      style={{ ...style, ["--reveal-delay" as string]: `${Math.round(delay * 1000)}ms` }}
    >
      {children}
    </Tag>
  );
}
