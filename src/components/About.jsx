import { useEffect, useRef, useState } from 'react'

const stats = [
  { num: 3, suffix: '+', label: 'Years Experience' },
  { num: 10, suffix: '+', label: 'Projects Shipped' },
  { num: 10, suffix: '+', label: 'Technologies' },
  { num: 100, suffix: '%', label: 'Committed' },
]

const terminalLines = [
  { cmd: '$ ', text: 'whoami', type: 'command' },
  { text: 'marsden@lwero', type: 'output' },
  { text: '', type: 'spacer' },
  { cmd: '$ ', text: 'cat profile.json', type: 'command' },
  { text: '{', type: 'output' },
  { key: '  "name"', value: '"Marsden M.O. Lwero"', type: 'json' },
  { key: '  "role"', value: '"Full Stack Developer"', type: 'json' },
  { key: '  "location"', value: '"Kenya"', type: 'json' },
  { key: '  "available"', value: 'true', type: 'json' },
  { key: '  "passion"', value: '"Building things that matter"', type: 'json' },
  { text: '}', type: 'output' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            let start = 0
            const duration = 1500
            const step = Math.ceil(target / (duration / 16))
            const interval = setInterval(() => {
              start += step
              if (start >= target) {
                setCount(target)
                clearInterval(interval)
              } else {
                setCount(start)
              }
            }, 16)
          }
        })
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="font-mono text-[#00f5c4] text-2xl font-bold">
      {count}{suffix}
    </span>
  )
}

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative bg-[#080b10] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="block w-6 h-px bg-[#00f5c4]" />
          <span className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase">
            01 — About
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="font-extrabold text-white mb-16 leading-tight tracking-tight reveal opacity-0 translate-y-8 transition-all duration-700 delay-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Who I <span className="text-[#00f5c4]">Am</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio + Stats */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <p className="text-gray-400 text-sm leading-loose mb-5">
              I am{' '}
              <span className="text-[#00f5c4]">Marsden Mathews Odhiambo Lwero</span>,
              a full stack software developer with a passion for building robust,
              end-to-end digital solutions. I thrive at the intersection of logic
              and creativity — designing systems that are as elegant under the hood
              as they are on screen.
            </p>
            <p className="text-gray-400 text-sm leading-loose mb-5">
              From architecting{' '}
              <span className="text-[#00f5c4]">RESTful APIs</span> and microservices
              to crafting pixel-perfect frontends, I own every layer of the stack.
              I write code that is clean, scalable, and built to last.
            </p>
            <p className="text-gray-400 text-sm leading-loose mb-10">
              When I am not pushing commits, I am exploring new technologies,
              contributing to open source, and sharpening my skills. I believe in{' '}
              <span className="text-[#00f5c4]">shipping fast, iterating smart</span>,
              and always leaving the codebase better than I found it.
            </p>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#00f5c4]/10 bg-[#0d1117] p-5 relative overflow-hidden group hover:border-[#00f5c4]/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-0.5 h-0 bg-[#00f5c4] group-hover:h-full transition-all duration-300" />
                  <Counter target={stat.num} suffix={stat.suffix} />
                  <div className="font-mono text-gray-500 text-xs tracking-widest uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Workspace photo with terminal overlay */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 relative">

            {/* Full bleed workspace photo */}
            <div className="relative overflow-hidden">
              <div
                className="w-full h-80 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/workspace.jpeg')" }}
              />
              <div className="absolute inset-0 bg-[#080b10]/60" />
              <div className="absolute inset-0 bg-[#00f5c4]/05" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080b10] to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-px bg-[#00f5c4]/40" />
              <div className="absolute top-0 left-0 w-px h-full bg-[#00f5c4]/20" />
              <div className="absolute top-0 right-0 w-px h-full bg-[#00f5c4]/20" />
            </div>

            {/* Terminal card overlapping the photo */}
            <div className="bg-[#0d1117] border border-[#00f5c4]/10 p-6 -mt-8 relative z-10 mx-4">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="font-mono text-gray-600 text-xs ml-3 tracking-wider">
                  profile.json
                </span>
              </div>

              <div className="font-mono text-sm space-y-1">
                {terminalLines.map((line, i) => {
                  if (line.type === 'spacer') return <div key={i} className="h-2" />
                  if (line.type === 'command') return (
                    <div key={i} className="text-gray-400">
                      <span className="text-[#00f5c4]">{line.cmd}</span>
                      {line.text}
                    </div>
                  )
                  if (line.type === 'json') return (
                    <div key={i} className="text-gray-400">
                      <span className="text-[#00aaff]">{line.key}</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-[#00f5c4]">{line.value}</span>
                      <span className="text-gray-500">,</span>
                    </div>
                  )
                  return (
                    <div key={i} className="text-gray-400">{line.text}</div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}