# 🗺️ Roadmap — Trading Quant Lab

**8 semanas para un MVP completo y funcional**

---

## ⚡ Resumen de Fases

| Fase | Semana | Objetivo | Estado |
|------|--------|----------|--------|
| **1** | 1 | Frontend estático (Landing + Diccionario + Hall of Fame) | ⏳ Próximo |
| **2** | 2 | Sistema de blog MDX (5+ posts) | ⏳ |
| **3** | 3 | Backend FastAPI con HTTPS | ⏳ |
| **4** | 4 | Bot → API → Web (alertas en tiempo real) | ⏳ |
| **5** | 5 | Infraestructura (deploy automático) | ⏳ |
| **6** | 6 | Comunidad (Discord + Telegram) | ⏳ |
| **7** | 7 | Contenido (10+ posts) | ⏳ |
| **8** | 8 | Lanzamiento público | ⏳ |

---

## FASE 1️⃣ — Frontend Estático (Semana 1)

**Objetivo:** Web pública funcional con landing, diccionario y hall of fame.

### Checklist

- [ ] **Inicializar proyecto React + Vite**
  ```bash
  npm create vite@latest trading-quant-lab -- --template react
  npm install
  npm install -D tailwindcss postcss autoprefixer @mdx-js/rollup
  npm install react-router-dom
  ```

- [ ] **Configurar estructura de carpetas**
  ```
  frontend/src/
  ├── pages/
  │   ├── Home.jsx
  │   ├── Dictionary.jsx
  │   ├── HallOfFame.jsx
  │   ├── Dashboard.jsx
  │   └── Blog.jsx
  ├── components/
  │   └── mdx/
  │       ├── MetricResult.jsx
  │       └── BugReport.jsx
  ├── data/
  │   └── strategies.json
  └── lib/
      └── api.js
  ```

- [ ] **Crear componentes principales**
  - [ ] Layout / Header / Footer
  - [ ] Hero / Landing Page
  - [ ] Diccionario Cuantitativo (25 términos)
  - [ ] Hall of Fame / Cemetery (tabla interactiva)

- [ ] **Hardcodear datos en JSON**
  - [ ] `strategies.json` con 10+ estrategias
  - [ ] Datos: PF OOS, MC P5%, Win Rate, Trades, Veredicto

- [ ] **Configurar GitHub Pages**
  - [ ] Actualizar `vite.config.js` con `base`
  - [ ] Crear `.github/workflows/deploy.yml`
  - [ ] Hacer push a main
  - [ ] Verificar deploy en `https://usuario.github.io/trading-quant-lab/`

- [ ] **Diseño visual**
  - [ ] Implementar con TailwindCSS
  - [ ] Responsivo (mobile, tablet, desktop)
  - [ ] Dark mode (opcional)

### Entregable

✅ Web estática publicada en GitHub Pages
- Landing page clara
- Diccionario funcional (searchable)
- Hall of Fame / Cemetery con datos reales

### Tiempo estimado: 5-7 días

---

## FASE 2️⃣ — Sistema de Blog MDX (Semana 2)

**Objetivo:** Blog funcional con carga automática de posts MDX.

### Checklist

- [ ] **Instalar dependencias MDX**
  ```bash
  npm install @mdx-js/rollup @mdx-js/react
  npm install remark-frontmatter remark-mdx-frontmatter
  npm install rehype-highlight rehype-slug
  npm install gray-matter reading-time
  ```

- [ ] **Configurar Vite para MDX**
  - [ ] Actualizar `vite.config.js` con plugins MDX
  - [ ] Orden crítico: MDX ANTES que React

- [ ] **Crear componentes custom para MDX**
  - [ ] `<MetricResult />` — Muestra métricas de backtest
  - [ ] `<BugReport />` — Destaca bugs encontrados
  - [ ] `<WarnBox />` — Advertencias sobre riesgo
  - [ ] `<StrategyVerdict />` — Veredicto final

- [ ] **Sistema de carga automática de posts**
  - [ ] `src/lib/posts.js` — Carga todos los `.mdx`
  - [ ] Parsing de frontmatter (title, date, series, episode)
  - [ ] Funciones: `getPost()`, `getPostsByCategory()`, `getPostsBySeries()`

- [ ] **Crear estructura de carpetas**
  ```
  frontend/src/content/
  ├── tutorials/
  │   ├── framework-ep1.mdx
  │   ├── framework-ep2.mdx
  │   └── ...
  └── autopsias/
      ├── luxalgo-analysis.mdx
      └── ...
  ```

