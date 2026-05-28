import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Services from './components/Services.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import ForProviders from './components/ForProviders.jsx'
import About from './components/About.jsx'
import PayFastSection from './components/PayFastSection.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <WhyChoose />
      <ForProviders />
      <About />
      <PayFastSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
