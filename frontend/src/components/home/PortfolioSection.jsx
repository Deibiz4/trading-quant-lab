import strategies from '@/data/strategies.json'

export default function PortfolioSection() {
  const getVerdictColor = (verdict) => {
    switch (verdict) {
      case 'operable':
        return { bg: 'bg-primary/20', text: 'text-primary', label: 'OPERABLE' }
      case 'marginal':
        return { bg: 'bg-tertiary/20', text: 'text-tertiary', label: 'MARGINAL' }
      case 'descartado':
        return { bg: 'bg-error/20', text: 'text-error', label: 'DESCARTADO' }
      default:
        return { bg: 'bg-outline/20', text: 'text-outline', label: 'EVALUANDO' }
    }
  }

  return (
    <section id="portfolio" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter mb-4">
            Portfolio de Sistemas
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Estos son los 9 sistemas que actualmente monitoreamos y validamos
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, idx) => {
            const verdict = getVerdictColor(strategy.verdict)
            return (
              <div key={idx} className="glass-panel rounded-2xl p-6 hover:bg-surface-container-high transition-all group cursor-pointer">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-headline font-bold flex-1 group-hover:text-primary transition-colors">
                    {strategy.name}
                  </h3>
                  <span className={`${verdict.bg} ${verdict.text} px-3 py-1 rounded text-xs font-headline font-bold uppercase tracking-widest whitespace-nowrap ml-2`}>
                    {verdict.label}
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="space-y-4">
                  {/* Profit Factor OOS */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-label text-outline uppercase tracking-widest text-xs">
                        PF OOS
                      </span>
                      <span className="font-headline font-bold text-primary">
                        {strategy.pf_oos.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-low rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-primary h-full"
                        style={{ width: `${Math.min((strategy.pf_oos / 2) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Monte Carlo P5% */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-label text-outline uppercase tracking-widest text-xs">
                        MC P5%
                      </span>
                      <span className="font-headline font-bold text-primary">
                        {strategy.mc_p5.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-low rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-primary h-full"
                        style={{ width: `${Math.min((strategy.mc_p5 / 2) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Trades OOS */}
                  <div className="flex justify-between text-sm">
                    <span className="font-label text-outline uppercase tracking-widest">
                      Trades OOS
                    </span>
                    <span className="font-headline font-bold text-on-surface">
                      {strategy.trades_oos}
                    </span>
                  </div>

                  {/* Win Rate */}
                  <div className="flex justify-between text-sm">
                    <span className="font-label text-outline uppercase tracking-widest">
                      Win Rate
                    </span>
                    <span className="font-headline font-bold text-on-surface">
                      {strategy.win_rate.toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-outline-variant/10 my-6" />

                {/* CTA */}
                <button className="w-full px-4 py-2 border border-outline-variant/50 text-on-surface font-headline text-sm rounded hover:bg-surface-container-highest transition-colors">
                  Ver Detalles
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 glass-panel rounded-2xl text-center">
          <p className="text-on-surface-variant font-body">
            ¿Quieres proponer una estrategia para validación?{' '}
            <a href="#cta" className="text-primary hover:text-primary/80 font-headline font-bold">
              Únete a la comunidad
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
