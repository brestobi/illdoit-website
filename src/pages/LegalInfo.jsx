import React from 'react'
import LegalLayout from './LegalLayout'

const LegalInfo = () => {
  return (
    <LegalLayout title="Legal Information" lastUpdated="May 2026">
      <div className="space-y-8">
        <section>
          <p className="text-lg text-slate-600 mb-4">
            IllDoIt ("we", "us", "our") operates a digital marketplace platform that connects customers seeking services with independent service providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Platform Nature</h2>
          <p>By using IllDoIt, all users agree to the terms, policies, and conditions outlined across our legal documents, including the Terms of Service, Privacy Policy, Cookie Policy, and Payment Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Intermediary Role</h2>
          <p>IllDoIt acts strictly as a technology platform and intermediary. We do not directly provide, supervise, or guarantee services performed by independent service providers listed on the platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Independent Providers</h2>
          <p>All services are executed by third-party providers who operate independently. Users are responsible for ensuring that any service they request or provide complies with applicable laws and local regulations in South Africa.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Policy Updates</h2>
          <p>IllDoIt reserves the right to update these legal documents at any time. Continued use of the platform constitutes acceptance of such updates.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Legal Documents</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Privacy Policy", desc: "How we collect, use, and protect your data", path: "/privacy" },
              { title: "Terms of Service", desc: "Rules for using the IllDoIt platform", path: "/tncs" },
              { title: "Cookie Policy", desc: "How we use cookies and tracking", path: "/cooky" },
              { title: "Payment Terms", desc: "Rules for transactions and payouts", path: "/paymentterms" },
            ].map((doc, i) => (
              <a key={i} href={doc.path} className="block p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-slate-900 mb-1">{doc.title}</h3>
                <p className="text-sm text-slate-500">{doc.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>
          <p>For legal or compliance inquiries, contact us at <a href="mailto:support@illdoit.space" className="text-blue-600 hover:underline">support@illdoit.space</a></p>
        </section>
      </div>
    </LegalLayout>
  )
}

export default LegalInfo
