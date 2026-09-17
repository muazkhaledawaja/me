import { Hero } from "@/components/organisms/Hero";
import { WorkIndex } from "@/components/organisms/WorkIndex";
import { ImpactStrip } from "@/components/organisms/ImpactStrip";
import { About } from "@/components/organisms/About";
import { Experience } from "@/components/organisms/Experience";
import { StackIndex } from "@/components/organisms/StackIndex";
import { Contact } from "@/components/organisms/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkIndex />
      <ImpactStrip />
      <About />
      <Experience />
      <StackIndex />
      <Contact />
    </>
  );
}
