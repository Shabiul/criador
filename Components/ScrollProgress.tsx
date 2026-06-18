'use client'
import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left bg-gradient-to-r from-[#8B31C7] via-[#A040E0] to-[#C878F5]"
      style={{ scaleX }}
    />
  )
}
