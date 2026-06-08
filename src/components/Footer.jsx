import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="IllDoIt" />
      <meta itemProp="url" content="https://illdoit.space" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <span className="font-bold text-lg text-white">I</span>
              </div>
              <span className="text-xl font-bold text-white">IllDoIt</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              South Africa's trusted on-demand marketplace for everyday services. Connecting communities one task at a time. Available in Johannesburg, Cape Town, Durban, Pretoria & Port Elizabeth.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={`Follow IllDoIt on ${Icon.name}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/#services" },
                { name: "How It Works", path: "/#how-it-works" },
                { name: "Providers", path: "/#providers" },
                { name: "FAQ", path: "/#faq" },
                { name: "Download App", path: "/app" },
                { name: "Founders", path: "/founder" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/tncs" },
                { name: "Cookie Policy", path: "/cooky" },
                { name: "Legal Information", path: "/legal" },
                { name: "Payment Terms", path: "/paymentterms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-blue-400" />
                <a href="mailto:support@illdoit.space" className="hover:text-white transition-colors">support@illdoit.space</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-400" />
                <span>Johannesburg, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} className="text-purple-400" />
                <a href="https://illdoit.space" className="hover:text-white transition-colors">illdoit.space</a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-slate-500 mb-2">Secure Payments By</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold">
                PayFast
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} IllDoIt (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Made with care in South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
