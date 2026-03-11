import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Services from './components/Services'
import Contact from './components/Contact'

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [text, setText] = useState('')
  const fullText = 'MARSDEN LWERO'

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => onComplete(), 400)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(progressInterval)
  }, [onComplete])

  useEffect(() => {
    let index = 0
    const textInterval = setInterval(() => {
      setText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(textInterval)
    }, 80)
    return () => clearInterval(textInterval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#080b10] z-50 flex flex-col items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,245,196,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,196,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-8 w-64">
        <div className="text-center">
          <div className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase mb-3">
            // initializing
          </div>
          <h1 className="font-extrabold text-white tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}
          >
            {text}
            <span className="animate-pulse text-[#00f5c4]">_</span>
          </h1>
        </div>
        <div className="w-full">
          <div className="flex justify-between mb-2">
            <span className="font-mono text-gray-600 text-xs tracking-widest">Loading</span>
            <span className="font-mono text-[#00f5c4] text-xs">{progress}%</span>
          </div>
          <div className="w-full h-px bg-gray-800">
            <div
              className="h-px bg-[#00f5c4] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="font-mono text-gray-600 text-xs tracking-widest text-center">
          {progress < 40 && '// loading assets...'}
          {progress >= 40 && progress < 80 && '// building interface...'}
          {progress >= 80 && progress < 100 && '// almost ready...'}
          {progress === 100 && '// welcome'}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const handleComplete = () => {
    setFadeOut(true)
    setTimeout(() => setLoading(false), 600)
  }

  return (
    <>
      {loading && (
        <div className={`transition-opacity duration-600 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <LoadingScreen onComplete={handleComplete} />
        </div>
      )}
      <main className={`bg-[#080b10] text-white min-h-screen transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Services />
        <Contact />
      </main>
    </>
  )
}