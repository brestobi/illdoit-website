import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Globe, Target, Shield, Users, TrendingUp, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const FounderPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="font-bold text-sm text-white">I</span>
              </div>
              <span className="text-lg font-bold text-white">IllDoIt</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Hero */}
        <FadeIn className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            The Team Behind IllDoIt
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Meet the Founders
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building the future of on-demand services in South Africa. A two-person founding team combining technical engineering and strategic leadership.
          </p>
        </FadeIn>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {/* Elvis Raganya */}
          <FadeIn delay={0.1}>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 overflow-hidden">
                  <img 
                    src="/image_elvis.png" 
                    alt="Elvis Raganya" 
                    className="w-32 h-32 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <span className="text-4xl font-bold text-white absolute">ER</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Elvis Raganya</h2>
                <p className="text-blue-600 font-semibold mb-4">Chief Executive Officer (CEO) & Director</p>
                <div className="h-px w-16 bg-slate-200 mb-6" />
                <p className="text-slate-600 leading-relaxed">
                  Elvis is responsible for the overall vision, business strategy, operations, and growth of the platform. His role focuses on building partnerships, guiding company direction, and ensuring IllDoIt develops into a trusted and scalable service marketplace. As CEO, he leads the business side and oversees long-term development and market expansion.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Bresley Mogofe */}
          <FadeIn delay={0.2}>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 overflow-hidden">
                  <img 
                    src="/image_bresley.png" 
                    alt="Bresley Dimpho Mogofe" 
                    className="w-32 h-32 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <span className="text-4xl font-bold text-white absolute">BM</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Bresley Dimpho Mogofe</h2>
                <p className="text-emerald-600 font-semibold mb-4">Chief Technology Officer (CTO) & Lead Engineer</p>
                <div className="h-px w-16 bg-slate-200 mb-6" />
                <p className="text-slate-600 leading-relaxed">
                  Bresley is responsible for the full technical development of the platform, including system architecture, software engineering, app development, and infrastructure design. His work ensures that IllDoIt is stable, secure, scalable, and built to support real-world usage across South Africa. As CTO, he leads all engineering efforts and transforms the product vision into a functional digital platform.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Leadership Structure */}
        <FadeIn className="mb-24">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Structure</h2>
            <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">
              IllDoIt operates with a clear and balanced leadership model that ensures both business execution and technical excellence are equally prioritized.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <Award size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">CEO</h3>
                <p className="text-slate-300 leading-relaxed">
                  Business strategy, operations, partnerships, and company growth
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">CTO</h3>
                <p className="text-slate-300 leading-relaxed">
                  Technical development, engineering, system design, and platform stability
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mission */}
        <FadeIn className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
              Why We Exist
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              To create a reliable digital platform that makes it easy for people to find, book, and pay trusted service providers in their local communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Empowering Providers", desc: "Empowering local workers and service providers" },
              { icon: Target, title: "Accessibility", desc: "Making everyday services accessible and efficient" },
              { icon: Shield, title: "Transparency", desc: "Building secure and transparent digital systems" },
              { icon: TrendingUp, title: "Economic Growth", desc: "Supporting economic opportunities through technology" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Commitment */}
        <FadeIn className="mb-24">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 sm:p-12 border border-blue-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Commitment</h2>
            <p className="text-slate-600 text-center mb-10">
              IllDoIt is committed to building a platform that is:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Secure and privacy-focused",
                "Transparent and user-friendly",
                "Legally compliant with South African regulations",
                "Designed for real-world scalability",
                "Built on trust between users and providers",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Contact */}
        <FadeIn>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <p className="text-slate-600 mb-6">
              For business inquiries, partnerships, or support:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:support@illdoit.space" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
              >
                <Mail size={18} />
                support@illdoit.space
              </a>
              <a 
                href="https://illdoit.space" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all"
              >
                <Globe size={18} />
                illdoit.space
              </a>
            </div>
          </div>
        </FadeIn>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2026 IllDoIt. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              <Link to="/tncs" className="hover:text-blue-600 transition-colors">Terms</Link>
              <Link to="/cooky" className="hover:text-blue-600 transition-colors">Cookies</Link>
              <Link to="/legal" className="hover:text-blue-600 transition-colors">Legal</Link>
              <Link to="/paymentterms" className="hover:text-blue-600 transition-colors">Payments</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FounderPage
