# 🤝 Organización de Comunidad — Trading Quant Lab

**Discord + Telegram — Adaptación de estructura existente + nuevos canales**

---

## 📋 Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Discord — Estructura Adaptada](#discord--estructura-adaptada)
3. [Mapeo de Canales Existentes](#mapeo-de-canales-existentes)
4. [Nuevos Canales Recomendados](#nuevos-canales-recomendados)
5. [Telegram — Canales y Bots](#telegram--canales-y-bots)
6. [Roles y Permisos](#roles-y-permisos)
7. [Configuración mee6](#configuración-mee6)
8. [Templates de Mensajes](#templates-de-mensajes)
9. [Bots y Automatización](#bots-y-automatización)
10. [Flujos de Moderación](#flujos-de-moderación)

---

## Resumen Ejecutivo

### ¿Qué hacer?

Tu servidor **Phoenix Trading** ya tiene estructura:
- ✅ Staff, Sugerencias, Verificación, Reglas
- ✅ 4 categorías: INFORMACIÓN, GENERAL, MERCADO, ANÁLISIS PHOENIX
- ✅ mee6 bot comprado (ahorra configuración)

**Plan de Integración**:
1. ✅ **Mantener**: Toda estructura existente (sin disrupciones)
2. ✅ **Repurposar**: #sugerencias → propuestas de estrategia (con votación)
3. ✅ **Agregar**: 6 canales nuevos en 2 categorías (Opción B recomendada)
4. ✅ **Configurar**: mee6 + 2 webhooks Discord + 1 bot Telegram

### Nuevos Canales (Opción B — Recomendado)

```
📊 SISTEMAS EN PRODUCCIÓN (NUEVA CATEGORÍA)
├─ #forex-portfolio-live        (automático diario)
├─ #btc-wyckoff-alertas         (automático en tiempo real)
├─ #diario-de-operaciones       (análisis manual)
└─ #auditoria-mensual           (resumen mensual pinned)

🧪 LABORATORIO CUANTITATIVO (NUEVA CATEGORÍA)
├─ #experimentos-activos        (estrategias en testing)
├─ #backtests-publicados        (resultados finales)
├─ #metodologia-validacion      (educación)
└─ #codigo-y-github             (PRs y source)
```

**Diferencia clave**: #diccionario-quant, #propuestas, #debate-mercados pueden ir en GENERAL existente (no ocupan nuevas categorías)

### Paso a Paso (10 días)

| Día | Tarea | Tiempo |
|-----|-------|--------|
| **1-2** | Crear 8 canales nuevos + categorías | 1h |
| **3-4** | Configurar mee6 (autoroles, logs) | 1h |
| **5-7** | Configurar webhooks + bots (alert_sender.py, APScheduler) | 3h |
| **8** | Templates de bienvenida, reglas, propuestas | 1h |
| **9** | Testing de alertas y flujos automáticos | 1h |
| **10** | Lanzamiento oficial + primeras invitaciones | 30m |

**Total**: ~8 horas de configuración (pueden ser 2-3 sesiones)

### Tecnología Involucrada

- **mee6**: Autoroles, logs, estadísticas (ya comprado ✅)
- **Discord Webhooks**: #forex-portfolio-live y #btc-wyckoff-alertas (nativo)
- **Telegram Bot**: @trading_quant_lab_bot (crear con @BotFather)
- **Python Scripts**: alert_sender.py (POST a API con alertas)
- **FastAPI**: APScheduler job (publicar portfolio diario)

### Beneficio

Tu servidor crece con estructura **profesional y automatizada**:
- 📊 Estado del portafolio se publica solo (sin trabajo manual)
- 🚨 Alertas llegan automáticas a Discord + Telegram
- 🗳️ Votaciones se hacen con reacciones (mee6 cuenta automático)
- 📔 Historial completo de trades y backtests

---

---

## Discord — Estructura Adaptada

### Visión General

**Servidor Discord**: Tu servidor existente (Phoenix Trading)
**Propósito**: Hub principal de la comunidad cuantitativa
**Audiencia**: Traders cuantitativos, desarrolladores, investigadores
**Moderadores**: Tú + volunteers
**Bot Existente**: mee6 (ya comprado y configurado)

### Estrategia de Adaptación

✅ **Mantener**: Estructura actual (Staff, INFORMACIÓN, GENERAL, MERCADO, ANÁLISIS PHOENIX)
✅ **Repurposar**: Algunos canales existentes para Trading Quant Lab
✅ **Agregar**: Mínimo 3 nuevas categorías críticas
✅ **Integrar**: Bots automáticos en canales existentes

---

## Mapeo de Canales Existentes

### ✅ Canales a Conservar y Repurposar

#### Top Level (Sin categoría)
```
✅ #staff              → Mantener para staff/mods
✅ #sugerencias        → Convertir en propuestas-de-estrategia (con votación)
✅ #verificacion       → Mantener (auto-roles con mee6)
✅ #reglas             → Mantener (agregar reglas de TQL)
✅ #mensaje-bienvenida → Actualizar con intro de TQL
✅ #server-stats       → Configurar mee6 para mostrar estadísticas TQL
```

#### INFORMACIÓN (8 canales)
```
✅ Mantener nombre: INFORMACIÓN (perfecto para Trading Quant Lab)

Sugeridos a agregar/usar:
├─ #anuncios           → Anuncios generales + actualizaciones de Fase
├─ #sobre-el-proyecto  → Descripción TQL filosofía + metodología
├─ #roadmap            → Timeline del proyecto (Fase 1-8)
├─ #diccionario-quant  → Términos con ejemplos (25 términos)
└─ [otros existentes]  → Mantener para contexto local
```

#### GENERAL (10 canales)
```
✅ Mantener nombre: GENERAL

Sugeridos a reutilizar/agregar:
├─ #general            → Conversación libre (mantener)
├─ #preguntas          → Soporte específico para dudas
├─ #debate-mercados    → Análisis técnico sin predicciones
├─ #off-topic          → Memes y temas no relacionados
└─ [otros existentes]  → Mantener para actividades locales
```

#### MERCADO (20+ canales)
```
✅ Mantener: Tu estructura actual (Chat Forex, Cryptos, Acciones, etc)
   Este es contexto local importante, no tocar

⚠️ NOTA: Los análisis de estrategias Trading Quant Lab van en
   categoría nueva, NO en MERCADO (para evitar confusión con
   trading local vs análisis de laboratorio)
```

#### ANÁLISIS PHOENIX (existente)
```
✅ Mantener: Tu estructura de análisis de usuarios
   Renombrar a: ANÁLISIS Y COMUNIDAD (para TQL también)

   Agregar:
   ├─ #autopsias         → Análisis de por qué fracasaron estrategias
   ├─ #backtests-publicados (opcional, ver abajo)
   └─ [tus análisis]     → Mantener
```

---

## Nuevos Canales Recomendados

### Opción A: MÍNIMO (3 nuevos canales)
Ideal si tienes espacio limitado:

```
🚀 LABORATORIO QUANT (NUEVA CATEGORÍA)
├─ #forex-portfolio-live     (alertas diarias automáticas)
├─ #alertas-wyckoff         (alertas del bot en tiempo real)
└─ #experimentos            (estrategias en backtest)
```

### Opción B: RECOMENDADO (6 nuevos canales)
Mejor estructura para Trading Quant Lab:

```
📊 SISTEMAS EN PRODUCCIÓN (NUEVA CATEGORÍA)
├─ #forex-portfolio-live     (estado diario automático)
├─ #btc-wyckoff-alertas      (alertas en tiempo real)
├─ #diario-de-operaciones    (análisis de trades)
└─ #auditoria-mensual        (resumen mensual)

🧪 LABORATORIO CUANTITATIVO (NUEVA CATEGORÍA)
├─ #experimentos-activos     (estrategias en testing)
├─ #backtests-publicados     (resultados finales + blog)
├─ #metodologia              (WFV, MC, transferibilidad)
└─ #codigo-y-github          (PRs, issues, source)
```

### Opción C: COMPLETO (crear carpeta separada)
Si tu comunidad crece mucho:

```
Crear servidor secundario: "Trading Quant Lab Lab"
├─ Copiar estructura Opción B
├─ Mantener servidor principal para trading local
└─ Hacer bridge con Discord webhooks
```

**RECOMENDACIÓN**: Opción B (costo bajo, beneficio alto)

---

---

## Descripción Detallada de Canales

### ✏️ Canales a Modificar Usando Existentes

#### #mensaje-bienvenida (Top Level)
**Cambio**: Actualizar con intro de Trading Quant Lab
- Mantener estructura existente (personal del servidor)
- Agregar párrafo sobre TQL (ver templates abajo)
- Dejar claro: esto es laboratorio cuantitativo, no signals

#### #reglas (Top Level)
**Cambio**: Agregar reglas específicas de TQL
- Mantener reglas locales
- Agregar "SECCIÓN TRADING QUANT LAB" (ver templates)
- Enfatizar: reproducibilidad, datos, contexto de riesgo

#### #sugerencias (Top Level)
**Cambio**: Convertir en #propuestas-estrategia
- Reutilizar para propuestas TQL
- Agregar template de propuesta (ver templates)
- Votación automática con reacciones mee6

#### #server-stats (Top Level)
**Cambio**: Agregar estadísticas TQL
- Mantener stats del servidor
- Bot publica: trades realizados, estrategias testeadas, etc.

#### INFORMACIÓN → #diccionario-quant
**Cambio**: Agregar canal a categoría existente
- Crear nuevo canal o repurposar existente
- 25 términos con ejemplos reales
- Actualizar mensualmente

#### GENERAL → #propuestas-debate
**Cambio**: Usar para votaciones de comunidad
- Proposiciones de estrategias a testear
- Votación transparente
- Resultados públicos

---

### 📊 NUEVOS CANALES (Opción B Recomendada)

#### SISTEMAS EN PRODUCCIÓN (NUEVA CATEGORÍA)

**#forex-portfolio-live** (actualización diaria automática)
- **Contenido**: Estado diario de 9 pares Forex
- **Formato**:
  ```
  📊 PORTAFOLIO FOREX — Día 23/03/2026

  Balance: $10,000
  Equity: $10,150
  PnL: +$150 (+1.5%)
  Drawdown: 2.1%

  Trades abiertos:
  ✅ EURUSD H4: +45 pips (SL 50 pips)
  ✅ GBPUSD H4: +20 pips (SL 60 pips)

  Últimos trades:
  ✅ AUDUSD: +50 pips
  ❌ USDJPY: -30 pips
  ```
- **Frecuencia**: Diario (después del cierre de sesión)
- **Autor**: Bot automático (APScheduler + FastAPI)
- **Importante**: Solo lectura, solo admin puede escribir

**#btc-wyckoff-alertas** (solo alertas del bot en tiempo real)
- **Contenido**: Alertas automáticas del bot Wyckoff
- **Formato**:
  ```
  🚨 ALERTA WYCKOFF SPRING — BTC/USDT H4

  Entrada: $67,500
  Stop Loss: $66,800 (1.5 ATR)
  Target: $69,000

  Parámetros: LKB=30, Climax=2.0x
  PF OOS: 1.47 (107 trades)
  MC P5%: 0.97

  ⚠️ Máximo riesgo: 1% del capital
  ⚠️ No es recomendación de inversión
  ```
- **Frecuencia**: Cuando el bot detecta señal
- **Autor**: Bot automático (alert_sender.py)
- **Importante**: Solo lectura, webhooks automáticos

**#diario-de-operaciones** (análisis de trades)
- **Contenido**: Trades cerrados con análisis detallado
- **Incluir**: Ganadores Y perdedores con contexto igual
- **Formato**:
  ```
  ✅ EURUSD H4: +120 pips
  Entrada: 1.0950 (Spring detectado)
  Salida: 1.1070 (Target hit)
  Razonamiento: Climax de venta clara, spring confirmado

  ❌ USDJPY H4: -80 pips
  Entrada: 155.30 (Spring falso)
  Salida: SL hit en 154.50
  Qué salió mal: Climax débil antes del spring
  Lección: Necesita validación adicional (MA 200)
  ```
- **Frecuencia**: Cuando se cierren trades importantes
- **Autor**: Tú + moderadores

**#auditoria-mensual** (pinned, solo lectura)
- **Contenido**: Resumen mensual del portafolio
- **Incluir**: PF real vs histórico, drawdown, análisis, cambios
- **Frecuencia**: 1° del mes siguiente
- **Autor**: Tú (admin)

---

#### 🧪 LABORATORIO CUANTITATIVO (NUEVA CATEGORÍA)

**#experimentos-activos** (discusión de estrategias en testing)
- Estrategias siendo testeadas actualmente
- Progreso parcial del backtest
- Preguntas durante desarrollo
- Links a código (branches en GitHub)

**#backtests-publicados** (anuncios de resultados finales)
- Resultados completos de experimentos
- Links a análisis en blog
- Hall of Fame / Cemetery actualizado
- Métricas finales: PF OOS, MC, trades, drawdown

**#metodologia-validacion** (educación técnica)
- Explicaciones sobre WFV, Monte Carlo, transferibilidad
- Links a posts del blog (Fase 2)
- Preguntas sobre metodología bienvenidas
- Papers y referencias académicas

**#codigo-y-github** (desarrollo y PRs)
- Links a repositorio GitHub completo
- PRs abiertos y bajo review
- Issues importantes
- Preguntas sobre implementación

---

### 📖 CANALES EDUCATIVOS (Reutilizar de GENERAL o crear)

**#diccionario-quant** (en INFORMACIÓN)
- Definición de 25 términos clave
- Ejemplos con datos reales (de backtests)
- Referencias a posts educativos
- Actualización mensual

---

---

## Configuración mee6

### Ventajas del Bot Existente

Ya tienes mee6 comprado, esto es excelente porque:
- ✅ Autoroles automáticos (verificación)
- ✅ Logs de moderación
- ✅ Estadísticas del servidor
- ✅ Reacciones para votaciones
- ✅ Mensajes automáticos bienvenida
- ✅ Nivel de usuarios

### Configuración Recomendada para TQL

#### 1. Autoroles en #verificacion
```
Agrega reacción → Automáticamente da rol @miembro

Ejemplo:
"React con ✅ para aceptar reglas y entrar al servidor"
Reacción ✅ → rol @miembro
```

#### 2. Estadísticas Automáticas en #server-stats
```
Configura mensajes que se actualicen cada 1 hora:
- Total de miembros
- Nuevos miembros esta semana
- Canales más activos
- Estrategias testeadas (editable manualmente)
- Sistemas en producción (editable)
```

#### 3. Propuestas con Votación en #sugerencias
```
Cada propuesta de estrategia:
- Texto del formato (ver templates abajo)
- Reacciones: 👍 (sí) y 👎 (no)
- mee6 cuenta automáticamente
- Anuncio de ganadora mes siguiente
```

#### 4. Roles de Moderación
```
Agregar rol @moderador en mee6:
- Can timeout members
- Can ban members
- Can manage messages
- Access to #mod-logs
```

#### 5. Permisos por Canal (Manual en Discord)
```
#verificacion:
- @everyone: Leer, ver reacciones
- @miembro: Leer únicamente

#reglas:
- @everyone: Leer únicamente

#btc-wyckoff-alertas:
- @miembro: Leer únicamente
- Bot (alert_sender): Enviar mensajes

#diario-de-operaciones:
- @miembro: Leer, escribir en threads
- @owner/@moderador: Crear posts

#forumsm-portfolio-live:
- @miembro: Leer únicamente
- Bot: Enviar mensajes
```

### Pasos para Configurar mee6

1. **Dashboard mee6**: https://mee6.xyz/dashboard
2. **Autoroles**: Automod → Autoroles → Agrega #verificacion
3. **Logs**: Moderation → Logging Channel → #mod-logs
4. **Estadísticas**: Plugins → Levelboard → Habilitar
5. **Mensajes automáticos**: Moderation → Welcome Message
6. **Permisos**: Discord Settings → Roles → Asigna permisos por canal

---

## Roles y Permisos (Adaptado a Estructura Existente)

### Roles Discord

| Rol | Permisos | Quién | Nuevo |
|-----|----------|-------|-------|
| **@owner** | Admin total | Tú | (existente) |
| **@moderador** | Manage messages, timeout, ban, logs | Volunteers | ✅ Agregar |
| **@miembro** | Leer/escribir canales públicos | Todos (auto-verificar) | (existente) |
| **@verificado** | Acceso a #auditoria-mensual | Miembros activos 2+ semanas | ✅ Agregar |
| **@bot** | Post en canales específicos | alert_sender_bot + APScheduler | ✅ Nuevo |

### Permisos por Canal (Nueva Estructura TQL)

| Canal | @miembro | @moderador | @owner | @bot |
|-------|----------|-----------|--------|------|
| #bienvenida | Leer | Leer | Editar | — |
| #reglas | Leer | Leer | Editar | — |
| #forex-portfolio-live | Leer | Leer | Escribir | Escribir ✅ |
| #btc-wyckoff-alertas | Leer | Leer | Leer | Escribir ✅ |
| #diario-operaciones | Leer + threads | Escribir posts | Escribir | — |
| #experimentos | Leer + escribir | Moderar threads | — | — |
| #backtests-publicados | Leer | Leer | Escribir | — |
| #metodologia | Leer + escribir | Moderar | — | — |
| #codigo-github | Leer + escribir | Moderar | — | — |
| #mod-logs | — | Leer | Leer | — |
| #sugerencias | Escribir (formato) | Moderar | Revisar | — |

---

## Telegram — Canales y Bots

### Estructura de Canales

```
Trading Quant Lab
├── 📢 anuncios                    (solo admin)
├── 📊 portafolio-forex-live       (diario automático)
├── 🚨 alertas-wyckoff            (bot automático)
├── 🧪 laboratorio                (experimentos)
├── 💬 debate-general             (conversación)
├── ❓ preguntas                  (soporte)
└── 📚 recursos                   (links útiles)
```

---

### Descripción de Canales Telegram

**📢 anuncios** (solo admin)
- Solo tú escribes
- Novedades importantes
- Cambios de la comunidad
- Nuevos posts publicados

**📊 portafolio-forex-live** (automático)
- Bot publica estado diario
- Mismo formato que Discord
- Timing: después del cierre

**🚨 alertas-wyckoff** (automático)
- Alertas instantáneas del bot
- Mismo formato que Discord
- Notificaciones push habilitadas

**🧪 laboratorio**
- Experimentos en curso
- Resultados parciales
- Preguntas abiertas

**💬 debate-general**
- Conversación libre
- Análisis de mercados
- Más casual que Discord

**❓ preguntas**
- Soporte rápido
- Dudas técnicas
- Respuestas de la comunidad

**📚 recursos**
- Links a Notion
- Links a GitHub
- Links a blog
- Documentación

---

### Bots Telegram

#### Bot de Alertas (alert_sender.py)

**Función**: Retransmite alertas del bot Wyckoff automáticamente

**Configuración**:
```python
TELEGRAM_TOKEN = "tu-token-del-bot"
TELEGRAM_CHAT_ID = "-100123456789"  # ID del canal (negativo para grupos)
```

**Obtener Token**:
1. Busca `@BotFather` en Telegram
2. `/newbot`
3. Nombre: "Trading Quant Lab Alerts"
4. Username: `trading_quant_lab_bot`
5. Copia el token

**Obtener Chat ID**:
```bash
# Opción 1: Envía /start al bot desde el canal
# Revisa los logs del bot

# Opción 2: En Python
import requests
token = "TU_TOKEN"
r = requests.get(f"https://api.telegram.org/bot{token}/getUpdates")
print(r.json())  # Busca "chat" → "id"
```

**Mensaje de Alerta**:
```
🚨 ALERTA WYCKOFF SPRING — BTC/USDT H4

Entrada: $67,500
Stop: $66,800 (1.5 ATR)
Target: $69,000

PF OOS: 1.47 | MC P5%: 0.97
Riesgo máx: 1% del capital
⚠️ No es recomendación de inversión
```

---

## Roles y Permisos

### Discord Roles

| Rol | Permisos |
|-----|----------|
| **@owner** | Manage all, delete messages, ban users, manage roles |
| **@moderador** | Manage messages, timeout, kick, manage threads |
| **@verificado** | Access #auditoria-mensual (privado), higher priority |
| **@miembro** | Default (read/write public channels) |

### Canal Permissions

| Canal | Miembro | Mod | Owner |
|-------|---------|-----|-------|
| #bienvenida | Leer | Write | Write |
| #reglas | Leer | Leer | Write |
| #propuestas | Write | Write | Write |
| #mod-logs | — | Leer | Leer |

---

---

## Templates de Mensajes

### A. Mensaje a Agregar en #mensaje-bienvenida

```
🧪 TRADING QUANT LAB — Laboratorio Cuantitativo

Dentro de este servidor también estamos desarrollando un laboratorio de investigación de estrategias de trading:

¿QUÉ HACEMOS?
├─ Testamos estrategias con rigor matemático (WFV + Monte Carlo)
├─ Publicamos resultados: éxitos Y fracasos
├─ Mantenemos 9 sistemas Forex en producción
└─ Comunidad cuantitativa 100% transparente

📊 Canales TQL:
├─ #forex-portfolio-live → Estado diario automático
├─ #btc-wyckoff-alertas → Alertas en tiempo real
├─ #diccionario-quant → 25 términos con ejemplos
├─ #backtests-publicados → Resultados completados
├─ #experimentos-activos → Estrategias en testing
└─ Ver INFORMACIÓN completa → #sobre-el-proyecto

El 80% de las estrategias que testamos mueren en backtest.
Te mostramos cuáles sobreviven y por qué. 🚀
```

### B. Mensaje a Agregar en #reglas

```
───────────────────────────────────────
📊 REGLAS ESPECIALES — TRADING QUANT LAB
───────────────────────────────────────

Además de las reglas generales del servidor:

1️⃣ PROPUESTAS CON FORMATO
   • #sugerencias: usar formulario de propuesta (ver abajo)
   • Sin formato → se ignoran
   • Respetamos tu tiempo, pedimos lo mismo

2️⃣ CONTEXTO DE RIESGO OBLIGATORIO (TQL)
   • Trades propios: incluir SL y riesgo % siempre
   • Resultados sin drawdown/contexto = ignorado
   • "Gané 50% este mes" sin contexto = no se vale

3️⃣ REPRODUCIBILIDAD EN BACKTESTS
   • "Funciona" requiere datos
   • Incluir: PF, Win Rate, período, sample size
   • Sin datos = opinión, no evidencia

4️⃣ PROHIBIDO
   • ❌ Prometer rentabilidades
   • ❌ Garantizar resultados
   • ❌ Ocultar pérdidas
   • ❌ Cambiar veredictos sin documentar razón

5️⃣ ALERTAS DEL BOT (#btc-wyckoff-alertas)
   • Son sugerencias técnicas, no recomendaciones
   • Máximo riesgo: 1% del capital
   • Tú eres responsable de tus decisiones
```

### C. Formulario de Propuesta de Estrategia

**Copiar en #sugerencias (pinned):**

```
📝 FORMULARIO — PROPUESTA DE ESTRATEGIA

Completa TODOS los campos. Sin formato → ignorado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOMBRE: [ej: Wyckoff Spring BTC H4]

FUENTE: [libro/paper/trader/indicador/propio]

ACTIVO SUGERIDO: [ej: BTC/USDT o EURUSD]

TIMEFRAME: [ej: H4 o 1D]

LÓGICA EN UNA FRASE: [Describe la idea core]

¿POR QUÉ CREES QUE TIENE EDGE?
[Explica brevemente el razonamiento]

REFERENCIAS: [Links, papers, o fuente de la idea]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 CALENDARIO:
Propuestas: días 1-20 del mes
Votación: días 26-30 (reacciones: 👍👎)
Ganadora anunciada: 1° del mes siguiente
```

### D. Mensaje de Bienvenida a #sobre-el-proyecto

```
📊 TRADING QUANT LAB — Laboratorio Cuantitativo

MISIÓN:
Construir la comunidad cuantitativa más rigurosa del trading en español.

QUÉ HACEMOS:
✅ Testamos estrategias con rigor matemático
✅ Usamos metodología: Walk-Forward Validation + Monte Carlo
✅ Publicamos ALL resultados (éxitos Y fracasos)
✅ Mantenemos 9 sistemas Forex en producción (auditoría pública)
✅ Análisis de transferibilidad y estabilidad

CANALES PRINCIPALES:
📊 #forex-portfolio-live — Estado del portafolio (actualización diaria automática)
🚨 #btc-wyckoff-alertas — Alertas del bot en tiempo real
📔 #diario-de-operaciones — Análisis de trades cerrados (con contexto completo)
🧪 #experimentos-activos — Estrategias siendo testeadas
✅ #backtests-publicados — Resultados completados + análisis
📚 #metodologia-validacion — Explicación de WFV, Monte Carlo, transferibilidad
📖 #diccionario-quant — 25 términos clave con ejemplos reales
💾 #codigo-y-github — Código fuente, PRs, issues del proyecto

LA FILOSOFÍA:
"El 80% de las estrategias que testamos mueren en backtest.
 Te mostramos cuáles sobreviven y por qué."

VEREDICTO DE ESTRATEGIAS:
🟢 OPERABLE: PF OOS > 1.30 + MC P5% > 1.20 + Trades OOS > 100
🟡 MARGINAL: PF OOS > 1.10 + MC P5% > 1.05 (solo alertas manuales)
🔴 DESCARTADO: No cumple criterios

GARANTÍAS:
❌ NO prometemos rentabilidades
❌ NO ocultamos pérdidas
❌ NO vendemos señales mágicas
❌ NO cambiamos veredictos sin documentar

GARANTÍAS:
✅ Proceso 100% transparente
✅ Datos reproducibles (GitHub público)
✅ Comunidad seria y rigurosa
✅ Resultados reales no editados

Tienes preguntas? Ve a #metodologia-validacion o #diccionario-quant 🔍
```

---

---

## Bots y Automatización

### Bot 1: Alertas Wyckoff (alert_sender.py)

**Función**: Retransmite alertas del bot MQL5 a Discord + Telegram + WebSocket

**Flujo Completo**:
```
MQL5 (MetaTrader 5)
    ↓ (detecta Spring)
alert_sender.py (Python script)
    ├→ POST a FastAPI /api/alerts/webhook
    │  ├→ Discord (#btc-wyckoff-alertas) via webhook
    │  ├→ Telegram (@trading_quant_lab_bot) via API
    │  └→ WebSocket → Dashboard actualiza en vivo
    └→ Log en base de datos
```

**Código de Ejemplo** (`bot/alert_sender.py`):
```python
import httpx
import os
from datetime import datetime

async def send_alert(signal: dict):
    """Envía alerta a API, Telegram y Discord"""

    # 1. POST a API (que maneja retransmisión)
    async with httpx.AsyncClient() as client:
        await client.post(
            'https://api.tudominio.com/api/alerts/webhook',
            json=signal,
            headers={'X-API-Key': os.environ['API_SECRET_KEY']}
        )

    print(f"[{datetime.now()}] ✅ Alerta enviada: {signal['symbol']}")

# El resto del flujo se maneja en FastAPI (backend/routers/alerts.py)
```

**Formato de Alerta en Discord**:
```
🚨 ALERTA WYCKOFF SPRING — BTC/USDT H4

Entrada: $67,500
Stop Loss: $66,800 (1.5 ATR)
Target: $69,000

Parámetros: LKB=30, Climax=2.0x
PF OOS: 1.47 (107 trades)
MC P5%: 0.97

⚠️ Máximo riesgo recomendado: 1% del capital
⚠️ No es recomendación de inversión
```

**Configuración**:
- Canal Discord destino: #btc-wyckoff-alertas (webhook webhook)
- Frecuencia: En tiempo real cuando bot detecta señal
- Autenticación: API Key (header X-API-Key)

---

### Bot 2: Portafolio Diario (APScheduler)

**Función**: Publica estado del portafolio cada día automáticamente

**Automatización**: FastAPI + APScheduler (cron job diario)

**Código** (`backend/jobs/portfolio_job.py`):
```python
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from datetime import datetime
import httpx

scheduler = AsyncIOScheduler()

@scheduler.scheduled_job('cron', hour=22, minute=0, timezone='UTC')
async def daily_portfolio_summary():
    """Publica resumen diario a las 22:00 UTC (21:00 Madrid)"""

    # 1. Calcula stats desde base de datos
    stats = await get_portfolio_stats()

    # 2. Formatea mensaje
    message = format_portfolio_message(stats)

    # 3. Publica en Discord (#forex-portfolio-live)
    await post_to_discord_webhook(
        webhook_url=os.environ['DISCORD_PORTFOLIO_WEBHOOK'],
        content=message
    )

    # 4. Publica en Telegram
    await send_telegram_message(
        chat_id=os.environ['TELEGRAM_CHANNEL_ID'],
        text=message
    )

scheduler.start()
```

**Mensaje Diario en Discord**:
```
📊 PORTAFOLIO FOREX — Día 23/03/2026

Balance: $10,000
Equity: $10,150
PnL: +$150 (+1.5%)
Drawdown: 2.1%

Trades abiertos:
✅ EURUSD H4: +45 pips (SL 50 pips)
✅ GBPUSD H4: +20 pips (SL 60 pips)

Últimos trades cerrados:
✅ AUDUSD: +50 pips (ganancia)
❌ USDJPY: -30 pips (pérdida)
```

**Frecuencia**: Diariamente a las 22:00 UTC (después cierre US)

---

### Bot 3: Estadísticas mee6 (Configuración Manual)

**Función**: Muestra estadísticas del servidor en #server-stats

**Configuración en mee6 Dashboard**:
1. Ir a https://mee6.xyz/dashboard/[TU_SERVER_ID]
2. Plugins → Levelboard → Habilitar
3. Settings → Estadísticas → Habilitar actualizaciones por hora

**Campos a Mostrar**:
- Total de miembros
- Nuevos miembros esta semana
- Canales más activos
- Métrica personalizada: "Estrategias testeadas" (editar manualmente)
- Métrica personalizada: "Sistemas en producción: 9" (editar manualmente)

---

## Integración de Webhooks (Discord + Telegram)

### Paso 1: Crear Webhook en Discord

```
1. Ve a #forex-portfolio-live (Settings ⚙️)
2. Integraciones → Webhooks → Nuevo webhook
3. Nombre: "Trading Bot"
4. Copia la URL (guardar en .env como DISCORD_PORTFOLIO_WEBHOOK)

URL ejemplo: https://discordapp.com/api/webhooks/123456/abcdef
```

### Paso 2: Bot de Telegram

```
1. Busca @BotFather en Telegram
2. Comando: /newbot
3. Nombre: "Trading Quant Lab Alerts"
4. Username: trading_quant_lab_bot
5. Copia el TOKEN (guardar en .env como TELEGRAM_BOT_TOKEN)

Para obtener CHAT_ID:
- Envía /start al bot desde el canal
- El bot te dirá el chat_id
- También puedes usar: https://api.telegram.org/bot{TOKEN}/getUpdates
```

### Paso 3: Configuración en FastAPI

```python
# backend/.env
DISCORD_PORTFOLIO_WEBHOOK=https://discordapp.com/api/webhooks/...
DISCORD_ALERTS_WEBHOOK=https://discordapp.com/api/webhooks/...
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234...
TELEGRAM_CHANNEL_ID=-1001234567890  # Negativo para canales
API_SECRET_KEY=tu-clave-secreta
```

---

---

## Flujos de Moderación

### Proceso de Verificación de Miembros Nuevos

**Automático (con mee6)**:
```
1. Nuevo miembro entra
2. mee6 envía bienvenida automática privada
3. Pide reaccionar con ✅ en #verificacion
4. Autorrol automático: @miembro
5. Acceso a canales públicos
```

**Manual (después de 2 semanas)**:
```
1. Revisar actividad del miembro
2. Si es activo: rol @verificado
3. Acceso a #auditoria-mensual
4. Prioridad en respuestas
```

---

### Reporte de Violaciones

**Cómo reportar**:
1. Reacción 🚩 en mensaje ofensivo
2. Mensaje privado a @owner o @moderador
3. Screenshots si es necesario

**Proceso de moderación**:
```
Reporte recibido
    ↓
Revisar contexto + chat anterior
    ↓
1ª violación → Advertencia privada + link a #reglas
    ↓
2ª violación → Timeout 24h (mee6)
    ↓
3ª violación → Ban permanente (log en #mod-logs)
```

**Violaciones Típicas**:
- ❌ Propostas sin formato (ignorar amablemente)
- ❌ Promesas de rentabilidad
- ❌ Falta de contexto de riesgo
- ❌ Spam o auto-promoción
- ❌ Ataques personales

---

### Gestión de Propuestas (Automática)

**Calendario Automático**:
- **Días 1-20**: Propuestas abiertas en #sugerencias
- **Día 20**: Revisar y filtrar (ignorar malformateadas)
- **Días 26-30**: Votación con reacciones (👍 y 👎)
- **Día 1 siguiente**: Anunciar ganadora en #anuncios

**Script de verificación** (Python):
```python
def validate_proposal(message):
    required = ["NOMBRE", "FUENTE", "ACTIVO", "TIMEFRAME", "LÓGICA"]
    text = message.content.upper()
    return all(field in text for field in required)

# Si no cumple: reacción ⚠️ + DM privado con formato
```

---

## Calendario de Contenido

### Semanal

| Día | Acción | Canal |
|-----|--------|-------|
| **Lunes** | Resumen fin de semana | #diario-operaciones |
| **Mar-Vie** | Alertas bot (automático) | #btc-wyckoff-alertas |
| **Viernes** | Análisis semanal | #backtests-publicados |
| **Domingo** | Preparar semana | #mod-discussion |

### Mensual

| Período | Acción | Canal |
|---------|--------|-------|
| **Días 1-20** | Propuestas abiertas | #sugerencias |
| **Día 20-25** | Revisar y filtrar | #mod-logs |
| **Días 26-30** | Votación activa | #sugerencias |
| **Día 1 siguiente** | Anunciar ganadora | #anuncios |
| **Último día** | Auditoría mensual | #auditoria-mensual |

---

## Monitoreo y Analíticas

### Métricas Clave

**Actividad**:
- Mensajes/día (meta: 50-100)
- Usuarios activos/semana
- Canales más usados

**Engagement**:
- Respuestas en #preguntas
- Discusiones en #debate-mercados
- Propuestas recibidas/mes

**Crecimiento**:
- Nuevos miembros/semana
- Tasa de retención (2+ semanas)
- Conversión a @verificado

**Problemas**:
- Reports recibidos
- Bans/timeouts
- Incidentes de spam

### Herramientas de Monitoreo

- **Discord nativo**: Settings → Analytics (gráficos básicos)
- **mee6**: Dashboard → Estadísticas (nivel, actividad)
- **Bot propio**: #mod-logs (todos los eventos registrados)
- **Telegram**: @userinfobot (miembros activos)

---

## Checklist para Fase 6 (Comunidad)

### Preparación (Días 1-2)
- [ ] Revisar estructura existente del servidor
- [ ] Identificar canales a repurposar
- [ ] Crear 3-6 nuevas categorías + canales (Opción B)
- [ ] Configurar permisos en cada canal

### Configuración de mee6 (Días 3-4)
- [ ] Autoroles en #verificacion
- [ ] Logs en #mod-logs
- [ ] Estadísticas en #server-stats
- [ ] Mensajes de bienvenida

### Crear Bots Automáticos (Días 5-7)
- [ ] Webhook Discord para #forex-portfolio-live
- [ ] Webhook Discord para #btc-wyckoff-alertas
- [ ] Bot Telegram (@trading_quant_lab_bot)
- [ ] Código alert_sender.py (Python)
- [ ] Job APScheduler (portfolio diario)
- [ ] Variables .env configuradas

### Templates y Mensajes (Día 8)
- [ ] Actualizar #mensaje-bienvenida
- [ ] Agregar reglas TQL en #reglas
- [ ] Crear #sobre-el-proyecto
- [ ] Fijar formulario de propuesta en #sugerencias
- [ ] Crear #diccionario-quant inicial

### Testing (Día 9)
- [ ] Primer mensaje de prueba en #forex-portfolio-live
- [ ] Simular alerta en #btc-wyckoff-alertas
- [ ] Verificar webhook Discord
- [ ] Verificar bot Telegram
- [ ] Test de reacciones (propuestas)

### Lanzamiento (Día 10)
- [ ] Links de invitación listos
- [ ] FAQ inicial en #preguntas-frecuentes
- [ ] Primer mes planeado (propuesta ganadora)
- [ ] Anuncio en #anuncios
- [ ] Invite a primeros miembros

---

## Post-Lanzamiento

**Semana 1-2**:
- ✅ Moderar activamente
- ✅ Responder preguntas rápido (< 2 horas)
- ✅ Fijar tono y cultura rigurosa
- ✅ Invitar expertos/traders conocidos

**Mes 1**:
- ✅ Mantener actividad constante
- ✅ Primer resumen de actividad (#server-stats)
- ✅ Primera auditoría mensual en #auditoria-mensual
- ✅ Ajustes necesarios en canales
- ✅ Reclutar moderadores

**Mes 2+**:
- ✅ Escalar responsabilidades a moderadores
- ✅ Automatizar tareas repetitivas (alertas)
- ✅ Crecer comunidad orgánicamente
- ✅ Publicar primeros posts del blog en #backtests-publicados
- ✅ Mantener auditoría mensual

---

*Última actualización: Marzo 2026*
*Estado: Adaptado a estructura existente — Listo para Fase 6*
