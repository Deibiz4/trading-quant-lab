# 📚 Documentación — Trading Quant Lab

Índice completo de documentación del proyecto. Aquí encontrarás todo lo necesario para entender, desarrollar y mantener el proyecto.

---

## 📖 Cómo usar esta carpeta

```
DOCUMENTACION/
├── README.md                          ← Estás aquí
├── SETUP_COMPLETE.md                  ← Resumen del setup realizado
│
├── guias/
│   ├── trading_quant_lab_guia.md      ← Arquitectura técnica y roadmap
│   ├── TRADING_QUANT_LAB_GUIA_MAESTRA.md  ← Filosofía, comunidad, contenido
│   └── presentacion_comunidad_quant.md    ← Análisis técnico del portafolio
│
└── especificaciones/
    └── docs/
        ├── MANUAL.md                  ← Cómo funciona cada componente
        ├── CHANGELOG.md               ← Historial de cambios
        ├── LOGS.md                    ← Registro de sesiones
        └── API.md                     ← Referencia de endpoints
```

---

## 🎯 Por dónde empezar

### Para Entender el Proyecto (30 minutos)
Leer en este orden:

1. **`../CLAUDE.md`** (10 min) — Stack, convenciones, estructura
2. **`../README.md`** (5 min) — Visión general y quick start
3. **`especificaciones/docs/MANUAL.md`** (15 min) — Componentes detallados

### Para Entender la Arquitectura Técnica (1 hora)
4. **`guias/trading_quant_lab_guia.md`** (30 min) — Roadmap y arquitectura completa
5. **`guias/TRADING_QUANT_LAB_GUIA_MAESTRA.md`** (20 min) — Filosofía y estructura de comunidad
6. **`guias/presentacion_comunidad_quant.md`** (10 min) — Análisis técnico del portafolio

### Para Implementación por Fase
- **`ROADMAP.md`** — 8 fases con checklist (en raíz)
- **`especificaciones/COMUNIDAD.md`** — Discord, Telegram, bots (Fase 6)
- **`guias/trading_quant_lab_guia.md`** — Detalles técnicos por fase

### Para Seguimiento del Proyecto
- **`especificaciones/docs/LOGS.md`** — Qué se ha hecho, qué falta
- **`especificaciones/docs/CHANGELOG.md`** — Cambios por versión
- **`especificaciones/docs/API.md`** — Endpoints disponibles (Fase 3+)

---

## 📂 Descripción de Carpetas

### `guias/`
Contiene las **guías maestras** que definen el proyecto:

- **`trading_quant_lab_guia.md`**
  - Arquitectura técnica completa
  - Stack tecnológico explicado
  - Estructura de archivos del monorepo
  - Roadmap de 8 fases con timeline
  - Ejemplo de cómo desplegar cada componente

- **`TRADING_QUANT_LAB_GUIA_MAESTRA.md`**
  - Filosofía y posicionamiento del proyecto
  - Estructura de canales (Telegram, Discord)
  - Cómo usar Notion como hub central
  - Qué contenido publicar y cuándo
  - Series de tutoriales planificadas
  - Sistema de sugerencias de comunidad
  - Diccionario cuantitativo completo (25 términos)
  - Criterios de veredicto para estrategias
  - Plan de monetización

- **`presentacion_comunidad_quant.md`**
  - Análisis técnico del portafolio de 9 sistemas Forex
  - Los instrumentos operativos y sus características
  - Fortalezas estructurales del sistema
  - Debilidades cuantitativas y cómo mitigarlas
  - Casos de uso reales

### `especificaciones/docs/`
Contiene la **documentación técnica y de seguimiento**:

- **`MANUAL.md`**
  - Especificaciones de cada página (Home, Dictionary, Dashboard, Blog)
  - Componentes custom para MDX (MetricResult, BugReport, etc)
  - Endpoints planificados (públicos, privados, WebSocket)
  - Cómo agregar posts nuevos en MDX
  - Estructura de la comunidad (Discord/Telegram)
  - Roadmap de implementación por fase

- **`CHANGELOG.md`**
  - Historial versionado de cambios
  - Formato: Added/Fixed/Changed/Removed
  - Se actualiza con `/update-changelog` en Claude Code

