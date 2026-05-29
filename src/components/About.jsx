import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const dirs = { up: { y: 40, x: 0 }, down: { y: -40, x: 0 }, left: { y: 0, x: 40 }, right: { y: 0, x: -40 } }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirs[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const About = () => {
  const stats = [
    { value: 15000, suffix: "+", label: "Tasks Completed" },
    { value: 2400, suffix: "+", label: "Active Providers" },
    { value: 12, suffix: "", label: "Cities Served" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <FadeIn direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 sm:mb-6">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              About IllDoIt
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
              IllDoIt is a technology platform designed to simplify access to trusted everyday services across South Africa. Our mission is to connect communities by helping people find reliable assistance for tasks, errands, home services, and freelance work through a fast, secure, and user-friendly mobile experience.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
              We believe everyone deserves access to quality services at fair prices, and every skilled worker deserves the opportunity to earn a living doing what they do best.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">2,400+</span> providers already joined
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-100 text-center hover:shadow-lg transition-all"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About
