/**
 * MetricResult - Displays a trading metric with label, value, optional benchmark, and status indicator
 *
 * Usage: <MetricResult label="Profit Factor OOS" value={1.45} benchmark={1.30} status="good" />
 */
export default function MetricResult({ label, value, benchmark, status = 'neutral' }) {
  const statusColors = {
    good: 'text-primary',
    warn: 'text-tertiary',
    bad: 'text-error',
    neutral: 'text-on-surface',
  }

  const getBenchmarkStatus = () => {
    if (!benchmark) return null
    const diff = value - benchmark
    if (diff > 0.1) return { text: `+${diff.toFixed(2)} vs target`, color: 'text-primary' }
    if (diff > 0) return { text: `+${diff.toFixed(2)} vs target`, color: 'text-secondary' }
    return { text: `${diff.toFixed(2)} vs target`, color: 'text-error' }
  }

  const benchmarkInfo = getBenchmarkStatus()

  return (
    <div className="glass-panel p-4 rounded-lg mb-4 border border-on-surface/10">
      <div className="text-sm text-on-surface/70 font-label mb-2">{label}</div>
      <div className="flex items-end justify-between">
        <div>
          <div className={`text-3xl font-bold font-headline ${statusColors[status]}`}>
            {typeof value === 'number' ? value.toFixed(2) : value}
          </div>
          {benchmarkInfo && (
            <div className={`text-xs font-label mt-1 ${benchmarkInfo.color}`}>
              {benchmarkInfo.text}
            </div>
          )}
        </div>
        {benchmark && (
          <div className="text-right">
            <div className="text-xs text-on-surface/50 font-label">Target</div>
            <div className="text-sm font-semibold text-on-surface/70">{benchmark.toFixed(2)}</div>
          </div>
        )}
      </div>
      {benchmark && (
        <div className="mt-3 h-2 bg-surface-container rounded-full overflow-hidden">
          <div
            className={`h-full ${status === 'good' ? 'bg-primary' : status === 'warn' ? 'bg-tertiary' : 'bg-error'}`}
            style={{ width: `${Math.min((value / benchmark) * 100, 100)}%` }}
          />
        </div>
      )}
    </div>
  )
}
