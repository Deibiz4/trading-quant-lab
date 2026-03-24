import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import HallOfFame from '@/pages/HallOfFame'
import Dictionary from '@/pages/Dictionary'

function App() {
  const basename = import.meta.env.PROD ? '/trading-quant-lab/' : '/'

  return (
    <BrowserRouter basename={basename}>
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hall-of-fame" element={<HallOfFame />} />
          <Route path="/dictionary" element={<Dictionary />} />
          {/* Placeholder for Blog - will use MDX in Fase 2 */}
          <Route path="/blog" element={<div className="py-20 text-center text-on-surface">Blog - Próximamente</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
