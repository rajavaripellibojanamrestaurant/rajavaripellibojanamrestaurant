import React from 'react'
import { restaurant } from '../data/menu.js'

export default function About() {
  return (
    <section id="about" className="relative bg-cream py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-marigold-dark font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Atithi Devo Bhava
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-maroon-dark leading-tight">
            Every Guest is Family
          </h2>
          <p className="mt-6 text-ink/80 leading-relaxed text-base md:text-lg">
            {restaurant.description}
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            From a sizzling plate of Hyderabadi biryani to a comforting Indo-Chinese bowl, we bring
            the spread of a grand Telugu wedding feast to your everyday table — served on banana leaf
            tradition, plated with modern care.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {restaurant.cuisines.map((c) => (
              <li
                key={c}
                className="px-4 py-2 rounded-full bg-leaf/10 text-leaf-dark text-sm font-medium border border-leaf/20"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="banana-leaf-card rounded-[2rem] p-10 md:p-12 shadow-2xl shadow-leaf-dark/30 text-cream relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(120deg, rgba(255,255,255,0.4) 0 2px, transparent 2px 22px)',
              }}
            />
            <p className="font-display italic text-2xl md:text-3xl relative z-10">
              "A royal feast for every craving."
            </p>
            <p className="mt-4 text-cream/80 relative z-10">
              Authentic flavors. Royal experience. Served fresh, every single day.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 relative z-10 text-center">
              <div>
                <p className="text-3xl">🍛</p>
                <p className="text-xs mt-1 tracking-wide uppercase">Biryani</p>
              </div>
              <div>
                <p className="text-3xl">🥢</p>
                <p className="text-xs mt-1 tracking-wide uppercase">Chinese</p>
              </div>
              <div>
                <p className="text-3xl">🍢</p>
                <p className="text-xs mt-1 tracking-wide uppercase">Tandoori</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
