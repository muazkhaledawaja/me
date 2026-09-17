// The hero visual — replaces the legacy Spline robot iframe. A backend
// request path, traced as an inline SVG: zero JS, zero network request,
// ~6KB gzipped. See plan §8. Packets travel via CSS `offset-path` (defined
// in the accompanying <style> below); under prefers-reduced-motion the
// keyframe animation is disabled globally (app/globals.css) and this
// remains a fully legible static diagram.

const LANES = [
  { id: "lane-1", path: "M 8 40 L 120 40 L 120 90 L 232 90", delay: "0s" },
  { id: "lane-2", path: "M 8 40 L 120 40 L 120 150 L 232 150", delay: "0.9s" },
  { id: "lane-3", path: "M 232 90 L 320 90 L 320 40 L 420 40", delay: "1.8s" },
  { id: "lane-4", path: "M 232 150 L 320 150 L 320 200 L 420 200", delay: "2.7s" },
];

const NODES = [
  { label: "Client", x: 8, y: 40 },
  { label: "Edge", x: 120, y: 40 },
  { label: "Auth", x: 120, y: 150 },
  { label: "Service", x: 232, y: 90 },
  { label: "Service", x: 232, y: 150 },
  { label: "Redis", x: 320, y: 40 },
  { label: "Postgres", x: 320, y: 150 },
  { label: "Queue", x: 320, y: 200 },
  { label: "SSE", x: 420, y: 40 },
];

export function RequestPathDiagram({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <figure className={className} style={style} aria-hidden="true">
      <svg
        viewBox="0 0 440 220"
        fill="none"
        className="h-auto w-full text-[var(--fg-faint)]"
        role="img"
      >
        <title>Backend request path</title>
        {LANES.map((lane) => (
          <path
            key={lane.id}
            d={lane.path}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}
        {LANES.map((lane) => (
          <circle
            key={`packet-${lane.id}`}
            r="3.5"
            fill="var(--color-accent-600)"
            style={{
              offsetPath: `path('${lane.path}')`,
              animation: `request-packet 4.2s linear infinite`,
              animationDelay: lane.delay,
            }}
          />
        ))}
        {NODES.map((node) => (
          <g key={`${node.label}-${node.x}-${node.y}`} transform={`translate(${node.x}, ${node.y})`}>
            <rect
              x={-3}
              y={-3}
              width={6}
              height={6}
              stroke="currentColor"
              strokeWidth="1"
              fill="var(--surface)"
            />
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">
        A diagram of a backend request path: a client request enters at the edge, passes
        through auth, fans out to services, and reaches Redis, Postgres, a queue, and a
        server-sent events channel.
      </figcaption>
      <style>{`
        @keyframes request-packet {
          from { offset-distance: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          to { offset-distance: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          figure circle { animation: none !important; opacity: 0 !important; }
        }
      `}</style>
    </figure>
  );
}
