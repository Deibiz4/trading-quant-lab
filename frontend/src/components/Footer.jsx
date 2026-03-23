import { Twitter, MessageCircle, Mail } from 'react-feather'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0e141a] border-t border-[#2f353c] py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Column */}
        <div>
          <h3 className="text-orange-400 text-lg font-bold font-headline mb-2">
            PHOENIX TRADERS
          </h3>
          <p className="text-slate-500 text-sm">
            Trading cuantitativo con rigor matemático
          </p>
          <p className="text-slate-600 text-xs mt-4">
            © {currentYear} Trading Quant Lab. All rights reserved.
          </p>
        </div>

        {/* Connect Column */}
        <div>
          <h4 className="text-on-surface font-headline text-sm font-bold mb-4 uppercase tracking-widest">
            Connect
          </h4>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="mailto:contact@phoenixtraders.com"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-on-surface font-headline text-sm font-bold mb-4 uppercase tracking-widest">
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/terms"
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
              >
                Términos de Servicio
              </a>
            </li>
            <li>
              <a
                href="/risk-disclosure"
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
              >
                Declaración de Riesgo
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
              >
                Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-[#2f353c] mt-8 pt-8">
        <p className="text-center text-outline text-xs">
          Construido con rigor matemático. No es asesoría financiera.
        </p>
      </div>
    </footer>
  )
}
