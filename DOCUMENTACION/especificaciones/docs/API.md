# API Reference — Trading Quant Lab

Documentación de endpoints de la API FastAPI. Se completará conforme se implementen los endpoints.

## Base URL

```
Development:  http://localhost:8000
Production:   https://api.tudominio.com  (pendiente de configurar)
```

## Autenticación

Los endpoints privados requieren API Key en el header:

```bash
curl -H "X-API-Key: tu-clave" https://api.tudominio.com/api/endpoint
```

La API Key se define en `.env`:
```bash
API_SECRET_KEY=tu-clave-larga-y-aleatoria
```

---

## Endpoints Públicos (GET)

### GET `/api/portfolio/summary`
**Descripción**: Resumen del portafolio Forex de los 9 sistemas.
**Autenticación**: No requerida
**Parámetros**: Ninguno

**Respuesta** (200):
```json
{
  "balance": 10000.0,
  "equity": 10150.5,
  "pnl_real": 150.5,
  "pnl_percent": 1.51,
  "drawdown_percent": 2.1,
  "open_trades": 3,
  "last_updated": "2026-03-23T14:30:00Z"
}
```

---

### GET `/api/strategies`
**Descripción**: Lista todas las estrategias testeadas.
**Autenticación**: No requerida
**Parámetros**:
- `verdict` (opcional): filtrar por "operable", "marginal", "descartado"
- `asset` (opcional): filtrar por símbolo (ej: EURUSD, BTC)

**Respuesta** (200):
```json
[
  {
    "id": 1,
    "name": "Wyckoff Spring",
    "asset": "BTC/USDT",
    "timeframe": "H4",
    "pf_oos": 1.47,
    "mc_p5": 0.97,
    "win_rate": 34.58,
    "trades_oos": 107,
    "verdict": "marginal",
    "date": "2026-03-23"
  },
  ...
]
```

---

### GET `/api/strategies/{strategy_id}`
**Descripción**: Detalle completo de una estrategia.
**Autenticación**: No requerida
**Parámetros**: `strategy_id` (path)

**Respuesta** (200):
```json
{
  "id": 1,
  "name": "Wyckoff Spring",
  "asset": "BTC/USDT",
  "timeframe": "H4",
  "description": "Detección de Spring en Trading Range...",
  "pf_is": 2.10,
  "pf_oos": 1.47,
  "mc_p5": 0.97,
  "mc_percentil_25": 1.25,
  "win_rate": 34.58,
  "trades_is": 56,
  "trades_oos": 107,
  "max_drawdown": 17.3,
  "verdict": "marginal",
  "date_tested": "2026-03-23",
  "analysis_link": "/blog/wyckoff-spring-analysis",
  "code_link": "https://github.com/usuario/trading-quant-lab/bot/wyckoff_features.py"
}
```

---

## Endpoints Privados (POST, requieren API Key)

### POST `/api/alerts/webhook` ⚠️ API Key requerida
**Descripción**: Recibe alertas del bot, retransmite a WebSocket y Telegram.
**Autenticación**: Requerida (header `X-API-Key`)
**Content-Type**: `application/json`

**Body**:
```json
{
  "ticker": "EURUSD",
  "timeframe": "H4",
  "signal": "buy",
  "entry": 1.0950,
  "sl": 1.0920,
  "tp": 1.1000,
  "atr_mult": 1.5,
  "pf_oos": 1.47,
  "mc_p5": 0.97,
  "timestamp": "2026-03-23T14:30:00Z"
}
```

**Respuesta** (200):
```json
{
  "status": "ok",
  "alert_id": "a1b2c3d4e5f6",
  "broadcast_to": ["websocket", "telegram"],
  "timestamp": "2026-03-23T14:30:05Z"
}
```

**Errores**:
- `403 Forbidden`: API Key inválida o ausente
- `422 Unprocessable Entity`: Body inválido

---

## WebSocket

### WS `/ws/alerts`
**Descripción**: Conecta para recibir alertas en tiempo real.
**Autenticación**: No requerida
**Protocolo**: WebSocket (actualizar a wss:// en producción)

**Mensaje recibido** (cuando el bot dispara una alerta):
```json
{
  "type": "alert",
  "ticker": "EURUSD",
  "signal": "buy",
  "entry": 1.0950,
  "sl": 1.0920,
  "tp": 1.1000,
  "timestamp": "2026-03-23T14:30:05Z"
}
```

**Ejemplo en JavaScript**:
```javascript
const ws = new WebSocket('wss://api.tudominio.com/ws/alerts')

ws.onmessage = (event) => {
  const alert = JSON.parse(event.data)
  console.log('Nueva alerta:', alert.ticker, alert.signal)
  // Mostrar notificación en el dashboard
}

ws.onerror = (error) => {
  console.error('WebSocket error:', error)
}
```

---

## Códigos de Error

| Código | Significado |
|--------|------------|
| `200` | OK — Solicitud exitosa |
| `400` | Bad Request — Parámetros inválidos |
| `403` | Forbidden — API Key inválida |
| `404` | Not Found — Recurso no existe |
| `422` | Unprocessable Entity — Validación falla |
| `500` | Internal Server Error — Error del servidor |

---

## Rate Limiting

Por definir en producción.

---

## Ejemplos completos

### Obtener estrategias operables
```bash
curl -X GET "https://api.tudominio.com/api/strategies?verdict=operable"
```

### Enviar una alerta (desde el bot)
```bash
curl -X POST https://api.tudominio.com/api/alerts/webhook \
  -H "X-API-Key: tu-clave" \
  -H "Content-Type: application/json" \
  -d '{
    "ticker": "EURUSD",
    "timeframe": "H4",
    "signal": "buy",
    "entry": 1.0950,
    "sl": 1.0920,
    "tp": 1.1000,
    "atr_mult": 1.5
  }'
```

### Conectar al WebSocket (desde el frontend)
```javascript
import { createAlertWebSocket } from '@lib/api'

const ws = createAlertWebSocket()

ws.onmessage = (e) => {
  const alert = JSON.parse(e.data)
  updateDashboard(alert)
}
```

---

## Pendiente de Implementar

- [ ] Endpoints de autenticación de usuario (para fase premium)
- [ ] POST `/api/strategies/propose` — Enviar propuesta de comunidad
- [ ] GET `/api/strategies/votes` — Votaciones de estrategias
- [ ] GET `/api/portfolio/trades` — Historial de trades cerrados
- [ ] POST `/api/feedback` — Sistema de feedback de comunidad

---

*Última actualización: 2026-03-23*
*Estado: Documentación en progreso*
