'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const [isTouch, setIsTouch] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 280, damping: 22, mass: 0.4 })
  const y = useSpring(rawY, { stiffness: 280, damping: 22, mass: 0.4 })

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const onMouseMove = (e: React.MouseEvent) => {
    if (isTouch) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    rawX.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    rawY.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }

  const onMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y, willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
