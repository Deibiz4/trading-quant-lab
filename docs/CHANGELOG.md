# Changelog — Trading Quant Lab

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-03-24

### Added — Fase 1: Frontend Estático Completo

#### Landing Page
- **Hero Section**: Headline "Trading con Rigor Matemático", CTA buttons (Ver Estrategias / Unirse al Discord), stat badges (9 sistemas, 100% resultados, WFV+MC)
- **Methodology Section**: Three methodology cards (Walk-Forward Validation, Monte Carlo Simulation, Transferibilidad) with verdict criteria table
- **Portfolio Section**: Grid of 9 trading strategies with metrics (Profit Factor OOS, Monte Carlo P5%, Trades OOS, Win Rate)
- **CTA Section**: Call-to-action for community with Discord/Blog buttons and social proof

#### Navigation
- **Navbar**: Fixed top navbar with logo "PHOENIX TRADERS", navigation links (Blog, Hall of Fame, Dictionary), search input, login button
- **Footer**: 3-column footer (Brand, Connect with social icons, Legal links)
- **React Router**: Routes for Home, Hall of Fame, Dictionary, Blog (placeholder for Fase 2)

#### Additional Pages
- **Hall of Fame** (`/hall-of-fame`): Showcase all validated strategies
  - Operable category: PF > 1.30, MC P5% > 1.20, Trades > 100
  - Marginal category: PF > 1.10, MC P5% > 1.05
  - Detailed metric cards with progress bars
  - Validation process explanation

- **Dictionary** (`/dictionary`): Searchable trading glossary
  - 15+ terms covering Metodología, Métricas, Riesgo, and Filosofía
  - Search functionality
  - Category filtering

#### Design System
- **Colors**: 50+ custom color tokens from "The Kinetic Catalyst" design system
  - Primary: #8aedff (Electric Blue)
  - Tertiary: #ffd7b7 (Fiery Orange)
  - Surface: #0e141a (Navy)
  - Secondary: #bac8da (Soft Blue)

- **Typography**: Space Grotesk (Headlines), Manrope (Body), Inter (Labels)
- **Effects**: Glassmorphism (20px backdrop-blur, rgba(37,43,49,0.8)), ambient blur blobs, gradient text utilities
- **Icons**: Material Design Symbols + react-feather icons

#### Data
- **strategies.json**: 9 trading strategies with metrics:
  - Wyckoff Spring EURUSD (Operable)
  - Supply Zone Bounce GBPUSD (Operable)
  - Elliott Wave NZDUSD (Operable)
  - Price Action Reversal AUDUSD (Operable)
  - Bollinger Band Breakout EURUSD (Operable)
  - Fibonacci Retracement GBPJPY (Marginal)
  - Ichimoku Cloud EURJPY (Marginal)
  - Correlation Pair XAUUSD (Marginal)
  - Momentum Swing USOIL (Marginal)

#### Deployment
- **GitHub Pages**: Automatic deployment on git push to main
- **GitHub Actions**: Modern workflow using Node.js 22, official Pages actions, npm ci, dependency caching
- **Base Path**: `/trading-quant-lab/` for GitHub Pages URL structure
- **Build Output**: ~280 kB JS (gzipped: 83 kB), ~2 kB CSS (gzipped: 0.82 kB)

#### Development
- **Build Tool**: Vite 8.0.2 with React 19
- **Styling**: Tailwind CSS via CDN (runtime configuration) + custom CSS utilities
- **Routing**: React Router v6 with conditional basename for prod/dev
- **Icons**: react-feather for navigation and UI elements

### Technical Details

#### CSS Architecture
- **Global Styles** (`frontend/src/index.css`): Base styles, color definitions, transitions, selection states
- **Utilities**: `.glass-panel` (glassmorphism), `.gradient-cyan-blue`/`.gradient-orange` (text gradients), `.custom-scrollbar` (browser-specific)
- **Tailwind CDN**: Runtime configuration in `index.html` with inline `<script>` block containing color tokens and borderRadius overrides

#### Component Structure
```
frontend/src/
├── pages/
│   ├── Home.jsx (Landing page container)
│   ├── HallOfFame.jsx (Strategy showcase)
│   └── Dictionary.jsx (Searchable glossary)
├── components/
│   ├── Navbar.jsx (Fixed top navigation)
│   ├── Footer.jsx (3-column footer)
│   └── home/ (Landing page sections)
│       ├── HeroSection.jsx
│       ├── MethodologySection.jsx
│       ├── PortfolioSection.jsx
│       └── CTASection.jsx
├── data/
│   └── strategies.json
├── App.jsx (React Router setup)
└── main.jsx (React entry point)
```

#### Configuration Files
- **vite.config.js**: Conditional base path, alias resolver (`@` → `src/`)
- **tailwind.config.js**: Exists but superseded by CDN inline config
- **postcss.config.js**: @tailwindcss/postcss plugin (legacy, not used with CDN)
- **.github/workflows/deploy.yml**: GitHub Pages deployment workflow

#### Browser Support
- Modern browsers with CSS Grid, Flexbox, CSS Custom Properties
- Webkit/Firefox-specific scrollbar and backdrop-filter prefixes included
- Responsive design using Tailwind's breakpoints (sm, md, lg)

### Fixed
- CSS loading in development environment (switched from compiled to CDN approach)
- GitHub Actions Node.js 20 deprecation warning (updated to Node.js 22)
- React icon library compatibility (substituted BarChart3 → BarChart2, GitCompare → Layers)

### Known Limitations / Future Work
- **Blog system**: Currently placeholder route. Fase 2 will implement MDX-based blog with automatic post loading
- **No backend integration**: Frontend is static. Fase 3 will add FastAPI backend with WebSocket alerts
- **No real data**: strategies.json is hardcoded. Will connect to backend API once available
- **Dashboard**: Reports/analytics dashboard planned for future phases

### Dependencies
```
react: ^18.3.1
react-dom: ^18.3.1
react-router-dom: ^6.x
react-feather: ^2.1.0 (icons)
vite: ^8.0.2
tailwindcss: via CDN (not npm)
postcss: ^8.x (for future compiled Tailwind)
autoprefixer: ^10.x (for future compiled Tailwind)
```

### Deployment Checklist
- [x] React + Vite project initialized
- [x] Tailwind CSS configured (via CDN)
- [x] GitHub repository created and pushed
- [x] GitHub Actions workflow configured
- [x] Landing page built (Hero, Methodology, Portfolio, CTA)
- [x] Navigation (Navbar, Footer, React Router)
- [x] Hall of Fame page created
- [x] Dictionary page created
- [ ] Verify GitHub Pages deployment at https://deibiz4.github.io/trading-quant-lab/
- [ ] Fase 2: Blog system with MDX
- [ ] Fase 3: FastAPI backend with API
- [ ] Fase 4: Real-time alerts via WebSocket

---

**Version**: 1.0.0
**Status**: Released (Fase 1 Complete)
**Last Updated**: 2026-03-24
