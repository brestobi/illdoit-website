import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Apple } from 'lucide-react'

// Google Play SVG Icon
const GooglePlayIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
  </svg>
)

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Providers", href: "#providers" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3" 
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled ? "bg-blue-600" : "bg-white"
            }`}>
              <span className={`font-bold text-sm sm:text-lg ${isScrolled ? "text-white" : "text-blue-600"}`}>I</span>
            </div>
            <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}>
              IllDoIt
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            <a
              href="/app"
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105 flex items-center gap-1.5 ${
                isScrolled
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 hover:from-yellow-300 hover:to-amber-400 shadow-md"
                  : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              <Download size={14} />
              Get App
            </a>
            <a
              href="#contact"
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all hover:scale-105 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                  : "bg-white text-blue-600 hover:bg-white/90"
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-slate-900" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-xl"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-700 font-medium py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-blue-600"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile App Download Buttons */}
              <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
                <p className="text-xs text-slate-500 px-3 pt-1">Download App</p>

                <a
                  href="https://play.google.com/store/apps/details?id=space.illdoit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm"
                >
                  <GooglePlayIcon size={16} /> Google Play
                </a>

                <a
                  href="https://apps.apple.com/app/illdoit/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm"
                >
                  <Apple size={16} /> App Store
                </a>

                <a
                  href="/app"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 rounded-xl font-bold text-sm"
                >
                  <Download size={16} /> Download APK
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-full font-semibold mt-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
