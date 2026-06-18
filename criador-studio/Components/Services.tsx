'use client'
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate, type Variants } from 'framer-motion'
import { useRef, useState } from 'react'
import TextReveal from './TextReveal'
import { bp } from '@/lib/bp'

// ─── Inline Mockups ──────────────────────────────────────────────────────────

function BrandingMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1a0a2e] to-[#2d1654] p-3 flex flex-col gap-2 overflow-hidden">
      {/* Logo row */}
      <div className="flex items-center gap-2 bg-white/8 rounded-xl p-2.5">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8B31C7] to-[#6B2490] flex items-center justify-center text-white font-black text-base shadow-lg shadow-[#8B31C7]/40 shrink-0">C</div>
        <div className="flex-1">
          <div className="h-2 w-16 bg-white/70 rounded-full mb-1.5" />
          <div className="h-1.5 w-10 bg-white/25 rounded-full" />
        </div>
        <div className="text-[8px] font-bold text-[#8B31C7]/80 bg-[#8B31C7]/15 px-2 py-0.5 rounded-full">LOGO</div>
      </div>
      {/* Color palette */}
      <div className="flex gap-1">
        {['#8B31C7','#2E2A26','#EDEBE6','#9BAAB8','#E53D2C','#F2EDE6'].map(c => (
          <div key={c} className="flex-1 h-5 rounded-md shadow-sm" style={{ background: c }} />
        ))}
      </div>
      {/* Typography + guide row */}
      <div className="flex gap-2 flex-1">
        <div className="flex-1 bg-white/6 rounded-xl p-2 flex flex-col justify-between">
          <div className="text-white/20 text-[7px] uppercase tracking-widest">Typography</div>
          <div className="text-white font-black text-2xl leading-none">Aa</div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-white/20 rounded-full" />
            <div className="h-1 w-3/4 bg-white/12 rounded-full" />
            <div className="h-1 w-1/2 bg-white/8 rounded-full" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex-1 bg-[#8B31C7]/25 rounded-xl border border-[#8B31C7]/30 flex items-center justify-center">
            <div className="text-[7px] font-bold text-[#8B31C7]">BRAND GUIDE</div>
          </div>
          <div className="flex-1 bg-white/6 rounded-xl flex items-center justify-center gap-1 px-2">
            <div className="w-4 h-4 rounded bg-[#8B31C7]/50" />
            <div className="w-4 h-4 rounded bg-white/20" />
            <div className="w-4 h-4 rounded bg-[#E53D2C]/50" />
          </div>
        </div>
      </div>
      {/* Stationery strip */}
      <div className="flex gap-1.5">
        <div className="flex-1 h-6 bg-white/8 rounded-lg flex items-center px-2 gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-[#8B31C7]/60" />
          <div className="h-1.5 flex-1 bg-white/15 rounded-full" />
        </div>
        <div className="flex-1 h-6 bg-white/8 rounded-lg flex items-center px-2 gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-white/20" />
          <div className="h-1.5 flex-1 bg-white/15 rounded-full" />
        </div>
      </div>
    </div>
  )
}

function VisitingCardMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] flex items-center justify-center p-3 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Back card (rotated behind) */}
        <div
          className="absolute inset-x-3 bg-gradient-to-br from-[#8B31C7] to-[#5B1F87] rounded-xl shadow-2xl shadow-[#8B31C7]/40"
          style={{ top: '8px', bottom: '16px', transform: 'rotate(4deg)' }}
        >
          <div className="h-full p-3 flex flex-col justify-between">
            <div className="flex gap-0.5">
              {[...Array(4)].map((_, i) => <div key={i} className="h-0.5 w-5 bg-white/20 rounded" />)}
            </div>
            <div className="space-y-1">
              <div className="h-0.5 w-20 bg-white/30 rounded-full" />
              <div className="h-0.5 w-14 bg-white/15 rounded-full" />
            </div>
            <div className="flex justify-end">
              <div className="text-[7px] text-white/40">hello@criador.studio</div>
            </div>
          </div>
        </div>
        {/* Front card */}
        <div
          className="absolute inset-x-0 bg-[#F2EDE6] rounded-xl shadow-2xl"
          style={{ top: '14px', bottom: '8px', transform: 'rotate(-2deg)' }}
        >
          <div className="h-full p-3 flex flex-col justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded bg-gradient-to-br from-[#8B31C7] to-[#6B2490] flex items-center justify-center text-white font-black text-xs shadow-md shadow-[#8B31C7]/30">C</div>
              <div>
                <div className="text-[#2E2A26] font-black text-[9px] leading-none">CRIADOR</div>
                <div className="text-[#8C857C] text-[7px]">Creative Studio</div>
              </div>
            </div>
            <div className="w-full h-px bg-[#2E2A26]/10" />
            <div>
              <div className="text-[#2E2A26] font-bold text-[9px]">Pavan Ambulage</div>
              <div className="text-[#8B31C7] text-[7px]">Creative Director</div>
            </div>
            <div className="space-y-0.5">
              <div className="text-[#8C857C] text-[6px]">+91 96324 98185</div>
              <div className="text-[#8C857C] text-[6px]">hello@criador.studio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function WebHostingMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-2.5 flex flex-col gap-2 overflow-hidden">
      {/* Browser window */}
      <div className="flex-1 bg-[#1e293b] rounded-xl overflow-hidden border border-white/10">
        <div className="flex items-center gap-1 px-2 py-1.5 bg-[#0f172a]/80">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
          <div className="flex-1 mx-1.5 h-3 rounded-md bg-white/8 flex items-center px-1.5 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
            <div className="h-1 w-14 bg-white/20 rounded-full" />
          </div>
        </div>
        {/* Webpage skeleton */}
        <div className="p-2 space-y-1.5">
          <div className="h-5 bg-gradient-to-r from-[#8B31C7]/40 to-[#8B31C7]/10 rounded-md" />
          <div className="grid grid-cols-3 gap-1">
            <div className="h-7 bg-white/6 rounded" />
            <div className="h-7 bg-white/6 rounded" />
            <div className="h-7 bg-[#8B31C7]/15 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-white/10 rounded-full" />
            <div className="h-1 w-4/5 bg-white/6 rounded-full" />
          </div>
        </div>
      </div>
      {/* Stats row */}
      <div className="flex gap-1.5">
        {[['99.9%','Uptime'],['2.1s','Load'],['SSL','Secure'],['∞','Bandwidth']].map(([v, l]) => (
          <div key={l} className="flex-1 bg-white/6 rounded-lg py-1.5 text-center border border-white/8">
            <div className="text-[#8B31C7] font-black text-[9px]">{v}</div>
            <div className="text-white/30 text-[7px]">{l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EcommerceMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-2.5 flex flex-col gap-1.5 overflow-hidden">
      {/* Store header */}
      <div className="flex items-center justify-between bg-white/6 rounded-lg px-2.5 py-1.5 border border-white/8">
        <div className="h-2 w-12 bg-white/30 rounded-full" />
        <div className="flex items-center gap-1.5">
          <div className="text-white/30 text-[8px]">Search</div>
          <div className="flex items-center gap-0.5 bg-[#8B31C7] px-1.5 py-0.5 rounded-full">
            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
            </svg>
            <span className="text-white font-bold text-[8px]">3</span>
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        {[
          { color: 'from-violet-500/25 to-purple-600/10', price: '₹999', name: 'Pro Kit' },
          { color: 'from-blue-500/25 to-cyan-600/10', price: '₹1,499', name: 'Design Set' },
          { color: 'from-emerald-500/25 to-green-600/10', price: '₹799', name: 'Starter' },
          { color: 'from-orange-500/25 to-amber-600/10', price: '₹2,199', name: 'Brand Box' },
        ].map(({ color, price, name }) => (
          <div key={name} className={`bg-gradient-to-br ${color} rounded-lg p-1.5 border border-white/8 flex flex-col gap-1`}>
            <div className="h-7 bg-white/10 rounded-md" />
            <div className="text-white/60 text-[7px] leading-none">{name}</div>
            <div className="flex items-center justify-between">
              <div className="text-[#8B31C7] font-bold text-[8px]">{price}</div>
              <div className="w-4 h-4 rounded bg-[#8B31C7]/50 flex items-center justify-center">
                <span className="text-white text-[8px]">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Checkout bar */}
      <div className="bg-gradient-to-r from-[#8B31C7] to-[#6B2490] rounded-lg py-1.5 px-2.5 flex items-center justify-between shadow-lg shadow-[#8B31C7]/30">
        <span className="text-white font-semibold text-[9px]">Checkout Now</span>
        <span className="text-white/80 text-[8px] font-mono">₹5,496 →</span>
      </div>
    </div>
  )
}

// ─── Service data ─────────────────────────────────────────────────────────────

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const services: {
  title: string
  desc: string
  gradient: string
  image: string | null
  mockup?: React.ReactNode
  iconBg: string
  icon: React.ReactNode
  badge?: string
}[] = [
  {
    title: 'Business Consulting',
    desc: 'We analyse your business, identify growth gaps, and build a clear roadmap — from positioning and pricing strategy to operational efficiency and revenue scaling.',
    gradient: 'from-[#1B3A4B] to-[#0D2233]',
    image: bp('/services/business-consultancy.jpeg'),
    iconBg: 'bg-white/15',
    badge: '★ Most Popular',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M4 20V10l8-8 8 8v10"/><path d="M9 20v-6h6v6"/>
      </svg>
    ),
  },
  {
    title: 'Branding',
    desc: 'Logos, visual identities, brand positioning and complete brand kits to make your business unforgettable across every touchpoint.',
    gradient: 'from-[#8B31C7] to-[#6B2490]',
    image: bp('/services/Branding.jpeg'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11z"/>
        <path d="M12 2v22M2.5 7.5l19 11M21.5 7.5l-19 11"/>
      </svg>
    ),
  },
  {
    title: 'Catalog Designs',
    desc: 'Professionally designed product and service catalogs that showcase your offerings for better customer influence.',
    gradient: 'from-[#2E4057] to-[#1a2a3a]',
    image: bp('/services/Catalog.jpg.png'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="13" y2="15"/>
      </svg>
    ),
  },
  {
    title: 'Visiting Cards',
    desc: 'Premium business card designs — front & back — that leave a lasting impression at every handshake and networking event.',
    gradient: 'from-[#3D2B1F] to-[#5C3D2E]',
    image: bp('/visiting-card.jpeg'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="8" cy="12" r="2"/>
        <line x1="13" y1="10" x2="19" y2="10"/>
        <line x1="13" y1="14" x2="17" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'Label Designing',
    desc: 'Premium label designs crafted to elevate your product, strengthen your brand, and leave a lasting impression.',
    gradient: 'from-[#7B4F12] to-[#A0671A]',
    image: bp('/services/Criador-preium-label.jpg'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <circle cx="7" cy="7" r="1.5" fill="white" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'Social Media Marketing',
    desc: 'High-converting creatives, content strategies, and ad campaigns for every platform.',
    gradient: 'from-[#1D3461] to-[#2952A3]',
    image: bp('/services/social.jpg'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
  },
  {
    title: 'Search Engine Optimization',
    desc: 'SEO, AIEO & GEO optimised strategies that improve your rankings and drive organic traffic.',
    gradient: 'from-[#1A4731] to-[#256B47]',
    image: bp('/services/seo.jpg'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <polyline points="8 11 10 13 14 9"/>
      </svg>
    ),
  },
  {
    title: 'Web Hosting',
    desc: 'Fast, secure, and reliable hosting with uptime guarantee — corporate, real estate, resort, and e-commerce sites.',
    gradient: 'from-[#1C3A5E] to-[#2A5298]',
    image: bp('/web-hosting.jpeg'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="7" rx="2"/>
        <rect x="2" y="14" width="20" height="7" rx="2"/>
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="2.5"/>
        <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="2.5"/>
        <line x1="10" y1="6.5" x2="16" y2="6.5"/>
        <line x1="10" y1="17.5" x2="16" y2="17.5"/>
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    desc: 'End-to-end online store design and development built to convert visitors into customers with a full shopping experience.',
    gradient: 'from-[#4A1942] to-[#7B2D73]',
    image: bp('/services/ecom.jpg'),
    iconBg: 'bg-white/15',
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 1 2 2h14a2 2 0 0 1 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
]

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const [isInGrid, setIsInGrid] = useState(false)
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(139,49,199,0.12), transparent 70%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = gridRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section id="services" className="pt-4 pb-2 md:pt-6 md:pb-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-5">What We Do</p>
          <div className="flex items-end justify-between flex-wrap gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2E2A26]">
              <TextReveal text="Our" />{' '}<span className="text-[#8B31C7]"><TextReveal text="Services" delay={0.1} /></span>
            </h2>
            <p className="text-[#8C857C] max-w-[260px] text-base leading-relaxed border-l-2 border-[#8B31C7]/30 pl-4">
              End to end business consulting and technical implementation for better business outcome.
            </p>
          </div>
        </motion.div>

        {/* Spotlight wrapper */}
        <div
          ref={gridRef}
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsInGrid(true)}
          onMouseLeave={() => { setIsInGrid(false); mouseX.set(-1000); mouseY.set(-1000) }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 rounded-3xl"
            style={{ background: spotlight, opacity: isInGrid ? 1 : 0, transition: 'opacity 0.3s' }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="h-full"
              >
                <TiltCard className="group rounded-2xl overflow-hidden cursor-pointer border border-[#8C857C]/15 hover:border-[#8B31C7]/30 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Visual header */}
                  <div className={`relative overflow-hidden h-40 ${!service.image && !service.mockup ? `bg-gradient-to-br ${service.gradient}` : ''}`}>
                    {service.badge && (
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#8B31C7] text-white tracking-wide shadow-md">
                        {service.badge}
                      </div>
                    )}
                    {service.mockup ? (
                      <div className="absolute inset-0 overflow-hidden">
                        {service.mockup}
                      </div>
                    ) : service.image ? (
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/20" />
                          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white/10" />
                        </div>
                        <div className="h-full flex items-center justify-center">
                          <div className={`${service.iconBg} rounded-2xl p-4`}>
                            {service.icon}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass p-6 h-full">
                    <h3 className="text-base font-bold mb-2 text-[#2E2A26]">{service.title}</h3>
                    <p className="text-[#8C857C] leading-relaxed text-sm">{service.desc}</p>
                    <a href="#contact" className="mt-4 text-[#8B31C7] text-sm font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
