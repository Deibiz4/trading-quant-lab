# 📖 Diccionario Cuantitativo — Trading Quant Lab

**25 términos esenciales del trading cuantitativo explicados con ejemplos reales**

---

## PARTE 1: MÉTRICAS DE RENTABILIDAD

### 1. **Profit Factor (PF)**
**Definición**: Relación entre ganancias totales y pérdidas totales
```
PF = Ganancias Totales / Pérdidas Totales
```
**Ejemplo**: Si ganaste $10,000 y perdiste $5,000 → PF = 2.0
**Veredicto**:
- PF > 1.30 (OOS): Operable
- PF > 1.10 (OOS): Marginal
- PF < 1.10: Descartado

---

### 2. **Return on Risk (RoR)**
**Definición**: Ganancia por unidad de riesgo asumido
```
RoR = Ganancia / Riesgo Total
```
**Ejemplo**: Riesgo $1,000 → Ganancia $3,000 → RoR = 3:1

---

### 3. **Win Rate**
**Definición**: Porcentaje de trades ganadores
```
Win Rate = (Trades Ganadores / Total Trades) × 100
```
**Ejemplo**: 45 trades ganadores de 100 totales = 45% win rate
**Nota**: Baja win rate NO significa mala estrategia (si RR es bueno)

---

### 4. **Average Win / Average Loss**
**Definición**: Promedio de ganancias vs promedio de pérdidas
```
Reward/Risk Ratio = Avg Win / Avg Loss
```
**Ejemplo**: Promedio ganan $500, pierden $200 → R/R = 2.5:1
**Interpretación**: Por cada $1 que riesgamos, ganamos $2.50

---

## PARTE 2: VALIDACIÓN ESTADÍSTICA

### 5. **Walk-Forward Validation (WFV)**
**Definición**: Método riguroso que divide datos en ventanas de entrenamiento + testing
```
Proceso:
1. Entrena con datos históricos (2019-2020)
2. Testa en datos frescos (2021)
3. Repite ventana siguiente (2020-2021 → test 2022)
```
**Por qué importa**: Evita overfitting (ajustar demasiado a datos pasados)
**Nuestro uso**: Obligatorio para veredicto OOS (Out of Sample)

---

### 6. **Monte Carlo Simulation**
**Definición**: Genera 1,000+ variaciones de tus trades para ver worst case
```
Ejemplo:
- Tu estrategia: 100 trades reales
- Monte Carlo: Crea 1,000 órdenes aleatorias de esos 100
- Resultado: Percentil 5% = peor caso probable
```
**Métrica clave**: MC P5% > 1.20 = Operable
**Por qué**: Verifica robustez, no suerte

---

### 7. **Out of Sample (OOS)**
**Definición**: Datos nunca vistos durante el backtest
```
Ejemplo:
- Entrena: 2019-2020
- Test: 2021-2023 (datos nuevos)
- OOS = datos 2021-2023
```
**Importancia**: Es lo que REALMENTE ganará en el futuro
**Nuestro criterio**: PF OOS > 1.30 es operable

---

### 8. **In Sample (IS)**
**Definición**: Datos usados para optimizar la estrategia
```
Ejemplo: Ajustas parámetros con datos 2019-2020
```
**Cuidado**: Un buen IS + malo OOS = Overfitting

---

### 9. **Drawdown (DD)**
**Definición**: Caída máxima desde peak hasta valle
```
Ejemplo:
Peak: $10,000
Mínimo: $7,000
Drawdown: 30%
```
**Tolerancia**: No más del 20-30% del capital
**Nuestro control**: Publicamos drawdown en auditoría mensual

---

### 10. **Recovery Factor**
**Definición**: Ganancia neta / Drawdown máximo
```
Recovery = Ganancia Total / Max Drawdown
```
**Ejemplo**: Ganancia $5,000 / Drawdown $2,000 = 2.5x
**Interpretación**: Qué tan rápido se recupera de caídas

---

## PARTE 3: ANÁLISIS DE RIESGO

### 11. **Sharpe Ratio**
**Definición**: Ganancia ajustada por riesgo (volatilidad)
```
Sharpe = (Ganancia - Tasa Libre de Riesgo) / Volatilidad
```
**Interpretación**:
- Sharpe > 1.0: Bueno
- Sharpe > 2.0: Excelente
**Por qué**: Penaliza estrategias que ganan mucho pero con saltos locos

---

### 12. **Sortino Ratio**
**Definición**: Como Sharpe pero solo castiga volatilidad negativa
```
Sortino = (Ganancia - Tasa Libre) / Volatilidad Desv Negativa
```
**Diferencia con Sharpe**: Solo importan los drawdowns malos, no la volatilidad positiva
**Mejor para**: Trading, porque importan más las caídas que los saltos al alza

---

### 13. **Volatilidad (Desv Estándar)**
**Definición**: Dispersión de retornos diarios/semanales
```
Alto: Retornos entre -10% y +10% (volátil)
Bajo: Retornos entre -1% y +1% (estable)
```
**Implicación**: Volatilidad alta = drawdowns más grandes

---

### 14. **Correlation Coefficient**
**Definición**: Relación entre dos activos (-1 a +1)
```
+1 = Suben y bajan juntos (correlacionados)
0 = Independientes
-1 = Inversos (cuando sube uno, baja el otro)
```
**Uso**: Diversificación → buscar activos con correlación -0.5

---

