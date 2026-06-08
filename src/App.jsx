import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
import AppDownload from './pages/AppDownload.jsx'
import BIMILogo from './pages/BIMILogo.jsx'
import NotFound from './pages/NotFound.jsx'

// SEO Title updater component
function SEOTitle({ title, description }) {
  const location = useLocation()

  useEffect(() => {
    document.title = title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', description)
    }

    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://illdoit.space${location.pathname}`)
    }

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://illdoit.space${location.pathname}`)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', description)
    }

    let twTitle = document.querySelector('meta[property="twitter:title"]')
    if (twTitle) {
      twTitle.setAttribute('content', title)
    }

    let twDesc = document.querySelector('meta[property="twitter:description"]')
    if (twDesc) {
      twDesc.setAttribute('content', description)
    }

    window.scrollTo(0, 0)
  }, [location, title, description])

  return null
}

function HomePage() {
  return (
    <>
      <SEOTitle 
        title="IllDoIt | On-Demand Services Marketplace South Africa"
        description="Book trusted local service providers in South Africa for cleaning, handyman, delivery, gardening, moving & more. Secure PayFast payments. Available in Johannesburg, Cape Town, Durban & Pretoria."
      />
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

function AppDownloadPage() {
  return (
    <>
      <SEOTitle 
        title="Download IllDoIt App | Android & iOS South Africa"
        description="Download the IllDoIt app for Android and iOS. Book trusted local service providers on the go. Available on Google Play, App Store, and direct APK download."
      />
      <AppDownload />
    </>
  )
}

function FounderPageWrapper() {
  return (
    <>
      <SEOTitle 
        title="Meet the Founders | IllDoIt Leadership Team"
        description="Meet Elvis Raganya (CEO) and Bresley Dimpho Mogofe (CTO), the founders of IllDoIt. Building the future of on-demand services in South Africa."
      />
      <FounderPage />
    </>
  )
}

function BIMILogoPage() {
  return (
    <>
      <SEOTitle 
        title="BIMI Verified Logo | IllDoIt Brand Identity"
        description="IllDoIt BIMI-compliant logo for email authentication. Download the official SVG logo file for Brand Indicators for Message Identification (BIMI)."
      />
      <BIMILogo />
    </>
  )
}

function PrivacyPage() {
  return (
    <>
      <SEOTitle 
        title="Privacy Policy | IllDoIt - POPIA Compliant"
        description="IllDoIt Privacy Policy. We protect your personal information in accordance with South Africa's POPIA. Learn how we collect, use, and safeguard your data."
      />
      <PrivacyPolicy />
    </>
  )
}

function TermsPage() {
  return (
    <>
      <SEOTitle 
        title="Terms of Service | IllDoIt Platform Rules"
        description="IllDoIt Terms of Service. Read our platform rules, user conduct guidelines, payment terms, and liability policies for using our service marketplace."
      />
      <TermsOfService />
    </>
  )
}

function CookiePage() {
  return (
    <>
      <SEOTitle 
        title="Cookie Policy | IllDoIt Tracking & Cookies"
        description="IllDoIt Cookie Policy. Learn how we use cookies and tracking technologies to improve your experience on our platform."
      />
      <CookiePolicy />
    </>
  )
}

function LegalPage() {
  return (
    <>
      <SEOTitle 
        title="Legal Information | IllDoIt Compliance"
        description="IllDoIt legal information. Platform intermediary role, independent providers, policy updates, and compliance with South African regulations."
      />
      <LegalInfo />
    </>
  )
}

function PaymentPage() {
  return (
    <>
      <SEOTitle 
        title="Payment Terms | IllDoIt PayFast Secure Payments"
        description="IllDoIt Payment Terms. Secure PayFast transactions, refund policies, provider payouts, dispute resolution, and ZAR currency information."
      />
      <PaymentTerms />
    </>
  )
}

function NotFoundPage() {
  return (
    <>
      <SEOTitle 
        title="Page Not Found | IllDoIt"
        description="The page you are looking for does not exist. Return to IllDoIt homepage to book trusted local service providers in South Africa."
      />
      <NotFound />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppDownloadPage />} />
        <Route path="/founder" element={<FounderPageWrapper />} />
        <Route path="/logo" element={<BIMILogoPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/tncs" element={<TermsPage />} />
        <Route path="/cooky" element={<CookiePage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/paymentterms" element={<PaymentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
