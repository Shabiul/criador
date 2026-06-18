'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const showLabel = hovered || isTouch

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          aria-label="Book a free consultation"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="fixed bottom-8 right-4 md:right-8 z-50 flex items-center gap-3 bg-[#8B31C7] hover:bg-[#7A28B0] text-white rounded-full shadow-lg shadow-[#8B31C7]/30 transition-colors duration-200 overflow-hidden"
          style={{
            paddingLeft: 14,
            paddingRight: showLabel ? 20 : 14,
            paddingTop: 14,
            paddingBottom: 14,
            marginBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.36 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
          </svg>
          <motion.span
            className="text-sm font-semibold whitespace-nowrap overflow-hidden"
            animate={{ width: showLabel ? 'auto' : 0, opacity: showLabel ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            Book a Free Call
          </motion.span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
