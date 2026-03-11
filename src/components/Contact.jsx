import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // idle | sending | success | error

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#0d1117] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-3 reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="block w-6 h-px bg-[#00f5c4]" />
          <span className="font-mono text-[#00f5c4] text-xs tracking-widest uppercase">
            04 — Contact
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="font-extrabold text-white mb-4 leading-tight tracking-tight reveal opacity-0 translate-y-8 transition-all duration-700 delay-100"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Let's <span className="text-[#00f5c4]">Work Together</span>
        </h2>

        <p className="font-mono text-gray-500 text-xs tracking-wide mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 delay-150">
          Have a project in mind? Let's talk about it.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">

            <p className="text-gray-400 text-sm leading-loose mb-10">
              I am open to full time roles, freelance projects, and
              collaborations. Whether you have a fully scoped project or just
              an idea — reach out and let us build something great together.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#00f5c4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#00f5c4] text-xs">@</span>
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-600 tracking-widest uppercase mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:marsdenlwero@gmail.com"
                    className="font-mono text-sm text-gray-300 hover:text-[#00f5c4] transition-colors duration-200"
                  >
                    marsdenlwero@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#00f5c4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#00f5c4] text-xs">/</span>
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-600 tracking-widest uppercase mb-1">
                    GitHub
                  </div>
                  <a
                    href="https://github.com/Marsden-tech"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm text-gray-300 hover:text-[#00f5c4] transition-colors duration-200"
                  >
                    github.com/marsden-tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#00f5c4]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#00f5c4] text-xs">in</span>
                </div>
                <div>
                  <div className="font-mono text-xs text-gray-600 tracking-widest uppercase mb-1">
                    LinkedIn
                  </div>
                  <a
                    href="https://www.linkedin.com/in/marsden-lwero-836120179/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm text-gray-300 hover:text-[#00f5c4] transition-colors duration-200"
                  >
                    linkedin.com/in/marsden-lwero
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right — Form */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#080b10] border border-[#00f5c4]/10 text-gray-300 font-mono text-sm px-4 py-3 outline-none focus:border-[#00f5c4]/40 transition-colors duration-200 placeholder-gray-700"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#080b10] border border-[#00f5c4]/10 text-gray-300 font-mono text-sm px-4 py-3 outline-none focus:border-[#00f5c4]/40 transition-colors duration-200 placeholder-gray-700"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#080b10] border border-[#00f5c4]/10 text-gray-300 font-mono text-sm px-4 py-3 outline-none focus:border-[#00f5c4]/40 transition-colors duration-200 placeholder-gray-700 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full font-mono text-xs tracking-widest uppercase py-4 bg-[#00f5c4] text-[#080b10] font-bold hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="font-mono text-xs text-[#00f5c4] tracking-wide text-center">
                  ✓ Message sent! I will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="font-mono text-xs text-red-400 tracking-wide text-center">
                  ✗ Something went wrong. Please try again or email me directly.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#00f5c4]/08 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-gray-600 text-xs tracking-wide">
          © {new Date().getFullYear()} Marsden M.O. Lwero. All rights reserved.
        </p>
        <p className="font-mono text-gray-700 text-xs tracking-wide">
          Designed & built by <span className="text-[#00f5c4]">Marsden M.O.</span> <span className="text-[#00f5c4]">Lwero</span>
        </p>
      </div>

    </section>
  )
}