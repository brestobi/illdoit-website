import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          <FadeIn direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-4 sm:mb-6">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed">
              Have questions or want to partner with us? We'd love to hear from you. Reach out and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500">Email Us</p>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">hello@illdoit.co.za</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">Johannesburg, South Africa</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Globe size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500">Website</p>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">www.illdoit.co.za</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <p className="text-sm text-slate-500 mb-3 sm:mb-4">Follow Us</p>
              <div className="flex gap-2 sm:gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/20 text-sm sm:text-base"
                >
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact
