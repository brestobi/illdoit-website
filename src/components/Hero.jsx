import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Shield, CheckCircle, Zap, ArrowRight, Search, Clock, MapPin, Star, Wrench, Truck, Flower2, Download, Apple } from 'lucide-react'

// Google Play SVG Icon
const GooglePlayIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
  </svg>
)

const Hero = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900" />

      <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 sm:mb-8">
                <Sparkles size={16} className="text-emerald-400" />
                Now Serving South Africa
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
            >
              Need Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Done?</span>
              <br />IllDoIt.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
            >
              Connect with trusted local service providers for cleaning, deliveries, handyman work, gardening, moving assistance, errands, and more.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <a href="#contact" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#providers" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-base sm:text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Become a Provider
              </a>
            </motion.div>

            {/* App Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-12"
            >
              {/* Google Play */}
              <a 
                href="https://play.google.com/store/apps/details?id=space.illdoit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
              >
                <GooglePlayIcon size={18} />
                <div className="text-left leading-none">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wide">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>

              {/* iOS App Store */}
              <a 
                href="https://apps.apple.com/app/illdoit/id123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all hover:scale-105 shadow-lg"
              >
                <Apple size={18} />
                <div className="text-left leading-none">
                  <div className="text-[9px] text-slate-500 uppercase tracking-wide">Download on</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>

              {/* Direct APK - Gold */}
              <a 
                href="/app" 
                className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-slate-900 rounded-xl font-bold text-sm hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 transition-all hover:scale-105 shadow-lg shadow-yellow-500/30 border border-yellow-300"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                <div className="text-left leading-none">
                  <div className="text-[9px] text-amber-800 uppercase tracking-wide">Direct</div>
                  <div className="text-sm font-bold">Download APK</div>
                </div>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400"
            >
              <span className="flex items-center gap-1.5 sm:gap-2"><Shield size={14} className="text-emerald-400" /> Secure Payments</span>
              <span className="flex items-center gap-1.5 sm:gap-2"><CheckCircle size={14} className="text-blue-400" /> Verified Providers</span>
              <span className="flex items-center gap-1.5 sm:gap-2"><Zap size={14} className="text-yellow-400" /> Fast Service</span>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-[280px] sm:w-[320px]">
              <div className="relative bg-slate-800 rounded-[3rem] p-3 shadow-2xl shadow-black/50 border border-slate-700">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="bg-slate-50 min-h-[500px] sm:min-h-[600px] p-4">
                    <div className="flex justify-between items-center px-2 py-1 text-xs text-slate-500 mb-4">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-slate-800 rounded-sm" />
                        <div className="w-4 h-2 bg-slate-800 rounded-sm" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xs text-slate-500">Good Morning</p>
                        <h3 className="font-bold text-slate-900">Find a Service</h3>
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Search size={18} className="text-blue-600" />
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 mb-6 flex items-center gap-2">
                      <Search size={16} className="text-slate-400" />
                      <span className="text-sm text-slate-400">What do you need?</span>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {[
                        { icon: Sparkles, label: "Clean", color: "bg-emerald-100 text-emerald-600" },
                        { icon: Wrench, label: "Fix", color: "bg-blue-100 text-blue-600" },
                        { icon: Truck, label: "Move", color: "bg-orange-100 text-orange-600" },
                        { icon: Flower2, label: "Garden", color: "bg-green-100 text-green-600" },
                      ].map((cat, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${cat.color} flex items-center justify-center`}>
                            <cat.icon size={18} />
                          </div>
                          <span className="text-xs text-slate-600">{cat.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-600 rounded-2xl p-4 text-white mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-xs text-blue-200 mb-1">Active Task</p>
                          <h4 className="font-semibold text-sm">Home Cleaning</h4>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Clock size={16} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-100">
                        <MapPin size={14} />
                        <span>Johannesburg, SA</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-slate-900 truncate">Thabo M.</h4>
                          <div className="flex items-center gap-1">
                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-xs text-slate-500">4.9 (127)</span>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-blue-600">R350/hr</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 sm:-right-8 top-16 sm:top-20 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 w-40 sm:w-48"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Task Completed</p>
                    <p className="font-bold text-sm text-slate-900">R450 Earned</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 sm:-left-8 bottom-24 sm:bottom-32 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 w-36 sm:w-44"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">+2.4k</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">Active Providers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
