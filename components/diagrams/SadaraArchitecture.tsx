// Hand-authored system diagram for the Sadara case study. Nodes are
// hairline rects with mono labels; edges are paths that draw in via
// stroke-dashoffset on mount (CSS only, disabled under reduced motion).
// The figcaption narrates the same flow in prose — simultaneously the a11y
// fallback, the SEO text, and the reduced-motion fallback. See plan §6.

const NODES = [
  { id: "client", label: "Client (AR/RTL · EN/LTR)", x: 20, y: 40, w: 190 },
  { id: "nextjs", label: "Next.js 15 edge", x: 260, y: 40, w: 150 },
  { id: "auth", label: "Auth — JWT + refresh rotation", x: 260, y: 110, w: 220 },
  { id: "rbac", label: "RBAC check (Redis cache)", x: 540, y: 110, w: 200 },
  { id: "modules", label: "50+ modules (MVC + factory)", x: 540, y: 40, w: 220 },
  { id: "postgres", label: "PostgreSQL 17", x: 820, y: 40, w: 150 },
  { id: "sse", label: "SSE notifications", x: 820, y: 110, w: 150 },
  { id: "esign", label: "E-signature approval chain", x: 540, y: 180, w: 220 },
];

const EDGES = [
  { id: "c-n", d: "M 210 55 L 260 55" },
  { id: "n-a", d: "M 335 70 L 335 110" },
  { id: "a-r", d: "M 480 130 L 540 130" },
  { id: "n-m", d: "M 410 55 L 540 55" },
  { id: "r-m", d: "M 640 110 L 640 70" },
  { id: "m-p", d: "M 760 55 L 820 55" },
  { id: "r-sse", d: "M 740 125 L 820 125" },
  { id: "r-e", d: "M 640 145 L 640 180" },
];

export function SadaraArchitecture() {
  return (
    <figure aria-hidden="true">
      <svg viewBox="0 0 1010 240" fill="none" className="h-auto w-full text-[var(--fg-muted)]" role="img">
        <title>Sadara request and permission-check architecture</title>
        {EDGES.map((edge) => (
          <path
            key={edge.id}
            d={edge.d}
            stroke="currentColor"
            strokeWidth="1"
            className="sadara-edge"
          />
        ))}
        {NODES.map((node) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <rect width={node.w} height={36} stroke="currentColor" strokeWidth="1" fill="var(--surface)" />
            <text
              x={node.w / 2}
              y={22}
              textAnchor="middle"
              className="font-mono"
              style={{ fontSize: "10px", fill: "var(--fg)" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">
        A request enters through the Next.js edge in either Arabic RTL or English LTR, passes through
        JWT authentication with HttpOnly refresh-token rotation, then a Redis-cached RBAC permission
        check gates access before reaching one of 50+ backend modules built on a shared MVC factory
        pattern. Authorized requests read and write PostgreSQL 17, while permission-aware events fan
        out to real-time SSE notifications and an e-signature approval chain.
      </figcaption>
      <style>{`
        .sadara-edge {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: sadara-draw 900ms var(--ease-out-expo, ease-out) forwards;
          animation-delay: 300ms;
        }
        @media (prefers-reduced-motion: reduce) {
          .sadara-edge { animation: none; stroke-dashoffset: 0; }
        }
        @keyframes sadara-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </figure>
  );
}
