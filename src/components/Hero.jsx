import React from 'react'
import Hero3D from './Hero3D.jsx'
import { restaurant } from '../data/menu.js'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark"
    >
      {/* faint kolam pattern overlay, echoing the menu cover texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle at 0 0, transparent 0, transparent 18px, #E8732A 19px, transparent 20px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="absolute inset-0">
        <Hero3D />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-10 items-center pt-24 pb-16">
        <div>
          <p className="font-telugu text-gold-light/90 text-xl mb-3">{restaurant.teluguLine}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream">
            <span className="block italic text-gold-light/90 text-2xl md:text-3xl mb-2 tracking-wide">
              Raja Vari
            </span>
            <span className="gold-text">Pelli Bhojanam</span>
          </h1>
          <p className="mt-3 text-marigold-light text-lg md:text-xl font-display tracking-[0.2em] uppercase">
            Royal Wedding Feast
          </p>
          <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-md">
            {restaurant.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="px-7 py-3 rounded-full bg-marigold hover:bg-marigold-dark text-white font-semibold tracking-wide shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5"
            >
              View Full Menu
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-gold/60 text-gold-light hover:bg-gold/10 font-semibold tracking-wide transition-colors"
            >
              Reserve / Order
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-cream/70 text-sm">
            <div>
              <p className="font-display text-3xl text-gold-light">5+</p>
              <p>Cuisine Styles</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-light">3</p>
              <p>Dine · Takeaway · Catering</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold-light">80+</p>
              <p>Dishes on the Menu</p>
            </div>
          </div>
        </div>

        {/* spacer column lets the 3D diya breathe on the right on desktop */}
        <div className="hidden md:block" />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/50 text-xs tracking-[0.3em] uppercase animate-bounce">
        Scroll
      </div>
    </section>
  )
}
