import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, CheckCircle, CreditCard, Users, ArrowRight, TrendingUp } from 'lucide-react'

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

const ForProviders = () => {
  const benefits = [
    { icon: Clock, text: "Flexible working hours — work when you want" },
    { icon: CheckCircle, text: "Easy onboarding — get started in minutes" },
    { icon: CreditCard, text: "Secure payouts — get paid directly to your account" },
    { icon: Users, text: "Access to local customers — grow your client base" }
  ]

  return (
    <section id="providers" className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-emerald-900/50" />
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <FadeIn direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-emerald-400 text-sm font-semibold mb-4 sm:mb-6 border border-white/10">
              For Service Providers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Turn Your Skills{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Into Income</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Join IllDoIt and start earning by helping people in your community with services you already know how to provide.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={18} className="text-emerald-400" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-200">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-500 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-emerald-600 transition-all hover:scale-105 shadow-xl shadow-emerald-500/25">
              Become a Service Provider <ArrowRight size={18} />
            </a>
          </FadeIn>

          <FadeIn direction="left" className="hidden lg:block">
            <div className="relative">
              <div className="bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg">Provider Dashboard</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Welcome back, Thabo</p>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {[
                    { label: "Earnings", value: "R12,450", color: "text-emerald-400" },
                    { label: "Tasks", value: "48", color: "text-blue-400" },
                    { label: "Rating", value: "4.9", color: "text-yellow-400" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-700/50 rounded-xl p-3 sm:p-4 text-center">
                      <p className={`text-lg sm:text-xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">Recent Tasks</p>
                  {[
                    { task: "Home Cleaning", status: "Completed", amount: "R450" },
                    { task: "Garden Maintenance", status: "In Progress", amount: "R350" },
                    { task: "Furniture Assembly", status: "Pending", amount: "R280" }
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-700/30 rounded-xl p-2.5 sm:p-3">
                      <div>
                        <p className="text-white text-xs sm:text-sm font-medium">{task.task}</p>
                        <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${
                          task.status === "Completed" ? "bg-emerald-500/20 text-emerald-400" :
                          task.status === "In Progress" ? "bg-blue-500/20 text-blue-400" :
                          "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {task.status}
                        </span>
                      </div>
                      <span className="text-white font-semibold text-sm">{task.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-emerald-500 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} />
                  <div>
                    <p className="text-xs text-emerald-100">This Month</p>
                    <p className="font-bold text-sm">+24% Growth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default ForProviders
