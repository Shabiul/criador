'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlogPost } from '@/lib/wordpress'

const placeholders: BlogPost[] = [
  {
    id: -1,
    title: 'How Great Branding Drives 3× Business Growth',
    slug: '#',
    excerpt: 'A strong brand identity is not just aesthetics — it is the foundation of trust, recall, and revenue. Discover how strategic branding transforms businesses.',
    content: '',
    coverImage: null,
    category: 'Branding',
    publishedAt: '2026-06-10T00:00:00',
  },
  {
    id: -2,
    title: 'SEO in 2026: Why AI Engines Are Changing Everything',
    slug: '#',
    excerpt: 'Traditional SEO is no longer enough. With AI search tools like ChatGPT and Gemini reshaping discovery, your brand needs AIEO and GEO strategies to stay visible.',
    content: '',
    coverImage: null,
    category: 'SEO & AIEO',
    publishedAt: '2026-05-28T00:00:00',
  },
  {
    id: -3,
    title: '5 Social Media Mistakes Killing Your Brand (And How to Fix Them)',
    slug: '#',
    excerpt: 'Most brands post consistently but still see no growth. The issue is not frequency — it is strategy. Here are the top mistakes and how Criador helps fix them.',
    content: '',
    coverImage: null,
    category: 'Social Media',
    publishedAt: '2026-05-15T00:00:00',
  },
]

const categoryColors: Record<string, string> = {
  Branding: 'text-[#8B31C7]',
  'SEO & AIEO': 'text-emerald-600',
  'Social Media': 'text-blue-600',
}

function PlaceholderCover({ category }: { category: string }) {
  const gradients: Record<string, string> = {
    Branding: 'from-[#8B31C7]/30 to-[#6B2490]/10',
    'SEO & AIEO': 'from-emerald-500/20 to-teal-600/10',
    'Social Media': 'from-blue-500/20 to-indigo-600/10',
  }
  const icons: Record<string, React.ReactNode> = {
    Branding: (
      <svg className="w-10 h-10 text-[#8B31C7]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11z"/>
      </svg>
    ),
    'SEO & AIEO': (
      <svg className="w-10 h-10 text-emerald-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    'Social Media': (
      <svg className="w-10 h-10 text-blue-500/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradients[category] ?? 'from-[#8B31C7]/20 to-transparent'} flex items-center justify-center`}>
      {icons[category] ?? <span className="text-[#8B31C7]/40 text-5xl font-black">C</span>}
    </div>
  )
}

export default function Blogs({ posts }: { posts: BlogPost[] }) {
  const needed = Math.max(0, 3 - posts.length)
  const displayPosts = [...posts, ...placeholders.slice(0, needed)]

  return (
    <section id="blogs" className="pt-2 pb-4 md:pt-3 md:pb-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-6"
        >
          <div>
            <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-3">From The Blog</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#2E2A26] tracking-tight">
              Insights & <span className="text-[#8B31C7]">Ideas</span>
            </h2>
          </div>
          <Link
            href="/blogs"
            className="text-sm font-semibold text-[#8B31C7] hover:underline underline-offset-4 transition-all"
          >
            View all posts →
          </Link>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {displayPosts.map((post, i) => {
            const isPlaceholder = post.id < 0
            const CardWrapper = isPlaceholder ? 'div' : Link
            const cardProps = isPlaceholder ? {} : { href: `/blogs/${post.slug}` }

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <CardWrapper {...(cardProps as any)} className="group block h-full">
                  <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden bg-[#8B31C7]/10">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <PlaceholderCover category={post.category} />
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      {post.category && (
                        <span className={`text-[10px] uppercase tracking-[2px] font-bold mb-2 ${categoryColors[post.category] ?? 'text-[#8B31C7]'}`}>
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-lg font-black text-[#2E2A26] leading-tight mb-2 group-hover:text-[#8B31C7] transition-colors flex-1">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-[#8C857C] text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                      )}
                      <div className="flex items-center justify-between pt-3 border-t border-[#8C857C]/10">
                        <span className="text-xs text-[#8C857C]">
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                            : ''}
                        </span>
                        <span className="text-xs font-semibold text-[#8B31C7] group-hover:translate-x-1 transition-transform inline-block">
                          Read →
                        </span>
                      </div>
                    </div>
                  </article>
                </CardWrapper>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
