import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CreditCard, Shield, Clock, Zap, TrendingUp, Users, Smartphone, Heart } from 'lucide-react'

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const WhyChoose = () => {
  const features = [
    { icon: CreditCard, title: "Secure Payments", description: "PayFast integration for safe, encrypted transactions" },
    { icon: Shield, title: "Verified Providers", description: "Rigorous background checks and identity verification" },
    { icon: Clock, title: "Real-Time Booking", description: "Instant booking with live availability updates" },
    { icon: Zap, title: "Fast Response Times", description: "Average response time under 5 minutes" },
    { icon: TrendingUp, title: "Affordable Pricing", description: "Competitive rates with transparent pricing" },
    { icon: Users, title: "Trusted Community", description: "Ratings and reviews from verified customers" },
    { icon: Smartphone, title: "Easy-to-Use Platform", description: "Intuitive app design for seamless experience" },
    { icon: Heart, title: "Mobile Friendly", description: "Fully responsive on all devices and screen sizes" }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose IllDoIt
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Built with trust, security, and convenience at its core.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon size={20} className="text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
