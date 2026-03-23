# Trading Quant Lab — Guía Maestra de Lanzamiento

---

## ÍNDICE
1. Posicionamiento y Filosofía
2. Estructura de Canales
3. Notion — Arquitectura del Hub Central
4. Contenido — Qué Publicar y Cuándo
5. Tutoriales — Series Planificadas
6. Sistema de Sugerencias de Comunidad
7. Diccionario Quant — Completo
8. Hall of Fame / Cemetery — Base de Datos
9. Monetización
10. Checklist de Lanzamiento
11. Mensajes de Bienvenida

---

## 1. POSICIONAMIENTO Y FILOSOFÍA

### Qué eres
Una comunidad de investigación cuantitativa aplicada al trading. No vendes señales ni prometes rentabilidades. Muestras el proceso completo de cómo se valida o destruye una estrategia usando matemática real.

### Tu ventaja diferencial
- Framework de validación completo (Walk-Forward + Monte Carlo + Transferibilidad)
- 9 sistemas Forex en producción con historial real y auditable
- Publicas los fracasos con el mismo rigor que los éxitos
- Todo el código es reproducible

### Lo que NO debes decir nunca
- Rentabilidades pasadas garantizadas
- "Este mes gané X%" sin contexto de riesgo y drawdown
- Señales de trading sin el razonamiento completo detrás

### La frase de posicionamiento
"Cuantificamos estrategias de trading y publicamos el proceso completo, incluyendo los fracasos. El 80% de las estrategias que testamos mueren en el backtest. Te mostramos cuáles sobreviven y por qué."

---

## 2. ESTRUCTURA DE CANALES

### TELEGRAM
Más lineal, mejor para alertas y actualizaciones rápidas.

```
📢 anuncios
   Solo tú escribes. Novedades, lanzamientos, cambios importantes.

📊 señales-btc-wyckoff
   Alertas automáticas del bot H4 cuando detecta un Spring.
   Incluye siempre: par, timeframe, parámetros, nivel de entrada sugerido.
   NUNCA sin el recordatorio del PF OOS y el riesgo por trade recomendado.

📈 portafolio-forex-live
   Estado diario de los 9 sistemas. Trades abiertos, stops, resultado semanal.

🧪 laboratorio
   Experimentos en curso. Resultados parciales. Preguntas abiertas.

💬 debate-general
   Conversación libre sobre mercados.

📚 recursos
   Links a Notion, GitHub, material externo relevante.

❓ preguntas
   Canal específico para dudas. Más fácil de gestionar que el debate general.
```

### DISCORD
Mejor para comunidad estructurada y contenido permanente.

```
── 📋 INFORMACIÓN
   # bienvenida
   # reglas
   # sobre-el-proyecto
   # roadmap

── 📊 SISTEMAS EN PRODUCCIÓN
   # forex-portfolio-live
   # btc-wyckoff-alertas
   # diario-de-operaciones
   # auditoria-mensual

── 🧪 LABORATORIO CUANTITATIVO
   # experimentos-activos
   # backtests-publicados
   # autopsias
   # codigo-y-github

── 📖 FORMACIÓN
   # tutoriales
   # diccionario-quant
   # preguntas-frecuentes

── 🗳️ COMUNIDAD
   # propuestas-de-estrategia
   # votaciones
   # debate-mercados
   # off-topic

── RESULTADOS
   # hall-of-fame
   # cemetery
```

---

## 3. NOTION — ARQUITECTURA DEL HUB CENTRAL

### Por qué Notion
Telegram y Discord son efímeros. Alguien que entra en 6 meses no puede encontrar el análisis de Elliott del principio. Notion es el repositorio permanente. Telegram y Discord son el canal de distribución en tiempo real.

### Cómo empezar (30 minutos)
1. Crear cuenta en notion.com (gratuita)
2. Crear página principal: "Trading Quant Lab"
3. Activar "Share to web" en configuración — ya tienes una web pública sin código
4. Crear la estructura de subpáginas siguiente

### Estructura de Notion