### 15. **Expectancy**
**Definición**: Ganancia promedio esperada por trade
```
E = (Win Rate × Avg Win) - (1 - Win Rate × Avg Loss)
```
**Ejemplo**:
- Win rate 45%, Avg Win $500, Avg Loss $300
- E = (0.45 × 500) - (0.55 × 300) = 225 - 165 = $60/trade
**Interpretación**: Cada trade gana $60 en promedio

---

## PARTE 4: CARACTERÍSTICAS DE MERCADO

### 16. **Wyckoff Spring**
**Definición**: Patrón de Wyckoff donde precio toca soporte sin romperlo
```
Características:
- Acepta bajista (venta fuerte)
- Spring (rebote pero no cierra la brecha)
- Climax de venta (pánico)
→ Potencial reversal alcista
```
**Nuestro uso**: Base del bot de alertas Wyckoff
**Confiabilidad**: PF OOS 1.47 en BTC H4

---

### 17. **Elliott Wave**
**Definición**: Modelo de 5 ondas alcistas + 3 bajistas
```
Alcista: 1→2→3→4→5 (impulso)
Bajista: A→B→C (corrección)
```
**Aplicación**: Identificar dónde estamos en el ciclo
**Nuestro contenido**: Series educativas en blog (Fase 2)

---

### 18. **Support & Resistance**
**Definición**: Niveles donde precio rebota o rompe
```
Soporte: Nivel inferior (compran aquí)
Resistencia: Nivel superior (venden aquí)
```
**Ejemplo**: Soporte EURUSD en 1.0950 = precio no baja de ahí
**Uso en TQL**: Confirmación de reversal patterns

---

### 19. **Timeframe**
**Definición**: Período temporal del gráfico
```
M5 = 5 minutos
H1 = 1 hora
H4 = 4 horas
D1 = 1 día
```
**Relación**: Mayor timeframe = menos ruido, señales más confiables
**Nuestro enfoque**: H4 y D1 (evitamos scalping)

---

### 20. **Volatility Clustering**
**Definición**: Períodos de volatilidad alta agrupados
```
Observación:
Semana 1: Volatilidad baja
Semana 2-3: Volatilidad ALTA (noticias)
Semana 4: Volatilidad baja
```
**Implicación**: Drawdowns tienden a venir juntos
**Control**: Ajustar posición size en periodos volátiles

---

## PARTE 5: ANÁLISIS TÉCNICO AVANZADO

### 21. **Average True Range (ATR)**
**Definición**: Rango promedio de movimiento intradiario
```
ATR = Promedio(High - Low) últimos 14 períodos
```
**Ejemplo**: ATR 50 pips en EURUSD = movimiento típico 50 pips/día
**Uso**: Fijar SL a 1.5 × ATR = stop profesional

---

### 22. **Relative Strength Index (RSI)**
**Definición**: Indicador momentum (0-100)
```
RSI > 70: Sobrecompra (posible bajada)
RSI < 30: Sobreventa (posible subida)
```
**Nuestro uso**: Confirmación, nunca señal principal
**Por qué**: Genera falsas señales en trends

---

### 23. **Moving Average (MA)**
**Definición**: Precio promedio últimos N períodos
```
MA 200: Promedio últimos 200 días
Uso: Identificar trend principal
```
**Estrategia simple**: Precio > MA200 = trend alcista

---

### 24. **Risk to Reward Ratio (RR)**
**Definición**: Relación entre lo que riesgeas vs lo que ganas
```
RR = Target / Stop Loss

Ejemplo:
Entry: 1.0950
SL: 1.0900 (50 pips riesgo)
Target: 1.1000 (50 pips ganancia)
RR = 50/50 = 1:1
```
**Mínimo profesional**: RR 1:2 (por cada 1 que riesgas, ganas 2)

---

### 25. **Trade Setup**
**Definición**: Configuración completa de una operación
```
Setup completo:
- Entry (dónde entras)
- Stop Loss (dónde abandonas)
- Target (dónde ganas)
- Posición Size (cuánto riesgos)
- Razón (por qué entra aquí)
```
**Nuestro estándar**: TODOS los setups deben tener estos 5 elementos

---

## GLOSARIO RÁPIDO

| Término | Significado |
|---------|------------|
| **OOS** | Out of Sample (datos nuevos, lo que ganará) |
| **IS** | In Sample (datos pasados, usado para entrenar) |
| **WFV** | Walk-Forward Validation (método de validación rigurosa) |
| **MC** | Monte Carlo (simulación de worst case) |
| **PF** | Profit Factor (ganancias/pérdidas) |
| **RR** | Risk/Reward (relación riesgo ganancia) |
| **DD** | Drawdown (caída máxima) |
| **ATR** | Average True Range (rango de movimiento) |
| **RSI** | Relative Strength Index (momentum) |
| **SL** | Stop Loss (orden de abandono) |
| **TP** | Take Profit (orden de ganancia) |

---

## VEREDICTOS DE ESTRATEGIA

### 🟢 OPERABLE
- PF OOS > 1.30
- MC P5% > 1.20
- Trades OOS > 100
→ **Operamos activamente**

### 🟡 MARGINAL
- PF OOS > 1.10
- MC P5% > 1.05
- Trades OOS > 50
→ **Solo alertas educativas**

### 🔴 DESCARTADO
- No cumple criterios
→ **Publicamos análisis de por qué falló**

---

## RECURSOS ADICIONALES

🔗 **Blog (Fase 2)**: Series educativas completas
🔗 **#metodologia-validacion**: Explicaciones detalladas
🔗 **GitHub**: Código reproducible de todos los backtests

---

*Trading Quant Lab — Rigor, transparencia, datos reales*
*Última actualización: Marzo 2026*
