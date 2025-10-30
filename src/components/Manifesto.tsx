import { useEffect, useState } from "react";

const manifestoText = `
No princípio era a crise.
E a crise gerou a escassez.
E da escassez nasceu a pindaíba.

Mas a pindaíba não é fim.
É começo.

Enquanto sistemas centralizados falham,
enquanto moedas perdem valor,
enquanto bancos tremem —

Nós plantamos código.
Nós assinamos transações.
Nós validamos blocos.

A Pindaiba (PIND) não é apenas um token.
É um manifesto tropical.
Liquidez na Uniswap. Finalidade na Polygon.
Contrato transparente. Comunidade soberana.

Da Bahia para o mundo.
Da crise para o protocolo.
Da pindaíba para a chain.

>>> EXECUTE: add_liquidity --pair USCT<->PIND --network polygon
>>> STATUS: irreversível
`.trim();

export const Manifesto = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < manifestoText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(manifestoText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground uppercase tracking-wide">
            Manifesto
          </h2>
          
          <div className="relative bg-card border border-terminal/20 rounded-lg p-8 md:p-12">
            <pre className="font-terminal text-sm md:text-base text-foreground/90 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              <span className="inline-block w-2 h-4 bg-terminal ml-1 animate-pulse"></span>
            </pre>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-terminal/20 text-right">
              <p className="font-terminal text-xs text-muted-foreground">
                {'>>> '} Pindaiba Core
              </p>
              <p className="font-terminal text-xs text-muted-foreground">
                {'>>> '} 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};