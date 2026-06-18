'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/lib/wordpress'

function readingTime(content: string) {
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [copied, setCopied] = useState(false)

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="bg-[#F2EDE6] min-h-screen overflow-hidden">

      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#8B31C7] z-50"
      />

      {/* Hero */}
      <div className="pt-28 pb-0">
        <div className="max-w-3xl mx-auto px-4 md:px-6">

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/blogs" className="inline-flex items-center gap-1.5 text-sm text-[#8B31C7] font-semibold mb-8 hover:-translate-x-1 transition-transform duration-200 group">
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Back to Blog
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-5">
              {post.category && (
                <span className="bg-[#8B31C7]/10 text-[#8B31C7] text-[10px] uppercase tracking-[2.5px] font-bold px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              )}
              <span className="text-xs text-[#8C857C]">{readingTime(post.content)} min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2E2A26] leading-[1.05] tracking-tight mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-[#8C857C] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">{post.excerpt}</p>
            )}

            {/* Meta row */}
            <div className="flex items-center justify-between py-4 border-y border-[#2E2A26]/8 mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8B31C7] flex items-center justify-center text-white text-xs font-black">C</div>
                <div>
                  <p className="text-xs font-bold text-[#2E2A26]">Criador Studio</p>
                  <p className="text-[10px] text-[#8C857C]">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={copyLink}
                className="flex items-center gap-2 text-xs font-semibold text-[#8C857C] hover:text-[#8B31C7] transition-colors px-3 py-2 rounded-xl hover:bg-[#8B31C7]/8"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {copied ? 'Copied!' : 'Copy link'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Cover image — full width */}
        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-5xl mx-auto px-4 md:px-6 mt-10"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-3xl object-cover max-h-[520px] shadow-xl"
            />
          </motion.div>
        )}
      </div>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="max-w-3xl mx-auto px-4 md:px-6 py-14"
      >
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-black prose-headings:text-[#2E2A26] prose-headings:tracking-tight
            prose-p:text-[#3D3730] prose-p:leading-[1.85]
            prose-a:text-[#8B31C7] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#2E2A26] prose-strong:font-black
            prose-blockquote:border-l-4 prose-blockquote:border-[#8B31C7] prose-blockquote:bg-[#8B31C7]/5 prose-blockquote:rounded-r-2xl prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic
            prose-img:rounded-2xl prose-img:shadow-lg
            prose-li:text-[#3D3730]
            prose-hr:border-[#2E2A26]/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share strip */}
        <div className="mt-12 pt-8 border-t border-[#2E2A26]/8 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm font-bold text-[#2E2A26]">Found this helpful? Share it.</p>
          <div className="flex items-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#8C857C] hover:text-[#2E2A26] transition-colors px-4 py-2 rounded-xl border border-[#2E2A26]/10 hover:border-[#2E2A26]/30 hover:bg-white"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(post.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#8C857C] hover:text-[#0A66C2] transition-colors px-4 py-2 rounded-xl border border-[#2E2A26]/10 hover:border-[#0A66C2]/30 hover:bg-white"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <button
              onClick={copyLink}
              className="flex items-center gap-2 text-xs font-semibold text-[#8C857C] hover:text-[#8B31C7] transition-colors px-4 py-2 rounded-xl border border-[#2E2A26]/10 hover:border-[#8B31C7]/30 hover:bg-white"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-4 md:px-6 pb-20"
      >
        <div className="bg-[#2E2A26] rounded-3xl px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle at 80% 50%, #8B31C7 0%, transparent 60%)'}} />
          <div className="relative">
            <p className="uppercase tracking-[3px] text-[#8B31C7] text-xs font-bold mb-3">Criador Creative Studio</p>
            <h3 className="text-2xl md:text-4xl font-black text-white leading-tight mb-3">
              Ready to Build a Brand<br />People Remember?
            </h3>
            <p className="text-[#9B9591] text-sm leading-relaxed max-w-sm">
              We craft bold identities, stunning visuals, and digital experiences that drive real results for forward-thinking brands.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0 relative">
            <Link
              href="/#contact"
              className="bg-[#8B31C7] text-white font-bold px-10 py-4 rounded-full text-sm hover:bg-[#7a28b5] transition-all hover:scale-105 text-center whitespace-nowrap shadow-lg shadow-[#8B31C7]/30"
            >
              Start a Project →
            </Link>
            <Link
              href="/#portfolio"
              className="border border-white/20 text-white font-semibold px-10 py-4 rounded-full text-sm hover:border-white/40 hover:bg-white/5 transition-all text-center whitespace-nowrap"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </motion.div>

    </main>
  )
}
