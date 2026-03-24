import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'

function App() {
  const basename = import.meta.env.PROD ? '/trading-quant-lab/' : '/'

  return (
    <BrowserRouter basename={basename}>
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Placeholder routes */}
          <Route path="/blog" element={<div className="py-20 text-center text-on-surface">Blog - Próximamente</div>} />
          <Route path="/hall-of-fame" element={<div className="py-20 text-center text-on-surface">Hall of Fame - Próximamente</div>} />
          <Route path="/dictionary" element={<div className="py-20 text-center text-on-surface">Dictionary - Próximamente</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
