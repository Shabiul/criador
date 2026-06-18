'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const reviews = [
  {
    quote: "Before Criador, we were invisible. Six months later, clients recognize us everywhere. That's not design — that's witchcraft.",
    name: 'Arjun Mehta',
    role: 'Founder, Zinox Kitchen',
    initials: 'AM',
    gradient: 'from-[#8B31C7] to-[#A040E0]',
  },
  {
    quote: "We went from 'just another startup' to a brand people actually remember. Our Instagram DMs tripled in the first month.",
    name: 'Priya Sharma',
    role: 'CEO, Learnford Academy',
    initials: 'PS',
    gradient: 'from-[#2E4057] to-[#4A6FA5]',
  },
  {
    quote: "I showed our new branding to an investor. He said — 'This looks like a million-dollar company.' We hadn't even launched yet.",
    name: 'Rahul Verma',
    role: 'Co-Founder, Verifyer',
    initials: 'RV',
    gradient: 'from-[#1A4731] to-[#2D7A52]',
  },
  {
    quote: "The label designs they created for us outsell competitors 3:1 on shelves. People pick up our product first. Every. Single. Time.",
    name: 'Nisha Kapoor',
    role: 'Director, Nutri Grace',
    initials: 'NK',
    gradient: 'from-[#7B4F12] to-[#A0671A]',
  },
  {
    quote: "Our social media went from 200 to 12,000 followers in 90 days. The content Criador built for us is genuinely addictive.",
    name: 'Sameer Ali',
    role: 'Founder, HyperBesto',
    initials: 'SA',
    gradient: 'from-[#1D3461] to-[#2952A3]',
  },
  {
    quote: "I've worked with five agencies before. Criador is the only one that treated my brand like it was their own.",
    name: 'Divya Nair',
    role: 'Owner, Decorous Events',
    initials: 'DN',
    gradient: 'from-[#4A1942] to-[#7B2D73]',
  },
]

const INTERVAL = 5500

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const frame = () => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
      if (elapsed < INTERVAL) requestAnimationFrame(frame)
    }
    const raf = requestAnimationFrame(frame)
    const t = setTimeout(() => setActive((p) => (p + 1) % reviews.length), INTERVAL)
    return () => { clearTimeout(t); cancelAnimationFrame(raf) }
  }, [active])

  const r = reviews[active]

  return (
    <section id="testimonials" className="pt-4 pb-2 md:pt-6 md:pb-3 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-5"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-5">
            Social Proof
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2E2A26]">
            Don't Take <span className="text-[#8B31C7]">Our Word</span> For It
          </h2>
        </motion.div>

        {/* Featured review */}
        <div className="glass rounded-[40px] p-10 lg:p-16 relative overflow-hidden mb-6 border border-[#8C857C]/15">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,49,199,0.06),transparent_60%)]" />

          {/* Large quote mark */}
          <div
            className="absolute -top-2 -left-1 text-9xl font-black leading-none select-none pointer-events-none"
            style={{ color: 'rgba(139,49,199,0.07)' }}
          >
            "
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#8B31C7] text-base">★</span>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl lg:text-2xl text-[#2E2A26] leading-relaxed mb-5 max-w-4xl mx-auto text-center font-medium"
              >
                &ldquo;{r.quote}&rdquo;
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center gap-4"
              >
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center font-bold text-sm shrink-0 text-white`}>
                  {r.initials}
                </div>
                <div className="text-left">
                  <p className="font-bold text-[#2E2A26] text-sm">{r.name}</p>
                  <p className="text-[#8C857C] text-xs">{r.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot nav + progress */}
            <div className="flex justify-center gap-2 mt-5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 overflow-hidden relative ${i === active ? 'w-16 bg-[#8C857C]/25' : 'w-2 bg-[#8C857C]/25 hover:bg-[#8C857C]/50'}`}
                >
                  {i === active && (
                    <span
                      className="absolute inset-y-0 left-0 bg-[#8B31C7] rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mini review grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setActive(i)}
              className={`glass rounded-2xl p-5 cursor-pointer transition-all duration-300 border ${
                i === active
                  ? 'border-[#8B31C7]/35 shadow-md shadow-[#8B31C7]/10'
                  : 'border-transparent hover:border-[#8C857C]/20'
              }`}
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-[#8B31C7] text-xs">★</span>
                ))}
              </div>
              <p className="text-[#2E2A26] text-sm leading-relaxed line-clamp-3 mb-4">&ldquo;{rev.quote}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${rev.gradient} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>
                  {rev.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2E2A26]">{rev.name}</p>
                  <p className="text-[10px] text-[#8C857C]">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
