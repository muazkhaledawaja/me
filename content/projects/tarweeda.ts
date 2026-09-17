import type { Project } from "../types";

// Source: legacy/index.html + moath-portfolio.html v2. Only project with a
// public URL (tarweeda.com).
export const tarweeda: Project = {
  slug: "tarweeda",
  number: "02",
  title: "Tarweeda",
  role: "Full-Stack Developer",
  type: "client",
  year: "2024",
  summary:
    "Full-stack SaaS platform for events, bookings, and e-commerce — product catalog, order management, and bookings for events, packages, catering, and hire services.",
  outcomeLine: "Live at tarweeda.com",
  stack: ["NestJS", "React", "TypeScript", "Supabase", "Docker", "Resend"],
  link: { label: "tarweeda.com", href: "https://tarweeda.com" },
  caseStudy: {
    problem: [
      "The client ran three separate businesses through manual processes: an events/catering booking operation, a hire-services arm, and a small e-commerce storefront — each with its own ad hoc tracking, none of it talking to the others.",
      "The ask was one platform: a public storefront, a bookings flow for events and packages, and an admin panel that could manage orders, bookings, and content without engineering involvement after launch.",
    ],
    constraints: [
      "The API needed to be public-facing (customer bookings, storefront) and therefore hardened against the traffic patterns a client project — not an internal tool — actually gets.",
      "Transactional email (booking confirmations, order receipts) had to be reliable enough that a missed email meant a missed booking, not a support ticket.",
      "Admin panel had to be usable by non-technical staff on day one, with no engineering support built into the operating model.",
    ],
    research: [
      "Compared building the admin panel as a bespoke React app against a headless-CMS-driven approach; a bespoke panel won because the domain objects (bookings, packages, catering line items) didn't map cleanly onto a generic CMS content model.",
      "Evaluated transactional email providers on deliverability and DX — Resend's API and template ergonomics fit a NestJS backend better than the alternatives evaluated.",
    ],
    architectureDiagram: "tarweeda",
    decisions: [
      {
        context: "Public REST API needed to withstand normal internet traffic without a dedicated ops team watching it.",
        options: ["No rate limiting, rely on infra", "Application-level rate limiting + hardened headers"],
        decision:
          "Rate limiting and Helmet-based header hardening built into the API layer itself, alongside JWT auth for authenticated routes.",
        consequence:
          "The API defends itself regardless of what sits in front of it in production, at the cost of tuning rate-limit thresholds so legitimate booking bursts (a popular event going live) don't get throttled.",
      },
      {
        context: "Bookings span three distinct domains — events, packages/catering, and hire services — with different fields and lifecycles.",
        options: ["One generic 'booking' entity with optional fields", "Separate booking types sharing a common state machine"],
        decision:
          "Separate booking entities per domain sharing a common status/lifecycle contract, rather than one entity trying to represent all three.",
        consequence:
          "The domain model stays honest — no null-heavy generic entity — at the cost of some duplicated CRUD scaffolding across the three booking types.",
      },
      {
        context: "Transactional email reliability directly affects whether a customer's booking is confirmed.",
        options: ["Send email inline in the request path", "Queue email sends via Resend with the request returning once the booking is persisted"],
        decision:
          "Booking confirmation is persisted first and treated as the source of truth; email delivery via Resend is a downstream effect, not a gate on the response.",
        consequence:
          "A booking never fails because an email provider is briefly down, at the cost of needing a way to notice and resend if a confirmation email silently fails.",
      },
    ],
    challenges: [
      {
        challenge: "Non-technical staff needed to manage orders and bookings without engineering support.",
        tradeoff:
          "Built a purpose-specific admin panel instead of adapting an off-the-shelf admin generator — slower to build, but every screen matches how the client's staff actually think about their bookings.",
      },
      {
        challenge: "Three booking domains sharing infrastructure without becoming one tangled entity.",
        tradeoff:
          "Kept the domains separate at the data layer and unified only at the state-machine level — more files, clearer boundaries.",
      },
    ],
    results: [
      { label: "Status", value: "Live in production", measured: false },
      { label: "Domain", value: "tarweeda.com", measured: false },
      { label: "Booking domains served", value: "3 (events, packages/catering, hire)", measured: false },
    ],
    lessons: [
      "A client-facing admin panel is a product in its own right — the people using it never see the API, only whether their workday got easier.",
      "Treating email as a downstream effect rather than a gate on the response is a small architectural choice that removes an entire class of 'the booking succeeded but the customer panicked' support tickets.",
    ],
  },
};
