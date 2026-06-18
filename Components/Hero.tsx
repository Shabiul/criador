'use client'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useAnimation, useInView, animate } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)
  useEffect(() => {
    if (inView) animate(count, to, { duration: 2, ease: 'easeOut' })
  }, [inView, count, to])
  return <motion.span ref={ref}>{rounded}</motion.span>
}
import TextReveal from './TextReveal'
import MagneticButton from './MagneticButton'
import { bp } from '@/lib/bp'

const previews = [
  { image: bp('/portfolio/luxe.jpg'), label: 'Luxe Studio', category: 'Branding' },
  { image: bp('/portfolio/fintech.jpg'), label: 'Fintech App', category: 'UI/UX Design' },
  { image: bp('/portfolio/skincare.jpg'), label: 'Skincare Line', category: 'Packaging' },
  { image: bp('/portfolio/fashion.jpg'), label: 'Fashion Brand', category: 'Social Media' },
]

function FloatingCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const shimmerControls = useAnimation()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 100, damping: 30 })

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % previews.length), 3200)
    return () => clearInterval(t)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-6 relative overflow-hidden pt-20">

      {/* Grain texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
        opacity: 0.5,
      }} />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(139,49,199,0.10)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: '#D6CFC4' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#8B31C718,transparent)]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10 w-full py-6 md:py-12">

        {/* Left */}
        <div>
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full border border-[#8B31C7]/30 bg-[#8B31C7]/8 shadow-sm shadow-[#8B31C7]/10"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-[#8B31C7]"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <p className="uppercase tracking-[3px] text-[#8B31C7] text-[11px] font-bold">Business Growth Agency</p>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-[5.25rem] font-black leading-[1.05] tracking-tight text-[#2E2A26] relative">
            {/* Line 1 — soft lead-in */}
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-[#8C857C] tracking-wide mb-2">
              <TextReveal text="We Help Your" delay={0.1} />
            </span>

            {/* Line 2 — Business in */}
            <span style={{ display: 'block' }}>
              <TextReveal text="Business" delay={0.25} wordClassName="text-[#8B31C7]" />
              {' '}
              <TextReveal text="in" delay={0.38} wordClassName="text-[#2E2A26]" />
            </span>

            {/* Line 3 — Increasing */}
            <span style={{ display: 'block' }}>
              <TextReveal text="Increasing" delay={0.45} />
            </span>

            {/* Line 4 — Profits. with highlight pill + underline */}
            <span style={{ display: 'inline-block', position: 'relative', marginTop: '0.1em' }}>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="absolute inset-0 -mx-3 rounded-xl bg-[#8B31C7]/10 -z-10"
              />
              <TextReveal
                text="Profits."
                delay={0.56}
                wordClassName="text-[#8B31C7]"
                onComplete={() => shimmerControls.start({
                  x: ['-100%', '200%'],
                  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
                })}
              />
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#8B31C7] via-[#C044E0] to-[#8B31C7]"
              />
            </span>
            {/* Shimmer sweep */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
                backgroundSize: '200% 100%',
                mixBlendMode: 'overlay',
              }}
              initial={{ x: '-100%' }}
              animate={shimmerControls}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-6 md:mt-8 text-[#8C857C] text-base md:text-lg leading-relaxed max-w-md"
          >
            Business consulting, branding, social media marketing, SEO, and digital experiences crafted for startups and businesses in Bengaluru and across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-wrap gap-3 md:gap-4 mt-8 md:mt-10"
          >
            <MagneticButton>
              <a href="#portfolio" className="inline-block px-7 md:px-9 py-3.5 md:py-4 bg-[#8B31C7] hover:bg-[#7A28B0] text-white rounded-full text-sm md:text-base font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#8B31C7]/25">
                View Portfolio
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="inline-block px-7 md:px-9 py-3.5 md:py-4 border border-[#8C857C]/35 rounded-full text-sm md:text-base font-semibold text-[#2E2A26] hover:bg-[#2E2A26]/5 hover:border-[#8C857C]/60 transition-all duration-200">
                Start a Project →
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-8 md:gap-12 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#8C857C]/15"
          >
            {([{ to: 120, suffix: '+', label: 'Projects' }, { to: 50, suffix: '+', label: 'Clients' }]).map(({ to, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              >
                <p className="text-2xl md:text-3xl font-black text-[#2E2A26]"><CountUp to={to} suffix={suffix} /></p>
                <p className="text-[#8C857C] text-xs md:text-sm mt-1">{label}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <p className="text-2xl md:text-3xl font-black text-[#2E2A26]">
                4.9<span className="text-lg md:text-xl align-middle">★</span>
              </p>
              <p className="text-[#8C857C] text-xs md:text-sm mt-1">Rating</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — 3D tilt card */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: 'blur(12px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
          >
            <div className="glass rounded-[40px] p-4 relative overflow-hidden border border-[#8C857C]/20">
              <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={previews[current].image}
                    alt={previews[current].label}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`label-${current}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-[10px] uppercase tracking-widest text-[#8B31C7] mb-1">{previews[current].category}</p>
                      <p className="text-white font-black text-xl">{previews[current].label}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {previews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-[#8B31C7]' : 'w-2 bg-[#8C857C]/30'}`}
                  />
                ))}
              </div>

              <div className="flex gap-2 mt-3">
                {previews.map((p, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`flex-1 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${i === current ? 'border-[#8B31C7]' : 'border-transparent opacity-40 hover:opacity-70'}`}>
                    <img src={p.image} alt={p.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <FloatingCard className="absolute -top-6 -right-6" delay={1.2}>
            <div className="glass rounded-2xl px-5 py-4 border border-[#8C857C]/20">
              <p className="text-xs text-[#8C857C]">Trusted by</p>
              <p className="text-2xl font-black gradient-text">50+ Brands</p>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute -bottom-6 -left-6" delay={1.4}>
            <div className="glass rounded-2xl px-5 py-4 flex items-center gap-3 border border-[#8C857C]/20">
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <p className="text-sm font-semibold text-[#2E2A26]">Available for Projects</p>
            </div>
          </FloatingCard>
        </motion.div>

      </div>

      {/* Mobile mini-card — visible only on small screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="lg:hidden mx-auto w-full max-w-sm mb-8 relative z-10"
      >
        <div className="glass rounded-3xl p-3 border border-[#8C857C]/20">
          <div className="relative w-full h-44 rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={previews[current].image}
                alt={previews[current].label}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-[9px] uppercase tracking-widest text-[#8B31C7]">{previews[current].category}</p>
              <p className="text-white font-black text-base">{previews[current].label}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {previews.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-5 bg-[#8B31C7]' : 'w-1.5 bg-[#8C857C]/30'}`} />
            ))}
          </div>
        </div>
      </motion.div>


    </section>
  )
}
