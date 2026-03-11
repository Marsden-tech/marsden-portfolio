import { useEffect, useRef } from 'react'
import skills from '../data/skills'

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative bg-[#080b10] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="block w-6 h-px bg-[#00f5c4]" />
          <span className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase">
            03 — Skills
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="font-extrabold text-white mb-4 leading-tight tracking-tight reveal opacity-0 translate-y-8 transition-all duration-700 delay-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          What I <span className="text-[#00f5c4]">Work With</span>
        </h2>

        <p className="font-mono text-gray-500 text-xs tracking-wide mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
          Technologies and tools I use to build from idea to deployment.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, groupIndex) => (
            <div
              key={group.category}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${groupIndex * 100}ms` }}
            >
              <div className="border border-[#00f5c4]/08 bg-[#0d1117] p-6 h-full group hover:border-[#00f5c4]/20 transition-all duration-300">

                {/* Category Title */}
                <div className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase mb-5 pb-4 border-b border-[#00f5c4]/10">
                  {group.category}
                </div>

                {/* Skill Items */}
                <ul className="space-y-3">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 group/item"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#00f5c4] flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" />
                      <span className="font-mono text-gray-400 text-sm group-hover/item:text-white transition-colors duration-200">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 reveal opacity-0 translate-y-8 transition-all duration-700 delay-500">
          <p className="font-mono text-gray-600 text-xs tracking-wide text-center">
            // always learning — always building
          </p>
        </div>

      </div>
    </section>
  )
}