'use client'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { bp } from '@/lib/bp'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(to)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = to / (duration / step)
    setCount(0)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.round(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, to])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { to: 120, suffix: '+', label: 'Projects Completed' },
  { to: 50, suffix: '+', label: 'Happy Clients' },
  { to: 4, suffix: '+', label: 'Years Experience' },
  { to: 5, suffix: '★', label: 'Client Rating' },
]

const values = [
  {
    title: 'Strategy First',
    desc: 'Every design decision is backed by brand strategy.',
    icon: (
      <svg className="w-5 h-5 text-[#8B31C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Bold Execution',
    desc: 'We craft with precision, detail, and intention.',
    icon: (
      <svg className="w-5 h-5 text-[#8B31C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    title: 'Real Results',
    desc: 'Our work drives growth, not just impressions.',
    icon: (
      <svg className="w-5 h-5 text-[#8B31C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="py-4 md:py-6 px-4 md:px-6" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-4 md:mb-6"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-5">About Criador</p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#2E2A26]">
              We Create Brands<br />That People{' '}
              <span className="text-[#8B31C7]">Remember.</span>
            </h2>
            <p className="text-[#8C857C] max-w-sm leading-relaxed border-l-2 border-[#8B31C7]/30 pl-4">
              A premium creative studio combining strategy, design, and execution for modern brands.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-[#2E2A26] text-lg md:text-xl leading-relaxed mb-6"
            >
              <span itemProp="name" className="sr-only">Criador Creative Studio</span>
              <span itemProp="description">
              Criador is a premium creative studio based in Bengaluru, India, focused on modern branding, UI/UX design,
              marketing visuals, and digital experiences that drive real results for
              forward-thinking brands.
              </span>
            </motion.p>

            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-5 flex items-start gap-4 border border-transparent hover:border-[#8B31C7]/15 transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#8B31C7]/10 border border-[#8B31C7]/20 flex items-center justify-center shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-bold text-[#2E2A26] mb-1">{v.title}</p>
                    <p className="text-[#8C857C] text-sm">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6 text-center border border-transparent hover:border-[#8B31C7]/15 transition-colors duration-300"
                >
                  <h3 className="text-4xl font-black text-[#2E2A26]">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </h3>
                  <p className="text-[#8C857C] mt-2 text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6 border border-[#8B31C7]/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center bg-[#F2EDE6] rounded-sm px-2 py-1">
                  <img src={bp('/criador_logo.png')} alt="Criador" className="h-6 w-auto" style={{ mixBlendMode: 'normal' }} loading="lazy" />
                </span>
                <span className="ml-auto text-xs text-green-700 border border-green-400/40 bg-green-50 rounded-full px-3 py-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                  Available for Projects
                </span>
              </div>
              <p className="text-[#8C857C] text-sm leading-relaxed">
                We combine strategic thinking with bold design — from the first logo sketch to a fully deployed digital experience. Every project built with intention and craft.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
