import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, Users, Shield } from 'lucide-react'

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

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Post a Task",
      description: "Tell us what you need done and where you need help. Describe your task in detail and set your budget.",
      color: "bg-blue-100 text-blue-600",
      step: "01"
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "Connect with nearby trusted service providers available to help. Browse profiles, reviews, and ratings.",
      color: "bg-emerald-100 text-emerald-600",
      step: "02"
    },
    {
      icon: Shield,
      title: "Get It Done",
      description: "Track progress and pay securely once the task is completed. Your satisfaction is our priority.",
      color: "bg-purple-100 text-purple-600",
      step: "03"
    }
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Getting help has never been easier. Three simple steps to get your tasks done.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-5xl sm:text-6xl font-bold text-slate-100 select-none">
                  {step.step}
                </div>
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4 sm:mb-6`}>
                  <step.icon size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
