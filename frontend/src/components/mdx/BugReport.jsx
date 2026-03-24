import { AlertTriangle } from 'react-feather'

/**
 * BugReport - Shows strategy failure with metrics comparison
 *
 * Usage: <BugReport title="RSI Divergence falló en WFV" pf_is={1.62} pf_oos={0.89}>
 *          Descripción del fracaso
 *        </BugReport>
 */
export default function BugReport({ title, pf_is, pf_oos, mc_is, mc_oos, children }) {
  return (
    <div className="bg-error/10 border-l-4 border-error rounded-lg p-6 my-6">
      <div className="flex items-start gap-3 mb-4">
        <AlertTriangle className="text-error flex-shrink-0 mt-1" size={24} />
        <div>
          <h4 className="text-lg font-bold font-headline text-error mb-1">{title}</h4>
          <p className="text-sm text-on-surface/80 leading-relaxed">{children}</p>
        </div>
      </div>

      {(pf_is !== undefined || mc_is !== undefined) && (
        <div className="mt-4 pt-4 border-t border-error/20">
          <div className="text-xs text-on-surface/70 font-label mb-3 uppercase tracking-wide">
            Comparativa: In-Sample vs Out-of-Sample
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pf_is !== undefined && (
              <div className="bg-surface-container-low rounded p-3">
                <div className="text-xs text-on-surface/50 font-label mb-1">PF In-Sample</div>
                <div className="text-xl font-bold text-secondary mb-1">{pf_is.toFixed(2)}</div>
                {pf_oos !== undefined && (
                  <>
                    <div className="text-xs text-on-surface/50 font-label">PF Out-of-Sample</div>
                    <div className={`text-lg font-bold ${pf_oos < 1.1 ? 'text-error' : 'text-tertiary'}`}>
                      {pf_oos.toFixed(2)}
                    </div>
                    <div className="text-xs text-error mt-2 font-semibold">
                      ↓ {((1 - pf_oos / pf_is) * 100).toFixed(0)}% degradation
                    </div>
                  </>
                )}
              </div>
            )}

            {mc_is !== undefined && (
              <div className="bg-surface-container-low rounded p-3">
                <div className="text-xs text-on-surface/50 font-label mb-1">MC P5% In-Sample</div>
                <div className="text-xl font-bold text-secondary mb-1">{mc_is.toFixed(2)}</div>
                {mc_oos !== undefined && (
                  <>
                    <div className="text-xs text-on-surface/50 font-label">MC P5% Out-of-Sample</div>
                    <div className={`text-lg font-bold ${mc_oos < 1.05 ? 'text-error' : 'text-tertiary'}`}>
                      {mc_oos.toFixed(2)}
                    </div>
                    <div className="text-xs text-error mt-2 font-semibold">
                      ↓ {((1 - mc_oos / mc_is) * 100).toFixed(0)}% degradation
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-error/20 rounded border border-error/30">
        <p className="text-sm text-error font-semibold">
          Este sistema fue rechazado. No cumple nuestros criterios de validación matemática rigurosa.
        </p>
      </div>
    </div>
  )
}
