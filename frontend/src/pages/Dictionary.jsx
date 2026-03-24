import { useState } from 'react'
import { Search } from 'react-feather'

const terms = [
  {
    term: 'Walk-Forward Validation (WFV)',
    category: 'Metodología',
    definition:
      'Técnica de backtesting que divide el histórico en ventanas solapadas. Se entrena en datos antiguos y se testea en datos más recientes (nunca usados en entrenamiento), evitando lookahead bias.',
  },
  {
    term: 'Monte Carlo Simulation',
    category: 'Metodología',
    definition:
      'Simulación estadística que permuta aleatoriamente el orden de los trades de una estrategia. Si el P5% del resultado está por encima de 1.20, la estrategia es robusta ante cambios de condiciones.',
  },
  {
    term: 'Profit Factor (PF)',
    category: 'Métrica',
    definition:
      'Relación entre ganancias brutas y pérdidas brutas. PF = Ganancias Totales / Pérdidas Totales. Un PF > 1.30 indica una estrategia potencialmente viable.',
  },
  {
    term: 'Out-of-Sample (OOS)',
    category: 'Metodología',
    definition:
      'Datos de prueba que NO fueron utilizados durante el desarrollo o ajuste de la estrategia. Los resultados OOS son más confiables que los In-Sample porque evitan overfitting.',
  },
  {
    term: 'Win Rate',
    category: 'Métrica',
    definition:
      'Porcentaje de operaciones ganadoras respecto al total. Un win rate de 50% con un buen profit factor puede ser viable, pero un win rate bajo requiere un ratio ganancia/pérdida muy alto.',
  },
  {
    term: 'Drawdown',
    category: 'Riesgo',
    definition:
      'Máxima pérdida acumulada desde un pico anterior. El Max Drawdown es la peor caída que experimentó la estrategia en el período testeado.',
  },
  {
    term: 'Risk-Reward Ratio',
    category: 'Riesgo',
    definition:
      'Relación entre la ganancia potencial y la pérdida potencial en cada trade. Un ratio 1:2 significa que riesgas 1 para ganar 2. Mayor ratio = mejor pero más difícil de alcanzar.',
  },
  {
    term: 'Sharpe Ratio',
    category: 'Métrica',
    definition:
      'Medida de retorno ajustado por riesgo. Ratio = (Retorno promedio - Tasa libre de riesgo) / Desviación estándar. Sharpe > 1.0 es considerado bueno; > 2.0, excelente.',
  },
  {
    term: 'Transferibilidad',
    category: 'Metodología',
    definition:
      'Capacidad de una estrategia para funcionar en diferentes activos, timeframes o períodos de tiempo. No buscamos estrategias que funcionan solo en un par y un período específico.',
  },
  {
    term: 'Overfitting (Curva Bonita)',
    category: 'Riesgo',
    definition:
      'Cuando una estrategia se ajusta demasiado a los datos históricos específicos, aprendiendo el "ruido" en lugar de patrones reales. Walk-Forward Validation ayuda a detectarlo.',
  },
  {
    term: 'Validación Matemática Rigurosa',
    category: 'Filosofía',
    definition:
      'Nuestro enfoque: rechazar creencias sin evidencia. Toda estrategia debe pasar WFV + Monte Carlo antes de considerarla válida. Los resultados pasados no garantizan futuros, pero la metodología sí reduce riesgo.',
  },
  {
    term: 'Equity Curve',
    category: 'Métrica',
    definition:
      'Gráfico que muestra el saldo acumulado de la cuenta a lo largo del tiempo, operación por operación. Una equity curve lisa y con tendencia al alza indica una estrategia estable.',
  },
  {
    term: 'Máximo Número de Pérdidas Consecutivas',
    category: 'Riesgo',
    definition:
      'Número de trades perdedores seguidos. Si es muy alto (ej: 50 pérdidas consecutivas), la estrategia puede ser psicológicamente difícil de tradear.',
  },
  {
    term: 'Curva de Frecuencia de Trades (Trade Distribution)',
    category: 'Métrica',
    definition:
      'Histograma que muestra cuántos trades ganaron X pips/puntos y cuántos perdieron. Idealmente: muchos pequeños perdedores y algunos grandes ganadores (patrón asimétrico).',
  },
  {
    term: 'Sesgo de Confirmación',
    category: 'Filosofía',
    definition:
      'Tendencia humana a buscar y valorar evidencia que confirma nuestras creencias, ignorando evidencia contraria. Trading cuantitativo minimiza esto mediante reglas automáticas.',
  },
]

const categories = ['Todas', ...new Set(terms.map(t => t.category))]

export default function Dictionary() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  const filtered = terms.filter((t) => {
    const matchesSearch =
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'Todas' || t.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-surface-container-low to-surface">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 md:px-8 border-b border-on-surface/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 gradient-cyan-blue text-center">
            Diccionario Cuantitativo
          </h1>
          <p className="text-lg text-on-surface/80 text-center max-w-2xl mx-auto mb-8">
            Términos y conceptos clave en trading cuantitativo y validación matemática.
          </p>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface/50" size={20} />
            <input
              type="text"
              placeholder="Buscar términos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-surface-container border border-on-surface/10 text-on-surface placeholder:text-on-surface/50 focus:outline-none focus:border-primary/50 focus:bg-surface-container-high"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-label transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container border border-on-surface/10 text-on-surface hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Terms List */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-on-surface/70 text-lg">
                No se encontraron términos que coincidan con tu búsqueda.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((item) => (
                <div
                  key={item.term}
                  className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-lg font-bold font-headline text-on-surface group-hover:text-primary transition-colors mb-1">
                        {item.term}
                      </h3>
                      <div className="inline-block px-2 py-1 rounded-md bg-primary-container/20 border border-primary/20">
                        <span className="text-xs font-label text-primary">{item.category}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-on-surface/80 leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Term Count */}
          <div className="mt-8 pt-8 border-t border-on-surface/10 text-center">
            <p className="text-on-surface/70 text-sm">
              Mostrando {filtered.length} de {terms.length} términos
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