```
Trading Quant Lab (Página principal pública)
│
├── Sobre este proyecto
│   ├── Quién soy y qué hago
│   ├── La filosofía: por qué publicamos los fracasos
│   └── Cómo usar esta web
│
├── Diccionario Quant
│   ├── Nivel 1 — Conceptos Base
│   ├── Nivel 2 — Validación Estadística
│   ├── Nivel 3 — Análisis Técnico con Contexto
│   └── Nivel 4 — Gestión de Riesgo
│
├── Laboratorio de Estrategias
│   ├── Hall of Fame (base de datos)
│   ├── Cemetery (base de datos)
│   └── En Curso (experimentos activos)
│
├── Tutoriales
│   ├── El Framework de Validación (guía maestra)
│   ├── Serie 1 — Elliott Wave
│   ├── Serie 2 — Wyckoff
│   ├── Serie 3 — LuxAlgo
│   └── Serie 4 — próxima estrategia sugerida por comunidad
│
├── Portafolio en Vivo
│   ├── Metodología de los 9 sistemas Forex
│   ├── Auditorías mensuales (archivo)
│   └── Diario de operaciones (público, con ganadores Y perdedores)
│
├── Propuestas de Comunidad
│   ├── Cómo proponer una estrategia
│   ├── Formulario estándar de propuesta
│   └── Historial de votaciones
│
└── Recursos
    ├── GitHub (código fuente)
    ├── Telegram
    └── Discord
```

### Base de datos Hall of Fame / Cemetery

Crear en Notion una base de datos con estas columnas:

| Campo | Tipo |
|-------|------|
| Estrategia | Título |
| Activo | Texto |
| Timeframe | Texto |
| PF In-Sample | Número |
| PF OOS | Número |
| MC Percentil 5% | Número |
| Win Rate OOS | Porcentaje |
| Trades OOS | Número |
| Veredicto | Select (Operable / Marginal / Descartado) |
| Causa de muerte | Texto |
| Fecha | Fecha |
| Link al análisis | URL |

### Datos actuales para poblar la base de datos

| Estrategia | Activo | TF | PF OOS | MC P5% | WR OOS | Trades OOS | Veredicto |
|---|---|---|---|---|---|---|---|
| Elliott Onda 3 | NZDUSD | H4 | 1.39 | 1.11 | 45.4% | 185 | Marginal |
| Elliott Onda 5 | NZDUSD | H4 | 3.23 | N/A | 70% | 10 | Muestra insuficiente |
| Elliott Onda C | NZDUSD | H4 | 0.95 | — | 39.6% | 134 | Descartado |
| Wyckoff Spring | BTC/USDT | H4 | 1.47 | 0.97 | 34.58% | 107 | Marginal |
| Wyckoff UTAD | BTC/USDT | H4 | 0.45 | — | — | — | Descartado |
| Wyckoff Spring H1 | BTC/USDT | H1 | 0.82 | 0.71 | 33.41% | 431 | Descartado |
| Wyckoff Spring | ETH/USDT | H4 | 0.90 | — | 27.83% | 115 | Descartado |
| LuxAlgo HTF Bull | BTC/USDT | H4 | 1.06 | 0.73 | 35% | 80 | Descartado |
| LuxAlgo HTF Bear | BTC/USDT | H4 | 0.57 | — | — | 66 | Descartado |
| Wyckoff + LuxAlgo | BTC/USDT | H4 | 1.17 | — | 25.93% | — | Descartado |

---

## 4. CONTENIDO — QUÉ PUBLICAR Y CUÁNDO

### Publicación Diaria (10 minutos, bajo esfuerzo)
- Estado del portafolio Forex: trades abiertos, stops actualizados
- Si el bot Wyckoff disparó alerta: publicar con parámetros completos
- Una observación de mercado breve, sin predicción

### Formato para alertas del bot

```
ALERTA WYCKOFF SPRING — BTC/USDT H4

Entrada sugerida: $[precio]
Stop Loss: $[precio] ([X] ATR)
Target: $[precio] ([X] ATR)
Parámetros: LKB=30, Climax=2.0x

Este sistema tiene PF OOS 1.47 y MC P5% 0.97.
Riesgo recomendado: máximo 1% del capital.
No es una recomendación de inversión.
```

### Publicación Semanal

```
SEMANA [X] — RESUMEN

Portafolio Forex: [+/-]%
Trades cerrados: [N] | Ganadores: [N] | Perdedores: [N]

MEJOR TRADE: [par] [+X pips]
Razonamiento: [explicación breve]

PEOR TRADE: [par] [-X pips]
Qué falló: [análisis honesto]

Desviación vs backtest histórico: [on track / desviación de X%]

En laboratorio esta semana: [qué se está testeando]
```

