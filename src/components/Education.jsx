import { useEffect, useRef } from 'react'

const education = [
  {
    id: '01',
    degree: 'BSc Computer Science',
    institution: 'Kenyatta University',
    period: '2019 — 2024',
    description: 'Focused on Systems Engineering and Intelligent Systems. Gained deep knowledge in software architecture, algorithms, machine learning foundations, and distributed systems.',
    tags: ['Systems Engineering', 'Intelligent Systems', 'Software Architecture'],
    icon: '🎓',
  },
  {
    id: '02',
    degree: 'Kenya Certificate of Secondary Education',
    institution: "St. Mary's School, Yala",
    period: '2015 — 2018',
    description: 'Completed secondary education with a strong foundation in Mathematics and Sciences, which laid the groundwork for a career in technology and engineering.',
    tags: ['Mathematics', 'Sciences', 'Technology'],
    icon: '📚',
  },
]

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative bg-[#080b10] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="block w-6 h-px bg-[#00f5c4]" />
          <span className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase">
            04 — Education
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="font-extrabold text-white mb-4 leading-tight tracking-tight reveal opacity-0 translate-y-8 transition-all duration-700 delay-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          My <span className="text-[#00f5c4]">Background</span>
        </h2>

        <p className="font-mono text-gray-500 text-xs tracking-wide mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
          The academic foundation behind the code.
        </p>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5c4]/40 via-[#00f5c4]/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={item.id}
                className="reveal opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="md:pl-16 relative">

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-8 h-8 border border-[#00f5c4]/30 bg-[#080b10] hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#00f5c4] rounded-full" />
                  </div>

                  {/* Card */}
                  <div className="border border-[#00f5c4]/08 bg-[#0d1117] p-8 group hover:border-[#00f5c4]/25 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">

                    {/* Top accent on hover */}
                    <div className="absolute top-0 left-0 w-0 h-px bg-[#00f5c4] group-hover:w-full transition-all duration-500" />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        {/* Degree */}
                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#00f5c4] transition-colors duration-200">
                          {item.degree}
                        </h3>
                        {/* Institution */}
                        <div className="font-mono text-[#00f5c4] text-xs tracking-widest">
                          {item.institution}
                        </div>
                      </div>

                      {/* Period badge */}
                      <div className="flex-shrink-0">
                        <span className="font-mono text-xs text-gray-500 border border-gray-700 px-3 py-1 tracking-widest">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-loose mb-5">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-gray-500 border border-gray-700 px-2 py-0.5 tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}