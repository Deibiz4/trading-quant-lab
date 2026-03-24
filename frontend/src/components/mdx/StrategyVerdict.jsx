import { CheckCircle, AlertCircle, XCircle } from 'react-feather'

/**
 * StrategyVerdict - Complete strategy verdict card with metrics
 *
 * Usage: <StrategyVerdict name="Wyckoff Spring EURUSD" verdict="operable"
 *           pf={1.45} mc={1.32} trades={156} wr={58.3} />
 */
export default function StrategyVerdict({ name, verdict, pf, mc, trades, wr }) {
  const verdictConfig = {
    operable: {
      icon: CheckCircle,
      badgeColor: 'bg-primary/20 text-primary border-primary/40',
      label: '✓ OPERABLE',
      description: 'PF OOS > 1.30 + MC P5% > 1.20 + Trades > 100',
    },
    marginal: {
      icon: AlertCircle,
      badgeColor: 'bg-tertiary/20 text-tertiary border-tertiary/40',
      label: '⚠ MARGINAL',
      description: 'PF OOS > 1.10 + MC P5% > 1.05',
    },
    descartado: {
      icon: XCircle,
      badgeColor: 'bg-error/20 text-error border-error/40',
      label: '✗ DESCARTADO',
      description: 'No cumple criterios de validación',
    },
  }

  const config = verdictConfig[verdict] || verdictConfig.descartado
  const Icon = config.icon

  return (
    <div className="glass-panel p-6 rounded-xl border border-on-surface/10 my-6">
      <div className="flex items-start gap-4 mb-4">
        <Icon className={config.badgeColor.split(' ')[2]} size={32} />
        <div className="flex-1">
          <h3 className="text-xl font-bold font-headline text-on-surface mb-2">{name}</h3>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border ${config.badgeColor} text-sm font-label font-semibold mb-2`}>
            {config.label}
          </div>
          <p className="text-xs text-on-surface/70 font-label">{config.description}</p>
        </div>
      </div>

      <div className="space-y-3 border-t border-on-surface/10 pt-4">
        {pf !== undefined && (
          <div>
            <div className="flex justify-between text-xs text-on-surface/70 font-label mb-1">
              <span>Profit Factor OOS</span>
              <span className="font-semibold text-on-surface">{pf.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-cyan-400"
                style={{ width: `${Math.min((pf / 2) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        {mc !== undefined && (
          <div>
            <div className="flex justify-between text-xs text-on-surface/70 font-label mb-1">
              <span>Monte Carlo P5%</span>
              <span className="font-semibold text-on-surface">{mc.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-cyan-400"
                style={{ width: `${Math.min((mc / 2) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 pt-2">
          {trades !== undefined && (
            <div>
              <div className="text-on-surface/50 text-xs font-label">Trades OOS</div>
              <div className="text-lg font-semibold text-on-surface">{trades}</div>
            </div>
          )}
          {wr !== undefined && (
            <div>
              <div className="text-on-surface/50 text-xs font-label">Win Rate</div>
              <div className="text-lg font-semibold text-on-surface">{wr.toFixed(1)}%</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