- [ ] **Crear páginas del blog**
  - [ ] `pages/Blog.jsx` — Lista todos los posts
  - [ ] `pages/BlogPost.jsx` — Detalle de un post
  - [ ] Filtrado por categoría, serie, tags

- [ ] **Publicar primeros posts** (5+ posts)
  - [ ] 3 posts de tutoriales (Elliott, Wyckoff, Framework)
  - [ ] 1 autopsia (LuxAlgo fail)
  - [ ] 1 bug report

### Estructura de un Post MDX

```mdx
---
title: "Por qué el 99% de los backtests mienten"
subtitle: "In-Sample vs Out-of-Sample"
series: "Framework de Validación"
episode: 1
date: "2026-03-25"
category: "tutorial"
difficulty: "basico"
readingTime: 8
tags: ["backtest", "walk-forward"]
---

# Contenido aquí

<MetricResult trades={137} wr={56.2} pf={1.47} mcP5={0.97} verdict="marginal" />
```

### Entregable

✅ Blog funcional con 5+ posts publicados
- Sistema automático de carga
- Componentes custom funcionando
- Posts con datos reales

### Tiempo estimado: 5-7 días

---

## FASE 3️⃣ — Backend FastAPI (Semana 3)

**Objetivo:** API pública en VPS con HTTPS y WebSocket.

### Checklist

- [ ] **Inicializar proyecto FastAPI**
  ```bash
  cd backend
  pip install fastapi uvicorn python-dotenv httpx
  ```

- [ ] **Crear estructura base**
  ```
  backend/
  ├── main.py               # Servidor principal
  ├── models.py             # Esquemas Pydantic
  ├── database.py           # Conexión a BD
  └── routers/
      ├── portfolio.py
      ├── alerts.py
      ├── strategies.py
      └── webhook.py
  ```

- [ ] **Implementar seguridad**
  - [ ] API Key authentication (`X-API-Key` header)
  - [ ] CORS configurado para GitHub Pages
  - [ ] `.env` con variables sensibles

- [ ] **Crear endpoints públicos** (GET)
  - [ ] `GET /api/portfolio/summary` — Estado del portafolio
  - [ ] `GET /api/strategies` — Lista de estrategias
  - [ ] `GET /api/strategies/{id}` — Detalle de estrategia

- [ ] **Crear endpoints privados** (POST)
  - [ ] `POST /api/alerts/webhook` — Recibe alertas del bot

- [ ] **Implementar WebSocket**
  - [ ] `WS /ws/alerts` — Retransmite alertas en tiempo real
  - [ ] AlertManager para manejar conexiones

- [ ] **Conectar frontend a API**
  - [ ] `src/lib/api.js` — Cliente HTTP
  - [ ] `createAlertWebSocket()` para WebSocket
  - [ ] Dashboard con datos en vivo

- [ ] **Configurar en VPS** (cuando tengas VPS)
  - [ ] Instalar Nginx
  - [ ] Obtener SSL con Certbot
  - [ ] Crear servicio systemd para FastAPI
  - [ ] Configurar proxy Nginx

- [ ] **Variables de entorno**
  ```bash
  API_SECRET_KEY=tu-clave-aleatoria
  TELEGRAM_TOKEN=token
  TELEGRAM_CHAT_ID=chat-id
  DATABASE_URL=sqlite:///./trading.db
  ```

### Entregable

✅ API pública funcionando con HTTPS
- Endpoints accesibles
- WebSocket para alertas en tiempo real
- Frontend conectado

### Tiempo estimado: 5-7 días

---

## FASE 4️⃣ — Bot → API → Web (Semana 4)

**Objetivo:** Flujo completo de alertas en tiempo real.

### Checklist

- [ ] **Crear `alert_sender.py`**
  ```python
  async def send_alert(signal: dict):
      # 1. POST a API
      # 2. Mensaje a Telegram
      # 3. Broadcast a WebSocket
  ```

- [ ] **Conectar bot Wyckoff**
  - [ ] Detectar Spring/UTAD
  - [ ] Llamar a `send_alert()` con parámetros

- [ ] **Implementar en bot MQL5**
  - [ ] Detectar signal
  - [ ] Llamar a Python script
  - [ ] Pasar parámetros (ticker, entry, sl, tp)

