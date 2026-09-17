"use client";

import { useEffect, useState } from "react";

/** Shared IntersectionObserver hook — the only two places a scroll trigger
 * needs a *value* rather than a boolean: the case-study TOC and the
 * experience year rail. Everything else uses Framer's `whileInView`. */
export function useActiveSection(ids: string[]): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
