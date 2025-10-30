import { useState } from "react";

const tokenomicsData = [
  { label: "Comunidade", percentage: 40, color: "hsl(var(--terminal-green))" },
  { label: "Liquidez DEX", percentage: 30, color: "hsl(var(--accent))" },
  { label: "Desenvolvimento", percentage: 15, color: "hsl(var(--moss-green))" },
  { label: "Marketing", percentage: 10, color: "hsl(var(--muted-foreground))" },
  { label: "Reserva", percentage: 5, color: "hsl(var(--border))" },
];

export const Tokenomics = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-tropical">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground uppercase tracking-wide">
            Tokenomics
          </h2>
          <p className="font-terminal text-sm text-muted-foreground mb-16">
            {'>>> '} Distribuição transparente. Protocolo imutável.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {tokenomicsData.map((item, index) => {
                  const previousTotal = tokenomicsData
                    .slice(0, index)
                    .reduce((sum, d) => sum + d.percentage, 0);
                  const startAngle = (previousTotal / 100) * 360;
                  const angle = (item.percentage / 100) * 360;
                  const endAngle = startAngle + angle;
                  
                  const startRad = (startAngle - 90) * (Math.PI / 180);
                  const endRad = (endAngle - 90) * (Math.PI / 180);
                  
                  const x1 = 100 + 90 * Math.cos(startRad);
                  const y1 = 100 + 90 * Math.sin(startRad);
                  const x2 = 100 + 90 * Math.cos(endRad);
                  const y2 = 100 + 90 * Math.sin(endRad);
                  
                  const largeArcFlag = angle > 180 ? 1 : 0;
                  
                  const pathData = `
                    M 100 100
                    L ${x1} ${y1}
                    A 90 90 0 ${largeArcFlag} 1 ${x2} ${y2}
                    Z
                  `;

                  return (
                    <path
                      key={index}
                      d={pathData}
                      fill={item.color}
                      opacity={hoveredIndex === null || hoveredIndex === index ? 1 : 0.3}
                      className="transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      stroke="hsl(var(--background))"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>
              
              {/* Center Circle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-terminal">100M</div>
                  <div className="font-terminal text-xs text-muted-foreground">Supply Total</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {tokenomicsData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded cursor-pointer transition-all duration-300 hover:border-terminal"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-terminal text-sm text-foreground">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-terminal text-lg font-bold text-terminal">
                      {item.percentage}%
                    </span>
                    {hoveredIndex === index && (
                      <span className="font-terminal text-xs text-muted-foreground">
                        ({(item.percentage * 1000000).toLocaleString()} tokens)
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-terminal/20 rounded p-6">
              <div className="font-terminal text-xs text-muted-foreground uppercase mb-2">
                Blockchain
              </div>
              <div className="font-display text-xl font-bold text-terminal">
                XRP Ledger
              </div>
            </div>
            <div className="bg-card border border-terminal/20 rounded p-6">
              <div className="font-terminal text-xs text-muted-foreground uppercase mb-2">
                Tipo
              </div>
              <div className="font-display text-xl font-bold text-terminal">
                Issued Token
              </div>
            </div>
            <div className="bg-card border border-terminal/20 rounded p-6">
              <div className="font-terminal text-xs text-muted-foreground uppercase mb-2">
                Trustline
              </div>
              <div className="font-display text-xl font-bold text-terminal">
                Pública
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};