import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, CheckCircle, Mail, Globe } from 'lucide-react'

const BIMILogo = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            <Shield size={16} />
            Brand Identity
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            BIMI Verified Logo
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Brand Indicators for Message Identification (BIMI) helps email recipients identify legitimate messages from verified senders. This is our official BIMI-compliant logo file.
          </p>
        </div>

        {/* Logo Display */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 mb-12">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg mb-8">
              <img 
                src="/logo.svg" 
                alt="IllDoIt BIMI Logo" 
                className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="/logo.svg" 
                download="illdoit-bimi-logo.svg"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download SVG
              </a>

              <a 
                href="/logo.svg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all"
              >
                <Globe size={16} />
                View Raw File
              </a>
            </div>
          </div>
        </div>

        {/* BIMI Info */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
              <Shield size={20} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">What is BIMI?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              BIMI (Brand Indicators for Message Identification) is an email authentication standard that displays your brand logo next to emails in supported inboxes. It requires DMARC authentication and a verified trademark.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle size={20} className="text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Requirements</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>DMARC policy set to quarantine or reject</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>SVG logo in Tiny PS or Portable SVG format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Verified Mark Certificate (VMC) from trusted CA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Logo hosted on HTTPS with proper DNS record</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DNS Record Example */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-12">
          <h3 className="text-lg font-bold mb-4">DNS TXT Record Example</h3>
          <p className="text-sm text-slate-400 mb-4">
            Add this TXT record to your DNS to enable BIMI for your domain:
          </p>
          <div className="bg-slate-800 rounded-xl p-4 font-mono text-sm text-green-400 overflow-x-auto">
            <p>default._bimi.illdoit.space</p>
            <p className="mt-2 text-slate-300">v=BIMI1; l=https://illdoit.space/logo.svg;</p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Need Help?</h3>
          <p className="text-slate-600 mb-4">
            For BIMI setup assistance or trademark verification questions:
          </p>
          <a 
            href="mailto:support@illdoit.space" 
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            <Mail size={16} />
            support@illdoit.space
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2026 IllDoIt. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
              <Link to="/tncs" className="hover:text-blue-600 transition-colors">Terms</Link>
              <Link to="/legal" className="hover:text-blue-600 transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BIMILogo
