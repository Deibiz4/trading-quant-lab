# Trading Quant Lab 🚀

## Información del Proyecto

- **Nombre**: Trading Quant Lab
- **Versión**: 1.0.0
- **Misión**: Comunidad cuantitativa de trading con validación matemática rigurosa (WFV + Monte Carlo)
- **Stack**:
  - Frontend: React + Vite + TailwindCSS
  - Backend: FastAPI (Python)
  - Bot: MQL5 (MetaTrader) + Python para alertas
  - Hosting: GitHub Pages (frontend) + VPS (backend)

## Documentación Base

Antes de trabajar, lee estos archivos en orden:
1. **DOCUMENTACION/guias/trading_quant_lab_guia.md** — Arquitectura técnica, roadmap, fases de implementación
2. **DOCUMENTACION/guias/TRADING_QUANT_LAB_GUIA_MAESTRA.md** — Filosofía, estructura de comunidad, contenido
3. **DOCUMENTACION/guias/presentacion_comunidad_quant.md** — Análisis técnico del portafolio de 9 sistemas Forex
4. **DOCUMENTACION/README.md** — Índice completo de toda la documentación

## Estructura del Proyecto

```
trading-quant-lab/ (Monorepo)
│
├── frontend/                      # React + Vite + TailwindCSS
│   ├── src/
│   │   ├── pages/                 # Home, Dictionary, Dashboard, Blog, HallOfFame
│   │   ├── components/
│   │   │   └── mdx/              # MetricResult, BugReport, StrategyVerdict
│   │   ├── content/
│   │   │   ├── tutorials/         # .mdx de series (Elliott, Wyckoff, etc)
│   │   │   └── autopsias/         # .mdx de análisis de fracasos
│   │   ├── data/
│   │   │   └── strategies.json    # Hall of Fame / Cemetery hardcodeado
│   │   └── lib/
│   │       ├── posts.js           # Carga automática de .mdx
│   │       └── api.js             # Funciones fetch a FastAPI
│   └── vite.config.js             # Configurado con MDX
│
├── backend/                       # FastAPI (Python)
│   ├── main.py                    # Servidor principal con WebSocket
│   ├── routers/
│   │   ├── portfolio.py           # /api/portfolio/summary
│   │   ├── alerts.py              # /api/alerts/webhook
│   │   ├── strategies.py          # /api/strategies
│   │   └── webhook.py             # Endpoints de MT5
│   ├── models.py                  # Esquemas Pydantic
│   └── database.py                # Conexión a SQLite/PostgreSQL
│
├── bot/                           # Scripts de alerta y análisis
│   ├── wyckoff_features.py        # Detección de Spring (MQL5 llamará esto)
│   ├── elliott_features.py        # Análisis de Elliott
│   ├── alert_sender.py            # POST a API + Telegram
│   └── backtest/                  # Scripts de validación (WFV, Monte Carlo)
│       ├── validate_framework.py
│       ├── walk_forward.py
│       └── monte_carlo.py
│
├── infra/
│   ├── nginx.conf                 # Proxy para API
│   ├── .github/
│   │   └── workflows/
│   │       └── deploy.yml         # Deploy automático a GitHub Pages
│   └── systemd/
│       └── trading-api.service    # Servicio FastAPI en VPS
│
├── docs/
│   ├── CHANGELOG.md               # Cambios por versión
│   ├── MANUAL.md                  # Funcionalidades documentadas
│   ├── LOGS.md                    # Registro de sesiones
│   └── API.md                     # Documentación de endpoints
│
└── .claude/
    ├── commands/
    │   ├── document-feature.md
    │   ├── log-session.md
    │   ├── new-version.md
    │   ├── session-summary.md
    │   └── update-changelog.md
    └── settings.local.json        # Permisos y configuración local
```

## Stack Tecnológico

