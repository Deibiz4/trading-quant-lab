import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MessageCircle, BookOpen } from 'react-feather'
import { MDXProvider } from '@mdx-js/react'
import posts from '@/data/posts.json'
import { loadPostContent } from '@/lib/posts'
import * as mdxComponents from '@/components/mdx'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [Content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  const post = posts.find(p => p.slug === slug)

  // Load MDX content on mount or when slug changes
  useEffect(() => {
    if (!post) {
      setLoading(false)
      return
    }

    setLoading(true)
    loadPostContent(post.slug)
      .then(component => {
        setContent(() => component)
      })
      .catch(error => {
        console.error('Error loading post content:', error)
        setContent(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [post?.slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-surface via-surface-container-low to-surface flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold font-headline text-on-surface mb-4">404</h1>
          <p className="text-on-surface/80 mb-6">Artículo no encontrado</p>
          <button
            onClick={() => navigate('/blog')}
            className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label transition-all hover:opacity-90"
          >
            Volver al Blog
          </button>
        </div>
      </div>
    )
  }

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

  const relatedPosts = posts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-surface-container-low to-surface">
      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-surface/80 backdrop-blur-md border-b border-on-surface/10">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-3">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-primary hover:text-cyan-300 transition-colors font-label text-sm"
          >
            <ArrowLeft size={18} />
            Volver al Blog
          </button>
        </div>
      </div>

      {/* Header */}
      <section className="pt-12 pb-8 px-4 md:px-8 border-b border-on-surface/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`inline-block px-2 py-1 rounded-lg text-xs font-label font-semibold ${getCategoryBadgeColor(post.category).bg} ${getCategoryBadgeColor(post.category).text}`}>
              {getCategoryLabel(post.category)}
            </span>
            {post.series && (
              <span className="inline-block px-2 py-1 rounded-lg text-xs font-label text-primary bg-primary-container/20 border border-primary/30">
                {post.series}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-on-surface">
            {post.title}
          </h1>

          <p className="text-lg text-on-surface/80 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface/70 border-t border-on-surface/10 pt-6">
            <div>
              <span className="text-on-surface/50">Publicado</span>
              <div className="font-semibold text-on-surface">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
            <div>
              <span className="text-on-surface/50">Tiempo de lectura</span>
              <div className="font-semibold text-on-surface">{post.readTime}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-label text-on-surface/60 bg-surface-container px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-8 py-12 max-w-4xl mx-auto">
        <div className="glass-panel p-8 rounded-xl mb-8 prose-mdx">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent mb-4" />
                <p className="text-on-surface/70">Cargando artículo...</p>
              </div>
            </div>
          ) : Content ? (
            <MDXProvider components={mdxComponents}>
              <Content />
            </MDXProvider>
          ) : (
            <div className="text-center py-8">
              <p className="text-on-surface/70 mb-4">Contenido no disponible</p>
              <button
                onClick={() => navigate('/blog')}
                className="text-primary hover:text-cyan-300 transition-colors text-sm font-label"
              >
                Volver al blog
              </button>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <a
            href="https://discord.gg/trading-quant-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-on-primary font-label transition-all hover:opacity-90 font-semibold"
          >
            <MessageCircle size={18} />
            Discutir en Discord
          </a>
          <button
            onClick={() => navigate('/hall-of-fame')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-surface-container border border-on-surface/10 text-on-surface font-label transition-all hover:border-tertiary/50 font-semibold"
          >
            <BookOpen size={18} />
            Ver Hall of Fame
          </button>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">Artículos Relacionados</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.slug}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  className="glass-panel p-4 rounded-xl hover:border-primary/50 transition-all group cursor-pointer"
                >
                  <span className={`inline-block px-2 py-1 rounded-lg text-xs font-label font-semibold mb-2 ${getCategoryBadgeColor(relatedPost.category).bg} ${getCategoryBadgeColor(relatedPost.category).text}`}>
                    {getCategoryLabel(relatedPost.category)}
                  </span>
                  <h3 className="font-bold font-headline text-on-surface mb-2 group-hover:text-primary transition-colors text-sm line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-on-surface/70 text-xs mb-3 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-on-surface/50">
                    <span>{relatedPost.readTime}</span>
                    <span>{new Date(relatedPost.date).toLocaleDateString('es-ES')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
