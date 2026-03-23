import { Heart } from 'react-feather'

export default function CTASection() {
  return (
    <section id="cta" className="relative py-20 px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-5 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tertiary rounded-full mix-blend-screen filter blur-3xl opacity-5 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main CTA Container */}
        <div className="glass-panel rounded-2xl p-12 md:p-16 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-tertiary flex items-center justify-center">
              <Heart className="w-8 h-8 text-on-primary" fill="currentColor" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter mb-6">
            Únete a la{' '}
            <span className="gradient-cyan-blue">Comunidad Quant</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-body">
            Acceso a análisis en tiempo real, backtests detallados, y una comunidad de traders que valida cada paso con rigor matemático.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-primary to-cyan-500 text-on-primary rounded-lg font-headline font-bold text-lg hover:shadow-[0_0_30px_rgba(138,237,255,0.4)] transition-all"
            >
              Unirse al Discord
            </a>
            <a
              href="/blog"
              className="px-8 py-4 border-2 border-tertiary text-tertiary rounded-lg font-headline font-bold text-lg hover:bg-tertiary/10 transition-all"
            >
              Leer Blog
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center gap-8 text-center flex-wrap">
            <div>
              <div className="text-3xl font-headline font-bold text-primary">500+</div>
              <div className="text-sm text-on-surface-variant font-body">Miembros activos</div>
            </div>
            <div className="w-px bg-outline-variant/20" />
            <div>
              <div className="text-3xl font-headline font-bold text-primary">9</div>
              <div className="text-sm text-on-surface-variant font-body">Sistemas validados</div>
            </div>
            <div className="w-px bg-outline-variant/20" />
            <div>
              <div className="text-3xl font-headline font-bold text-primary">100%</div>
              <div className="text-sm text-on-surface-variant font-body">Transparencia</div>
            </div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div className="text-center mt-12">
          <p className="text-on-surface-variant font-body text-sm">
            🎓 Educación cuantitativa sin conflictos de interés
          </p>
        </div>
      </div>
    </section>
  )
}
