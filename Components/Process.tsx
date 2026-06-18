'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep dive into your brand, goals, and target audience to understand what makes you different.',
    bg: 'bg-[#8B31C7]',
    iconBg: 'bg-[#8B31C7]',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Research',
    desc: 'Competitive analysis and market positioning to find your unique space in the market.',
    bg: 'bg-[#1D3461]',
    iconBg: 'bg-[#1D3461]',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Strategy',
    desc: 'Creative direction, messaging framework, and a design blueprint tailored to your audience.',
    bg: 'bg-[#1A4731]',
    iconBg: 'bg-[#1A4731]',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M7 20V10" /><path d="M12 20V4" /><path d="M17 20V14" />
        <path d="M2 10l5-5 5 7 5-6 5 4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Design',
    desc: 'Crafting every visual asset with precision — from logos to full digital systems.',
    bg: 'bg-[#7B4F12]',
    iconBg: 'bg-[#7B4F12]',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="3.5" />
        <path d="M10 10L3 17l1 3 3-1 7-7" />
        <path d="M15 5l4 4" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Delivery, implementation, and ongoing brand support so you hit the ground running.',
    bg: 'bg-[#3D2B1F]',
    iconBg: 'bg-[#3D2B1F]',
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="py-4 md:py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 md:mb-6"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-5">How We Work</p>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2E2A26]">
              Our Creative <span className="text-[#8B31C7]">Process</span>
            </h2>
            <p className="text-[#8C857C] max-w-xs text-sm leading-relaxed border-l-2 border-[#8B31C7]/30 pl-4">
              A proven 5-step system that turns ideas into brands people remember.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[9%] right-[9%] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#8B31C7]/25 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="glass rounded-3xl p-5 h-full hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-transparent hover:border-[#8B31C7]/20">

                  {/* Icon + number row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center shrink-0 shadow-md`}>
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black text-[#8B31C7]/20">{step.num}</span>
                  </div>

                  <h3 className="text-base font-black mb-2 text-[#2E2A26] tracking-tight">{step.title}</h3>
                  <p className="text-[#8C857C] text-xs leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-8 z-10 w-6 h-6 items-center justify-center text-[#8B31C7]/30 text-lg">
                    ›
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 md:mt-6 glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#8B31C7]/10"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl">⏱️</span>
            <p className="text-[#2E2A26] font-semibold">Average turnaround: <span className="text-[#8B31C7]">7–14 days</span> from brief to delivery</p>
          </div>
          <a href="#contact" className="inline-block px-7 py-3.5 bg-[#8B31C7] text-white rounded-full text-sm font-semibold hover:bg-[#7A28B0] transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-[#8B31C7]/20">
            Start Your Project →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
