'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ['Branding.', 'Identity.', 'Strategy.', 'Design.']

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden'
    
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setDone(true)
            // Restore scrolling when preloader is done
            document.body.style.overflow = ''
          }, 400)
          return 100
        }
        return p + Math.random() * 18
      })
    }, 80)
    
    return () => {
      clearInterval(interval)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const t = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 600)
    return () => clearInterval(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#2E2A26] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img src="/criador_logo.png" alt="Criador" className="h-10 w-auto brightness-0 invert" />
          </motion.div>

          {/* Cycling word */}
          <div className="h-8 overflow-hidden mb-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={wordIndex}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#8B31C7] text-sm font-semibold tracking-[4px] uppercase text-center"
              >
                {words[wordIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#8B31C7] rounded-full"
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Counter */}
          <motion.p
            className="mt-4 text-white/30 text-xs font-mono"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
