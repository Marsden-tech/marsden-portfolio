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

  const hoveredProject = projects.find((p) => p.id === hoveredId)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0d1117] py-28 px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Floating preview image following cursor */}
      {hoveredProject && hoveredProject.preview && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePos.x + 24,
            top: mousePos.y - 80,
          }}
        >
          <div className="border border-[#00f5c4]/40 overflow-hidden shadow-2xl relative">
            <img
              src={hoveredProject.preview}
              alt={hoveredProject.title}
              className="w-64 h-40 object-cover"
            />
            <div className="absolute inset-0 bg-[#00f5c4]/05" />
          </div>
        </div>
      )}

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

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isReal = project.repoUrl !== '#'
            return (
              <div
                key={project.id}
                className="reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative p-6 h-full flex flex-col group transition-all duration-300 overflow-hidden hover:-translate-y-1
                    ${isReal
                      ? 'bg-[#080b10] border border-[#00f5c4]/20 hover:border-[#00f5c4]/50'
                      : 'bg-[#080b10] border border-gray-800/50 hover:border-gray-700'
                    }`}
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500
                      ${isReal ? 'bg-[#00f5c4]' : 'bg-gray-700'}`}
                  />

                  {/* Real project badge */}
                  {isReal && (
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-[9px] text-[#00f5c4] border border-[#00f5c4]/30 px-2 py-0.5 tracking-widest uppercase">
                        Live
                      </span>
                    </div>
                  )}

                  {/* Project Number */}
                  <div className="font-mono text-gray-700 text-xs tracking-widest mb-4">
                    {project.id}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-base mb-3 transition-colors duration-200
                      ${isReal
                        ? 'text-white group-hover:text-[#00f5c4]'
                        : 'text-gray-600'
                      }`}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-5 flex-1
                      ${isReal ? 'text-gray-400' : 'text-gray-700'}`}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs px-2 py-0.5 tracking-wider border
                          ${isReal
                            ? 'text-[#00f5c4] border-[#00f5c4]/20'
                            : 'text-gray-700 border-gray-800'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links — only for real projects */}
                  {isReal && (
                    <div className="flex items-center gap-5">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-[#00f5c4] tracking-widest uppercase flex items-center gap-2 hover:gap-4 transition-all duration-200"
                      >
                        GitHub <span>&#8594;</span>
                      </a>
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs text-gray-500 tracking-widest uppercase flex items-center gap-2 hover:text-white hover:gap-4 transition-all duration-200"
                        >
                          Live <span>&#8594;</span>
                        </a>
                      )}
                    </div>
                  )}

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}