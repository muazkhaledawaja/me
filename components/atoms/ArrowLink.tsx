import Link from "next/link";

// Text link with a rule that retracts on hover. `solid` is the one filled
// button on the site (hero → work).
export function ArrowLink({
  href,
  children,
  external = false,
  solid = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  solid?: boolean;
  className?: string;
}) {
  const classes = solid
    ? `inline-flex items-center bg-[var(--fg)] px-5 py-3 font-sans text-[length:var(--text-sm)] font-semibold text-[var(--surface)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--accent)] ${className ?? ""}`
    : `link-rule font-sans text-[length:var(--text-sm)] font-semibold text-[var(--fg)] ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