- [ ] **Probar flujo completo**
  - [ ] Bot detecta signal
  - [ ] API recibe POST
  - [ ] Dashboard actualiza en tiempo real
  - [ ] Telegram notifica

- [ ] **Métricas en alertas**
  - [ ] PF OOS histórico del sistema
  - [ ] MC P5% histórico
  - [ ] Win Rate esperado
  - [ ] Disclaimer de riesgo

### Entregable

✅ Alertas en tiempo real funcionando
- Bot → API → Dashboard
- Bot → API → Telegram
- WebSocket actualiza en vivo

### Tiempo estimado: 5-7 días

---

## FASE 5️⃣ — Infraestructura (Semana 5)

**Objetivo:** Deploy automático y producción lista.

### Checklist

- [ ] **GitHub Actions**
  - [ ] `.github/workflows/deploy.yml` para frontend
  - [ ] Deploy automático en cada push a main
  - [ ] Secrets configurados (VITE_API_URL)

- [ ] **VPS Setup** (si no lo tienes)
  - [ ] Elegir proveedor (Linode, Hetzner, DigitalOcean)
  - [ ] Instalar nginx
  - [ ] Instalar certbot
  - [ ] Obtener SSL para api.tudominio.com

- [ ] **Systemd para FastAPI**
  - [ ] Crear `/etc/systemd/system/trading-api.service`
  - [ ] `systemctl enable` y `start`
  - [ ] Logs monitoreados

- [ ] **Nginx como proxy**
  - [ ] Configurar reverse proxy a FastAPI
  - [ ] SSL termination
  - [ ] CORS headers

- [ ] **Variables de entorno en producción**
  - [ ] `.env` en VPS (nunca en Git)
  - [ ] GitHub Secrets para CI/CD

- [ ] **Monitoreo**
  - [ ] Logs de FastAPI
  - [ ] Status de API (`curl https://api.tudominio.com/`)
  - [ ] Health checks

### Checklist VPS Completo

```bash
# Instalar dependencias
sudo apt update && sudo apt upgrade
sudo apt install nginx python3-pip certbot python3-certbot-nginx

# Clonar repo y instalar FastAPI
git clone https://github.com/usuario/trading-quant-lab.git
cd trading-quant-lab/backend
pip install -r requirements.txt

# Crear .env
echo "API_SECRET_KEY=..." > .env

# Systemd service
sudo cp infra/systemd/trading-api.service /etc/systemd/system/
sudo systemctl enable trading-api
sudo systemctl start trading-api

# SSL
sudo certbot --nginx -d api.tudominio.com

# Deploy nginx config
sudo cp infra/nginx.conf /etc/nginx/sites-available/api.tudominio.com
sudo systemctl reload nginx
```

### Entregable

✅ Infraestructura de producción lista
- Deploy automático funcionando
- API en VPS con SSL
- Logs y monitoreo

### Tiempo estimado: 3-5 días

---

## FASE 6️⃣ — Comunidad (Semana 6)

**Objetivo:** Discord y Telegram completamente configurados y operativos.

**Referencia completa**: `DOCUMENTACION/especificaciones/COMUNIDAD.md`

### Checklist — Discord

- [ ] **Crear servidor**
  - [ ] Nombre: "Trading Quant Lab"
  - [ ] Descripción clara
  - [ ] Icono/banner del proyecto

- [ ] **Estructura de canales** (ver COMUNIDAD.md para detalles)
  - [ ] Categoría: INFORMACIÓN
    - [ ] #bienvenida (pinned, lectura)
    - [ ] #reglas (pinned, lectura)
    - [ ] #sobre-el-proyecto (pinned)
    - [ ] #roadmap (anuncios)
  - [ ] Categoría: SISTEMAS EN PRODUCCIÓN
    - [ ] #forex-portfolio-live
    - [ ] #btc-wyckoff-alertas
    - [ ] #diario-de-operaciones
    - [ ] #auditoria-mensual
  - [ ] Categoría: LABORATORIO CUANTITATIVO
    - [ ] #experimentos-activos
    - [ ] #backtests-publicados
    - [ ] #autopsias
    - [ ] #codigo-y-github
  - [ ] Categoría: FORMACIÓN
    - [ ] #metodologia-validacion
    - [ ] #diccionario-quant
    - [ ] #errores-comunes
    - [ ] #tutoriales
    - [ ] #preguntas-frecuentes
  - [ ] Categoría: COMUNIDAD
    - [ ] #propuestas-de-estrategia
    - [ ] #debate-mercados
    - [ ] #preguntas
    - [ ] #off-topic
  - [ ] Categoría: MODERACIÓN (solo mods)
    - [ ] #mod-logs
    - [ ] #mod-discussion

