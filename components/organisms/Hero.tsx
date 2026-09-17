import { profile } from "@/content/profile";
import { StatusDot } from "@/components/atoms/StatusDot";
import { RequestPathDiagram } from "./RequestPathDiagram";

// Section 1 — Hero. The whole identity in one screen: name, positioning,
// and the request-path diagram standing in for the legacy Spline iframe.
// This is the LCP element — server-rendered text, CSS-only mount reveal
// (no Framer/JS gate) so nothing here blocks paint.
export function Hero() {
  return (
    <section
      className="grid-editorial relative overflow-hidden"
      style={{ minBlockSize: "88svh", paddingBlock: "var(--spacing-4xl)" }}
    >
      <RequestPathDiagram
        className="pointer-events-none absolute top-[8%] z-[var(--z-base)] w-[55%] max-w-none opacity-70"
        style={{ left: "58%" }}
      />

      <p
        className="hero-reveal relative z-[var(--z-raised)] col-start-1 col-span-2 self-start font-mono text-[length:var(--text-label)] uppercase tracking-[0.24em] text-[var(--fg-muted)]"
        style={{ marginBlockStart: "0.35em", animationDelay: "0ms" }}
      >
        {profile.role} · {profile.location.split(",")[0]}
      </p>

      <h1 className="relative z-[var(--z-raised)] col-start-2 col-span-8 font-serif text-[length:var(--text-display)] leading-[0.88] tracking-[-0.03em] text-[var(--fg)]">
        <span className="hero-reveal block" style={{ animationDelay: "90ms" }}>
          {profile.firstName}
        </span>
        <span className="hero-reveal block italic" style={{ animationDelay: "180ms" }}>
          {profile.lastName}
        </span>
        <span
          className="hero-reveal block font-sans text-[length:var(--text-2xl)] not-italic leading-[1.2] tracking-normal text-[var(--fg-muted)]"
          style={{
            marginBlockStart: "var(--spacing-lg)",
            marginInlineStart: "var(--offset-step)",
            animationDelay: "270ms",
          }}
        >
          {profile.tagline}
        </span>
      </h1>

      <div
        className="hero-reveal relative z-[var(--z-raised)] col-start-10 col-span-3 flex flex-col items-end justify-end gap-3 self-end text-right font-mono text-[length:var(--text-xs)] text-[var(--fg-muted)]"
        style={{ animationDelay: "360ms" }}
      >
        <p>Node.js · TypeScript · NestJS</p>
        <p>PostgreSQL · MongoDB · OracleDB</p>
        <StatusDot label={profile.status} />
      </div>

      <div
        className="hero-reveal relative z-[var(--z-raised)] col-start-1 col-span-2 mt-auto self-end font-mono text-[length:var(--text-xs)] text-[var(--fg-faint)]"
        style={{ animationDelay: "450ms" }}
      >
        Scroll
      </div>

      <style>{`
        .hero-reveal {
          animation: hero-reveal 720ms var(--ease-out-expo) both;
        }
        @keyframes hero-reveal {
          from { clip-path: inset(0 0 100% 0); transform: translateY(24px); }
          to { clip-path: inset(0 0 0% 0); transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal { animation: none; }
        }
      `}</style>
    </section>
  );
}
