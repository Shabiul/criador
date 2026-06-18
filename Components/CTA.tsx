'use client'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect } from 'react'
import MagneticButton from './MagneticButton'

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

export default function CTA() {
  return (
    <section className="py-4 md:py-6 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto rounded-[32px] md:rounded-[40px] relative overflow-hidden bg-[#2E2A26] p-8 md:p-12 lg:p-20"
      >
        {/* Background orbs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#8B31C7]/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#8B31C7]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,49,199,0.15),transparent)]" />

        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-6"
          >
            Let's Work Together
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white"
          >
            Your Next Brand Is
            <span className="block text-[#8B31C7]">One Call Away.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-white/50 text-lg max-w-xl mx-auto mb-10"
          >
            Free 30-min strategy call. No contracts. No fluff. Just real results for your brand.
          </motion.p>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            {[
              { to: 120, suffix: '+', label: 'Projects' },
              { to: 50, suffix: '+', label: 'Happy Clients' },
              { to: 5, suffix: '★', label: 'Average Rating' },
            ].map(({ to, suffix, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-black text-white"><CountUp to={to} suffix={suffix} /></p>
                <p className="text-white/40 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton>
              <a
                href="tel:+919632498185"
                className="inline-block px-10 py-5 bg-[#8B31C7] hover:bg-[#7A28B0] text-white rounded-full text-base font-semibold shadow-lg shadow-[#8B31C7]/30 hover:shadow-[#8B31C7]/50 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Book a Free Strategy Call →
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#portfolio"
                className="inline-block px-10 py-5 border border-white/20 rounded-full text-base text-white/70 hover:text-white hover:border-white/40 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                View Our Work
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
