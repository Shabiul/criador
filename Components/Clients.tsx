'use client'
import { motion } from 'framer-motion'
import { bp } from '@/lib/bp'


const allClients = [
  { name: 'Zinox Kitchen', file: 'zinox.png' },
  { name: 'Yesladder', file: 'yesladder.png' },
  { name: 'Celebrating Us', file: 'celebrating-us.png' },
  { name: 'Palmstone Multimedia', file: 'palmstone.png' },
  { name: 'JK Duck House', file: 'jk-duck-house.png' },
  { name: 'Baqah', file: 'baqah.png' },
  { name: 'EPIC Energy', file: 'epic-energy.png' },
  { name: 'Naturedale', file: 'naturedale.png' },
  { name: 'CharkaVastra', file: 'charkavastra.png' },
  { name: 'Prosper', file: 'prosper.png' },
  { name: 'CircuitLay', file: 'circuitlay.png' },
  { name: 'The Shepherd', file: 'the-shepherd.png' },
  { name: 'CPBL', file: 'cpbl.png' },
  { name: 'Dannys Grannys', file: 'dannys-grannys.png' },
  { name: 'Learnford Academy', file: 'learnford.png' },
  { name: 'Verifyer', file: 'verifyer.png' },
  { name: 'Lumlight', file: 'lumlight.png' },
  { name: 'Nutri Grace', file: 'nutri-grace.png' },
  { name: 'KidsBuddy Academy', file: 'kidsbuddy.png' },
  { name: 'Walk Boss', file: 'walk-boss.png' },
  { name: 'Beaver', file: 'beaver.png' },
  { name: 'Decorous Event', file: 'decorous-event.png' },
  { name: 'HyperBesto', file: 'hyperbesto.png' },
  { name: 'Sri Sai Group', file: 'sri-sai-group.png' },
  { name: 'Latitude', file: 'latitude.png' },
  { name: 'B4BUS', file: 'b4bus.png' },
]

export default function Clients() {
  return (
    <section className="pt-12 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="uppercase tracking-[4px] text-[#8B31C7] text-sm font-medium mb-3">
            Trusted By
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#2E2A26]">
            Brands We've <span className="text-[#8B31C7]">Worked With</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F2EDE6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F2EDE6] to-transparent z-10" />

        <div className="marquee-wrap overflow-hidden">
          <div className="flex w-max gap-4 marquee">
            {[...allClients, ...allClients].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-36 h-20 px-4 shrink-0"
              >
                <img
                  src={bp(`/clients/${client.file}`)}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain mix-blend-multiply client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
