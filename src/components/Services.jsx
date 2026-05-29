import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Wrench, Truck, Flower2, TruckIcon, ClipboardList, Briefcase, Home, ArrowRight } from 'lucide-react'

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

const Services = () => {
  const serviceList = [
    { icon: Sparkles, title: "Cleaning Services", description: "Professional home and office cleaning by vetted experts.", color: "from-emerald-500 to-teal-500" },
    { icon: Wrench, title: "Handyman Services", description: "Skilled tradespeople for repairs, installations, and maintenance.", color: "from-blue-500 to-indigo-500" },
    { icon: Truck, title: "Delivery Assistance", description: "Reliable pickup and delivery services for packages and furniture.", color: "from-orange-500 to-red-500" },
    { icon: Flower2, title: "Gardening Services", description: "Expert gardeners for lawn care, landscaping, and pruning.", color: "from-green-500 to-emerald-500" },
    { icon: TruckIcon, title: "Moving Assistance", description: "Professional movers for local and long-distance relocations.", color: "from-purple-500 to-pink-500" },
    { icon: ClipboardList, title: "Errands & Tasks", description: "Get help with shopping, queuing, and document delivery.", color: "from-yellow-500 to-orange-500" },
    { icon: Briefcase, title: "Freelance Services", description: "Connect with skilled freelancers for design, writing, and dev.", color: "from-cyan-500 to-blue-500" },
    { icon: Home, title: "Home Maintenance", description: "Plumbing, electrical, painting, and HVAC maintenance.", color: "from-rose-500 to-red-500" }
  ]

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Whatever you need done, we have skilled professionals ready to help.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {serviceList.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full flex flex-col"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform`}>
                  <service.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{service.description}</p>
                <div className="mt-3 sm:mt-4 flex items-center text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
