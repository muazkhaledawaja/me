import type { Metadata } from "next";
import { WorkIndex } from "@/components/organisms/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected backend engineering projects — platforms, APIs, and the architecture behind them.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <WorkIndex />;
}
