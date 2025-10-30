import pindaibaFruit from "@/assets/pindaiba-fruit.jpg";

export const MemeWithRoots = () => {
  return (
    <section className="relative py-24 bg-secondary overflow-hidden">
      {/* Code Overlay Texture */}
      <div className="absolute inset-0 opacity-5 font-terminal text-xs text-terminal pointer-events-none overflow-hidden">
        <pre className="whitespace-pre leading-relaxed">
{`erc20.approve()
uniswap.addLiquidity(USCT, PIND)
swap.execute(USCT->PIND)
polygon.finalized()
transaction.confirmed()
`.repeat(20)}
        </pre>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-terminal/20">
              <img 
                src={pindaibaFruit} 
                alt="Pindaiba Fruit Macro"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-2 font-terminal text-sm rounded">
              organic.protocol()
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wide">
              O Meme com Raiz
            </h2>
            
            <div className="space-y-4 font-terminal text-base text-foreground/80 leading-relaxed">
              <p>
                A <span className="text-terminal font-semibold">Pindaiba</span> não é só fruta.
                É símbolo de crise, de improviso, de sobrevivência criativa.
              </p>
              
              <p>
                Enquanto o mundo financeiro tradicional entra em colapso,
                nós construímos um novo protocolo —{" "}
                <span className="text-accent font-semibold">descentralizado</span>,{" "}
                <span className="text-accent font-semibold">tropical</span>,{" "}
                <span className="text-accent font-semibold">irônico</span>.
              </p>

              <p className="text-terminal">
                {'>>> '} Da crise nasce o código.
                <br />
                {'>>> '} Da pindaíba nasce a liquidez.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-4 text-center">
              <div className="border border-terminal/20 rounded p-4">
                <div className="text-3xl font-bold text-terminal">100%</div>
                <div className="text-xs font-terminal text-muted-foreground uppercase">Orgânico</div>
              </div>
              <div className="border border-terminal/20 rounded p-4">
                <div className="text-3xl font-bold text-terminal">Polygon</div>
                <div className="text-xs font-terminal text-muted-foreground uppercase">Mainnet</div>
              </div>
              <div className="border border-terminal/20 rounded p-4">
                <div className="text-3xl font-bold text-terminal">∞</div>
                <div className="text-xs font-terminal text-muted-foreground uppercase">Potencial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};