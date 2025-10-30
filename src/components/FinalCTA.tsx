import { Button } from "@/components/ui/button";
import pindaibaIcon from "@/assets/pindaiba-icon.png";

export const FinalCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating Fruit - Bigger and Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={pindaibaIcon} 
          alt="Pindaiba Coin"
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] animate-float opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-foreground uppercase tracking-wider leading-tight">
          A Crise é Real.
        </h2>
        <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-12 text-terminal uppercase tracking-wider leading-tight">
          A Pindaíba é Digital.
        </h3>

        <Button 
          variant="glitch" 
          size="xl"
          className="min-w-[300px] text-lg"
        >
          ENTRAR NA PINDAÍBA
        </Button>

        <div className="mt-16 font-terminal text-xs text-muted-foreground space-y-2">
          <p>{'>>> '} Issuer: rPindaiba...</p>
          <p>{'>>> '} Network: XRPL Mainnet</p>
          <p>{'>>> '} Status: LIVE</p>
          <p className="text-terminal pt-4">{'>>> '} 2025 — Pindaiba Core</p>
        </div>
      </div>
    </section>
  );
};