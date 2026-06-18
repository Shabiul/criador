'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    q: 'What services does Criador offer?',
    a: 'Criador offers business consulting, branding, catalog design, visiting cards, label designing, social media marketing, SEO, AIEO, GEO, web hosting, and e-commerce development — everything a modern business needs to build a strong brand presence and grow online.',
  },
  {
    q: 'Where is Criador Creative Studio located?',
    a: 'Criador Creative Studio is based in Haralur, Bengaluru, Karnataka, India. We serve clients across India and internationally via remote collaboration.',
  },
  {
    q: 'How long does a branding project take?',
    a: 'A standard branding project takes 2–4 weeks from discovery to final delivery, depending on project scope and revision cycles. Larger projects like full digital experiences may take 6–8 weeks.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'Our pricing is project-based. We provide a detailed quote after an initial strategy call to understand your specific needs, goals, and timeline. No hidden fees — ever.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Absolutely. We work with businesses of all sizes — from early-stage startups building their first brand identity to established companies looking to refresh their presence for a new market.',
  },
  {
    q: 'How does the design process work?',
    a: 'We follow a 5-step process: Discovery, Research, Strategy, Design, and Launch. Every project kicks off with a free 30-minute strategy call to align on vision before any design work begins.',
  },
  {
    q: 'Does Criador offer SEO, AIEO, and GEO services?',
    a: 'Yes. We provide traditional SEO (Search Engine Optimization), AIEO (AI Engine Optimization for tools like ChatGPT and Gemini), and GEO (Generative Engine Optimization for AI-generated search results) — ensuring your brand is discoverable across all modern search surfaces.',
  },
  {
    q: 'How can I contact Criador Creative Studio?',
    a: 'Reach out to us via email, phone, WhatsApp, or the contact form below. Our team generally responds within one business day.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes. Every project includes structured revision rounds. We work collaboratively to make sure the final result exceeds your expectations before we close out a project.',
  },
  {
    q: 'Can Criador handle both design and digital marketing for my brand?',
    a: 'Yes — that\'s exactly what sets us apart. We offer end-to-end brand building under one roof: from logo design and brand identity to social media marketing, SEO, and e-commerce. You get a consistent brand voice and look across every touchpoint without juggling multiple agencies.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-4 md:py-6 px-4 md:px-6" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2E2A26] mb-4">
            Everything You Want to <span className="text-[#8B31C7]">Know</span>
          </h2>
          <p className="text-[#8C857C] text-base max-w-md mx-auto">
            Can't find your answer? <a href="#contact" className="text-[#8B31C7] hover:underline underline-offset-2">Just ask us directly →</a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden"
              itemScope itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-[#8B31C7]/[0.03] transition-colors duration-200"
              >
                <span className="flex items-start gap-4 pr-8">
                  <span className={`text-xs font-black mt-0.5 shrink-0 transition-colors duration-200 ${open === i ? 'text-[#8B31C7]' : 'text-[#8C857C]/40'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-[#2E2A26] text-base" itemProp="name">{faq.q}</span>
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full border border-[#8C857C]/30 flex items-center justify-center text-[#8C857C] transition-all duration-300 ${
                    open === i ? 'bg-[#8B31C7] border-[#8B31C7] text-white rotate-45' : ''
                  }`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="px-8 pb-7 text-[#8C857C] leading-relaxed text-sm" itemProp="text">
                      {faq.a}
                    </p>
                  </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
