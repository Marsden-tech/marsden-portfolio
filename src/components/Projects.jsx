import { useEffect, useRef } from 'react'
import projects from '../data/projects'

export default function Projects() {
  const sectionRef = useRef(null)

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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-[#0d1117] py-28 px-6"
    >
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
          A selection of projects across the full stack — update these with your real work.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="bg-[#080b10] border border-[#00f5c4]/08 p-6 h-full flex flex-col group hover:border-[#00f5c4]/25 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">

                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-[#00f5c4] group-hover:w-full transition-all duration-500" />

                {/* Project Number */}
                <div className="font-mono text-gray-700 text-xs tracking-widest mb-4">
                  {project.id}
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#00f5c4] transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-gray-500 border border-gray-700 px-2 py-0.5 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5">
                  <a
                    href={project.liveUrl}
                    className="font-mono text-xs text-[#00f5c4] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all duration-200"
                  >
                    Live <span>&#8594;</span>
                  </a>
                  <a
                    href={project.repoUrl}
                    className="font-mono text-xs text-gray-500 tracking-widest uppercase flex items-center gap-2 hover:text-white hover:gap-3 transition-all duration-200"
                  >
                    Repo <span>&#8594;</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}