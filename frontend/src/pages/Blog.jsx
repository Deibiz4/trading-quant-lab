import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, BookOpen, Zap } from 'react-feather'
import posts from '@/data/posts.json'

export default function Blog() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categories = ['todos', 'tutoriales', 'autopsias', 'analisis', 'metodologia']

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = selectedCategory === 'todos' && search === '' ? posts.find(p => p.featured) : null
  const otherPosts = featuredPost ? filteredPosts.filter(p => p.slug !== featuredPost.slug) : filteredPosts

  const getCategoryBadgeColor = (category) => {
    const colors = {
      tutoriales: { bg: 'bg-primary/20', text: 'text-primary' },
      autopsias: { bg: 'bg-error/20', text: 'text-error' },
      analisis: { bg: 'bg-secondary/20', text: 'text-secondary' },
      metodologia: { bg: 'bg-tertiary/20', text: 'text-tertiary' },
    }
    return colors[category] || { bg: 'bg-surface-container', text: 'text-on-surface' }
  }

  const getCategoryLabel = (cat) => {
    const labels = {
      tutoriales: 'Tutorial',
      autopsias: 'Autopsia',
      analisis: 'Análisis',
      metodologia: 'Metodología',
    }
    return labels[cat] || cat
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-surface-container-low to-surface">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 md:px-8 border-b border-on-surface/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary-container/20 border border-primary/30">
            <BookOpen size={16} className="text-primary" />
            <span className="text-sm font-label text-primary">Artículos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 gradient-cyan-blue">
            Blog Cuantitativo
          </h1>
          <p className="text-lg text-on-surface/80 max-w-2xl mx-auto mb-8">
            Tutoriales, análisis de estrategias y autopsias de sistemas que fracasaron. Toda la transparencia del proceso cuantitativo.
          </p>

          {/* Search */}
          <div className="relative mb-4 max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-on-surface/50" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-surface-container border border-on-surface/10 text-on-surface placeholder:text-on-surface/50 focus:outline-none focus:border-primary/50 focus:bg-surface-container-high"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-label transition-all capitalize ${
                  selectedCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container border border-on-surface/10 text-on-surface hover:border-primary/50'
                }`}
              >
                {cat === 'todos' ? 'Todos' : getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-tertiary" size={24} />
              <h2 className="text-xl font-bold font-headline text-on-surface">Artículo Destacado</h2>
            </div>
            <div
              onClick={() => navigate(`/blog/${featuredPost.slug}`)}
              className="glass-panel p-8 rounded-xl hover:border-tertiary/50 transition-all cursor-pointer group grid md:grid-cols-3 gap-6 items-center"
            >
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block px-2 py-1 rounded-lg bg-tertiary/20 text-tertiary text-xs font-label font-semibold">
                    ⭐ DESTACADO
                  </span>
                  <span className={`inline-block px-2 py-1 rounded-lg text-xs font-label font-semibold ${getCategoryBadgeColor(featuredPost.category).bg} ${getCategoryBadgeColor(featuredPost.category).text}`}>
                    {getCategoryLabel(featuredPost.category)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-headline text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-on-surface/80 mb-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="text-xs font-label text-on-surface/60 bg-surface-container/50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-on-surface/10 pt-6 md:pt-0 md:pl-6">
                <div className="text-sm text-on-surface/70 space-y-2">
                  <div>
                    <div className="text-on-surface/50">Publicado</div>
                    <div className="font-semibold text-on-surface">{new Date(featuredPost.date).toLocaleDateString('es-ES')}</div>
                  </div>
                  <div>
                    <div className="text-on-surface/50">Tiempo de lectura</div>
                    <div className="font-semibold text-on-surface">{featuredPost.readTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        {otherPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-on-surface/70 text-lg">No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {otherPosts.map((post) => (
              <div
                key={post.slug}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all group cursor-pointer hover:bg-opacity-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`inline-block px-2 py-1 rounded-lg text-xs font-label font-semibold ${getCategoryBadgeColor(post.category).bg} ${getCategoryBadgeColor(post.category).text}`}>
                      {getCategoryLabel(post.category)}
                    </span>
                    {post.series && (
                      <span className="text-xs font-label text-on-surface/60 bg-surface-container/50 px-2 py-1 rounded">
                        {post.series}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-headline text-on-surface mb-2 group-hover:text-primary transition-colors truncate">
                    {post.title}
                  </h3>
                  <p className="text-on-surface/80 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs font-label text-on-surface/50">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6 text-xs text-on-surface/70 md:border-l border-on-surface/10 md:pl-6 flex-shrink-0 whitespace-nowrap">
                  <div>
                    <div className="text-on-surface/50">Fecha</div>
                    <div className="font-semibold text-on-surface">{new Date(post.date).toLocaleDateString('es-ES')}</div>
                  </div>
                  <div>
                    <div className="text-on-surface/50">Lectura</div>
                    <div className="font-semibold text-on-surface">{post.readTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Post Count */}
        <div className="mt-12 pt-8 border-t border-on-surface/10 text-center">
          <p className="text-on-surface/70 text-sm">
            Mostrando {otherPosts.length} de {posts.length} artículos
          </p>
        </div>
      </section>
    </div>
  )
}
