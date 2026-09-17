export function Eyebrow({
  children,
  number,
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  number?: string;
  className?: string;
  as?: "p" | "h2";
}) {
  return (
    <Tag
      className={`font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)] ${className ?? ""}`}
    >
      {number ? <span className="text-[var(--accent)] tabular-nums">{number} — </span> : null}
      {children}
    </Tag>
  );
}
