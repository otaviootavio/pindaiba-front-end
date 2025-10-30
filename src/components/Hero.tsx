import { Button } from "@/components/ui/button";
import pindaibaIcon from "@/assets/pindaiba-icon.png";
import { UNISWAP_URL, POLYGONSCAN_URL } from "@/lib/links";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Fruit Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={pindaibaIcon} 
          alt="Pindaiba Fruit"
          className="w-64 h-64 md:w-96 md:h-96 animate-float opacity-30"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Main Title */}
        <h1 className="font-display font-bold tracking-wider mb-8">
          <span className="block text-6xl md:text-8xl lg:text-9xl text-foreground uppercase leading-tight">
            PINDAIBA
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl text-terminal uppercase leading-tight">
            COIN
          </span>
        </h1>

        {/* Tagline */}
        <div className="mb-12">
          <p className="font-terminal text-xl md:text-3xl lg:text-4xl text-foreground/90 uppercase tracking-wide">
            DA PINDAÍBA
          </p>
          <p className="font-terminal text-xl md:text-3xl lg:text-4xl text-terminal uppercase tracking-wide">
            AO PROTOCOLO.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            variant="terminal" 
            size="xl"
            className="min-w-[240px]"
          >
            <a href={UNISWAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Comprar PIND no Uniswap (abre em nova aba)">
              Comprar no Uniswap
            </a>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="xl"
            className="min-w-[240px]"
          >
            <a href={POLYGONSCAN_URL} target="_blank" rel="noopener noreferrer" aria-label="Ver token PIND no PolygonScan (abre em nova aba)">
              Ver no PolygonScan
            </a>
          </Button>
        </div>

        {/* Terminal Cursor Effect */}
        <div className="mt-16 font-terminal text-sm text-muted-foreground">
          <span className="inline-block">{'>>> '}</span>
          <span className="animate-typing inline-block">Iniciando protocolo...</span>
        </div>
      </div>
    </section>
  );
};