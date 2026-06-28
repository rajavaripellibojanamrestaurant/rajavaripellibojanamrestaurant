import React, { useState, useEffect } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#services', label: 'Dine / Takeaway / Catering' },
  { href: '#contact', label: 'Visit Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-maroon-dark/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl md:text-3xl text-gold-light tracking-wide leading-none">
            Raja Vari
          </span>
          <span className="font-display italic text-base md:text-lg text-cream/70 hidden sm:inline">
            Pelli Bhojanam
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/90 text-sm font-medium tracking-wide hover:text-marigold-light transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+919912013333"
            className="px-5 py-2 rounded-full bg-marigold hover:bg-marigold-dark text-cream text-sm font-semibold tracking-wide transition-colors shadow-md shadow-black/20"
          >
            Call Now
          </a>
        </nav>

        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-maroon-dark/98 px-6 pb-6 flex flex-col gap-4 animate-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 text-base font-medium py-1 border-b border-gold/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+919912013333"
            className="mt-2 text-center px-5 py-3 rounded-full bg-marigold text-cream font-semibold"
          >
            Call Now: +91 99120 13333
          </a>
        </div>
      )}
    </header>
  )
}
