import React from 'react'
import { ArrowLeft, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const LegalLayout = ({ title, children, lastUpdated = "May 2026" }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
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
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Shield size={20} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
              <p className="text-sm text-slate-500 mt-1">Last updated: {lastUpdated}</p>
            </div>
          </div>
          <div className="h-px bg-slate-200" />
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="text-slate-700 leading-relaxed space-y-6">
            {children}
          </div>
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
              <Link to="/cooky" className="hover:text-blue-600 transition-colors">Cookies</Link>
              <Link to="/legal" className="hover:text-blue-600 transition-colors">Legal</Link>
              <Link to="/paymentterms" className="hover:text-blue-600 transition-colors">Payments</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LegalLayout