| Capa | Tecnología | Por qué |
|------|-----------|--------|
| **Frontend** | React + Vite + TailwindCSS | Rápido, moderno, deploy en GitHub Pages |
| **Blog** | MDX (Markdown con React) | Controlar versión en Git, sin CMS, componentes custom |
| **Backend** | FastAPI + WebSocket | Async, rápido, fácil de desplegar, documentación automática |
| **Base de datos** | SQLite → PostgreSQL | Empezar local, migrar cuando escales |
| **Hosting Frontend** | GitHub Pages | Gratuito, SSL automático, deploy con `git push` |
| **Hosting Backend** | VPS genérico (Linode, Hetzner, DigitalOcean) | Nginx + Certbot para SSL |
| **Deploy** | GitHub Actions | Deploy automático a GitHub Pages en cada push |
| **Alertas en Tiempo Real** | Telegram Bot | Actualizaciones de alertas sin delay |

## Comandos

### Desarrollo Frontend
```bash
cd frontend
npm install
npm run dev          # Servidor local en http://localhost:5173
npm run build        # Build para GitHub Pages
```

### Desarrollo Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload  # Servidor local en http://localhost:8000
```

### Bot / Backtests
```bash
cd bot
python alert_sender.py     # Envía alertas a API y Telegram
python backtest/validate_framework.py --strategy wyckoff --pair EURUSD
```

### Deploy
```bash
# Frontend: automático con git push a main
git add . && git commit -m "message" && git push origin main

# Backend: manual en VPS
# systemctl restart trading-api
```

## Variables de Entorno

### Frontend (`frontend/.env`)
```bash
VITE_API_URL=http://localhost:8000         # Desarrollo
VITE_API_URL=https://api.tudominio.com     # Producción (configurable via secrets)
```

### Backend (`backend/.env`)
```bash
API_SECRET_KEY=tu-clave-larga-y-aleatoria
TELEGRAM_TOKEN=tu-token-bot-telegram
TELEGRAM_CHAT_ID=tu-chat-id
DATABASE_URL=sqlite:///./trading.db
```

## Convenciones de Código

### Nombrado de Variables
- **Python**: `snake_case` (ej: `profit_factor`, `win_rate`)
- **JavaScript/React**: `camelCase` (ej: `profitFactor`, `winRate`)
- **Componentes React**: `PascalCase` (ej: `<MetricResult />`, `<BugReport />`)

### Estructura de Imports
**Python:**
```python
import os
from typing import List

from fastapi import FastAPI
from sqlalchemy import create_engine

from .models import Strategy
from .routers import portfolio
```

**JavaScript:**
```javascript
import { useState } from 'react'
import { fetchPortfolio } from '@lib/api'
import { MetricResult } from '@components/mdx'
```

### Manejo de Errores
- **Backend**: Retornar `HTTPException` con código 4XX/5XX
- **Frontend**: Try-catch con fallback visual (ej: "Error cargando datos")
- **Bot**: Log detallado de errores en archivo + notificación a Telegram

### Commits
**Formato:** `<tipo>: <descripción breve>`
- `feat:` Nueva funcionalidad (ej: `feat: add wyckoff spring detection`)
- `fix:` Corrección de bug (ej: `fix: trailing stop direction in shorts`)
- `docs:` Cambios en documentación (ej: `docs: add API endpoints reference`)
- `refactor:` Cambios sin comportamiento nuevo (ej: `refactor: extract api client module`)
- `test:` Cambios en tests (ej: `test: add monte carlo validation cases`)

Ejemplo:
```bash
git commit -m "feat: add websocket alerts to dashboard

