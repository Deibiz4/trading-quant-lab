import postsData from '@/data/posts.json'

// Create a lazy-load map for all .mdx files
// import.meta.glob is processed at build time by Vite
const contentModules = import.meta.glob('../content/**/*.mdx')

/**
 * Get all post metadata from posts.json
 */
export function getAllPostsMeta() {
  return postsData
}

/**
 * Dynamically load MDX component for a post by slug
 * Returns the React component that renders the article content
 */
export async function loadPostContent(slug) {
  // Find the module entry that matches the slug
  const entry = Object.entries(contentModules).find(([path]) => path.endsWith(`/${slug}.mdx`))

  if (!entry) {
    console.warn(`Post content not found for slug: ${slug}`)
    return null
  }

  try {
    const module = await entry[1]()
    return module.default // The React component
  } catch (error) {
    console.error(`Error loading post content for slug: ${slug}`, error)
    return null
  }
}
