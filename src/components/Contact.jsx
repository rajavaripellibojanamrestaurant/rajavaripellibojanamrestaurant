import React from 'react'
import { restaurant } from '../data/menu.js'

export default function Contact() {
  return (
    <section id="contact" className="bg-maroon-dark text-cream py-24 px-6 md:px-10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle at 0 0, transparent 0, transparent 18px, #C9A227 19px, transparent 20px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-14">
        <div>
          <p className="text-marigold-light font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Visit Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Come, Dine With Family</h2>

          <div className="space-y-5 text-cream/85">
            <div className="flex gap-4">
              <span className="text-xl">📍</span>
              <p>{restaurant.address}</p>
            </div>
            <div className="flex gap-4">
              <span className="text-xl">📞</span>
              <div className="flex flex-col gap-1">
                {restaurant.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-marigold-light">
                    {p}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-xl">✉️</span>
              <a href={`mailto:${restaurant.email}`} className="hover:text-marigold-light break-all">
                {restaurant.email}
              </a>
            </div>
            <div className="flex gap-4">
              <span className="text-xl">🕒</span>
              <p>{restaurant.hours}</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="tel:+919912013333"
              className="px-6 py-3 rounded-full bg-marigold hover:bg-marigold-dark font-semibold transition-colors"
            >
              Call to Reserve
            </a>
            <a
              href={`mailto:${restaurant.email}`}
              className="px-6 py-3 rounded-full border border-gold/50 text-gold-light hover:bg-gold/10 font-semibold transition-colors"
            >
              Enquire for Catering
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-cream/10 min-h-[320px]">
          <iframe
            title="Raja Vari Pelli Bhojanam location map"
            src="https://www.google.com/maps?q=Kondapur+Gachibowli+Hyderabad+500084&output=embed"
            width="100%"
            height="100%"
            style={{ minHeight: 320, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-cream/50 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Raja Vari Pelli Bhojanam. All rights reserved.</p>
        <p className="font-telugu text-gold-light/80">{restaurant.teluguLine} — {restaurant.teluguLineEn}</p>
      </div>
    </section>
  )
}
