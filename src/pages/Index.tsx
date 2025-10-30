import { Hero } from "@/components/Hero";
import { MemeWithRoots } from "@/components/MemeWithRoots";
import { Manifesto } from "@/components/Manifesto";
import { Tokenomics } from "@/components/Tokenomics";
import { Ecosystem } from "@/components/Ecosystem";
import { Roadmap } from "@/components/Roadmap";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <MemeWithRoots />
      <Manifesto />
      <Tokenomics />
      <Ecosystem />
      <Roadmap />
      <FinalCTA />
    </main>
  );
};

export default Index;