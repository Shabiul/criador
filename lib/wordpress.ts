import { bp } from '@/lib/bp'

const SITE = process.env.NEXT_PUBLIC_WP_SITE ?? 'criadorblogcom.wordpress.com'
const WP_API = `https://public-api.wordpress.com/wp/v2/sites/${SITE}`

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string | null
  category: string
  publishedAt: string
}

async function fetchWP(path: string) {
  const res = await fetch(`${WP_API}${path}`, {
    next: { revalidate: 60 },
  })
  if (!res.ok) return null
  return res.json()
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim()
}

function getCustomCoverImage(title: string, slug: string, category: string, mediaUrl: string | null): string | null {
  const t = (title + ' ' + slug + ' ' + category).toLowerCase()
  if (t.includes('logo') || t.includes('brand needs') || slug.includes('logo')) {
    return bp('/logo-brand.png')
  }
  if (t.includes('growth') || t.includes('business growth') || t.includes('branding drives')) {
    return bp('/branmd-growth.png')
  }
  if (t.includes('seo') || t.includes('ai engine') || t.includes('aieo')) {
    return bp('/seo&aieo.png')
  }
  return mediaUrl
}

async function mapPost(item: any): Promise<BlogPost> {
  let category = ''
  if (item.categories?.length) {
    const cat = await fetchWP(`/categories/${item.categories[0]}`)
    category = cat?.name ?? ''
  }

  const media = item.featured_media
    ? await fetchWP(`/media/${item.featured_media}`)
    : null

  const title = stripHtml(item.title?.rendered ?? '')
  const slug = item.slug ?? ''
  const coverImage = getCustomCoverImage(title, slug, category, media?.source_url ?? null)

  return {
    id: item.id,
    title,
    slug,
    excerpt: stripHtml(item.excerpt?.rendered ?? ''),
    content: item.content?.rendered ?? '',
    coverImage,
    category,
    publishedAt: item.date,
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const items = await fetchWP('/posts?per_page=100&_embed')
  if (!items) return []
  return Promise.all(
    items.map((item: any) => mapPost(item))
  )
}

export async function getLatestPosts(count: number): Promise<BlogPost[]> {
  const items = await fetchWP(`/posts?per_page=${count}&_embed`)
  if (!items) return []
  return Promise.all(items.map((item: any) => mapPost(item)))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const items = await fetchWP(`/posts?slug=${slug}&_embed`)
  if (!items?.length) return null
  return mapPost(items[0])
}
