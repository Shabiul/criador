'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { bp } from '@/lib/bp'

const navLinks = [
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Process', id: 'process' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Blogs', id: 'blogs' },
  { label: 'Contact Us', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, 
  [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? 'backdrop-blur-2xl bg-[#F2EDE6]/85 border-b border-[#8C857C]/15 shadow-sm shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
          {/* Logo */}
          <a href="/" aria-label="Criador Creative Studio — Home" className="shrink-0">
            <img src={bp('/criador_logo.png')} alt="Criador Creative Studio" className="h-10 w-auto" style={{ mixBlendMode: 'normal' }} />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:bg-[#2E2A26]/5 ${activeSection === item.id ? 'text-[#8B31C7] font-semibold' : 'text-[#8C857C] hover:text-[#2E2A26]'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="tel:+919632498185"
              whileTap={{ scale: 0.94 }}
              className="hidden md:inline-block px-5 py-2.5 rounded-full bg-[#8B31C7] text-white text-sm font-semibold transition-all duration-200 hover:bg-[#7A28B0] hover:scale-105 active:scale-95 relative"
            >
              {scrolled && (
                <span className="absolute inset-0 rounded-full animate-ping bg-[#8B31C7]/30 pointer-events-none" style={{ animationDuration: '2s' }} />
              )}
              Book Consultation
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-11 h-11 rounded-xl bg-[#2E2A26]/8 active:bg-[#2E2A26]/15 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-5 h-[2px] bg-[#2E2A26] rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-[2px] bg-[#2E2A26] rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-[2px] bg-[#2E2A26] rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 inset-x-0 z-40 bg-[#F2EDE6]/98 backdrop-blur-2xl border-b border-[#8C857C]/15 md:hidden shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-1" style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}>
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-[#8C857C] hover:text-[#2E2A26] transition-colors py-3 px-2 border-b border-[#8C857C]/10 last:border-0"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="tel:+919632498185"
                onClick={() => setMenuOpen(false)}
                className="mt-4 w-full py-3.5 rounded-full bg-[#8B31C7] hover:bg-[#7A28B0] text-white text-sm font-semibold transition-all text-center block"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )



}