### Publicación Mensual
- PF real del mes vs PF histórico del backtest
- Max Drawdown del mes
- Análisis de si el sistema se comporta dentro de los parámetros esperados
- Post-mortem de algo que no funcionó

### Publicación Especial — Resultado de Estrategia Testeada
Cada vez que terminas un experimento completo:
1. Resumen ejecutivo en Telegram (5 líneas con los números clave)
2. Análisis completo en Notion
3. Actualización del Hall of Fame / Cemetery
4. Post en Discord en #backtests-publicados

---

## 5. TUTORIALES — SERIES PLANIFICADAS

### Formato estándar de cada episodio

```
TUTORIAL — [Nombre de la estrategia] — Episodio [N]

TEMA: qué se explica en este episodio
NIVEL: Básico / Intermedio / Avanzado
PREREQUISITOS: qué deberías saber antes

[Contenido]

PRÓXIMO EPISODIO: [tema]
LINK AL CÓDIGO: [GitHub]
```

### Serie 0 — El Framework de Validación (PRIORITARIA)
Esta es la serie más importante. Antes de hablar de estrategias concretas, la comunidad necesita entender cómo se valida algo correctamente.

- Ep. 1 — Por qué el 99% de los backtests mienten (In-Sample vs OOS)
- Ep. 2 — Walk-Forward Validation: cómo simular el futuro con datos del pasado
- Ep. 3 — Monte Carlo: todas las vidas posibles de tu sistema
- Ep. 4 — El criterio de selección que evita el data snooping
- Ep. 5 — El test de transferibilidad: el edge es real o especifico del activo

### Serie 1 — Elliott Wave (Material ya producido)
- Ep. 1 — La teoría: qué promete el manual en la página 51
- Ep. 2 — Traducción a código: ROC, RSI, SuperTrend
- Ep. 3 — Los 4 bugs que casi nos hacen comprar techos de mercado
- Ep. 4 — Resultados reales: qué sobrevive y qué no (Onda C destruida)
- Ep. 5 — Conclusión: la Onda 3 como módulo reutilizable

### Serie 2 — Wyckoff (Material ya producido)
- Ep. 1 — La teoría institucional: Springs, UTADs, Trading Range
- Ep. 2 — Arquitectura de la máquina de estados en Python
- Ep. 3 — Los bugs del backtest original y cómo los arreglamos
- Ep. 4 — Walk-Forward: el Spring sobrevive 2022-2026
- Ep. 5 — El teorema del timeframe: por qué H1 destruye el edge de H4
- Ep. 6 — El test de transferibilidad: BTC sí, ETH no

### Serie 3 — LuxAlgo HTF Divergences (Material ya producido)
- Ep. 1 — El indicador más vendido de TradingView bajo el microscopio
- Ep. 2 — Traducción a código sin look-ahead bias
- Ep. 3 — Por qué los cortos en Bitcoin son suicidio estadístico
- Ep. 4 — Wyckoff vs LuxAlgo: análisis institucional contra análisis retail
- Ep. 5 — El experimento híbrido: cuando añadir confirmación destruye el edge

### Serie "Bug Report" (Contenido corto, alto impacto)
- "El día que casi compraba techos de mercado" — inversión lógica Onda 5
- "Por qué no puedes usar multiplicadores en el RSI" — indicadores acotados
- "El trailing stop que se invertía solo" — error en la gestión de shorts
- "Data snooping con cara de validación" — elegir el mejor PF IS como criterio

---

## 6. SISTEMA DE SUGERENCIAS DE COMUNIDAD

### Formulario estándar de propuesta
Cualquier sugerencia que no incluya esto será rechazada educadamente:

```
PROPUESTA DE ESTRATEGIA

NOMBRE DE LA ESTRATEGIA:
FUENTE (libro, indicador, trader, paper):
LÓGICA EN UNA FRASE (sin jerga):
PAR/ACTIVO SUGERIDO:
TIMEFRAME:
POR QUÉ CREES QUE TIENE EDGE:
HAS HECHO ALGÚN BACKTEST PREVIO:
```

