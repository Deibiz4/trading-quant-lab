import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import HallOfFame from '@/pages/HallOfFame'
import Dictionary from '@/pages/Dictionary'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
