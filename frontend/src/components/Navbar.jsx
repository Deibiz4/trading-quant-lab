import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search } from 'react-feather'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-[#0e141a]/80 backdrop-blur-xl shadow-[0_0_15px_rgba(138,237,255,0.1)]">
      {/* Left Side: Logo */}
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-headline tracking-tight">
          PHOENIX TRADERS
        </Link>

        {/* Nav Links - Hidden below lg */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-slate-400 hover:text-cyan-200 font-headline text-sm uppercase tracking-widest transition-colors">
            Home
          </Link>
          <Link to="/blog" className="text-slate-400 hover:text-cyan-200 font-headline text-sm uppercase tracking-widest transition-colors">
            Blog
          </Link>
          <Link to="/hall-of-fame" className="text-cyan-400 border-b-2 border-cyan-400 font-headline text-sm uppercase tracking-widest">
            Sistemas
          </Link>
        </div>
      </div>

      {/* Right Side: Search + Login */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-surface-container-highest text-on-surface placeholder-outline text-sm px-4 py-2 rounded pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-outline" />
        </div>

        {/* Login Button */}
        <button className="bg-primary text-on-primary px-6 py-2 rounded font-headline font-bold text-sm hover:bg-primary/90 btn-primary-glow">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-cyan-400 hover:text-cyan-200"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-0 w-full bg-[#0e141a]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 p-6">
            <Link to="/" className="text-slate-400 hover:text-cyan-200 font-headline text-sm uppercase tracking-widest transition-colors">
              Home
            </Link>
            <Link to="/blog" className="text-slate-400 hover:text-cyan-200 font-headline text-sm uppercase tracking-widest transition-colors">
              Blog
            </Link>
            <Link to="/hall-of-fame" className="text-cyan-400 font-headline text-sm uppercase tracking-widest">
              Sistemas
            </Link>
            <button className="bg-primary text-on-primary px-6 py-2 rounded font-headline font-bold text-sm w-full hover:bg-primary/90">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