### Proceso de selección mensual
1. Recepción de propuestas: primeros 20 días del mes
2. Revisión y filtrado: días 21-25
3. Votación de la comunidad: días 26-30
4. Anuncio de la estrategia del mes: día 1 del mes siguiente

### Criterios de aceptación
- La lógica es cuantificable (se puede traducir a código)
- Hay datos históricos disponibles para el activo sugerido
- La fuente es identificable
- Rechazadas: estrategias basadas en fundamentales puros o sin activo y timeframe definido

### Regla de transparencia
El resultado del test se publica siempre, independientemente de si la estrategia funciona o no.

---

## 7. DICCIONARIO QUANT — COMPLETO

### NIVEL 1 — CONCEPTOS BASE

**Profit Factor (PF)**
Ratio entre ganancias brutas y pérdidas brutas. PF 1.5 significa que por cada 100 perdidos, ganas 150.
Error común: creer que un PF alto sobre pocos trades es significativo.
Con datos reales: la Onda 5 de Elliott dio PF 3.23 sobre 10 trades en 8 años. Estadísticamente, es una anécdota.
Regla práctica: necesitas mínimo 100 trades OOS para que el PF sea interpretable.

---

**Win Rate**
Porcentaje de trades que terminan en ganancia.
Error común: creer que necesitas ganar más del 50% para ser rentable.
Con datos reales: el Wyckoff Spring en BTC tiene WR del 35% y PF OOS de 1.47. Es rentable porque los ganadores son 2.8 veces más grandes que los perdedores.
Regla práctica: Win Rate sin Risk:Reward no significa nada.

---

**Drawdown**
Caída desde el máximo histórico de la cuenta hasta el siguiente mínimo.
Error común: confundirlo con pérdidas totales.
Con datos reales: un sistema con PF 1.47 y WR 35% puede tener rachas de 8-10 perdedores consecutivos. El drawdown de esa racha con 2% de riesgo por trade es aproximadamente el 17%.
Regla práctica: si no puedes soportar psicológicamente el Max Drawdown histórico del sistema, no lo operes.

---

**Risk:Reward (R:R)**
Ratio entre el capital en riesgo y el objetivo de ganancia en cada trade.
Error común: calcularlo en pips en vez de en términos del stop real.
Con datos reales: el Wyckoff Spring usa stop de 1.5 ATR y target de 3 ATR, lo que da R:R 1:2. Con WR 35%, la esperanza matemática es positiva.
Regla práctica: con R:R 1:2 solo necesitas ganar el 34% de los trades para ser rentable a largo plazo.

---

**Backtesting**
Probar una estrategia sobre datos históricos para estimar su comportamiento futuro.
Error común: confundir buenos resultados de backtest con un sistema operable.
Con datos reales: la Onda 3 de Elliott dio PF 3.33 In-Sample en BTC (2018-2021) y colapsó a PF 0.86 OOS (2022-2026). El backtest sin validación es una ilusión.
Regla práctica: un backtest sin Walk-Forward y Monte Carlo no vale nada para tomar decisiones de capital real.

---

**Spread y Slippage**
Spread: diferencia entre precio de compra y venta. Slippage: diferencia entre el precio que querías y el que obtuviste en ejecución.
Error común: ignorarlos en el backtest porque "son pequeños".
Con datos reales: inyectar 0.15% de coste por trade redujo el PF del LuxAlgo Bull de 1.3 a 1.06, casi al breakeven.
Regla práctica: siempre backtest con al menos 0.1% de coste por lado en crypto y 1-2 pips en Forex majors.

---

### NIVEL 2 — VALIDACIÓN ESTADÍSTICA

**In-Sample (IS)**
El periodo histórico sobre el que calibras y optimizas tu estrategia.
Error común: publicar resultados IS como si fueran resultados reales.
Con datos reales: Wyckoff con LKB=50 dio PF IS de 2.10 con 56 trades. Fue descartado en favor del LKB=30 que tenía 107 trades con PF 1.37. Más volumen de muestra vale más que PF más alto.
Regla práctica: nunca tomes decisiones de capital basándote en resultados IS.

---

