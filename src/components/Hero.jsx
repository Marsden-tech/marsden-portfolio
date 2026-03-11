import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Full Stack Software Developer'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#080b10] px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,245,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00f5c4]/5 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Tag line */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[#00f5c4]" />
          <span className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase">
            // {displayedText}
            <span className="animate-pulse">_</span>
          </span>
        </div>

        {/* Name */}
        <h1 className="font-extrabold leading-none tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
        >
          MARSDEN
          <span
            className="block"
            style={{
              WebkitTextStroke: '1px rgba(0,245,196,0.5)',
              color: 'transparent',
            }}
          >
            LWERO
          </span>
        </h1>

        {/* Bio */}
        <p className="font-mono text-gray-400 text-sm leading-loose max-w-xl mb-10">
          I build robust, scalable web applications — from database architecture
          to pixel-perfect interfaces. Clean code. Real solutions. End to end.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-mono text-xs tracking-widest uppercase px-8 py-3 bg-[#00f5c4] text-[#080b10] font-bold hover:bg-white transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase px-8 py-3 border border-gray-600 text-gray-400 hover:border-[#00f5c4] hover:text-[#00f5c4] transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 flex items-center gap-3 z-10">
        <div className="flex flex-col items-center gap-1">
          <span className="block w-px h-12 bg-gradient-to-b from-[#00f5c4] to-transparent animate-pulse" />
        </div>
        <span className="font-mono text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}