import { SignatureMark } from "./SignatureMark";

// Exact lockup from docs/moath-signature-logo.html: mark + divider +
// "Moath" serif italic + "BACKEND DEVELOPER" mono tracked caps.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <SignatureMark size={22} strokeColor="var(--fg)" />
      <span className="flex items-center gap-2.5">
        <span className="font-serif italic text-[1.15rem] leading-none text-[var(--fg)]">
          Moath
        </span>
        <span aria-hidden="true" className="h-3 w-px bg-[var(--color-accent-600)]" />
        <span className="font-mono text-[10px] leading-none tracking-[0.28em] text-[var(--fg-muted)]">
          BACKEND DEVELOPER
        </span>
      </span>
    </span>
  );
}