**Out-of-Sample (OOS)**
Periodo que el sistema nunca vio durante la calibración.
Error común: hacer OOS sobre el 20% final del mismo dataset usado para IS.
Con datos reales: separamos estrictamente 2018-2021 (IS) de 2022-2026 (OOS). En ese OOS puro, el Wyckoff Spring mantuvo PF 1.47, señal de que el edge es genuino.
Regla práctica: el OOS debe cubrir al menos un ciclo de mercado completo diferente al IS.

---

**Walk-Forward Validation (WFV)**
Calibras en el pasado, testeas en el futuro inmediato, avanzas la ventana, repites.
Error común: elegir el mejor parámetro IS por PF máximo (data snooping).
Con datos reales: nuestro criterio de selección IS es "mayor número de trades con PF mayor de 1.0", no el PF más alto. Esto evita seleccionar el parámetro que mejor se ajustó al pasado por casualidad.
Regla práctica: el criterio de selección IS debe ser independiente del PF máximo para evitar sesgo.

---

**Data Snooping / Overfitting**
Optimizar parámetros hasta que el sistema aprende el ruido histórico en vez del edge real.
Error común: testear 20 configuraciones y quedarte con la mejor como si fuera válida.
Con datos reales: al testear LKB=30, 50 y 80 en Elliott Onda 3, el de 80 daba PF IS de 3.33. En OOS colapsó a 0.86. El sistema había aprendido el bull run de 2020, no un edge estructural.
Regla práctica: si tu sistema solo funciona en una configuración muy específica de parámetros, es overfitting.

---

**Monte Carlo (Simulación)**
Reordena aleatoriamente tus trades miles de veces para ver la distribución de resultados posibles.
Error común: usarlo solo para ver el mejor escenario posible.
Con datos reales: el Wyckoff Spring con PF OOS 1.47 tiene MC Percentil 5% de 0.97. Significa que en el 5% de los universos posibles, las comisiones te llevan al breakeven.
Regla práctica: umbral mínimo para automatización: MC Percentil 5% mayor de 1.20.

---

**Percentil 5% del Monte Carlo**
El PF que obtendrías en el 5% de los peores escenarios estadísticos posibles.
Error común: ignorarlo porque "el promedio es bueno".
Con datos reales: LuxAlgo HTF Bull tiene PF medio de 1.47 pero MC P5% de 0.73. Significa que una de cada 20 vidas del sistema quiebra la cuenta. Inaceptable para un bot autónomo.
Regla práctica: P5% mayor de 1.20 para automatización. P5% mayor de 1.05 para alertas manuales. Por debajo de 1.05, descartar.

---

**Test de Transferibilidad**
Verificar si el edge demostrado en un activo se replica en otro con los mismos parámetros sin reoptimización.
Error común: asumir que "crypto es crypto" y un sistema de BTC funciona en ETH.
Con datos reales: el Spring de Wyckoff calibrado en BTC (PF OOS 1.47) aplicado a ETH sin cambios dio PF OOS 0.90. El edge es específico de la microestructura de Bitcoin.
Regla práctica: nunca escales un sistema a múltiples activos sin pasar el test de transferibilidad primero.

---

**Edge**
Ventaja estadística demostrable y reproducible sobre el mercado.
Error común: confundirlo con "esta estrategia parece funcionar".
Con datos reales: edge = PF OOS mayor de 1.0 con muestra suficiente (más de 100 trades) + MC P5% mayor de 1.05 + supervivencia al test de transferibilidad. Todo lo demás es ruido con buena narrativa.
Regla práctica: si no puedes expresar tu edge en números OOS, no tienes edge, tienes una historia.

---

### NIVEL 3 — ANÁLISIS TÉCNICO CON CONTEXTO ESTADÍSTICO

**Divergencia RSI**
El precio hace nuevo máximo o mínimo pero el RSI no lo acompaña.
Error común: aplicarla sin contexto estructural en cualquier timeframe.
Con datos reales: LuxAlgo HTF Bull (RSI + Hammer en BTC H4) dio PF OOS 1.06, casi breakeven tras comisiones. Sin zona de liquidez que ancle la divergencia, el RSI solo mide ruido.
Regla práctica: la divergencia RSI necesita un nivel estructural relevante para ser válida. Sola, no es suficiente.

---

