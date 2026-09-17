export function Figure({
  caption,
  children,
  className,
}: {
  caption: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={className}>
      {children}
      <figcaption className="mt-[var(--spacing-md)] max-w-[var(--measure-lede)] font-sans text-[length:var(--text-sm)] text-[var(--fg-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}
