import { BarChart2, TrendingUp, Layers } from 'react-feather'

export default function MethodologySection() {
  const methodologyCards = [
    {
      icon: BarChart2,
      title: 'Walk-Forward Validation',
      description: 'Validamos cada estrategia dividiéndola en períodos de entrenamiento y prueba. Los datos OOS (Out-Of-Sample) son la prueba real.'
    },
    {
      icon: TrendingUp,
      title: 'Monte Carlo Simulation',
      description: 'Simulamos 1000+ escenarios de operaciones para medir el riesgo real. Buscamos P5% > 1.20 para estrategias operables.'
    },
    {
      icon: Layers,
      title: 'Transferibilidad',
      description: 'Probamos cada estrategia en múltiples activos y timeframes. Una estrategia que no transfiere es un overfitting.'
    }
  ]

  const verdictCriteria = [
    { status: 'Operable', pf_oos: '> 1.30', mc_p5: '> 1.20', trades_oos: '> 100', color: 'bg-primary' },
    { status: 'Marginal', pf_oos: '> 1.10', mc_p5: '> 1.05', trades_oos: '> 30', color: 'bg-tertiary' },
    { status: 'Descartado', pf_oos: '< 1.10', mc_p5: '< 1.05', trades_oos: '< 30', color: 'bg-error' }
  ]

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-transparent to-surface-container/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter mb-4">
            Cómo Validamos
          </h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Cada estrategia se somete a un proceso riguroso de tres pilares
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {methodologyCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div key={idx} className="glass-panel rounded-2xl p-8">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-headline font-bold mb-4">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant font-body leading-relaxed">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Verdict Criteria Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-headline font-bold mb-6">
              Criterios de Veredicto
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant/20">
                    <th className="text-left py-4 px-4 font-headline font-bold text-on-surface uppercase tracking-widest text-sm">
                      Veredicto
                    </th>
                    <th className="text-left py-4 px-4 font-headline font-bold text-on-surface uppercase tracking-widest text-sm">
                      PF OOS
                    </th>
                    <th className="text-left py-4 px-4 font-headline font-bold text-on-surface uppercase tracking-widest text-sm">
                      MC P5%
                    </th>
                    <th className="text-left py-4 px-4 font-headline font-bold text-on-surface uppercase tracking-widest text-sm">
                      Trades OOS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {verdictCriteria.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-2 font-headline font-bold`}>
                          <span className={`w-3 h-3 rounded-full ${row.color}`} />
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-on-surface-variant font-body">
                        {row.pf_oos}
                      </td>
                      <td className="py-4 px-4 text-on-surface-variant font-body">
                        {row.mc_p5}
                      </td>
                      <td className="py-4 px-4 text-on-surface-variant font-body">
                        {row.trades_oos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-surface-container-low rounded border-l-4 border-tertiary">
              <p className="text-on-surface-variant text-sm font-body">
                <strong className="text-tertiary">Nota:</strong> Todos los sistemas publicados cumplen al menos con criterios de "Marginal". Las métricas se actualizan mensualmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
