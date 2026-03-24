# Manual de Usuario — Trading Quant Lab

## Visión General
Trading Quant Lab es una comunidad cuantitativa de trading con validación matemática rigurosa. Este manual describe todas las funcionalidades disponibles en Fase 1 (Frontend Estático).

---

## 📍 Secciones y Características

### 1. **Página de Inicio** (`/`)
La landing page presenta la propuesta de valor de la comunidad.

#### Hero Section
- **Headline principal**: "Trading con Rigor Matemático"
- **Subtítulo**: Descripción de Trading Quant Lab (comunidad, validación, metodología)
- **Llamadas a la acción (CTA)**:
  - "Ver Estrategias" → Navega a Hall of Fame
  - "Unirse al Discord" → Abre enlace a Discord (futuro)
- **Badges de estadísticas**:
  - 9 sistemas validados
  - 100% resultados reales (no promesas)
  - Validación: WFV + Monte Carlo

#### Methodology Section
- **Título**: "Cómo validamos cada estrategia"
- **3 cards explicativas**:
  1. **Walk-Forward Validation (WFV)**: Dividimos el histórico en ventanas. Entrenamos en datos antiguos, testeamos en datos nuevos.
  2. **Monte Carlo Simulation**: Permutamos 10,000 veces el orden de trades. Si el P5% > 1.20, es robusto.
  3. **Transferibilidad**: Validamos que funcione en múltiples activos y timeframes.
- **Tabla de Veredictos**: Criterios exactos para operable/marginal/descartado

#### Portfolio Section
- **Título**: "Portfolio de Sistemas"
- **Grid de estrategias**: Muestra los 9 sistemas con:
  - Nombre de la estrategia
  - Badge de veredicto (Operable/Marginal)
  - Profit Factor OOS (PF)
  - Monte Carlo P5% (MC P5)
  - Trades testeados fuera de muestra
  - Win Rate (% operaciones ganadoras)
- **Barra de progreso**: Visual para PF y MC P5%

#### CTA Section
- **Frase motivacional**: "Únete a la comunidad"
- **Botones**:
  - Discord (botón principal con glow)
  - Blog (botón secundario)
- **Social proof**: Muestra 3 métricas destacadas (500+ miembros, 9 sistemas, 100% transparencia)

---

### 2. **Hall of Fame** (`/hall-of-fame`)
Catálogo completo de estrategias validadas, organizadas por categoría.

#### Estrategias Operables
**Criterios**: PF OOS > 1.30 + MC P5% > 1.20 + Trades OOS > 100

Cada card muestra:
- Nombre de la estrategia
- Badge verde "✓ OPERABLE"
- Profit Factor OOS (con barra de progreso en cyan)
- Monte Carlo P5% (con barra de progreso)
- Estadísticas adicionales: Trades OOS, Win Rate
- Diseño: hover effect con border primary

Ejemplo: "Wyckoff Spring EURUSD" — PF 1.45, MC 1.32, 156 trades, WR 58.3%

#### Estrategias Marginales
**Criterios**: PF OOS > 1.10 + MC P5% > 1.05

Cada card muestra:
- Nombre de la estrategia
- Badge naranja "⚠ MARGINAL"
- Mismas métricas que operables (con colores en naranja)
- Diseño similar a operables pero con styling en tertiary color

Ejemplo: "Fibonacci Retracement GBPJPY" — PF 1.18, MC 1.08, 87 trades, WR 52.1%

#### Proceso de Validación (Explicación)
- **3 pasos ilustrados** con números y descripciones:
  1. Walk-Forward Validation
  2. Monte Carlo Simulation
  3. Transferibilidad

---

### 3. **Diccionario** (`/dictionary`)
Glosario interactivo de términos cuantitativos y de trading.

#### Búsqueda
- **Input de búsqueda**: Busca por nombre del término o por contenido de la definición
- **Ícono de lupa**: Indica el campo de búsqueda
- **Búsqueda en tiempo real**: Los resultados se actualizan mientras escribes

#### Filtros por Categoría
- **Todas** (muestra todos los términos)
- **Metodología** (WFV, Monte Carlo, Validación)
- **Métrica** (Profit Factor, Win Rate, Sharpe Ratio)
- **Riesgo** (Drawdown, Risk-Reward Ratio)
- **Filosofía** (Sesgo de confirmación, Rigor Matemático)

#### Términos Incluidos (15+)
| Término | Categoría | Descripción |
|---------|-----------|-------------|
| Walk-Forward Validation | Metodología | Técnica de backtesting con ventanas no solapadas |
| Monte Carlo Simulation | Metodología | Simulación estadística de permutas de trades |
| Profit Factor | Métrica | Ganancias Totales / Pérdidas Totales |
| Out-of-Sample | Metodología | Datos de prueba no usados en desarrollo |
| Win Rate | Métrica | % operaciones ganadoras |
| Drawdown | Riesgo | Máxima pérdida desde un pico anterior |
| Risk-Reward Ratio | Riesgo | Relación ganancia potencial / pérdida potencial |
| Sharpe Ratio | Métrica | Retorno ajustado por riesgo |
| Transferibilidad | Metodología | Funciona en múltiples activos y timeframes |
| Overfitting | Riesgo | Ajuste excesivo a datos históricos |
| ... | ... | ... |

---

### 4. **Navegación**

