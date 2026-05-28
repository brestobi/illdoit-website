import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Shield, CheckCircle, Zap, ArrowRight, Search, Clock, MapPin, Star, Wrench, Truck, Flower2 } from 'lucide-react'

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8">
                <Sparkles size={16} className="text-emerald-400" />
                Now Serving South Africa
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Need Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Done?</span>
              <br />IllDoIt.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Connect with trusted local service providers for cleaning, deliveries, handyman work, gardening, moving assistance, errands, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </a>
              <a href="#providers" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Become a Provider
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400"
            >
              <span className="flex items-center gap-2"><Shield size={16} className="text-emerald-400" /> Secure Payments</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-400" /> Verified Providers</span>
              <span className="flex items-center gap-2"><Zap size={16} className="text-yellow-400" /> Fast Service</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-[320px]">
              <div className="relative bg-slate-800 rounded-[3rem] p-3 shadow-2xl shadow-black/50 border border-slate-700">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="bg-slate-50 min-h-[600px] p-4">
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
                          <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center`}>
                            <cat.icon size={20} />
                          </div>
                          <span className="text-xs text-slate-600">{cat.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-600 rounded-2xl p-4 text-white mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-xs text-blue-200 mb-1">Active Task</p>
                          <h4 className="font-semibold">Home Cleaning</h4>
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
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-slate-900">Thabo M.</h4>
                          <div className="flex items-center gap-1">
                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                            <span className="text-xs text-slate-500">4.9 (127 reviews)</span>
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
                className="absolute -right-8 top-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-48"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-emerald-600" />
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
                className="absolute -left-8 bottom-32 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-44"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full border-2 border-white" />
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
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
