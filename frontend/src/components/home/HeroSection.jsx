export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-8 overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-tertiary rounded-full mix-blend-screen filter blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-headline font-bold tracking-tighter mb-6 leading-tight">
            Trading con{' '}
            <span className="gradient-cyan-blue">Rigor Matemático</span>
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-8 font-body leading-relaxed">
            Una comunidad cuantitativa donde cada estrategia se valida con{' '}
            <span className="text-primary font-headline">Walk-Forward Validation</span> y{' '}
            <span className="text-primary font-headline">Monte Carlo Simulation</span>.
            <br />
            <span className="text-tertiary">Sin promesas. Solo datos.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-primary text-on-primary rounded-lg font-headline font-bold text-lg hover:bg-primary/90 btn-primary-glow transition-all"
            >
              Ver Estrategias
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-headline font-bold text-lg hover:bg-primary/10 transition-all"
            >
              Unirse al Discord
            </a>
          </div>
        </div>

        {/* Stat Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="glass-panel rounded-2xl p-6">
            <div className="text-4xl font-headline font-bold text-primary mb-2">
              9
            </div>
            <div className="text-on-surface-variant font-body text-sm">
              Sistemas Validados
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="text-4xl font-headline font-bold text-tertiary mb-2">
              100%
            </div>
            <div className="text-on-surface-variant font-body text-sm">
              Resultados Publicados
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="text-4xl font-headline font-bold text-secondary mb-2">
              WFV+MC
            </div>
            <div className="text-on-surface-variant font-body text-sm">
              Validación Rigurosa
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
