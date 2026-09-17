// Mirrors the CSS duration/easing tokens in app/globals.css so Framer Motion
// components share exactly the same rhythm as CSS-only ones. See plan §7.

export const duration = {
  instant: 0.12,
  fast: 0.18,
  base: 0.24,
  slow: 0.32,
  slower: 0.48,
  reveal: 0.56,
  cinematic: 0.72,
} as const;

export const ease = {
  outQuart: [0.25, 1, 0.5, 1],
  outExpo: [0.16, 1, 0.3, 1],
  inOutQuint: [0.83, 0, 0.17, 1],
  standard: [0.4, 0, 0.2, 1],
} as const;

export const revealViewport = {
  once: true,
  margin: "0px 0px -12% 0px",
  amount: 0.2,
} as const;

export const magneticSpring = { stiffness: 260, damping: 22, mass: 0.6 } as const;
export const cursorSpring = { stiffness: 150, damping: 15 } as const;
