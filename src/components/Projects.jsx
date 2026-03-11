import { useEffect, useRef, useState } from 'react'
import projects from '../data/projects'

export default function Projects() {
  const sectionRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0d1117] py-28 px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Floating preview image that follows cursor */}
      {hoveredId && (() => {
        const project = projects.find((p) => p.id === hoveredId)
        return project && project.preview ? (
          <div
            className="fixed z-50 pointer-events-none transition-opacity duration-200"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 100,
              opacity: 1,
            }}
          >
            <div className="border border-[#00f5c4]/30 overflow-hidden shadow-2xl">
              <img
                src={project.preview}
                alt={project.title}
                className="w-64 h-40 object-cover"
              />
              <div className="absolute inset-0 bg-[#00f5c4]/05" />
            </div>
          </div>
        ) : null
      })()}

      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="block w-6 h-px bg-[#00f5c4]" />
          <span className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase">
            02 — Projects
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="font-extrabold text-white mb-4 leading-tight tracking-tight reveal opacity-0 translate-y-8 transition-all duration-700 delay-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          What I Have <span className="text-[#00f5c4]">Built</span>
        </h2>

        <p className="font-mono text-gray-500 text-xs tracking-wide mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
          Real projects I have designed, developed and shipped end to end.
        </p>

        {/* Featured Project */}
        {featured && (
          <div
            className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 mb-6"
            onMouseEnter={() => setHoveredId(featured.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative border border-[#00f5c4]/20 bg-[#080b10] p-8 group hover:border-[#00f5c4]/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f5c4] to-transparent" />

              {/* Featured badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-gray-700 text-xs tracking-widest">
                  {featured.id}
                </div>
                <span className="font-mono text-[10px] text-[#00f5c4] border border-[#00f5c4]/30 px-3 py-1 tracking-widest uppercase">
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-extrabold text-2xl mb-4 group-hover:text-[#00f5c4] transition-colors duration-200">
                {featured.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-loose max-w-2xl mb-6">
                {featured.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#00f5c4] border border-[#00f5c4]/20 px-3 py-1 tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6">
                <a
                  href={featured.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-[#00f5c4] tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all duration-200"
                >
                  View on GitHub <span>&#8594;</span>
                </a>
                {featured.liveUrl !== '#' && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-gray-500 tracking-widest uppercase flex items-center gap-2 hover:text-white hover:gap-4 transition-all duration-200"
                  >
                    Live Demo <span>&#8594;</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Rest of Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, index) => (
            <div
              key={project.id}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-[#080b10] border border-[#00f5c4]/08 p-6 h-full flex flex-col group hover:border-[#00f5c4]/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">

                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-[#00f5c4] group-hover:w-full transition-all duration-500" />

                {/* Project Number */}
                <div className="font-mono text-gray-700 text-xs tracking-widest mb-4">
                  {project.id}
                </div>

                {/* Title */}
                <h3 className="text-gray-500 font-bold text-base mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-gray-700 border border-gray-800 px-2 py-0.5 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}