'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { getAllPosts, BlogPost } from '@/lib/wordpress'

function readingTime(content: string) {
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden animate-pulse">
      <div className="aspect-[16/9] bg-[#8B31C7]/10" />
      <div className="p-6 space-y-3">
        <div className="h-3 bg-[#8C857C]/15 rounded-full w-1/4" />
        <div className="h-5 bg-[#8C857C]/15 rounded-full w-3/4" />
        <div className="h-4 bg-[#8C857C]/10 rounded-full w-full" />
        <div className="h-4 bg-[#8C857C]/10 rounded-full w-2/3" />
      </div>
    </div>
  )
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then((data) => { setPosts(data); setLoading(false) })
  }, [])

  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <Navbar />
      <main className="bg-[#F2EDE6] min-h-screen overflow-hidden">

        {/* Hero header */}
        <div className="pt-28 pb-12 px-4 md:px-6 border-b border-[#2E2A26]/8">
          <div className="max-w-7xl mx-auto flex items-end justify-between flex-wrap gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="uppercase tracking-[4px] text-[#8B31C7] text-xs font-bold mb-3">From The Blog</p>
              <h1 className="text-5xl md:text-7xl font-black text-[#2E2A26] tracking-tight leading-none">
                Insights &<br /><span className="text-[#8B31C7]">Ideas</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#8C857C] max-w-xs text-sm leading-relaxed border-l-2 border-[#8B31C7]/30 pl-4"
            >
              Branding tips, design insights, and creative strategies for modern businesses.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">

          {loading ? (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl overflow-hidden animate-pulse h-96" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            </div>
          ) : posts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-32 rounded-3xl border border-dashed border-[#8C857C]/20"
            >
              <p className="text-[#8C857C] text-xl font-medium">Blog posts coming soon!</p>
            </motion.div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                  className="mb-14"
                >
                  <Link href={`/blogs/${featured.slug}`} className="group block">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 grid md:grid-cols-2 min-h-[420px]">
                      <div className="overflow-hidden bg-[#8B31C7]/10 relative">
                        {featured.coverImage ? (
                          <img src={featured.coverImage} alt={featured.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                          />
                        ) : (
                          <div className="w-full h-full min-h-[280px] flex items-center justify-center bg-gradient-to-br from-[#8B31C7]/20 via-[#C044E0]/10 to-[#8B31C7]/5">
                            <span className="text-[#8B31C7]/30 text-9xl font-black">C</span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#8B31C7] text-white text-[10px] uppercase tracking-[2px] font-bold px-3 py-1.5 rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          {featured.category && (
                            <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#8B31C7] mb-4 block">{featured.category}</span>
                          )}
                          <h2 className="text-2xl md:text-3xl font-black text-[#2E2A26] leading-tight mb-4 group-hover:text-[#8B31C7] transition-colors duration-300">
                            {featured.title}
                          </h2>
                          {featured.excerpt && (
                            <p className="text-[#8C857C] leading-relaxed line-clamp-3 mb-6">{featured.excerpt}</p>
                          )}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-[#8C857C]/10">
                          <div className="flex items-center gap-3 text-xs text-[#8C857C]">
                            <span>{featured.publishedAt ? new Date(featured.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
                            <span className="w-1 h-1 rounded-full bg-[#8C857C]/40 inline-block" />
                            <span>{readingTime(featured.content)} min read</span>
                          </div>
                          <span className="text-sm font-bold text-[#8B31C7] group-hover:translate-x-1 transition-transform duration-300 inline-block">
                            Read Article →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Rest of posts */}
              {rest.length > 0 && (
                <>
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                    className="text-xs uppercase tracking-[3px] font-bold text-[#8C857C] mb-6"
                  >
                    More Articles
                  </motion.p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((post, i) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                      >
                        <Link href={`/blogs/${post.slug}`} className="group block h-full">
                          <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                            <div className="aspect-[16/9] overflow-hidden bg-[#8B31C7]/10 relative">
                              {post.coverImage ? (
                                <img src={post.coverImage} alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#8B31C7]/20 to-[#C044E0]/10">
                                  <span className="text-[#8B31C7]/40 text-5xl font-black">C</span>
                                </div>
                              )}
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                              {post.category && (
                                <span className="text-[10px] uppercase tracking-[2px] font-bold text-[#8B31C7] mb-2">{post.category}</span>
                              )}
                              <h2 className="text-lg font-black text-[#2E2A26] leading-tight mb-2 group-hover:text-[#8B31C7] transition-colors duration-300 flex-1">
                                {post.title}
                              </h2>
                              {post.excerpt && (
                                <p className="text-[#8C857C] text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                              )}
                              <div className="flex items-center justify-between pt-3 border-t border-[#8C857C]/10">
                                <div className="flex items-center gap-2 text-xs text-[#8C857C]">
                                  <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : ''}</span>
                                  <span className="w-1 h-1 rounded-full bg-[#8C857C]/40 inline-block" />
                                  <span>{readingTime(post.content)} min read</span>
                                </div>
                                <span className="text-xs font-semibold text-[#8B31C7] group-hover:translate-x-1 transition-transform duration-300 inline-block">
                                  Read →
                                </span>
                              </div>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