- [ ] **Roles**
  - [ ] @owner (tú) — Admin total
  - [ ] @moderadores — Manage messages, timeout, ban
  - [ ] @verificado — Acceso a canales privados
  - [ ] @miembro — Default

- [ ] **Permisos por canal**
  - [ ] #bienvenida → Lectura únicamente
  - [ ] #reglas → Lectura únicamente
  - [ ] #propuestas → Lectura + write
  - [ ] #mod-logs → Moderadores solo

- [ ] **Mensajes iniciales (fijados/pinned)**
  - [ ] #bienvenida (ver template en COMUNIDAD.md)
  - [ ] #reglas (ver template en COMUNIDAD.md)
  - [ ] #sobre-el-proyecto (ver template en COMUNIDAD.md)
  - [ ] #propuestas (formulario estándar de propuestas)

### Checklist — Telegram

- [ ] **Crear grupo/canal**
  - [ ] Nombre: "Trading Quant Lab"
  - [ ] Descripción clara
  - [ ] Avatar del proyecto

- [ ] **Crear canales**
  - [ ] 📢 anuncios (solo admin)
  - [ ] 📊 portafolio-forex-live (bot automático)
  - [ ] 🚨 alertas-wyckoff (bot automático)
  - [ ] 🧪 laboratorio (discusión)
  - [ ] 💬 debate-general (conversación)
  - [ ] ❓ preguntas (soporte)
  - [ ] 📚 recursos (links)

- [ ] **Bot de Alertas**
  - [ ] Crear bot en @BotFather
  - [ ] Obtener token del bot
  - [ ] Obtener chat IDs de canales
  - [ ] Configurar alert_sender.py:
    ```python
    TELEGRAM_TOKEN = "tu-token"
    TELEGRAM_CHAT_ID = "-100123456789"
    ```
  - [ ] Probar envío de alertas
  - [ ] Verificar que llegan con formato correcto

- [ ] **Mensajes iniciales**
  - [ ] Mensaje de bienvenida en descripción
  - [ ] Links útiles (Notion, GitHub, Discord)
  - [ ] Explicación de cada canal

### Checklist — Integración

- [ ] **Alert flow completo**
  - [ ] Bot Wyckoff detecta Spring → alert_sender.py
  - [ ] alert_sender.py → API FastAPI
  - [ ] API → Telegram (automático)
  - [ ] API → Discord (automático, via WebSocket)
  - [ ] API → Dashboard (WebSocket actualiza)

- [ ] **Automatización diaria**
  - [ ] Portfolio resumen postea automáticamente en Discord
  - [ ] Portfolio resumen postea automáticamente en Telegram

- [ ] **Sistema de propuestas**
  - [ ] Formulario pinned en #propuestas
  - [ ] Proceso de votación documentado
  - [ ] Calendario claro (días 1-20 propuestas, 26-30 votación)

### Entregable

✅ Comunidades completamente operativas
- Discord: 11 canales + 4 roles + permisos establecidos
- Telegram: 7 canales + bot de alertas funcionando
- Alert flow completo: bot → API → Telegram + Discord + Dashboard
- Sistema de propuestas implementado
- Mensajes iniciales y templates publicados

### Referencia detallada

👉 Ver `DOCUMENTACION/especificaciones/COMUNIDAD.md` para:
- Descripción completa de cada canal
- Templates de mensajes (bienvenida, reglas, propuestas)
- Configuración de bots
- Flujos de moderación
- Calendario de contenido
- Checklist completo

### Tiempo estimado: 2-3 días

**Desglose**:
- Discord setup: 1 día
- Telegram setup: 1 día
- Bots y automatización: 1 día
- Pruebas y ajustes: medio día

---

## FASE 7️⃣ — Contenido (Semana 7)

**Objetivo:** 10+ posts de alta calidad publicados.

### Checklist

- [ ] **Serie 0: Framework de Validación** (5 posts)
  - [ ] Ep. 1 — In-Sample vs OOS
  - [ ] Ep. 2 — Walk-Forward Validation
  - [ ] Ep. 3 — Monte Carlo
  - [ ] Ep. 4 — Criterio de selección
  - [ ] Ep. 5 — Test de transferibilidad

