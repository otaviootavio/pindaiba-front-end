import { Wallet, Coins, MessageCircle, Globe, TrendingUp, Users } from "lucide-react";

const ecosystemItems = [
  { icon: Wallet, label: "XUMM", description: "Wallet oficial" },
  { icon: Coins, label: "Sologenic DEX", description: "Trading" },
  { icon: MessageCircle, label: "Telegram", description: "Comunidade" },
  { icon: Globe, label: "XRPL.org", description: "Blockchain" },
  { icon: TrendingUp, label: "XRP Charts", description: "Analytics" },
  { icon: Users, label: "Holders", description: "Governança" },
];

export const Ecosystem = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--terminal-green)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--terminal-green)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-foreground uppercase tracking-wide">
            O Ecossistema é o Meme.
          </h2>
          <p className="font-terminal text-sm text-muted-foreground mb-16">
            {'>>> '} Integrado. Descentralizado. Tropical.
          </p>

          {/* Ecosystem Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {ecosystemItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-terminal transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-terminal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <item.icon 
                    className="w-12 h-12 mx-auto mb-4 text-muted-foreground group-hover:text-terminal transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 uppercase tracking-wide">
                    {item.label}
                  </h3>
                  <p className="font-terminal text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-terminal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-terminal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="mt-16 font-terminal text-sm text-terminal text-center space-y-2">
            <p>{'>>> '} Cada nó fortalece a rede.</p>
            <p>{'>>> '} Cada holder é governança.</p>
            <p className="text-glitch">{'>>> '} O ecossistema é VOCÊ.</p>
          </div>
        </div>
      </div>
    </section>
  );
};