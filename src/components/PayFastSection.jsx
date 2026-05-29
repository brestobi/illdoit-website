import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield } from 'lucide-react'

const FadeIn = ({ children, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const PayFastSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-full bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-emerald-500" />
              <span className="text-slate-700 font-medium text-sm sm:text-base">Secure Payments Powered by</span>
            </div>
            <span className="font-bold text-blue-700 text-sm sm:text-base">PayFast</span>
            <span className="text-xs text-slate-400 hidden sm:inline">South Africa's Trusted Payment Gateway</span>
          </div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500 px-2">
            PCI DSS Compliant • 3D Secure Authentication • Instant EFT • Credit Card • Mobicred
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default PayFastSection
