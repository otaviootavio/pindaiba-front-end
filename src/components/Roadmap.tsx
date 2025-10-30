export const Roadmap = () => {
  const roadmapItems = [
    { status: "completed", text: "Emissão mainnet" },
    { status: "completed", text: "Trustline pública" },
    { status: "completed", text: "Website oficial" },
    { status: "in-progress", text: "Airdrop comunitário" },
    { status: "pending", text: "Listagem em DEX (Sologenic)" },
    { status: "pending", text: "NFT Collection da Pindaiba" },
    { status: "pending", text: "Integração XUMM Wallet" },
    { status: "pending", text: "Governança descentralizada" },
  ];

  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-foreground uppercase tracking-wide">
            Roadmap
          </h2>
          <p className="font-terminal text-sm text-center text-muted-foreground mb-16">
            {'>>> '} Execução em tempo real. Status: ATIVO
          </p>

          {/* Terminal Style Roadmap */}
          <div className="bg-card border border-terminal/30 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-secondary px-6 py-3 flex items-center gap-2 border-b border-terminal/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-glitch"></div>
                <div className="w-3 h-3 rounded-full bg-terminal"></div>
              </div>
              <span className="font-terminal text-xs text-muted-foreground ml-4">
                pindaiba_roadmap.sh
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-terminal text-sm space-y-3 bg-background">
              <div className="text-terminal mb-6">
                {'> '} cat roadmap.log
              </div>

              {roadmapItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200"
                >
                  <span className="text-muted-foreground select-none">
                    {index.toString().padStart(2, '0')}
                  </span>
                  
                  {item.status === "completed" && (
                    <span className="text-terminal">[✓]</span>
                  )}
                  {item.status === "in-progress" && (
                    <span className="text-glitch animate-pulse">[▶]</span>
                  )}
                  {item.status === "pending" && (
                    <span className="text-muted-foreground">[ ]</span>
                  )}
                  
                  <span
                    className={
                      item.status === "completed"
                        ? "text-terminal"
                        : item.status === "in-progress"
                        ? "text-glitch"
                        : "text-foreground/60"
                    }
                  >
                    {item.text}
                  </span>
                  
                  {item.status === "completed" && (
                    <span className="text-muted-foreground text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      DONE
                    </span>
                  )}
                  {item.status === "in-progress" && (
                    <span className="text-glitch text-xs ml-auto animate-pulse">
                      RUNNING...
                    </span>
                  )}
                </div>
              ))}

              <div className="pt-6 mt-6 border-t border-terminal/20">
                <div className="text-terminal animate-pulse">
                  {'> '} _
                </div>
              </div>
            </div>
          </div>

          <p className="text-center font-terminal text-xs text-muted-foreground mt-8">
            {'>>> '} O protocolo está em constante evolução. Stay tuned.
          </p>
        </div>
      </div>
    </section>
  );
};