**SuperTrend**
Indicador de seguimiento de tendencia basado en ATR.
Error común: usar los mismos parámetros en todos los activos.
Con datos reales: multiplier=3.0 válido para Forex. En BTC la volatilidad es 5-10 veces mayor y ese multiplier genera señales contradictorias constantemente. Para BTC necesitas multiplier entre 5.0 y 7.0 como mínimo.
Regla práctica: siempre calibra el multiplier del SuperTrend al ATR histórico del activo específico.

---

**ATR (Average True Range)**
Volatilidad media de las últimas N velas expresada en unidades de precio.
Error común: no usarlo para el sizing de posición.
Con datos reales: un stop colocado en "1% del precio" en BTC a 60.000 dólares es un stop de 600 dólares, arbitrario y sin relación con la volatilidad real de la vela H4. El stop correcto es 1.5 ATR de la entrada.
Regla práctica: stop = entrada más o menos (N por ATR). Nunca porcentaje fijo del precio.

---

**Fibonacci (Retrocesos)**
Niveles de soporte y resistencia basados en ratios matemáticos (38.2%, 61.8%) tras un impulso.
Error común: usarlos como señal de entrada por sí solos.
Con datos reales: añadir validación Fibonacci al thrust de Onda 3 redujo los falsos positivos en NZDUSD H4. Como filtro adicional en un sistema con edge, funciona. Solo, es ruido.
Regla práctica: Fibonacci como filtro de confirmación, nunca como señal primaria.

---

**Trading Range (TR)**
Zona donde el precio consolida entre soporte y resistencia definidos. Base del análisis Wyckoff.
Error común: identificarlo visualmente sin criterio objetivo.
Con datos reales: en el código usamos rolling_high y rolling_low sobre N velas para definir el TR objetivamente. El parámetro N determina el tamaño de TR que cazas.
Regla práctica: el lookback del TR debe calibrarse por backtest, no por intuición visual.

---

**Spring de Wyckoff**
Ruptura falsa por debajo del soporte del TR, seguida de cierre dentro del rango.
Error común: confundirlo con cualquier vela que baje y rebote.
Con datos reales: en BTC H4 con LKB=30, el Spring tiene PF OOS 1.47 sobre 107 trades (2022-2026). Es el único setup de este proyecto que sobrevive al walk-forward en crypto.
Regla práctica: el Spring requiere primero un climax de volumen que establezca el soporte. Sin ese climax previo, no hay Spring real.

---

**UTAD (Upthrust After Distribution)**
Ruptura falsa por encima de la resistencia del TR en contexto de distribución.
Error común: intentar operar cortos en Bitcoin basándose en UTADs.
Con datos reales: UTAD en BTC H4 dio PF OOS de 0.45 sobre 8 años. Operar contra la tendencia secular de Bitcoin con cualquier sistema técnico es estadísticamente suicida.
Regla práctica: en activos con tendencia secular alcista como BTC o índices, los setups de corto tienen el viento en contra estructuralmente.

---

**Pattern Front-Running**
Fenómeno donde los algoritmos institucionales usan patrones técnicos conocidos como trampas para retail.
Error común: creer que un patrón "más confirmado" es más fiable.
Con datos reales: añadir confirmación de Hammer o Engulfing al Wyckoff Spring redujo el WR OOS de 34.58% a 25.93% y el PF de 1.47 a 1.17. Los patrones vélicos perfectos en soportes H4 son cazados por market makers.
Regla práctica: en mercados dominados por algoritmos, la señal más simple suele ser más robusta que el patrón "perfecto".

---

### NIVEL 4 — GESTIÓN DE RIESGO

**Position Sizing**
Cuántas unidades del activo comprar en cada trade.
Error común: usar lote fijo o porcentaje fijo del capital sin considerar la distancia al stop.
Con datos reales: el backtest original de Wyckoff duplicaba arbitrariamente el capital asignado. Con stop variable basado en ATR, el riesgo real variaba enormemente entre trades.
Regla práctica: lots = (capital por riesgo%) dividido entre distancia_al_stop. Esta es la única fórmula correcta.

---

**Riesgo por Trade**
Porcentaje del capital que puedes perder si el stop se activa.
Error común: usar 5-10% por trade creyendo que "acelera los resultados".
Con datos reales: con 2% de riesgo por trade y WR 35%, una racha de 10 perdedores consecutivos consume el 18.3% del capital. Con 5% de riesgo, esa misma racha consume el 40.1%.
Regla práctica: máximo 2% de riesgo por trade en sistemas con WR menor del 50%. Máximo 1% en sistemas nuevos en producción.

