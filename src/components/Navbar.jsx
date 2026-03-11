import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About',     href: '#about'     },
    { label: 'Projects',  href: '#projects'  },
    { label: 'Skills',    href: '#skills'    },
    { label: 'Education', href: '#education' },
    { label: 'Contact',   href: '#contact'   },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b10]/90 backdrop-blur-md border-b border-[#00f5c4]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="font-mono text-[#00f5c4] tracking-widest text-sm">
          M<span className="text-gray-500">.</span>
          LWERO
          <span className="text-gray-500">_</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-xs text-gray-400 tracking-widest uppercase hover:text-[#00f5c4] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00f5c4] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-[#00f5c4] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#00f5c4] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#00f5c4] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-[#00f5c4]/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs text-gray-400 tracking-widest uppercase hover:text-[#00f5c4] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}