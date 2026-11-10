import { SignatureMark } from "./SignatureMark";

// Signature mark + name. The mark is Moath's digitized signature (see
// docs/moath-signature-logo.html); the name is set in the interface sans so
// the poster-size name in the hero stays the only display moment.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <SignatureMark size={18} strokeColor="var(--accent-mark)" />
      <span className="font-sans text-[length:var(--text-sm)] font-semibold leading-none text-[var(--fg)]">
        Moath K. Awaja
      </span>
    </span>
  );
}
