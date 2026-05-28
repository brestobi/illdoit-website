import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'
import LegalInfo from './pages/LegalInfo.jsx'
import PaymentTerms from './pages/PaymentTerms.jsx'
import FounderPage from './pages/FounderPage.jsx'
import NotFound from './pages/NotFound.jsx'

function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/tncs" element={<TermsOfService />} />
        <Route path="/cooky" element={<CookiePolicy />} />
        <Route path="/legal" element={<LegalInfo />} />
        <Route path="/paymentterms" element={<PaymentTerms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