#### Navbar (Barra superior fija)
- **Logo**: "PHOENIX TRADERS" con gradiente cyan-blue
- **Links de navegación**:
  - Dashboard (futuro)
  - Blog
  - Reports (futuro)
- **Search Input**: Búsqueda (funcionalidad futura en Fase 2+)
- **Login Button**: Botón de acceso (futuro)
- **Mobile Menu**: Menú hamburguesa en pantallas pequeñas (responsive)

#### Footer (Pie de página)
- **Columna 1 - Brand**:
  - Logo "PHOENIX TRADERS"
  - Descripción corta de la comunidad
- **Columna 2 - Connect**:
  - Twitter icon + link (futuro)
  - Discord icon + link (futuro)
  - Email icon + link (futuro)
- **Columna 3 - Legal**:
  - Disclaimer de riesgo
  - Términos de servicio (futuro)
  - Política de privacidad (futuro)

---

## 🎨 Diseño y Estilos

### Paleta de Colores
| Nombre | Uso | Color |
|--------|-----|-------|
| **Primary** | CTAs, highlights, badges operable | #8aedff (Cyan Electric) |
| **Tertiary** | Estrategias marginales, botones secundarios | #ffd7b7 (Orange Fiery) |
| **Surface** | Fondo principal | #0e141a (Navy Deep) |
| **Secondary** | Textos secundarios, componentes | #bac8da (Soft Blue) |

### Efectos Visuales
- **Glassmorphism**: Cards con `backdrop-filter: blur(20px)` + `rgba(37,43,49,0.8)`
- **Gradientes de texto**: `.gradient-cyan-blue` y `.gradient-orange`
- **Ambient blur blobs**: Decoración con filtro blur y opacity 15%
- **Glow effects**: Box-shadow para botones primary/tertiary

### Tipografía
- **Space Grotesk**: Headlines y títulos (font-weight: 600)
- **Manrope**: Cuerpo de texto y párrafos
- **Inter**: Etiquetas y pequeños textos

### Responsive Design
- **Desktop (lg)**: Grid de 3 columnas para estrategias
- **Tablet (md)**: Grid de 2 columnas, navegación adaptada
- **Mobile (sm)**: Stack vertical, menú hamburguesa, fuentes ajustadas

---

## 🔧 Funcionalidades Técnicas

### Routing
```
/ → Home (Landing page)
/hall-of-fame → Hall of Fame (Estrategias validadas)
/dictionary → Dictionary (Glosario)
/blog → Blog (Placeholder para Fase 2)
```

### Data
- **strategies.json**: Almacena los 9 sistemas con:
  - `name`: Nombre de la estrategia
  - `verdict`: "operable" | "marginal"
  - `pf_oos`: Profit Factor Out-of-Sample
  - `mc_p5`: Monte Carlo P5%
  - `trades_oos`: Cantidad de trades OOS
  - `win_rate`: Porcentaje de operaciones ganadoras

### Responsive Breakpoints
- **sm** (640px): Mobile
- **md** (768px): Tablet
- **lg** (1024px): Desktop
- **xl** (1280px): Desktop grande

---

## 📱 Uso en Diferentes Dispositivos

### Desktop (1024px+)
- Navbar con todos los links visibles
- Grid de 3 columnas para estrategias
- Hover effects en cards
- Scroll horizontal suave

### Tablet (768px - 1023px)
- Navbar con links principales
- Grid de 2 columnas
- Touch-friendly buttons
- Menú adaptado

### Mobile (< 768px)
- Navbar compactado
- Menú hamburguesa
- Stack vertical (1 columna)
- Tamaños de fuente ajustados
- Input search colapsable

---

## 🚀 Próximas Funcionalidades (Roadmap)

### Fase 2 — Blog con MDX
- Sistema de blog autogestionado
- Posts en Markdown con componentes React
- Categorías de posts (Elliott, Wyckoff, Análisis, etc.)
- Autopsia de estrategias fracasadas
- Tutoriales paso a paso

### Fase 3 — Backend y API
- FastAPI para servir datos dinámicos
- Endpoint `/api/portfolio/summary` (resumen de portafolio)
- Endpoint `/api/strategies` (lista de estrategias con filtros)
- Base de datos SQLite/PostgreSQL
- Documentación automática con Swagger

### Fase 4 — Alertas en Tiempo Real
- WebSocket para alertas de trading
- Notificaciones de señales en el Dashboard
- Integración con Telegram Bot
- Alertas de validación de nuevas estrategias

### Fase 5 — Dashboard Interactivo
- Gráficos de equity curves
- Análisis de estadísticas por estrategia
- Backtester interactivo
- Comparador de estrategias

---

## ⚠️ Disclaimers y Términos Legales

### Importante
- **No es asesoramiento financiero**: Todo contenido es solo educativo.
- **Resultados pasados ≠ Futuros**: Un backtest positivo no garantiza ganancias futuras.
- **Riesgo de trading**: El trading y las inversiones conllevan riesgo de pérdida total.
- **Validación matemática**: Walk-Forward + Monte Carlo reduce (pero no elimina) el riesgo de overfitting.

---

## 📞 Soporte y Contacto

- **Discord**: [Link cuando esté disponible]
- **Email**: [Email cuando esté disponible]
- **GitHub Issues**: [Reportar bugs en el repositorio]

---

**Versión del Manual**: 1.0.0
**Última actualización**: 2026-03-24
**Estado**: Fase 1 Completada
