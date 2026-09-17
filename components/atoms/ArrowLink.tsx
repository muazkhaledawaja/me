import Link from "next/link";

export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const content = (
    <span className="group inline-flex items-center gap-1.5 font-mono text-[length:var(--text-sm)] text-[var(--fg)]">
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] group-hover:scale-x-100"
        />
      </span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-quart)] group-hover:translate-x-1"
      >
        →
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
