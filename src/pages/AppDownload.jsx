import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Smartphone, QrCode, CheckCircle, Shield, Zap, ChevronRight } from 'lucide-react'
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

const Step = ({ number, title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
      {number}
    </div>
    <div>
      <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
)

const AppDownload = () => {
  const handleDownload = () => {
    // Create a dummy APK file download
    const link = document.createElement('a')
    link.href = '/illdoit-app.apk'
    link.download = 'illdoit-app.apk'
    link.click()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
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
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-emerald-900 py-16 sm:py-24 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <FadeIn>
                <div className="text-center lg:text-left">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
                    <Smartphone size={16} className="text-yellow-400" />
                    Mobile App Available
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    Download the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">IllDoIt App</span>
                  </h1>
                  <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                    Get services done faster. Book trusted providers, track progress, and pay securely — all from your phone.
                  </p>

                  {/* Download Button */}
                  <button 
                    onClick={handleDownload}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-slate-900 rounded-full font-bold text-lg hover:from-yellow-300 hover:via-yellow-400 hover:to-amber-400 transition-all hover:scale-105 shadow-xl shadow-yellow-500/30 border border-yellow-300 mb-8"
                  >
                    <Download size={22} className="group-hover:animate-bounce" />
                    Download App (APK)
                  </button>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><Shield size={14} className="text-emerald-400" /> Secure</span>
                    <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-400" /> Verified</span>
                    <span className="flex items-center gap-1.5"><Zap size={14} className="text-yellow-400" /> Fast</span>
                  </div>
                </div>
              </FadeIn>

              {/* Right - Phone with QR + Worker */}
              <FadeIn delay={0.2}>
                <div className="relative flex justify-center">
                  {/* Phone Mockup */}
                  <div className="relative w-[260px] sm:w-[300px]">
                    <div className="relative bg-slate-800 rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl shadow-black/50 border border-slate-700">
                      <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                        <div className="bg-slate-50 min-h-[480px] sm:min-h-[540px] p-4">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center px-2 py-1 text-xs text-slate-500 mb-4">
                            <span>9:41</span>
                            <div className="flex gap-1">
                              <div className="w-4 h-2 bg-slate-800 rounded-sm" />
                              <div className="w-4 h-2 bg-slate-800 rounded-sm" />
                            </div>
                          </div>

                          {/* App Content */}
                          <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                              <span className="text-2xl font-bold text-white">I</span>
                            </div>
                            <h3 className="font-bold text-slate-900">IllDoIt</h3>
                            <p className="text-xs text-slate-500">v2.1.0</p>
                          </div>

                          {/* QR Code Placeholder */}
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 mb-4">
                            <p className="text-xs text-slate-500 text-center mb-3">Scan to Download</p>
                            <div className="w-32 h-32 mx-auto bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300">
                              <QrCode size={48} className="text-slate-400" />
                            </div>
                          </div>

                          {/* Install Button */}
                          <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                            Install App
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 3D Construction Worker - Sitting on top of phone */}
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 z-10"
                    >
                      <img 
                        src="/construction_worker.png" 
                        alt="3D Construction Worker" 
                        className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-2xl"
                        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
                      />
                    </motion.div>

                    {/* Floating Badge */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -right-2 sm:-right-4 top-20 bg-white rounded-xl p-2.5 sm:p-3 shadow-xl border border-slate-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <CheckCircle size={16} className="text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">10K+</p>
                          <p className="text-[10px] text-slate-500">Downloads</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Installation Guide */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
                Easy Setup
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Installation Guide
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Follow these simple steps to get the IllDoIt app running on your Android device.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
              <FadeIn delay={0.1}>
                <div className="space-y-6 sm:space-y-8">
                  <Step 
                    number="1" 
                    title="Download the APK" 
                    description="Click the download button above to save the IllDoIt APK file to your device."
                  />
                  <Step 
                    number="2" 
                    title="Allow Unknown Sources" 
                    description="Go to Settings > Security > Unknown Sources and enable installation from unknown sources."
                  />
                  <Step 
                    number="3" 
                    title="Install the App" 
                    description="Open your Downloads folder, tap the illdoit-app.apk file, and follow the installation prompts."
                  />
                  <Step 
                    number="4" 
                    title="Open & Sign Up" 
                    description="Launch the IllDoIt app, create your account, and start booking services right away."
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Smartphone size={20} className="text-blue-600" />
                    System Requirements
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Android 7.0 (Nougat) or higher",
                      "Minimum 2GB RAM",
                      "100MB free storage space",
                      "Active internet connection",
                      "GPS location services enabled",
                    ].map((req, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <ChevronRight size={16} className="text-blue-500 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> The IllDoIt app is currently available for Android devices only. iOS version coming soon.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* QR Section */}
        <section className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Or Scan to Download
              </h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Point your phone camera at this QR code to download the app directly.
              </p>
              <div className="inline-block bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
                <div className="w-48 h-48 sm:w-56 sm:h-56 bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300 mx-auto mb-4">
                  <QrCode size={80} className="text-slate-400" />
                </div>
                <p className="text-sm text-slate-500">Scan with your phone camera</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-500">&copy; 2026 IllDoIt. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/tncs" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppDownload
