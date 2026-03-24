# Trading Quant Lab 📊

Comunidad cuantitativa de trading donde **cuantificamos estrategias y mostramos el proceso completo, incluyendo los fracasos**.

## ¿Qué es esto?

Un laboratorio de investigación abierto que:
- Valida estrategias de trading con metodología matemática rigurosa (Walk-Forward Validation + Monte Carlo)
- Publica **todos** los resultados, incluyendo los que fallan
- Mantiene 9 sistemas Forex en producción con auditoría mensual pública
- Construye una comunidad centrada en rigor, no en promesas

> **El 80% de las estrategias que testamos mueren en el backtest. Te mostramos cuáles sobreviven y por qué.**

---

## 📚 Documentación

**Empieza aquí:**
1. **[`CLAUDE.md`](./CLAUDE.md)** (5 min) — Stack, convenciones, estructura, roadmap
2. **[`docs/MANUAL.md`](./docs/MANUAL.md)** (10 min) — Guía de funcionalidades y páginas disponibles
3. **[`docs/CHANGELOG.md`](./docs/CHANGELOG.md)** (5 min) — Historial de cambios y versiones

**Para seguimiento:**
- **[`docs/LOGS.md`](./docs/LOGS.md)** — Registro detallado de cada sesión de desarrollo
- **[`docs/API.md`](./docs/API.md)** — Documentación de endpoints (próximo: Fase 3)

**Recursos Adicionales:**
- **[DOCUMENTACION/](./DOCUMENTACION/)** — Análisis arquitectónico, guías técnicas (si existen)

---

## 🚀 Quick Start

### Para Desarrolladores

```bash
# Clonar y entrar al proyecto
git clone https://github.com/tu-usuario/trading-quant-lab.git
cd trading-quant-lab

# Frontend (React + Vite)
cd frontend
npm install
npm run dev          # http://localhost:5173

# Backend (FastAPI) - en otra terminal
cd backend
pip install -r requirements.txt
uvicorn main:app --reload  # http://localhost:8000
```

### Para Comunidad

- **Hub Central**: Notion (Próximamente) — Documentación estructurada
- **Comunidad**: Discord (Próximamente) — Debate, propuestas, votaciones
- **Alertas en Vivo**: Telegram (Próximamente) — Notificaciones en tiempo real
- **Código Fuente**: [GitHub](#) — Todo es reproducible y público

---

## 🏗️ Stack Tecnológico

| Capa | Tecnología | Hosting | Estado |
|------|-----------|---------|--------|
| **Frontend** | React + Vite + TailwindCSS | GitHub Pages | Fase 1 |
| **Blog** | MDX (Markdown + React) | GitHub Pages | Fase 2 |
| **Backend** | FastAPI + WebSocket | VPS + Nginx | Fase 3 |
| **Base de Datos** | SQLite → PostgreSQL | VPS | Fase 3 |
| **Bot** | MQL5 + Python | VPS | Fase 4 |
| **Deploy** | GitHub Actions | CI/CD | Fase 5 |
| **Comunidad** | Discord + Telegram | — | Fase 6 |

---

## 📂 Estructura del Proyecto

```
trading-quant-lab/
├── frontend/                    # React + Vite (GitHub Pages)
│   ├── src/
│   │   ├── pages/               # Home, Dictionary, Dashboard, Blog
│   │   ├── components/          # Componentes reutilizables + MDX custom
│   │   ├── content/
│   │   │   ├── tutorials/       # Series de tutoriales (.mdx)
│   │   │   └── autopsias/       # Análisis de fracasos (.mdx)
│   │   ├── data/
│   │   │   └── strategies.json  # Hall of Fame / Cemetery
│   │   └── lib/
│   │       ├── posts.js         # Carga automática de MDX
│   │       └── api.js           # Cliente FastAPI
│   └── vite.config.js
│
├── backend/                     # FastAPI (VPS)
│   ├── main.py                  # Servidor + WebSocket
│   ├── routers/                 # Endpoints
│   ├── models.py                # Esquemas Pydantic
│   └── database.py              # Conexión a BD
│
├── bot/                         # Scripts de análisis y alertas
│   ├── alert_sender.py          # POST a API + Telegram
│   ├── wyckoff_features.py      # Detección de patrones
│   ├── elliott_features.py      # Análisis de Elliott
│   └── backtest/                # Validación (WFV, Monte Carlo)
│
├── infra/                       # Infraestructura
│   ├── nginx.conf
│   ├── .github/workflows/deploy.yml
│   └── systemd/
│
├── docs/
│   ├── MANUAL.md                # Documentación detallada
│   ├── CHANGELOG.md             # Historial de cambios
│   ├── LOGS.md                  # Registro de sesiones
│   └── API.md                   # (Próximo)
│
└── .claude/                     # Configuración de Claude
    ├── commands/
    └── settings.local.json
```

---

## 📋 Convenciones de Código

### Python (Backend + Bot)
```python
# snake_case para variables y funciones
profit_factor = 1.47
win_rate = 45.5

# Imports: estándar → external → local
import os
from typing import List
from fastapi import FastAPI
from .models import Strategy
```

### JavaScript/React (Frontend)
```javascript
// camelCase para variables
const profitFactor = 1.47
const calculateWinRate = (trades) => { }

// PascalCase para componentes
export function MetricResult() { }
```

### Git Commits
```bash
git commit -m "feat: add walk-forward validation

- Implement WFV sliding window
- Add validation metrics
- Create backtest export"
```

---

## 🎯 Roadmap (8 Semanas)

| Fase | Semana | Objetivo | Estado |
|------|--------|----------|--------|
| **1** | 1 | Frontend: Landing + Diccionario + Hall of Fame | ✅ **COMPLETADA** |
| **2** | 2 | Blog MDX: 5+ posts de tutoriales | ⏳ Próximo |
| **3** | 3 | Backend FastAPI: API pública con HTTPS | ⏳ |
| **4** | 4 | Bot → API → Web: alertas en tiempo real | ⏳ |
| **5** | 5 | Infraestructura: deploy automático | ⏳ |
| **6** | 6 | Comunidad: Discord + Telegram | ⏳ |
| **7** | 7 | Contenido: 10+ posts publicados | ⏳ |
| **8** | 8 | Lanzamiento público | ⏳ |

---

## 🛠️ Primeros Pasos

### 1. Entiende el proyecto
```bash
# Lee estos en orden (10 minutos):
cat CLAUDE.md
cat docs/MANUAL.md
cat trading_quant_lab_guia.md  # El roadmap técnico
```

### 2. Inicializa el stack
```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend (en otra terminal)
cd backend && pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Personaliza CLAUDE.md
Reemplaza los placeholders (si los hay) con:
- Tu usuario GitHub (para URLs del repo)
- Dominio de API (cuando decidas cuál usar)
- Tokens de Telegram/Discord (cuando crees los bots)

---

## ✅ Filosofía del Proyecto

### Lo que SÍ hacemos
- Publicamos **todos** los resultados (ganadores Y perdedores)
- Metodología rigurosa: WFV + Monte Carlo + test de transferibilidad
- Transparencia total sobre riesgos y drawdowns
- Comunidad centrada en aprendizaje y rigor matemático

### Lo que NUNCA hacemos
- ❌ Prometer rentabilidades (pasadas o futuras)
- ❌ Ocultar trades perdedores
- ❌ Vender señales sin contexto completo
- ❌ Cambiar veredictos sin documentar la razón

---

## 📊 Métricas de Éxito

Una estrategia es **Operable** cuando:
- PF OOS > 1.30
- MC Percentil 5% > 1.20
- Trades OOS > 100

Una estrategia es **Marginal** cuando:
- PF OOS > 1.10 (solo alertas manuales)
- MC Percentil 5% > 1.05

Todo lo demás es **Descartado**.

---

## 🤝 Contribuciones

Este es un proyecto de investigación abierta. Si tienes:
- Ideas de estrategias para testear
- Bugfixes o mejoras de código
- Contenido educativo para la comunidad

Abre un issue o contacta con el equipo en Discord.

---

## 📄 Licencia

Código público y reproducible. Úsalo, aprende, mejóralo.

---

**Estado**: ✅ Fase 1 Completada — En desarrollo Fase 2
**Última actualización**: 24 de Marzo de 2026
**Versión**: 1.0.0 (Fase 1 Frontend)

[GitHub](#) | [Notion](#) | [Discord](#) | [Telegram](#)
