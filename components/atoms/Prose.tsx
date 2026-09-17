export function Prose({
  children,
  measure = "prose",
  className,
}: {
  children: React.ReactNode;
  measure?: "prose" | "lede" | "narrow";
  className?: string;
}) {
  return (
    <div
      style={{ maxWidth: `var(--measure-${measure})` }}
      className={`space-y-[var(--spacing-lg)] text-[var(--fg-muted)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
