'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TARGET = new Date('2025-07-01T00:00:00')

function getTimeLeft() {
  const diff = Math.max(0, TARGET.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  }
}

function Tile({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')
  return (
    <motion.div
      key={value}
      initial={{ scale: 0.92, opacity: 0.6 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="flex flex-col items-center gap-2"
    >
      <div className="bg-white rounded-2xl shadow-lg shadow-black/20 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <span className="text-4xl md:text-5xl font-black text-[#2D1B69] tracking-tight leading-none">
          {display}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-bold tracking-[3px] uppercase text-white/70">
        {label}
      </span>
    </motion.div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-[28px] overflow-hidden p-8 md:p-12"
      style={{
        background: 'linear-gradient(135deg, #3B1F6B 0%, #6B2490 40%, #C0277A 80%, #E03D6E 100%)',
      }}
    >
      {/* Soft glow orbs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#E03D6E]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center">
        <p className="uppercase tracking-[4px] text-white/60 text-xs font-semibold mb-1">Limited Slots Available</p>
        <h3 className="text-white text-2xl md:text-3xl font-black mb-8">
          Next intake closes in
        </h3>

        <div className="flex items-start justify-center gap-4 md:gap-6">
          <Tile value={time.days}  label="Days"  />
          <Tile value={time.hours} label="Hours" />
          <Tile value={time.mins}  label="Mins"  />
          <Tile value={time.secs}  label="Secs"  />
        </div>

        <p className="mt-8 text-white/50 text-sm">
          Secure your spot before we close applications for July
        </p>
      </div>
    </motion.div>
  )
}