---

**Trailing Stop**
Stop que avanza en dirección favorable al trade para proteger ganancias progresivamente.
Error común: invertir la dirección del trailing en shorts.
Con datos reales: bug real encontrado en el código: en shorts, el new_sl calculado como precio más ATR cuando el precio cae puede generar un stop que sube en vez de bajar, convirtiendo el trailing en un generador de pérdidas.
Regla práctica: en longs el stop solo sube. En shorts el stop solo baja. Nunca en sentido contrario.

---

**Sharpe Ratio**
Retorno ajustado por la volatilidad del sistema.
Error común: usarlo para evaluar un sistema de forma aislada.
Con datos reales: un sistema que gana 15% anual con drawdowns del 3% tiene mejor Sharpe que uno que gana 30% con drawdowns del 20%. El segundo requiere un capital psicológico y financiero muy superior.
Regla práctica: usa el Sharpe para comparar sistemas entre sí, no como métrica absoluta.

---

**Universo de Operación**
El conjunto de activos y timeframes en los que opera un sistema.
Error común: escalar un sistema a más activos sin test de transferibilidad.
Con datos reales: el portafolio de 9 pares Forex supera en robustez al sistema BTC aislado por la diversificación real de señales: más de 200 trades anuales vs 25 en BTC H4. La ley de grandes números trabaja a favor del portafolio diversificado.
Regla práctica: diversificar solo si el edge se transfiere. La diversificación de sistemas sin edge es acumulación de esperanza matemática negativa.

---

## 8. CRITERIOS DE VEREDICTO

| Veredicto | Criterios |
|-----------|-----------|
| Operable | PF OOS mayor de 1.30 + MC P5% mayor de 1.20 + Trades OOS mayor de 100 |
| Marginal | PF OOS mayor de 1.10 + MC P5% mayor de 1.05 (alertas manuales únicamente) |
| Descartado | PF OOS menor de 1.10 o MC P5% menor de 1.05 o Trades OOS menor de 30 |
| Muestra insuficiente | Trades OOS menor de 50 (requiere más tiempo para veredicto) |

### Normas de inclusión en la base de datos
- Todo sistema con al menos 50 trades OOS entra en la base de datos
- Siempre se publica el código fuente en GitHub
- Siempre se documenta el motivo de la decisión
- Nunca se modifica un veredicto retroactivamente sin publicar la razón del cambio

---

## 9. MONETIZACIÓN

### Fase 1 — Gratuito total (meses 1-6)
Objetivo: construir audiencia, credibilidad y el historial público verificable.
- Todo el contenido es público
- El código está en GitHub
- Las auditorías mensuales son públicas

### Fase 2 — Freemium (mes 6+)

Acceso gratuito:
- Diccionario completo
- Tutoriales y series
- Autopsias y resultados históricos
- Hall of Fame / Cemetery

Acceso premium (suscripción mensual):
- Diario de operaciones en tiempo real
- Alertas automáticas del bot con sizing sugerido
- Canal de Discord premium con Q&A directo
- Acceso anticipado a los backtests antes de publicación

### Lo que NUNCA debes hacer
- Vender señales sin contexto de riesgo completo
- Prometer rentabilidades
- Lanzar membresía antes de tener 6 meses de historial público verificable
- Ocultar trades perdedores en el diario de operaciones

---

## 10. CHECKLIST DE LANZAMIENTO

### Notion
- [ ] Página principal creada y pública
- [ ] Diccionario completo (Niveles 1 y 2 como mínimo)
- [ ] Página "Sobre el proyecto" escrita
- [ ] Hall of Fame / Cemetery poblado con los 10 sistemas ya testeados
- [ ] Al menos una serie de tutoriales completa (recomendado: Serie 0)
- [ ] Página de propuestas con el formulario estándar

### Discord
- [ ] Estructura de canales creada
- [ ] Mensaje de bienvenida escrito
- [ ] Reglas publicadas
- [ ] Canal sobre-el-proyecto con la presentación completa

