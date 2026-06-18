'use client'
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { bp } from '@/lib/bp'

type Work = { category: string; title: string; year: string; wide: boolean; image: string; tag: string; color: string }

const row1: Work[] = [
  { category: 'Branding', title: 'Luxe Studio', year: '2026', wide: false, image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?w=800&h=600&fit=crop', tag: '🏆 Best of 2026', color: '#8B31C7' },
  { category: 'UI/UX Design', title: 'Fintech App', year: '2025', wide: false, image: bp('/portfolio/fintech.jpg'), tag: '📱 App Design', color: '#2952A3' },
]

const row2: Work[] = [
  { category: 'Packaging', title: 'Skincare Line', year: '2025', wide: false, image: bp('/portfolio/skincare.jpg'), tag: '✨ Packaging', color: '#256B47' },
  { category: 'Social Media', title: 'Fashion Brand', year: '2025', wide: false, image: bp('/portfolio/fashion.jpg'), tag: '🔥 Viral Content', color: '#7B2D73' },
  { category: 'Event Branding', title: 'Gala Night', year: '2024', wide: false, image: bp('/portfolio/Gala.jpg'), tag: '🎯 Event Brand', color: '#A0671A' },
]

const allWorks = [...row1, ...row2]
const filterTabs = ['All', 'Branding', 'UI/UX Design', 'Packaging', 'Social Media', 'Event Branding']

function PortfolioCard({ work, index }: { work: Work; index: number }) {
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer h-[420px]`}
    >
      {/* Image */}
      <img
        src={work.image}
        alt={work.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/90 transition-all duration-500" />

      {/* Color accent line top */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: work.color }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
      />

      {/* Tag pill */}
      <div className="absolute top-5 left-5">
        <span className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md bg-white/15 text-white border border-white/20">
          {work.tag}
        </span>
      </div>

      {/* Year badge */}
      <div className="absolute top-5 right-5">
        <span className="px-3 py-1.5 rounded-full text-xs font-mono backdrop-blur-md bg-black/30 text-white/60 border border-white/10">
          {work.year}
        </span>
      </div>

      {/* Content bottom */}
      <div className="absolute inset-x-0 bottom-0 p-7">
        <motion.p
          className="text-xs uppercase tracking-[3px] mb-2 font-medium"
          style={{ color: work.color }}
        >
          {work.category}
        </motion.p>
        <h3 className={`font-black text-white leading-none mb-4 ${work.wide ? 'text-5xl' : 'text-3xl'}`}>
          {work.title}
        </h3>

        {/* CTA — slides up on hover */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
          transition={{ duration: 0.25 }}
          className="flex items-center gap-2"
        >
          <span className="text-sm font-semibold text-white">View Case Study</span>
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-white border border-white/30 text-xs">→</span>
        </motion.a>
      </div>

      {/* Shimmer on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${work.color}20, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s',
        }}
      />
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filtered = activeFilter === 'All' ? allWorks : allWorks.filter((w) => w.category === activeFilter)

  return (
    <section id="portfolio" className="py-4 md:py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-5">Selected Work</p>
          <div className="flex items-end justify-between flex-wrap gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2E2A26]">
              Work That <span className="text-[#8B31C7]">Speaks</span>
            </h2>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tab
                  ? 'bg-[#8B31C7] text-white shadow-md shadow-[#8B31C7]/25'
                  : 'bg-[#2E2A26]/5 text-[#8C857C] hover:text-[#2E2A26] hover:bg-[#2E2A26]/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((work, index) => (
              <PortfolioCard key={work.title} work={work} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 md:mt-6 glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#8B31C7]/10"
        >
          <div>
            <p className="text-xl font-black text-[#2E2A26]">Want results like these?</p>
            <p className="text-[#8C857C] text-sm mt-1">Your brand deserves to be unforgettable. Let's make it happen.</p>
          </div>
          <a href="#contact" className="px-8 py-4 bg-[#8B31C7] hover:bg-[#7A28B0] text-white rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 whitespace-nowrap inline-block">
            Start Your Project →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
