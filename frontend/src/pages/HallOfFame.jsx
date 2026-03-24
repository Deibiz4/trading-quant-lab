import { TrendingUp, Award, BarChart2 } from 'react-feather'
import strategies from '@/data/strategies.json'

export default function HallOfFame() {
  const operableStrategies = strategies.filter(s => s.verdict === 'operable')
  const marginalStrategies = strategies.filter(s => s.verdict === 'marginal')

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-surface-container-low to-surface">
      {/* Header */}
      <section className="pt-12 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary-container/20 border border-primary/30">
            <Award size={16} className="text-primary" />
            <span className="text-sm font-label text-primary">Estrategias Validadas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 gradient-cyan-blue">
            Hall of Fame
          </h1>
          <p className="text-lg text-on-surface/80 max-w-2xl mx-auto">
            Estrategias de trading que han pasado nuestro riguroso proceso de validación matemática.
            Walk-Forward Validation + Monte Carlo para resultados confiables.
          </p>
        </div>
      </section>

      {/* Operable Strategies */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-primary" size={24} />
            <h2 className="text-2xl md:text-3xl font-bold font-headline text-on-surface">
              Operables ({operableStrategies.length})
            </h2>
          </div>
          <p className="text-on-surface/70 mb-8">
            PF OOS {'>'} 1.30 + MC P5% {'>'} 1.20 + Trades OOS {'>'} 100. Listas para trading real.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {operableStrategies.map((strategy) => (
              <div
                key={strategy.name}
                className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all group cursor-pointer hover:bg-opacity-100"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-bold font-headline text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {strategy.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-2 py-1 rounded-lg bg-primary/20 text-primary text-xs font-label font-semibold">
                      ✓ OPERABLE
                    </span>
                  </div>
                </div>

                {/* Main Metrics */}
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between text-xs text-on-surface/70 mb-1">
                      <span className="font-label">Profit Factor OOS</span>
                      <span className="font-label font-semibold text-primary">{strategy.pf_oos.toFixed(2)}</span>
                    </div>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400"
                        style={{ width: `${Math.min((strategy.pf_oos / 2) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-on-surface/70 mb-1">
                      <span className="font-label">Monte Carlo P5%</span>
                      <span className="font-label font-semibold text-primary">{strategy.mc_p5.toFixed(2)}</span>
                    </div>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400"
                        style={{ width: `${Math.min((strategy.mc_p5 / 2) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="flex gap-3 text-xs text-on-surface/70 border-t border-on-surface/10 pt-3">
                  <div>
                    <div className="text-on-surface/50 text-xs">Trades OOS</div>
                    <div className="font-semibold text-on-surface">{strategy.trades_oos}</div>
                  </div>
                  <div>
                    <div className="text-on-surface/50 text-xs">Win Rate</div>
                    <div className="font-semibold text-on-surface">{strategy.win_rate.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marginal Strategies */}
        {marginalStrategies.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BarChart2 className="text-tertiary" size={24} />
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-on-surface">
                Marginales ({marginalStrategies.length})
              </h2>
            </div>
            <p className="text-on-surface/70 mb-8">
              PF OOS {'>'} 1.10 + MC P5% {'>'} 1.05. Solo con validación manual.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {marginalStrategies.map((strategy) => (
                <div
                  key={strategy.name}
                  className="glass-panel p-6 rounded-xl hover:border-tertiary/50 transition-all group cursor-pointer"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="font-bold font-headline text-on-surface mb-2 group-hover:text-tertiary transition-colors">
                      {strategy.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2 py-1 rounded-lg bg-tertiary/20 text-tertiary text-xs font-label font-semibold">
                        ⚠ MARGINAL
                      </span>
                    </div>
                  </div>

                  {/* Main Metrics */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex justify-between text-xs text-on-surface/70 mb-1">
                        <span className="font-label">Profit Factor OOS</span>
                        <span className="font-label font-semibold text-tertiary">{strategy.pf_oos.toFixed(2)}</span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-tertiary to-orange-400"
                          style={{ width: `${Math.min((strategy.pf_oos / 2) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-on-surface/70 mb-1">
                        <span className="font-label">Monte Carlo P5%</span>
                        <span className="font-label font-semibold text-tertiary">{strategy.mc_p5.toFixed(2)}</span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-tertiary to-orange-400"
                          style={{ width: `${Math.min((strategy.mc_p5 / 2) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Metrics */}
                  <div className="flex gap-3 text-xs text-on-surface/70 border-t border-on-surface/10 pt-3">
                    <div>
                      <div className="text-on-surface/50 text-xs">Trades OOS</div>
                      <div className="font-semibold text-on-surface">{strategy.trades_oos}</div>
                    </div>
                    <div>
                      <div className="text-on-surface/50 text-xs">Win Rate</div>
                      <div className="font-semibold text-on-surface">{strategy.win_rate.toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Validation Process */}
      <section className="px-4 md:px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-headline text-on-surface mb-8 text-center">
          Proceso de Validación
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
              <span className="text-primary font-bold font-headline">1</span>
            </div>
            <h3 className="font-bold font-headline text-on-surface mb-2">Walk-Forward Validation</h3>
            <p className="text-sm text-on-surface/70">
              Dividimos el histórico en ventanas. Entrenamos y testeamos en periodos no solapados para evitar sesgo.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
              <span className="text-primary font-bold font-headline">2</span>
            </div>
            <h3 className="font-bold font-headline text-on-surface mb-2">Monte Carlo Simulation</h3>
            <p className="text-sm text-on-surface/70">
              Simulamos 10,000 permutaciones de trades. El P5% debe ser {'>'} 1.20 para operables.
            </p>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
              <span className="text-primary font-bold font-headline">3</span>
            </div>
            <h3 className="font-bold font-headline text-on-surface mb-2">Transferibilidad</h3>
            <p className="text-sm text-on-surface/70">
              Validamos que la estrategia funcione en múltiples activos y timeframes diferentes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
