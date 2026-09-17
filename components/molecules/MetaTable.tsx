export function MetaTable({ items }: { items: { label: string; value: React.ReactNode }[] }) {
  return (
    <dl className="space-y-[var(--spacing-md)]">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            {item.label}
          </dt>
          <dd className="font-sans text-[length:var(--text-sm)] text-[var(--fg)]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
