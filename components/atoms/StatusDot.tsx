export function StatusDot({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap font-sans text-[length:var(--text-sm)] font-medium text-[var(--fg)]">
      <span aria-hidden="true" className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-mark)] opacity-50 [animation-duration:2.4s]" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-mark)]" />
      </span>
      {label}
    </span>
  );
}
