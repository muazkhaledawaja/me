export function Hairline({ bleed = false, className }: { bleed?: boolean; className?: string }) {
  return (
    <hr
      aria-hidden="true"
      className={`border-0 border-t border-[var(--rule)] ${bleed ? "bleed" : ""} ${className ?? ""}`}
    />
  );
}
