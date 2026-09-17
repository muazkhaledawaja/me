// Digitized from Moath's handwritten signature. Canonical path + viewBox
// from docs/moath-signature-logo.html. Stroke width scales with size per
// the original brand sheet (120:5, 60:7, 32:11, 20:16 — interpolated for
// values in between).
const SIGNATURE_PATH =
  "M 60 130 Q 70 110 90 80 Q 110 50 115 30 Q 120 18 110 22 Q 95 32 90 60 Q 87 90 95 115 Q 110 145 130 130 Q 145 122 140 135 L 100 250";

type SignatureMarkProps = {
  size?: number;
  className?: string;
  strokeColor?: string;
};

// linear interpolation across the four documented brand-sheet points
const STROKE_POINTS: [size: number, width: number][] = [
  [20, 16],
  [32, 11],
  [60, 7],
  [120, 5],
];

function strokeWidthForSize(size: number): number {
  const first = STROKE_POINTS[0]!;
  const last = STROKE_POINTS[STROKE_POINTS.length - 1]!;
  if (size <= first[0]) return first[1];
  if (size >= last[0]) return last[1];
  for (let i = 0; i < STROKE_POINTS.length - 1; i++) {
    const [s0, w0] = STROKE_POINTS[i]!;
    const [s1, w1] = STROKE_POINTS[i + 1]!;
    if (size >= s0 && size <= s1) {
      const t = (size - s0) / (s1 - s0);
      return w0 + t * (w1 - w0);
    }
  }
  return 11;
}

export function SignatureMark({ size = 32, className, strokeColor = "currentColor" }: SignatureMarkProps) {
  return (
    <svg
      viewBox="0 0 200 280"
      width={size}
      height={(size * 280) / 200}
      className={className}
      role="img"
      aria-label="Moath Awaja signature mark"
    >
      <path
        d={SIGNATURE_PATH}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidthForSize(size)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { SIGNATURE_PATH };