### Telegram
- [ ] Canal principal creado
- [ ] Mensaje de presentación publicado
- [ ] Bot de alertas Wyckoff configurado o script listo
- [ ] Link a Notion y Discord en la descripción del canal

### GitHub
- [ ] Repositorio público creado
- [ ] elliott_features.py subido y documentado
- [ ] wyckoff_features.py subido y documentado
- [ ] backtest_wyckoff_crypto.py subido y documentado
- [ ] README con explicación del framework de validación
- [ ] Carpeta /results con los outputs de los backtests publicados

### Contenido mínimo para el lanzamiento
- [ ] Serie 0 completa (5 episodios del framework de validación)
- [ ] Al menos 2 autopsias publicadas (Elliott Onda C y LuxAlgo Bear son las más impactantes)
- [ ] Primera auditoría mensual del portafolio Forex

---

## 11. MENSAJES DE BIENVENIDA

### Telegram — Mensaje de presentación

```
BIENVENIDO A TRADING QUANT LAB

Esto no es una comunidad de señales.
Esto es un laboratorio.

Lo que hacemos aquí:
- Testamos estrategias de trading con metodología cuantitativa real
- Publicamos el proceso completo, incluyendo los fracasos
- Mostramos un portafolio real de 9 sistemas Forex en producción
- Automatizamos alertas cuando los sistemas detectan setups válidos

Lo que NO hacemos:
- Prometer rentabilidades
- Ocultar trades perdedores
- Vender señales sin contexto de riesgo

El 80% de las estrategias que testamos mueren en el backtest.
Te mostramos cuáles sobreviven y por qué.

Hub central (Notion): [link]
Discord (comunidad): [link]
GitHub (código fuente): [link]
```

### Discord — Mensaje de bienvenida

```
Bienvenido a Trading Quant Lab

Antes de nada, lo que necesitas saber sobre este servidor:

QUÉ ES ESTO
Un laboratorio de investigación cuantitativa aplicada al trading.
Aquí se testean estrategias con metodología rigurosa: Walk-Forward Validation,
Monte Carlo, y tests de transferibilidad entre activos.

QUÉ ENCONTRARÁS AQUÍ
- Un portafolio real de 9 sistemas Forex con auditorías mensuales públicas
- Backtests completos de estrategias populares (Elliott, Wyckoff, LuxAlgo...)
- El código fuente de todos los sistemas en GitHub
- Un diccionario de términos cuantitativos con datos reales
- La posibilidad de proponer estrategias para que las testemos

EL HALL OF FAME Y EL CEMETERY
Mantenemos una base de datos pública de todas las estrategias testeadas.
Las que sobreviven van al Hall of Fame. Las que mueren van al Cemetery
con la causa de muerte documentada.

LO QUE NO ENCONTRARÁS
- Señales de trading (publicamos alertas, no recomendaciones de inversión)
- Rentabilidades garantizadas
- Trades perdedores ocultados

EMPIEZA POR AQUÍ
1. Canal sobre-el-proyecto
2. Notion [link] — todo el contenido estructurado
3. Canal diccionario-quant — si hay términos que no conoces
4. Canal preguntas — cualquier duda

Bienvenido al lado honesto del trading algorítmico.
```

### Discord — Reglas

```
REGLAS DEL SERVIDOR

1. RESPETO
Trato profesional en todo momento. Las discrepancias técnicas son bienvenidas,
los ataques personales no.

2. NO SEÑALES EXTERNAS
No se permiten señales de otros servicios, afiliados ni referencias
a otros canales de trading sin permiso explícito.

3. PROPUESTAS CON FORMATO
Las sugerencias de estrategias deben usar el formulario estándar
del canal propuestas-de-estrategia. Propuestas sin formato serán ignoradas.

4. CONTEXTO DE RIESGO OBLIGATORIO
Si compartes trades propios, incluye siempre el riesgo por trade y el stop.
Nunca resultados sin contexto.

5. NO PROMESAS
Prohibido prometer rentabilidades propias o ajenas.

6. REPRODUCIBILIDAD
Si afirmas que una estrategia funciona, aporta los datos.
PF, Win Rate, periodo testado, muestra de trades. Sin datos, es una opinión.

El incumplimiento reiterado resulta en expulsión.
```

---

Versión 1.0 — Marzo 2026
