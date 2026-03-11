import { useEffect, useRef } from 'react'

const services = [
  {
    id: '01',
    title: 'Full Stack Web Development',
    description:
      'End-to-end web applications built from the ground up — responsive frontends, robust backends, and everything in between. I handle the full lifecycle from architecture to deployment.',
    deliverables: [
      'Custom web application',
      'Responsive UI/UX',
      'REST API integration',
      'Deployment & hosting setup',
    ],
    icon: '⚡',
  },
  {
    id: '02',
    title: 'Backend API Development',
    description:
      'Scalable, secure, and well-documented APIs built with modern frameworks. Whether you need a simple REST API or a complex microservices architecture, I design it to scale.',
    deliverables: [
      'RESTful API design',
      'JWT Authentication & Authorization',
      'API documentation',
      'Performance optimization',
    ],
    icon: '🔧',
  },
  {
    id: '03',
    title: 'Mobile App Development',
    description:
      'Native Android applications built with Jetpack Compose — clean, performant, and designed for real users. From concept to Play Store ready.',
    deliverables: [
      'Android application (Jetpack Compose)',
      'API integration',
      'Offline support',
      'Play Store deployment',
    ],
    icon: '📱',
  },
  {
    id: '04',
    title: 'Database Design & Architecture',
    description:
      'Well-structured databases that are fast, reliable, and built to grow with your product. I design schemas, optimize queries, and ensure your data is safe and accessible.',
    deliverables: [
      'Schema design & modeling',
      'Query optimization',
      'Data migration',
      'Backup & recovery setup',
    ],
    icon: '🗄️',
  },
  {
    id: '05',
    title: 'Tech Consulting',
    description:
      'Not sure where to start or what stack to use? I help individuals and teams make smart technical decisions — from choosing the right tools to reviewing existing architecture.',
    deliverables: [
      'Tech stack recommendations',
      'Code & architecture review',
      'Project scoping & planning',
      'One-on-one technical sessions',
    ],
    icon: '💡',
  },
]

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative bg-[#0d1117] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="block w-6 h-px bg-[#00f5c4]" />
          <span className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase">
            05 — Services
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="font-extrabold text-white mb-4 leading-tight tracking-tight reveal opacity-0 translate-y-8 transition-all duration-700 delay-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          What I <span className="text-[#00f5c4]">Offer</span>
        </h2>

        <p className="font-mono text-gray-500 text-xs tracking-wide mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
          Services I provide to individuals, startups, and businesses.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="border border-[#00f5c4]/08 bg-[#080b10] p-8 h-full group hover:border-[#00f5c4]/25 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">

                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-[#00f5c4] group-hover:w-full transition-all duration-500" />

                {/* Left accent on hover */}
                <div className="absolute top-0 left-0 w-px h-0 bg-[#00f5c4]/50 group-hover:h-full transition-all duration-500" />

                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="font-mono text-gray-700 text-xs tracking-widest mb-2">
                      {service.id}
                    </div>
                    <h3 className="text-white font-bold text-lg group-hover:text-[#00f5c4] transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-2xl ml-4 mt-1 flex-shrink-0">
                    {service.icon}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-loose mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-6">
                  <div className="font-mono text-xs text-gray-600 tracking-widest uppercase mb-3">
                    // What you get
                  </div>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#00f5c4] flex-shrink-0" />
                        <span className="font-mono text-gray-400 text-xs">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5c4] tracking-widest uppercase hover:gap-4 transition-all duration-200"
                >
                  Get a Quote <span>&#8594;</span>
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500">
          <div className="border border-[#00f5c4]/15 bg-[#080b10] p-10 text-center relative overflow-hidden">

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-px bg-[#00f5c4]" />
            <div className="absolute top-0 left-0 w-px h-8 bg-[#00f5c4]" />
            <div className="absolute bottom-0 right-0 w-8 h-px bg-[#00f5c4]" />
            <div className="absolute bottom-0 right-0 w-px h-8 bg-[#00f5c4]" />

            <div className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase mb-3">
              // ready to build something?
            </div>
            <h3 className="text-white font-extrabold text-2xl mb-3">
              Let's Work Together
            </h3>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-loose">
              Have a project in mind? Reach out and let's discuss how I can help
              bring your idea to life.
            </p>
            <a
              href="#contact"
              className="inline-block font-mono text-xs tracking-widest uppercase px-10 py-4 bg-[#00f5c4] text-[#080b10] font-bold hover:bg-white transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}