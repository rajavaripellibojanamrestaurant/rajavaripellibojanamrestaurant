import React from 'react'

const services = [
  {
    title: 'Dine-In',
    emoji: '🍽️',
    desc: 'Sit back and enjoy a warm, traditional dining experience with our full multi-cuisine spread, served fresh to your table.',
  },
  {
    title: 'Takeaway',
    emoji: '🥡',
    desc: 'Order ahead and pick up your favorites — quick, fresh, and packed with care for your home or office.',
  },
  {
    title: 'Catering',
    emoji: '👑',
    desc: 'From engagements to wedding feasts, we bring the Pelli Bhojanam experience to your event with full-service catering.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-marigold-dark font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            How You Can Enjoy Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-maroon-dark">Dine, Takeaway or Cater</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-white p-8 shadow-lg shadow-maroon-dark/5 border border-gold/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-marigold/10 flex items-center justify-center text-3xl mb-5 group-hover:bg-marigold/20 transition-colors">
                {s.emoji}
              </div>
              <h3 className="font-display text-2xl text-maroon-dark mb-2">{s.title}</h3>
              <p className="text-ink/70 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          <p className="text-ink/60 text-sm">Also order on:</p>
          <span className="px-5 py-2 rounded-full bg-red-50 text-red-600 font-semibold text-sm border border-red-200">
            Zomato
          </span>
          <span className="px-5 py-2 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm border border-orange-200">
            Swiggy
          </span>
        </div>
      </div>
    </section>
  )
}