- Implement AlertManager in FastAPI
- Connect frontend to ws/alerts endpoint
- Display real-time trade signals in Dashboard page"
```

## Comportamiento Esperado del Agente

### Al Iniciar una Sesión
- Lee `docs/LOGS.md` para entender dónde se paró la última sesión
- Revisa `docs/CHANGELOG.md` para la versión vigente
- Si hay cambios pendientes, pregunta el estado actual
- Respeta las convenciones de código arriba descritas

### Durante el Trabajo
- **Prioridad 1**: Backend + API (es el cuello de botella)
- **Prioridad 2**: Frontend y componentes MDX (bajo riesgo)
- **Prioridad 3**: Deploy y infraestructura (cuando frontend y backend funcionen)
- Mantén consistencia con el código existente
- **No modifiques archivos en `.claude/`** salvo solicitud explícita del usuario
- Antes de cambios destructivos o irreversibles en archivos clave, pide confirmación

### Al Trabajar con MDX
- Usa los componentes custom: `<MetricResult>`, `<BugReport>`, `<WarnBox>`, `<StrategyVerdict>`
- Cada tutorial incluye datos reales de los backtests (PF OOS, MC P5%, Win Rate)
- Las autopsias publican siempre los resultados negativos con la misma transparencia que los positivos

### Al Terminar una Sesión
- Actualiza `docs/LOGS.md` con un resumen conciso de lo hecho
- Actualiza `docs/CHANGELOG.md` si hay cambios versionables
- Actualiza `docs/MANUAL.md` si hay funcionalidad nueva o modificada
- Sugiere `/session-summary` para generar un resumen automático

## Puntos Clave de Diseño

### ✅ Lo que SÍ hacemos
- Publicar resultados reales (ganadores y perdedores) con contexto de riesgo
- Walk-Forward Validation + Monte Carlo en cada estrategia
- Test de transferibilidad entre activos
- Comunidad centrada en rigor matemático, no en promesas de rentabilidad
- Automatización a través de API + WebSocket + Telegram

### ❌ Lo que NUNCA hacemos
- Prometer rentabilidades pasadas o futuras
- Ocultar trades perdedores
- Vender señales sin contexto completo
- Cambiar un veredicto retroactivamente sin publicar la razón
- Colocar "Stop Loss de 30 pips" — usamos ATR dinámico

### 📊 Métricas Mínimas para Veredicto
- **Operable**: PF OOS > 1.30 + MC P5% > 1.20 + Trades OOS > 100
- **Marginal**: PF OOS > 1.10 + MC P5% > 1.05 (solo alertas manuales)
- **Descartado**: PF OOS < 1.10 OR MC P5% < 1.05 OR Trades OOS < 30

## Restricciones

- No elimines archivos de documentación sin confirmar antes
- No cambies la estructura de rutas del React Router sin avisar
- No modifiques `.claude/settings.local.json` sin solicitud explícita
- Antes de agregar dependencias nuevas al `package.json` o `requirements.txt`, sugiere alternativas
- Si un cambio requiere actualizar la versión MAJOR, pregunta primero

## Próximas Fases de Desarrollo

| Fase | Semana | Objetivo |
|------|--------|----------|
| **FASE 1** | 1 | Frontend estático: Landing + Diccionario + Hall of Fame |
| **FASE 2** | 2 | Sistema de blog MDX: 5+ posts publicados |
| **FASE 3** | 3 | Backend FastAPI: API pública con HTTPS |
| **FASE 4** | 4 | Puente Bot → API → Web: alertas en tiempo real |
| **FASE 5** | 5 | Infraestructura: deploy automático, systemd |
| **FASE 6** | 6 | Comunidad: Discord y Telegram |
| **FASE 7** | 7 | Contenido: 10+ posts de alta calidad |
| **FASE 8** | 8 | Lanzamiento público |

## Recursos Clave

- **Notion**: [Aquí irá la web pública con todos los tutoriales]
- **GitHub**: [https://github.com/tu-usuario/trading-quant-lab]
- **Discord**: [Link cuando se cree]
- **Telegram**: [Link cuando se cree]

---

**Última actualización:** Marzo 2026
**Versión del proyecto:** 1.0.0
**Estado:** En desarrollo — Fase 1 (Frontend estático)