- **`LOGS.md`**
  - Registro de sesiones de desarrollo
  - Qué se hizo en cada sesión
  - Bloqueos y decisiones pendientes
  - Próximos pasos
  - Se actualiza con `/log-session` en Claude Code

- **`API.md`**
  - Referencia completa de endpoints
  - Autenticación (API Key)
  - Ejemplos de requests/responses
  - WebSocket para alertas en tiempo real
  - Códigos de error
  - Se completa durante la Fase 3

---

## ⚡ Acceso Rápido

### Si quiero...

**Entender el proyecto en 15 minutos:**
→ Lee `../README.md` + `SETUP_COMPLETE.md`

**Saber exactamente qué hay que hacer:**
→ Ve `especificaciones/docs/LOGS.md` (próximos pasos)

**Implementar la Fase X:**
→ Lee `guias/trading_quant_lab_guia.md` (sección "Fase X")

**Entender una métrica (PF, Win Rate, etc):**
→ Busca en `guias/TRADING_QUANT_LAB_GUIA_MAESTRA.md` (Diccionario Quant)

**Conocer el historial de cambios:**
→ Abre `especificaciones/docs/CHANGELOG.md`

**Ver qué endpoints existen:**
→ Consulta `especificaciones/docs/API.md`

**Saber el veredicto de una estrategia:**
→ Busca en `especificaciones/docs/MANUAL.md` (Hall of Fame / Cemetery)

---

## 📋 Versión y Estado

| Aspecto | Valor |
|---------|-------|
| **Versión del proyecto** | 1.0.0 (próximo) |
| **Estado** | En desarrollo — Fase 1 |
| **Última actualización** | Marzo 2026 |
| **Documentación** | ✅ 100% configurada |

---

## 🔗 Archivos Clave en la Raíz

Aunque la documentación está aquí, estos archivos están en la **raíz del proyecto** porque son esenciales:

- **`../CLAUDE.md`** — Instrucciones para Claude (LEE PRIMERO)
- **`../README.md`** — Landing page del proyecto
- **`../CLAUDE.md.template`** — Plantilla para otros proyectos

Estos NO se mueven porque Claude necesita leerlos automáticamente al arrancar.

---

## 💡 Tips

1. **Guarda esta carpeta en favoritos** — Aquí encontrarás respuesta a casi cualquier pregunta
2. **Lee los guías en orden** — Están estructuradas progresivamente
3. **Actualiza LOGS.md al terminar una sesión** — Así la próxima sesión empieza con contexto
4. **Revisa CHANGELOG.md periódicamente** — Verás el progreso del proyecto
5. **Consulta API.md durante la Fase 3** — Especialmente cuando implementes endpoints

---

## 📚 Lectura Recomendada

### Día 1 (Entendimiento general)
- [ ] `../CLAUDE.md` — 10 min
- [ ] `../README.md` — 5 min
- [ ] `SETUP_COMPLETE.md` — 10 min
- [ ] `especificaciones/docs/MANUAL.md` — 15 min

**Total: 40 minutos de lectura básica**

### Día 2+ (Desarrollo)
- [ ] `guias/trading_quant_lab_guia.md` — Para implementar
- [ ] `especificaciones/docs/LOGS.md` — Para saber qué sigue
- [ ] `especificaciones/docs/API.md` — Durante Fase 3

**Total: según el trabajo**

---

## 🆘 Necesitas Ayuda?

| Pregunta | Ve a |
|----------|------|
| ¿Cuál es la estructura? | `../CLAUDE.md` → Sección "Estructura del Proyecto" |
| ¿Cuáles son las convenciones? | `../CLAUDE.md` → Sección "Convenciones de Código" |
| ¿Qué hay que hacer ahora? | `especificaciones/docs/LOGS.md` → "Próximos pasos" |
| ¿Cómo implementar la Fase X? | `guias/trading_quant_lab_guia.md` → "Fase X" |
| ¿Qué cambió en la versión Y? | `especificaciones/docs/CHANGELOG.md` → busca la versión |
| ¿Qué endpoints hay? | `especificaciones/docs/API.md` |
| ¿Cuál es la filosofía del proyecto? | `guias/TRADING_QUANT_LAB_GUIA_MAESTRA.md` → Sección 1 |

---

*Documentación centralizada y organizada para máxima claridad.*

**Última actualización: Marzo 2026**
