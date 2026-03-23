# Manual de Usuario — Trading Quant Lab

Documentación de funcionalidades implementadas. Cada feature nueva se documenta aquí.

## 📋 Tabla de Contenidos

- [Frontend](#frontend)
- [Backend API](#backend-api)
- [Bot de Alertas](#bot-de-alertas)
- [Sistema de Blog MDX](#sistema-de-blog-mdx)
- [Comunidad (Discord/Telegram)](#comunidad)

---

## Frontend

### Páginas Disponibles

#### Home
- **Estado**: Pendiente
- **Descripción**: Landing page con presentación del proyecto, frase de posicionamiento, y enlaces a recursos
- **URL**: `/`
- **Componentes**: Hero, CTA a blog, links a comunidad

#### Diccionario Cuantitativo
- **Estado**: Pendiente
- **Descripción**: 25 términos en 4 niveles (Básico, Intermedio, Avanzado, Experto)
- **URL**: `/diccionario`
- **Datos reales**: Cada término usa ejemplos de los backtests del proyecto

#### Hall of Fame / Cemetery
- **Estado**: Pendiente
- **Descripción**: Base de datos de estrategias testeadas con veredictos y causa de muerte
- **URL**: `/resultados`
- **Columnas**: Estrategia, Activo, Timeframe, PF OOS, MC P5%, Win Rate, Trades OOS, Veredicto

#### Blog
- **Estado**: Pendiente
- **Descripción**: Sistema de blog MDX con carga automática de posts
- **URL**: `/blog`
- **Posts**:
  - Serie 0: Framework de Validación (5 episodios)
  - Serie 1: Elliott Wave (5 episodios)
  - Serie 2: Wyckoff (6 episodios)
  - Serie 3: LuxAlgo (5 episodios)
  - Bug Reports (temática)
  - Autopsias (estrategias que fallaron)

#### Dashboard (Tiempo Real)
- **Estado**: Pendiente
- **Descripción**: Dashboard con estado en vivo del portafolio, alertas de WebSocket
- **URL**: `/dashboard`
- **Funcionalidades**:
  - Conecta a FastAPI via WebSocket
  - Muestra alertas en tiempo real
  - Estado del portafolio Forex de 9 sistemas

### Componentes Custom MDX

#### `<MetricResult />`
Muestra resultados de backtest con formato visual.

**Props:**
```jsx
<MetricResult
  trades={137}
  wr={56.2}
  pf={1.47}
  mcP5={0.97}
  verdict="marginal"
/>
```

#### `<BugReport />`
Destaca bugs conceptuales encontrados en estrategias populares.

**Props:**
```jsx
<BugReport
  severity="critical"
  title="Stop Loss dimensional incorrecto"
>
  Descripción del bug...
</BugReport>
```

#### `<StrategyVerdict />`
Muestra el veredicto final de una estrategia (Operable/Marginal/Descartado).

#### `<WarnBox />`
Box de advertencia para contexto de riesgo.

---

## Backend API

### Estado Actual
- **Estado**: Pendiente (inicialización)
- **Tecnología**: FastAPI + WebSocket
- **Hosting**: localhost (desarrollo), VPS (producción)
- **Autenticación**: API Key en header `X-API-Key`

### Endpoints Planificados

#### Portfolio

**GET `/api/portfolio/summary`**
- Retorna resumen del portafolio Forex de los 9 sistemas
- Parámetros: ninguno (datos públicos)
- Respuesta:
  ```json
  {
    "balance": 10000.0,
    "equity": 10150.5,
    "pnl_real": 150.5,
    "drawdown": 2.1,
    "open_trades": 3,
    "last_updated": "2026-03-23T14:30:00Z"
  }
  ```

#### Alertas

**POST `/api/alerts/webhook`** ⚠️ Requiere API Key
- El bot envía alertas aquí
- Retransmite a clientes WebSocket
- Parámetros:
  ```json
  {
    "ticker": "EURUSD",
    "timeframe": "H4",
    "signal": "buy",
    "entry": 1.0950,
    "sl": 1.0920,
    "tp": 1.1000,
    "atr_mult": 1.5
  }
  ```

**WebSocket `/ws/alerts`**
- Conecta frontend para recibir alertas en tiempo real
- Ejemplo en frontend: `createAlertWebSocket()` en `lib/api.js`

#### Estrategias

**GET `/api/strategies`**
- Lista todas las estrategias testeadas
- Parámetros opcionales: `verdict=operable`, `asset=EURUSD`
- Retorna array de estrategias

**GET `/api/strategies/{id}`**
- Detalle de una estrategia específica
- Incluye datos de backtest completos

---

## Bot de Alertas

### Estado Actual
- **Estado**: Pendiente (definición de arquitectura)
- **Componentes**:
  - `alert_sender.py` — Envía alertas a API + Telegram
  - `wyckoff_features.py` — Detección de Spring (llamado desde MQL5)
  - `elliott_features.py` — Análisis de Elliott

### `alert_sender.py`

Cuando el bot detecta una señal válida:

```python
await send_alert({
    'ticker': 'EURUSD',
    'timeframe': 'H4',
    'entry': 1.0950,
    'sl': 1.0920,
    'tp': 1.1000,
    'atr_mult': 1.5
})
```

Esto dispara:
1. POST a `https://api.tudominio.com/api/alerts/webhook`
2. Mensaje a Telegram con formato estandarizado
3. Broadcast a WebSocket (actualiza dashboard en vivo)

### Variables de Entorno Requeridas
```bash
API_SECRET_KEY=tu-clave-larga-y-aleatoria
TELEGRAM_TOKEN=tu-token-bot-telegram
TELEGRAM_CHAT_ID=tu-chat-id
```

---

## Sistema de Blog MDX

### Cómo Agregar un Post Nuevo

1. Crear archivo `.mdx` en `frontend/src/content/tutorials/` o `autopsias/`
2. Incluir frontmatter YAML:
   ```mdx
   ---
   title: "Nombre del post"
   subtitle: "Subtítulo"
   series: "Nombre de la serie"
   episode: 1
   date: "2026-03-23"
   category: "tutorial"      # tutorial | autopsia | bug-report
   difficulty: "basico"      # basico | intermedio | avanzado
   readingTime: 8
   tags: ["backtest", "validacion"]
   ---
   ```
3. Escribir contenido en Markdown con componentes custom
4. `git add . && git commit -m "add: nombre del post" && git push`
5. GitHub Actions compila automáticamente, post aparece en 2-3 minutos

### Posts Planificados

#### Serie 0: Framework de Validación
- [ ] Ep. 1 — Por qué el 99% de los backtests mienten (IS vs OOS)
- [ ] Ep. 2 — Walk-Forward Validation
- [ ] Ep. 3 — Monte Carlo: todas las vidas posibles
- [ ] Ep. 4 — El criterio de selección evita data snooping
- [ ] Ep. 5 — Test de transferibilidad entre activos

#### Serie 1: Elliott Wave
- [ ] Ep. 1 — La teoría y traducción a código
- [ ] Ep. 2 — ROC, RSI, SuperTrend para detectar ondas
- [ ] Ep. 3 — Los 4 bugs que casi nos hacen comprar techos
- [ ] Ep. 4 — Resultados reales: PF OOS 1.39 en Onda 3
- [ ] Ep. 5 — La Onda 3 como módulo reutilizable

#### Autopsias (Estrategias que Fallaron)
- [ ] LuxAlgo HTF Bull — Por qué el indicador más vendido pierde dinero
- [ ] Wyckoff en ETH — Por qué el edge no se transfiere
- [ ] El teorema del timeframe — H1 destruye el edge de H4

---

## Comunidad

### Discord

**Estado**: Pendiente

**Estructura de Canales**:
```
── INFORMACIÓN
   # reglas
   # sobre-el-proyecto
   # resultados-verificados

── SISTEMAS EN PRODUCCIÓN
   # forex-portfolio-live
   # btc-wyckoff-alertas
   # diario-de-operaciones

── LABORATORIO CUANTITATIVO
   # experimentos-activos
   # backtests-publicados
   # autopsias

── FORMACIÓN
   # metodologia-validacion
   # errores-comunes
   # biblioteca-recursos

── COMUNIDAD
   # propuestas-de-estrategia
   # debate-mercados
   # preguntas
   # off-topic
```

### Telegram

**Estado**: Pendiente

**Canales**:
- **📢 anuncios** — Solo admin, cambios importantes
- **📊 portafolio-forex-live** — Diario de los 9 sistemas
- **🚨 alertas-wyckoff** — Alertas automáticas del bot
- **🧪 laboratorio** — Experimentos en curso
- **💬 debate-general** — Conversación libre
- **❓ preguntas** — Canal específico para dudas

---

## Roadmap de Implementación

Ver `CLAUDE.md` — Fases 1-8 (8 semanas) con detalles técnicos completos.

---

*Última actualización: 2026-03-23*
*Estado del proyecto: Fase 1 en desarrollo*
