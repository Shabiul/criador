'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const outerX = useSpring(mouseX, { stiffness: 180, damping: 18, mass: 0.2 })
  const outerY = useSpring(mouseY, { stiffness: 180, damping: 18, mass: 0.2 })
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.08 })
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.08 })

  const outerSize = useSpring(32, { stiffness: 300, damping: 22 })
  const outerOpacity = useSpring(0.4, { stiffness: 300, damping: 22 })
  const dotScale = useSpring(1, { stiffness: 400, damping: 25 })

  const hoveredRef = useRef(false)
  const clickedRef = useRef(false)

  useEffect(() => {
    if (isTouch) return

    const onMove = (e: MouseEvent) => {
      const size = hoveredRef.current ? 48 : 32
      mouseX.set(e.clientX - size / 2)
      mouseY.set(e.clientY - size / 2)
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }

    const onDown = () => {
      clickedRef.current = true
      outerSize.set(hoveredRef.current ? 40 : 26)
      dotScale.set(1.5)
    }

    const onUp = () => {
      clickedRef.current = false
      outerSize.set(hoveredRef.current ? 48 : 32)
      dotScale.set(hoveredRef.current ? 0 : 1)
    }

    const onEnter = () => {
      hoveredRef.current = true
      outerSize.set(48)
      outerOpacity.set(0.6)
      dotScale.set(0)
    }

    const onLeave = () => {
      hoveredRef.current = false
      outerSize.set(32)
      outerOpacity.set(0.4)
      dotScale.set(1)
    }

    const attachListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    attachListeners()
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      observer.disconnect()
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-[#8B31C7]"
        style={{
          x: outerX,
          y: outerY,
          width: outerSize,
          height: outerSize,
          opacity: outerOpacity,
          willChange: 'transform',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#8B31C7]"
        style={{
          x: dotX,
          y: dotY,
          scale: dotScale,
          width: 8,
          height: 8,
          willChange: 'transform',
        }}
      />
    </>
  )
}
