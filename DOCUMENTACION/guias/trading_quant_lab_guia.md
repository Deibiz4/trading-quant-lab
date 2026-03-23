# TRADING QUANT LAB
## Guía Maestra del Proyecto
> Roadmap completo + Guía técnica paso a paso — v1.0 | Marzo 2026

---

> **Misión:** Construir la comunidad cuantitativa de trading en español más rigurosa del mercado. Validamos estrategias con metodología estadística real (WFV + Monte Carlo), publicamos los fracasos con el mismo detalle que los éxitos, y exponemos todo el proceso al público.
>
> Lo que nos diferencia: 9 sistemas Forex en producción con historial real, la capacidad de refutar matemáticamente estrategias populares, y una arquitectura técnica propia con API en tiempo real conectada a MT5.

---

## Índice

1. [Posicionamiento y Filosofía](#1-posicionamiento-y-filosofía)
2. [Arquitectura Técnica](#2-arquitectura-técnica)
3. [Roadmap General (8 Semanas)](#3-roadmap-general-8-semanas)
4. [Fase 1 — Frontend Estático](#4-fase-1--frontend-estático)
5. [Fase 2 — Sistema de Blog MDX](#5-fase-2--sistema-de-blog-mdx)
6. [Fase 3 — Backend FastAPI](#6-fase-3--backend-fastapi)
7. [Fase 4 — Bot → API → Web](#7-fase-4--bot--api--web)
8. [Fase 5 — Infraestructura](#8-fase-5--infraestructura)
9. [Estructura de la Comunidad](#9-estructura-de-la-comunidad)
10. [Estrategia de Contenido](#10-estrategia-de-contenido)
11. [Monetización](#11-monetización)
12. [Checklists de Lanzamiento](#12-checklists-de-lanzamiento)

---

## 1. Posicionamiento y Filosofía

### 1.1 Lo que eres

Una comunidad cuantitativa que **cuantifica estrategias de trading y muestra el proceso completo, incluyendo los fracasos**. No eres una sala de señales, no vendes rentabilidades pasadas, no das consejos de inversión.

### 1.2 Tu ventaja competitiva real

- Un framework de validación cuantitativa (WFV + Monte Carlo + transferibilidad) demostrado en producción.
- 9 sistemas Forex en producción con historial real y auditoría mensual pública.
- La capacidad de desmentir matemáticamente estrategias populares: Elliott, LuxAlgo, Wyckoff en crypto.
- Publicas los fracasos con el mismo rigor que los éxitos. Eso es lo que nadie hace.

### 1.3 Lo que NUNCA debes decir

- Rentabilidades pasadas garantizadas.
- "Señales de trading" sin el contexto completo de riesgo y sizing.
- Porcentajes mensuales como promesa.
- Vender cursos antes de tener historial público verificado de al menos 6 meses.

> **Frase de posicionamiento oficial:**
> *"Cuantificamos estrategias y mostramos el proceso completo, incluyendo los fracasos."*
>
> Esta frase es más diferencial y más sostenible que cualquier promesa de señales. Es lo que el 99% de las comunidades de trading no pueden decir honestamente.

---

## 2. Arquitectura Técnica

### 2.1 Stack tecnológico

| Capa | Tecnología y razón |
|------|-------------------|
| Frontend | React + Vite + TailwindCSS |
| Contenido / Blog | MDX — Markdown con componentes React embebidos. Sin base de datos, sin CMS. Git es el historial. |
| Backend / API | FastAPI (Python) + WebSockets. Ya tienes la API local funcionando contra MT5. |
| Base de datos | SQLite para empezar. Migración a PostgreSQL cuando escales. |
| Hosting frontend | GitHub Pages — gratuito, SSL automático, deploy automático con push. |
| Hosting backend | VPS — solo corre FastAPI, Nginx como proxy y SSL via Certbot. |
| Deploy | GitHub Actions — push a `main` lanza el build y deploy automáticamente. |
| Comunidad | Discord (hub principal) + Telegram (alertas en tiempo real). |

### 2.2 Diagrama de arquitectura

```
MT5 / MQL5
     |
     v  (trades, balance, equity, alertas)
FastAPI local (tu API ya existente)
     |
     v  (expuesta públicamente via VPS + Nginx + SSL)
API pública  https://api.tudominio.com
     |________________________
     |                        |
     v                        v
React Frontend             Telegram Bot
(GitHub Pages)             (alertas instantáneas)
     |
     |-- Dashboard en tiempo real (WebSocket)
     |-- Blog MDX (tutoriales, autopsias)
     |-- Diccionario cuantitativo
     |-- Hall of Fame / Cemetery de estrategias
     |-- Portfolio live (auditoría mensual)
```

### 2.3 Estructura de archivos del proyecto

```
trading-quant-lab/
│
├── frontend/                    # React + Vite
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dictionary.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogPost.jsx
│   │   │   └── HallOfFame.jsx
│   │   ├── components/
│   │   │   └── mdx/
│   │   │       ├── MDXComponents.jsx
│   │   │       ├── MetricResult.jsx
│   │   │       ├── BugReport.jsx
│   │   │       ├── WarnBox.jsx
│   │   │       └── StrategyVerdict.jsx
│   │   ├── content/
│   │   │   ├── tutorials/        # .mdx de tutoriales
│   │   │   └── autopsias/        # .mdx de autopsias
│   │   ├── data/
│   │   │   └── strategies.json   # Hall of Fame / Cemetery
│   │   └── lib/
│   │       ├── posts.js          # Carga MDX automáticamente
│   │       └── api.js            # Funciones fetch a FastAPI
│
├── backend/                     # FastAPI (tu API existente)
│   ├── main.py
│   ├── routers/
│   │   ├── portfolio.py
│   │   ├── alerts.py
│   │   ├── strategies.py
│   │   └── webhook.py
│   ├── models.py
│   └── database.py
│
├── bot/                         # Tu código de bots
│   ├── wyckoff_features.py
│   ├── elliott_features.py
│   └── alert_sender.py          # NUEVO: POST a API + Telegram
│
└── infra/
    ├── nginx.conf
    └── .github/workflows/deploy.yml
```

---

## 3. Roadmap General (8 Semanas)

| Fase | Semana | Objetivos Principales | Entregables |
|------|--------|----------------------|-------------|
| **FASE 1** | Semana 1 | Frontend estático: Landing, Diccionario, Hall of Fame con datos hardcodeados en JSON | Web estática funcional publicada en GitHub Pages |
| **FASE 2** | Semana 2 | Sistema de blog MDX: migrar tutoriales existentes (Elliott, Wyckoff, LuxAlgo) a archivos `.mdx` con componentes custom | 5+ posts publicados con sistema automático de carga |
| **FASE 3** | Semana 3 | Backend FastAPI: exponer API local en VPS, configurar Nginx + SSL, seguridad con API Key, conectar frontend a la API | API pública funcionando con HTTPS |
| **FASE 4** | Semana 4 | Puente Bot → API → Web: `alert_sender.py` envía POST a API, WebSocket retransmite alertas al frontend y Telegram simultáneamente | Flujo completo bot → web → telegram en tiempo real |
| **FASE 5** | Semana 5 | Infraestructura y deploy: GitHub Actions para deploy automático, variables de entorno, CORS, systemd para FastAPI en VPS | Deploy automático al hacer push a main |
| **FASE 6** | Semana 6 | Comunidad: crear Discord y Telegram con estructura de canales, mensajes de bienvenida, formulario de propuestas, sistema de votación mensual | Comunidades abiertas al público |
| **FASE 7** | Semana 7 | Contenido inicial: publicar las 5 series ya completadas (Elliott, Wyckoff, LuxAlgo, híbrido, timeframes) como posts MDX | 10+ posts de contenido de alta calidad listos |
| **FASE 8** | Semana 8 | Lanzamiento público: anuncio en redes, apertura de comunidades, primera votación de estrategia comunitaria | Lanzamiento oficial |

---

## 4. Fase 1 — Frontend Estático

**Objetivo:** Tener una web pública funcional con la landing page, el diccionario cuantitativo y la tabla Hall of Fame / Cemetery. Todo con datos hardcodeados en JSON. Sin backend, sin complejidad.

### Paso 1.1 — Inicializar el proyecto

```bash
npm create vite@latest trading-quant-lab -- --template react
cd trading-quant-lab
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
```

### Paso 1.2 — Configurar GitHub Pages

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production'
    ? '/trading-quant-lab/'   // nombre exacto de tu repo
    : '/',
})
```

### Paso 1.3 — Configurar el deploy automático

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install and Build
        run: |
          npm install
          npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Paso 1.4 — Estructura de rutas en App.jsx

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dictionary from './pages/Dictionary'
import HallOfFame from './pages/HallOfFame'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/diccionario" element={<Dictionary />} />
        <Route path="/resultados"  element={<HallOfFame />} />
        <Route path="/blog"        element={<Blog />} />
        <Route path="/blog/:slug"  element={<BlogPost />} />
        <Route path="/dashboard"   element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Paso 1.5 — Hall of Fame / Cemetery en JSON

```json
// src/data/strategies.json
[
  {
    "name": "Wyckoff Spring",
    "asset": "BTC/USDT",
    "timeframe": "H4",
    "pf_oos": 1.47,
    "mc_p5": 0.97,
    "win_rate": 35,
    "trades": 137,
    "verdict": "marginal",
    "date": "2026-03",
    "note": "Edge demostrado pero win rate bajo requiere disciplina en rachas"
  },
  {
    "name": "LuxAlgo Bull HTF",
    "asset": "BTC/USDT",
    "timeframe": "H4",
    "pf_oos": 1.06,
    "mc_p5": 0.73,
    "win_rate": 35,
    "trades": 89,
    "verdict": "descartado",
    "date": "2026-03",
    "note": "El indicador más vendido de TradingView no tiene edge OOS en BTC"
  }
]
```

---

## 5. Fase 2 — Sistema de Blog MDX

**Objetivo:** Publicar tutoriales y autopsias como posts MDX. Añadir un post nuevo = crear un archivo `.mdx` y hacer push. Sin panel de administración, sin base de datos.

### Paso 2.1 — Instalar dependencias

```bash
npm install @mdx-js/rollup @mdx-js/react
npm install remark-frontmatter remark-mdx-frontmatter
npm install rehype-highlight rehype-slug
npm install gray-matter reading-time
```

### Paso 2.2 — Configurar Vite para MDX

```js
// vite.config.js (versión completa con MDX)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

export default defineConfig({
  plugins: [
    // MDX ANTES que React — orden crítico
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight, rehypeSlug],
    }),
    react()
  ],
  base: process.env.NODE_ENV === 'production' ? '/trading-quant-lab/' : '/',
})
```

### Paso 2.3 — Estructura del frontmatter

Cada archivo `.mdx` empieza con este bloque YAML de metadatos:

```mdx
---
title: "Por qué el 99% de los backtests mienten"
subtitle: "In-Sample vs Out-of-Sample"
series: "Framework de Validación"
episode: 1
date: "2026-03-15"
category: "tutorial"       # tutorial | autopsia | bug-report
difficulty: "basico"       # basico | intermedio | avanzado
readingTime: 8
tags: ["backtest", "walk-forward", "validacion"]
---

# Aquí empieza el contenido en Markdown

Puedes usar componentes React dentro del MDX:

<MetricResult trades={137} wr={56.2} pf={1.47} mcP5={0.97} verdict="marginal" />

<BugReport severity="critical" title="Stop Loss dimensional incorrecto">
  Descripción del bug encontrado durante el backtest...
</BugReport>
```

### Paso 2.4 — Sistema de carga automática de posts

```js
// src/lib/posts.js
const tutorialModules = import.meta.glob('../content/tutorials/*.mdx', { eager: true })
const autopsiaModules = import.meta.glob('../content/autopsias/*.mdx', { eager: true })

function parseModule(path, mod) {
  const slug = path.split('/').pop().replace('.mdx', '')
  return { slug, component: mod.default, frontmatter: mod.frontmatter }
}

export const allPosts = [
  ...Object.entries(tutorialModules).map(([p, m]) => parseModule(p, m)),
  ...Object.entries(autopsiaModules).map(([p, m]) => parseModule(p, m)),
].sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))

export const getPost = (slug) => allPosts.find(p => p.slug === slug)
export const getPostsByCategory = (cat) => allPosts.filter(p => p.frontmatter.category === cat)
export const getPostsBySeries = (series) => allPosts
  .filter(p => p.frontmatter.series === series)
  .sort((a, b) => a.frontmatter.episode - b.frontmatter.episode)
```

### Paso 2.5 — Flujo para publicar un post nuevo

Una vez configurado, publicar un tutorial nuevo son 3 pasos:

1. Crear el archivo: `touch src/content/tutorials/wyckoff-ep2.mdx`
2. Escribir el frontmatter y el contenido usando los componentes custom.
3. `git add . && git commit -m "add: Wyckoff Ep.2" && git push`

GitHub Actions lanza el build automáticamente. El post aparece en la web en 2-3 minutos.

---

## 6. Fase 3 — Backend FastAPI

**Objetivo:** Exponer tu API local (ya conectada a MT5) de forma pública y segura en el VPS.

### Paso 3.1 — Seguridad con API Key

```python
# Añadir a tu main.py
from fastapi import Security, HTTPException, Depends
from fastapi.security import APIKeyHeader
import os

API_KEY = os.environ['API_SECRET_KEY']  # nunca hardcodeado
api_key_header = APIKeyHeader(name='X-API-Key')

async def verify_key(key: str = Security(api_key_header)):
    if key != API_KEY:
        raise HTTPException(status_code=403)
    return key

# Endpoint público (cualquiera puede leer)
@app.get('/api/portfolio/summary')
async def portfolio_summary(): ...

# Endpoint privado (solo el bot puede escribir)
@app.post('/api/alerts/webhook', dependencies=[Depends(verify_key)])
async def receive_alert(alert: AlertSchema): ...
```

### Paso 3.2 — Configurar CORS para GitHub Pages

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        'https://tuusuario.github.io',
        'https://tudominio.com'  # si tienes dominio propio
    ],
    allow_methods=['GET', 'POST'],
    allow_headers=['*'],
)
```

### Paso 3.3 — Deploy del backend en VPS

```bash
# 1. Instalar dependencias
pip install fastapi uvicorn httpx python-dotenv

# 2. Crear archivo .env con secretos
echo 'API_SECRET_KEY=tu-clave-larga-y-aleatoria' > .env

# 3. Crear servicio systemd
# /etc/systemd/system/trading-api.service

[Unit]
Description=Trading Quant Lab API
After=network.target

[Service]
User=tu-usuario
WorkingDirectory=/ruta/a/tu/backend
EnvironmentFile=/ruta/a/tu/backend/.env
ExecStart=/usr/bin/uvicorn main:app --host 127.0.0.1 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target

# 4. Activar el servicio
systemctl enable trading-api
systemctl start trading-api
```

### Paso 3.4 — Nginx + SSL

```nginx
server {
    listen 80;
    server_name api.tudominio.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name api.tudominio.com;

    ssl_certificate /etc/letsencrypt/live/api.tudominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.tudominio.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";  # para WebSockets
        proxy_set_header Host $host;
    }
}

# Obtener SSL gratuito:
# certbot --nginx -d api.tudominio.com
```

---

## 7. Fase 4 — Bot → API → Web

**Objetivo:** Cuando el bot detecta un Spring en BTC, dispara una sola acción que actualiza el dashboard en tiempo real y envía el mensaje a Telegram simultáneamente.

### Paso 4.1 — WebSocket en FastAPI

```python
from fastapi import WebSocket
from typing import List
import asyncio

class AlertManager:
    def __init__(self):
        self.connections: List[WebSocket] = []

    async def connect(self, ws: WebSocket):
        await ws.accept()
        self.connections.append(ws)

    async def broadcast(self, data: dict):
        for ws in self.connections:
            try:
                await ws.send_json(data)
            except:
                self.connections.remove(ws)

manager = AlertManager()

@app.websocket('/ws/alerts')
async def websocket_alerts(ws: WebSocket):
    await manager.connect(ws)
    try:
        while True:
            await asyncio.sleep(1)
    except:
        manager.connections.remove(ws)

@app.post('/api/alerts/webhook', dependencies=[Depends(verify_key)])
async def receive_alert(alert: AlertSchema):
    await manager.broadcast(alert.dict())  # retransmite a todos los clientes web
    return {'status': 'ok'}
```

### Paso 4.2 — alert_sender.py en el bot

```python
# bot/alert_sender.py
import httpx
import asyncio
import os

API_URL = 'https://api.tudominio.com/api/alerts/webhook'
API_KEY = os.environ['API_SECRET_KEY']
TELEGRAM_TOKEN = os.environ['TELEGRAM_TOKEN']
TELEGRAM_CHAT_ID = os.environ['TELEGRAM_CHAT_ID']

async def send_alert(signal: dict):
    async with httpx.AsyncClient() as client:
        # 1. Notifica a la API (actualiza dashboard web)
        await client.post(
            API_URL,
            json=signal,
            headers={'X-API-Key': API_KEY}
        )
        # 2. Manda mensaje a Telegram
        mensaje = f"""
🚨 ALERTA WYCKOFF SPRING — {signal['ticker']} {signal['timeframe']}

Entrada: ${signal['entry']:.2f}
Stop Loss: ${signal['sl']:.2f} ({signal['atr_mult']} ATR)
Target: ${signal['tp']:.2f}

PF OOS histórico: 1.47 | MC P5%: 0.97
Riesgo recomendado: máximo 1% del capital.
No es una recomendación de inversión.
"""
        await client.post(
            f'https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage',
            json={'chat_id': TELEGRAM_CHAT_ID, 'text': mensaje}
        )
```

### Paso 4.3 — Consumir la API desde el frontend

```js
// src/lib/api.js
const API_BASE = import.meta.env.VITE_API_URL  // https://api.tudominio.com

export async function getPortfolioSummary() {
  const res = await fetch(`${API_BASE}/api/portfolio/summary`)
  return res.json()
}

export async function getStrategies() {
  const res = await fetch(`${API_BASE}/api/strategies`)
  return res.json()
}

export function createAlertWebSocket() {
  const wsUrl = API_BASE.replace('https', 'wss')
  return new WebSocket(`${wsUrl}/ws/alerts`)
}

// Guardar la URL como secreto en GitHub:
// Settings > Secrets > VITE_API_URL = https://api.tudominio.com
```

---

## 8. Fase 5 — Infraestructura

### Checklist completo del VPS

- [ ] Instalar Nginx: `sudo apt install nginx`
- [ ] Instalar Certbot: `sudo apt install certbot python3-certbot-nginx`
- [ ] Obtener SSL: `sudo certbot --nginx -d api.tudominio.com`
- [ ] Copiar `nginx.conf` y recargar: `sudo systemctl reload nginx`
- [ ] Crear servicio systemd para FastAPI (ver Paso 3.3)
- [ ] Verificar que la API responde: `curl https://api.tudominio.com/api/portfolio/summary`
- [ ] Configurar renovación automática del SSL: `sudo certbot renew --dry-run`

### Secretos que debes guardar en GitHub Actions

| Secreto | Valor |
|---------|-------|
| `VITE_API_URL` | URL pública de tu API, ej: `https://api.tudominio.com` |
| `GITHUB_TOKEN` | Automático, lo provee GitHub. No necesitas configurarlo. |

### Verificación final

- [ ] `curl https://api.tudominio.com/api/portfolio/summary` devuelve JSON
- [ ] La web en GitHub Pages carga sin errores en consola
- [ ] El Dashboard muestra datos reales de la API
- [ ] Hacer un push a `main` dispara el deploy automático en GitHub Actions
- [ ] El bot dispara una alerta de prueba y aparece en Telegram y en la web
- [ ] WebSocket conecta correctamente (sin errores de CORS)

---

## 9. Estructura de la Comunidad

### 9.1 Discord (hub principal)

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
   # autopsias  ← sistemas que fallaron y por qué

── FORMACIÓN
   # metodologia-validacion
   # errores-comunes
   # biblioteca-recursos

── COMUNIDAD
   # propuestas-de-estrategia  ← CANAL CLAVE
   # debate-mercados
   # preguntas
   # off-topic
```

### 9.2 Telegram (alertas y canal rápido)

- **Anuncios:** comunicados oficiales del proyecto.
- **Señales BTC Spring:** alertas automáticas del bot H4. Solo el bot puede escribir.
- **Laboratorio:** backtests y experimentos en curso.
- **Portfolio Forex:** seguimiento de los 9 sistemas con auditoría mensual.
- **Debate general:** conversación de la comunidad.

### 9.3 Sistema de propuestas de estrategia

El canal `#propuestas-de-estrategia` usa este formulario estándar. Fíjalo como mensaje pinneado:

```
NOMBRE DE LA ESTRATEGIA:
FUENTE (libro, indicador, trader, YouTube):
LÓGICA EN UNA FRASE:
PAR / ACTIVO SUGERIDO:
TIMEFRAME:
¿POR QUÉ CREES QUE TIENE EDGE?

Normas:
- Sin formulario completo, la propuesta no se considera.
- Votación mensual: la comunidad vota entre las propuestas válidas del mes.
- El autor testea la ganadora y publica el proceso completo.
- El resultado va al Hall of Fame o al Cemetery con causa de muerte documentada.
```

---

## 10. Estrategia de Contenido

### 10.1 Calendario de publicación

| Frecuencia | Contenido |
|------------|-----------|
| **Diario** | Estado del portfolio Forex (trades abiertos, stops). Alertas automáticas del bot (con parámetros visibles). Una observación breve de mercado, sin predicción. |
| **Semanal** | Diario de operaciones cerradas: resultado real + razonamiento en el momento de entrada + análisis post-trade. **Incluir los perdedores con el mismo detalle que los ganadores.** |
| **Mensual** | Auditoría del portfolio: PF real del mes, drawdown, desviación respecto al backtest. Post-mortem de un sistema: análisis profundo de algo que falló o underperformó. |

### 10.2 Series de tutoriales planificadas

#### Serie A: De Idea a Backtest (serie principal)
Cada episodio parte de una estrategia (tuya o sugerida) y la somete al proceso completo. Ya tienes 5 series listas en texto: Elliott, Wyckoff, LuxAlgo, híbrido, timeframes.

1. La idea y su lógica teórica.
2. Traducción a código (`elliott_features`, `wyckoff_features`...).
3. In-Sample — los números bonitos.
4. Walk-Forward — donde muere el 80% de las estrategias.
5. Monte Carlo — el veredicto final.
6. Conclusión y qué rescatamos.

#### Serie B: Bug Report (corta, alto impacto)
Cada vez que encuentres un bug conceptual en una estrategia popular, lo documentas como episodio breve. Muy compartible porque la gente reconoce haber cometido el mismo error.

#### Serie C: El Diccionario Honesto (evergreen)
25 términos en 4 niveles de dificultad, cada uno con datos reales de tus backtests. Ya está redactado. Solo hay que publicarlo como posts MDX.

#### Serie D: Autopsias Cuantitativas
- **LuxAlgo HTF:** por qué el indicador más vendido de TradingView pierde dinero en BTC OOS.
- **Wyckoff en ETH:** por qué el edge no se transfiere entre activos.
- **El teorema del timeframe:** por qué H1 destruye el edge que H4 captura.
- **La Onda C:** PF 0.95 durante 8 años mientras el manual la garantiza como "segura".

### 10.3 La regla de credibilidad

> Publica el percentil 5% del Monte Carlo junto con el PF medio, **siempre**.
>
> Cuando un sistema underperforma respecto al backtest, explícalo públicamente.
>
> El 30% del contenido son análisis de pérdidas y fracasos con explicación rigurosa.
>
> La comunidad de trading está saturada de gente que solo muestra ganadores. Un feed donde se publican los fracasos con el mismo rigor es lo más atractivo para el perfil exacto de persona que quieres en la comunidad.

---

## 11. Monetización

Opciones ordenadas por integridad, de menor a mayor fricción:

| Modelo | Descripción |
|--------|-------------|
| **Nivel 0 — Gratuito total** | Comunidad completamente abierta. Objetivo: construir audiencia y reputación. Útil si el horizonte es captación de fondos. |
| **Nivel 1 — Freemium** | FREE: metodología, autopsias, formación, diccionario. PREMIUM: diario de operaciones en tiempo real + alertas automáticas del bot. |
| **Nivel 2 — Membresía plana** | Acceso completo por suscripción mensual. Requiere historial público verificable de al menos 6 meses antes de activarlo. |

> **Lo que NUNCA debes monetizar prematuramente:**
> - No vender cursos antes de 6 meses de historial público verificado.
> - No ofrecer señales sin contexto completo de riesgo y sizing.
> - No hacer promesas de rentabilidad mensual de ningún tipo.
>
> La credibilidad tarda meses en construirse y segundos en destruirse. La monetización es la consecuencia de la credibilidad, no el objetivo inicial.

---

## 12. Checklists de Lanzamiento

### Checklist Técnico

- [ ] Repo GitHub creado con la estructura de carpetas correcta.
- [ ] Vite configurado con MDX, TailwindCSS y React Router.
- [ ] GitHub Actions configurado para deploy automático a GitHub Pages.
- [ ] Secret `VITE_API_URL` configurado en GitHub Settings.
- [ ] FastAPI local migrada al VPS con systemd.
- [ ] Nginx configurado como proxy para la API.
- [ ] SSL configurado con Certbot para el subdominio de la API.
- [ ] CORS configurado en FastAPI para permitir GitHub Pages.
- [ ] API Key añadida a los endpoints privados.
- [ ] WebSocket funcionando y probado desde el frontend.
- [ ] `alert_sender.py` conectado al bot Wyckoff.
- [ ] Flujo completo probado: bot → API → Telegram y web.

### Checklist de Contenido

- [ ] Hall of Fame / Cemetery poblado con los 10 sistemas testeados en JSON.
- [ ] Diccionario completo publicado (25 términos, 4 niveles).
- [ ] Al menos 3 posts de tutoriales publicados antes del lanzamiento.
- [ ] Al menos 1 autopsia completa publicada.
- [ ] Mensaje de bienvenida redactado para Discord y Telegram.
- [ ] Formulario de propuestas publicado como mensaje fijado en Discord.
- [ ] Frase de posicionamiento en la web y en la bio de Discord/Telegram.

### Checklist de Comunidad

- [ ] Servidor Discord creado con todos los canales de la estructura.
- [ ] Canal de Telegram creado para alertas automáticas del bot.
- [ ] Rol de bienvenida automático configurado en Discord.
- [ ] Reglas de la comunidad publicadas.
- [ ] Sistema de propuestas explicado en el canal correspondiente.
- [ ] Primera votación de estrategia comunitaria programada para el mes siguiente al lanzamiento.

---

*Trading Quant Lab — Guía Maestra v1.0 — Marzo 2026*