- [ ] **Autopsias** (3+ posts)
  - [ ] LuxAlgo HTF Bull — Por qué pierde dinero
  - [ ] Wyckoff en ETH — Edge no se transfiere
  - [ ] Elliott Onda C — PF 0.95 OOS

- [ ] **Bug Reports** (2+ posts)
  - [ ] Errores conceptuales en estrategias populares
  - [ ] Bugs encontrados durante backtests

- [ ] **Diccionario Cuantitativo**
  - [ ] 25 términos completados
  - [ ] Página dedicada en blog o wiki

### Entregable

✅ 10+ posts de contenido de alta calidad
- Datos reales en cada post
- Componentes custom funcionando
- Transparencia sobre fracasos

### Tiempo estimado: 5-7 días

---

## FASE 8️⃣ — Lanzamiento (Semana 8)

**Objetivo:** Lanzamiento público oficial.

### Checklist

- [ ] **Anuncios**
  - [ ] Reddit r/algotrading
  - [ ] Twitter/X
  - [ ] LinkedIn
  - [ ] Comunidades quant en español

- [ ] **Verificación final**
  - [ ] Web funciona en GitHub Pages
  - [ ] Blog con 10+ posts
  - [ ] API responde con HTTPS
  - [ ] WebSocket funciona
  - [ ] Discord/Telegram activos

- [ ] **Primera votación comunitaria**
  - [ ] Seleccionar estrategia para testear
  - [ ] Publicar propuestas
  - [ ] Votación en Discord

- [ ] **Publicar primeros resultados**
  - [ ] Auditoría del portafolio Forex
  - [ ] Análisis de la primer estrategia testeada
  - [ ] Post-mortem o success story

### Entregable

✅ Lanzamiento oficial
- Comunidad creciendo
- Content pipeline activo
- Sistema completamente funcional

---

## 📊 Tabla de Progreso

| Fase | Semana | Status | Inicio | Fin | Bloqueadores |
|------|--------|--------|--------|-----|--------------|
| 1 | 1 | ⏳ Próximo | — | — | — |
| 2 | 2 | ⏳ | — | — | Fase 1 ✓ |
| 3 | 3 | ⏳ | — | — | Fase 2 ✓ |
| 4 | 4 | ⏳ | — | — | Fase 3 ✓ |
| 5 | 5 | ⏳ | — | — | Fase 4 ✓ |
| 6 | 6 | ⏳ | — | — | Fase 5 ✓ |
| 7 | 7 | ⏳ | — | — | Fase 6 ✓ |
| 8 | 8 | ⏳ | — | — | Fase 7 ✓ |

---

## 🚨 Dependencias Críticas

```
Fase 1 (Frontend)
    ↓
Fase 2 (Blog MDX)
    ↓
Fase 3 (Backend) + Fase 4 (Bot)
    ↓
Fase 5 (Infraestructura)
    ↓
Fase 6 (Comunidad) + Fase 7 (Contenido)
    ↓
Fase 8 (Lanzamiento)
```

**Nota:** Las Fases 6 y 7 pueden empezar en paralelo desde la Fase 5.

---

## 💡 Tips de Implementación

1. **Empieza simple** — No optimices nada en Fase 1
2. **Hardcodea datos** — JSON es suficiente hasta Fase 3
3. **UI/UX segundario** — Funcionalidad primero
4. **Git frecuentemente** — Un commit por tarea pequeña
5. **Documenta mientras avanzas** — No al final

---

## 🎯 Métricas de Éxito por Fase

| Fase | Métrica de Éxito |
|------|-----------------|
| 1 | Web en GitHub Pages + 3 páginas funcionando |
| 2 | 5+ posts en MDX + componentes custom |
| 3 | API responde en HTTPS + WebSocket activo |
| 4 | Alert completo: bot → API → Telegram → web |
| 5 | Deploy automático en cada push |
| 6 | Discord + Telegram con 50+ miembros |
| 7 | 10+ posts publicados |
| 8 | Primer mes de operación con comunidad activa |

---

## 📞 Contacto y Soporte

**¿Bloqueado en una fase?**
- Revisa `DOCUMENTACION/guias/trading_quant_lab_guia.md` para detalles
- Consulta `DOCUMENTACION/especificaciones/docs/MANUAL.md` para especificaciones
- Abre un issue en GitHub

---

**Versión**: 1.0
**Última actualización**: Marzo 2026
**Estado**: Listo para empezar Fase 1
