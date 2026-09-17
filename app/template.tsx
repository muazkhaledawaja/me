"use client";

import { m } from "framer-motion";
import { duration, ease } from "@/lib/motion";

// Enter-only page transition. template.tsx remounts per route, giving a
// free mount animation without the AnimatePresence exit-animation hack
// that freezes the router context in App Router. See plan §7.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slow, ease: ease.outQuart }}
    >
      {children}
    </m.div>
  );
}
