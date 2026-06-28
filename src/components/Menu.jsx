import React, { useMemo, useState } from 'react'
import { menu } from '../data/menu.js'

const VEG_HINTS = ['veg', 'paneer', 'dal', 'mushroom', 'babycorn', 'kaju', 'naan', 'roti', 'jeera', 'crispy corn']
const isLikelyVeg = (name, category) => {
  const n = name.toLowerCase()
  const c = category.toLowerCase()
  if (c.includes('non-veg') || c.includes('seafood') || c.includes('sea food')) return false
  if (n.includes('chicken') || n.includes('mutton') || n.includes('egg') || n.includes('fish') || n.includes('prawn') || n.includes('kheema')) return false
  return true
}

export default function Menu() {
  const [activeCat, setActiveCat] = useState('All')
  const [query, setQuery] = useState('')
  const [diet, setDiet] = useState('all') // all | veg | nonveg

  const categories = useMemo(() => ['All', ...menu.map((m) => m.category)], [])

  const filtered = useMemo(() => {
    return menu
      .filter((m) => activeCat === 'All' || m.category === activeCat)
      .map((m) => ({
        ...m,
        items: m.items.filter((it) => {
          const matchesQuery = it.name.toLowerCase().includes(query.toLowerCase())
          const veg = isLikelyVeg(it.name, m.category)
          const matchesDiet = diet === 'all' || (diet === 'veg' ? veg : !veg)
          return matchesQuery && matchesDiet
        }),
      }))
      .filter((m) => m.items.length > 0)
  }, [activeCat, query, diet])

  return (
    <section id="menu" className="bg-maroon-dark py-24 px-6 md:px-10 relative">
      <div className="kolam-border absolute top-0 left-0 w-full" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-marigold-light font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            The Full Spread
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">Our Menu</h2>
          <p className="text-cream/60 mt-3 max-w-xl mx-auto">
            Biryani, Tandoori, Indo-Chinese & traditional Indian curries — all under one roof.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          <div className="flex gap-2 bg-cream/5 rounded-full p-1 w-fit border border-cream/10">
            {[
              { id: 'all', label: 'All' },
              { id: 'veg', label: '🟢 Veg' },
              { id: 'nonveg', label: '🔴 Non-Veg' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDiet(d.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  diet === d.id ? 'bg-marigold text-white' : 'text-cream/70 hover:text-cream'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a dish e.g. Biryani, Paneer..."
            className="w-full md:w-72 px-4 py-2 rounded-full bg-cream/10 text-cream placeholder:text-cream/40 border border-cream/15 focus:outline-none focus:border-marigold"
            aria-label="Search menu"
          />
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCat === cat
                  ? 'bg-gold text-maroon-dark border-gold'
                  : 'border-cream/15 text-cream/70 hover:border-gold/50 hover:text-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-cream/60 py-10">No dishes match your search. Try another term.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {filtered.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-display text-2xl text-gold-light">{cat.category}</h3>
                </div>
                <ul className="divide-y divide-cream/10">
                  {cat.items.map((it) => (
                    <li key={it.name} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="text-cream/90">{it.name}</span>
                      <span className="flex-1 border-b border-dotted border-cream/15 translate-y-[-4px]" />
                      <span className="font-display text-lg text-marigold-light whitespace-nowrap">
                        ₹{it.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="kolam-border absolute bottom-0 left-0 w-full" />
    </section>
  )
}
