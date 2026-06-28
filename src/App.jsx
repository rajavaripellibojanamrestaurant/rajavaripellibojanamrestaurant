import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Contact />
    </div>
  )
}
