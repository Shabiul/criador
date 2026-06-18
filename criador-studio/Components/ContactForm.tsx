'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'


export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-4 md:py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#8B31C7]/30 bg-[#8B31C7]/8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B31C7] animate-pulse" />
              <p className="uppercase tracking-[3px] text-[#8B31C7] text-[11px] font-bold">Get In Touch</p>
            </div>

            {/* Headline */}
            <h2 className="text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-[#2E2A26] mb-6">
              Your <span className="text-[#8B31C7]">brand</span> deserves{' '}
              <br className="hidden md:block" />
              to be{' '}
              <span className="text-[#8B31C7]">unforgettable.</span>
              <br />
              Let's make it happen.
            </h2>

            {/* Sub-copy */}
            <p className="text-[#8C857C] text-lg leading-relaxed mb-10 max-w-sm">
              Tell us about your business — we'll get back within <span className="font-semibold text-[#2E2A26]">24 hours</span> with a tailored growth plan.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: 'Email Us', value: 'hello@criador.studio', href: 'mailto:hello@criador.studio',
                  icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                },
                {
                  label: 'Response Time', value: 'Within 24 hours', href: null,
                  icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                },
                {
                  label: 'LinkedIn', value: 'linkedin.com/company/criador', href: 'https://www.linkedin.com/company/criador',
                  icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
                },
              ].map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8B31C7]/10 border border-[#8B31C7]/20 flex items-center justify-center text-[#8B31C7] shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#2E2A26]">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-[#8C857C] text-sm hover:text-[#8B31C7] transition-colors">{value}</a>
                    ) : (
                      <p className="text-[#8C857C] text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#2E2A26] mb-3">Thank You! 🎉</h3>
                <p className="text-[#8C857C] text-base leading-relaxed">We've received your message and will connect with you shortly. Thank you for reaching out!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-[#8C857C] uppercase tracking-wider mb-2">Full Name *</label>
                  <input type="text" name="name" required placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-[#8C857C]/25 bg-[#D6CFC4]/30 text-[#2E2A26] text-sm placeholder-[#8C857C] focus:outline-none focus:border-[#8B31C7] focus:ring-2 focus:ring-[#8B31C7]/10 transition-all" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8C857C] uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" name="email" required placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#8C857C]/25 bg-[#D6CFC4]/30 text-[#2E2A26] text-sm placeholder-[#8C857C] focus:outline-none focus:border-[#8B31C7] focus:ring-2 focus:ring-[#8B31C7]/10 transition-all" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8C857C] uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-[#8C857C]/25 bg-[#D6CFC4]/30 text-[#2E2A26] text-sm placeholder-[#8C857C] focus:outline-none focus:border-[#8B31C7] focus:ring-2 focus:ring-[#8B31C7]/10 transition-all" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8C857C] uppercase tracking-wider mb-2">Message *</label>
                  <textarea name="message" required rows={4} placeholder="Describe your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl border border-[#8C857C]/25 bg-[#D6CFC4]/30 text-[#2E2A26] text-sm placeholder-[#8C857C] focus:outline-none focus:border-[#8B31C7] focus:ring-2 focus:ring-[#8B31C7]/10 transition-all resize-none" />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: loading ? 1 : 0.97 }}
                  whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? 'none' : '0 8px 30px rgba(139,49,199,0.4)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-full py-4 bg-[#8B31C7] hover:bg-[#7A28B0] disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-full font-medium text-base transition-colors duration-200 shadow-lg shadow-[#8B31C7]/20 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message →'}
                </motion.button>

                <p className="text-center text-xs text-[#8C857C]">
                  Free 30-min strategy call · No commitment required
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
