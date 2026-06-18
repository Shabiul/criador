'use client'
import { motion } from 'framer-motion'

export default function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  onComplete,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  onComplete?: () => void
}) {
  const words = text.split(' ')
  let charIndex = 0
  return (
    <span className={className} aria-label={text} style={{ display: 'inline' }}>
      {words.map((word, wi) => {
        const chars = word.split('')
        return (
          <span
            key={wi}
            style={{ display: 'inline-block', marginRight: '0.28em', verticalAlign: 'bottom' }}
          >
            {chars.map((char, ci) => {
              const idx = charIndex++
              const isLast = wi === words.length - 1 && ci === chars.length - 1
              return (
                <span
                  key={ci}
                  style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
                >
                  <motion.span
                    className={wordClassName}
                    style={{ display: 'inline-block' }}
                    initial={{ y: '100%', rotateZ: 8, opacity: 0 }}
                    animate={{ y: '0%', rotateZ: 0, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 22,
                      mass: 0.6,
                      delay: delay + idx * 0.028,
                    }}
                    onAnimationComplete={isLast && onComplete ? onComplete : undefined}
                  >
                    {char}
                  </motion.span>
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}
