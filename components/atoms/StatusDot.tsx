export function StatusDot({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-600)]"
      />
      {label}
    </span>
  );
}
