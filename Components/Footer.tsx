'use client'
import { motion } from 'framer-motion'
import { bp } from '@/lib/bp'

const serviceLinks = [
  'Branding', 'Catalog Designs', 'Visiting Cards', 'Label Designing',
  'Social Media Marketing', 'SEO', 'Web Hosting', 'E-Commerce',
]

const companyLinks = ['About', 'Portfolio', 'Process', 'Contact']

const socials = [
  {
    label: 'Instagram', href: '#',
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    label: 'Facebook', href: '#',
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'LinkedIn', href: '#',
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'Email', href: 'mailto:hello@criador.studio',
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#1E1B18] pt-8 md:pt-12 pb-8 px-4 md:px-6 relative overflow-hidden">

      {/* Background texture orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8B31C7]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8B31C7]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Top headline strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-12 pb-8 md:pb-10 border-b border-white/8"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-xs font-semibold mb-5">Let's Connect</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight">
              Have a project<br />
              <span className="text-[#8B31C7]">in mind?</span>
            </h2>
            <a
              href="https://wa.me/919632498185"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:border-[#8B31C7]/60 hover:bg-[#8B31C7]/10 text-white text-sm font-semibold transition-all duration-300 self-start md:self-auto"
            >
              Start a Conversation
              <span className="w-7 h-7 rounded-full bg-[#8B31C7] flex items-center justify-center text-white text-xs group-hover:scale-110 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 space-y-6"
          >
            <a href="/" className="inline-block">
              <span className="inline-flex items-center bg-[#F2EDE6] rounded-sm px-1">
                <img src={bp('/criador_logo.png')} alt="Criador" className="h-7 w-auto" style={{ mixBlendMode: 'normal' }} />
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium creative studio building bold identities, unforgettable visuals, and digital experiences that convert.
            </p>

            {/* Contact info */}
            <div className="space-y-3 pt-2">
              <a href="mailto:hello@criador.studio" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group">
                <svg className="w-4 h-4 text-[#8B31C7] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hello@criador.studio
              </a>
              <a href="https://wa.me/919632498185" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group">
                <svg className="w-4 h-4 text-[#25D366] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                +91 96324 98185
              </a>
              <a
                href="https://maps.google.com/?q=Haralur,+Bengaluru,+Karnataka,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 text-[#8B31C7] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Haralur, Bengaluru,<br />Karnataka, India</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 pt-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#8B31C7]/50 hover:bg-[#8B31C7]/10 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-6">Services</p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {serviceLinks.map((item) => (
                <a key={item} href="#services"
                  className="text-white/45 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#8B31C7]/50 group-hover:bg-[#8B31C7] transition-colors shrink-0" />
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-xs font-semibold text-white/25 uppercase tracking-widest mb-6">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#8B31C7]/50 group-hover:bg-[#8B31C7] transition-colors shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">© 2026 Criador PVT LTD. All Rights Reserved.</p>
<div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-white/25 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-white/25 hover:text-white/60 text-sm transition-colors">Terms of Service</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-[#8B31C7]/50 hover:bg-[#8B31C7]/10 transition-all duration-200"
              aria-label="Back to top"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
