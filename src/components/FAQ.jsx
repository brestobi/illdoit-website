import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does IllDoIt work?",
      answer: "IllDoIt connects you with trusted local service providers. Simply post a task describing what you need, browse available providers in your area, and book the one that fits your needs. You can track progress in real-time and pay securely through the app once the job is done."
    },
    {
      question: "Is payment secure?",
      answer: "Absolutely. We use PayFast, South Africa's leading payment gateway, to process all transactions. Your payment information is encrypted and never stored on our servers. Funds are held securely until the task is completed to your satisfaction."
    },
    {
      question: "How are service providers verified?",
      answer: "All service providers undergo a rigorous verification process including identity verification, background checks, skill assessments, and reference checks. We also monitor ratings and reviews from every completed task to maintain quality standards."
    },
    {
      question: "What services are available?",
      answer: "We offer a wide range of services including cleaning, handyman work, deliveries, gardening, moving assistance, errands, freelance work, and home maintenance. New service categories are added regularly based on community demand."
    },
    {
      question: "When will the app launch?",
      answer: "IllDoIt is currently in beta testing in select South African cities. We're planning a full public launch in Q3 2026. Join our waitlist to be notified when we launch in your area."
    },
    {
      question: "How do providers get paid?",
      answer: "Service providers receive payments directly to their linked bank accounts within 2-3 business days after task completion. We handle all the payment processing, invoicing, and tax documentation."
    },
    {
      question: "Is IllDoIt available across South Africa?",
      answer: "We're currently active in major metropolitan areas including Johannesburg, Cape Town, Durban, Pretoria, and Port Elizabeth. We're rapidly expanding to cover more cities and towns across South Africa."
    }
  ]

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 px-2">
            Everything you need to know about IllDoIt.
          </p>
        </FadeIn>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <motion.div className="bg-white rounded-xl sm:rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="font-semibold text-slate-900 pr-4 text-sm sm:text-base">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <ChevronUp size={18} className="text-blue-600 sm:size-5" />
                    ) : (
                      <ChevronDown size={18} className="text-slate-400 sm:size-5" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
