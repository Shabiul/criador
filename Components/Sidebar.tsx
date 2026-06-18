'use client'

export default function Sidebar() {
  return (
    <>
      {/* Left sidebar — Our Work */}
      <div className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-5">
        <div className="w-px h-16 bg-[#8C857C]/30" />
        <a
          href="#portfolio"
          className="text-[10px] font-semibold text-[#8C857C] hover:text-[#8B31C7] tracking-[4px] uppercase transition-colors duration-200"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Our Work
        </a>
        <div className="w-px h-16 bg-[#8C857C]/30" />
      </div>

      {/* Right sidebar — Get In Touch + LinkedIn */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-5">
        <div className="w-px h-16 bg-[#8C857C]/30" />

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#8C857C] hover:text-[#8B31C7] transition-colors duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>

        <div className="w-px h-6 bg-[#8C857C]/20" />

        <a
          href="#contact"
          className="text-[10px] font-semibold text-[#8C857C] hover:text-[#8B31C7] tracking-[4px] uppercase transition-colors duration-200"
          style={{ writingMode: 'vertical-rl' }}
        >
          Get In Touch
        </a>
        <div className="w-px h-16 bg-[#8C857C]/30" />
      </div>
    </>
  )
}
