import React from 'react'
import LegalLayout from './LegalLayout'

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2026">
      <div className="space-y-8">
        <section>
          <p className="text-lg text-slate-600 mb-4">
            IllDoIt ("we", "us", "our") respects your privacy and is committed to protecting your personal information in accordance with the <strong>Protection of Personal Information Act (POPIA)</strong> of South Africa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
          <p className="mb-3">We collect only information necessary to operate the platform, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Full name and contact details</li>
            <li>Email address and phone number</li>
            <li>Location data (for matching services)</li>
            <li>Profile information (users and providers)</li>
            <li>Payment and transaction data (processed securely via third-party providers)</li>
            <li>Device, browser, and usage data</li>
            <li>Communications between users and providers via the platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Information</h2>
          <p className="mb-3">We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Match users with suitable service providers</li>
            <li>Enable service booking and fulfillment</li>
            <li>Process secure payments and payouts</li>
            <li>Prevent fraud, abuse, and unsafe activity</li>
            <li>Improve platform performance and reliability</li>
            <li>Provide customer support</li>
            <li>Send important service or account updates</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Payment Data</h2>
          <p>IllDoIt does not store full credit card or banking details. All payments are handled by secure third-party payment processors (e.g., PayFast). We only receive confirmation and transaction status.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Sharing of Information</h2>
          <p className="mb-3">We may share limited data with:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Service providers fulfilling your request</li>
            <li>Payment processors</li>
            <li>Identity verification or fraud prevention services</li>
            <li>Legal authorities when required by law</li>
          </ul>
          <p className="mt-3 font-semibold text-slate-800">We do not sell personal data to any third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">5. Data Protection</h2>
          <p>We take reasonable technical and organizational measures to protect user data against loss, misuse, unauthorized access, or disclosure. However, no digital system is 100% secure, and users acknowledge this risk when using the platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">6. Cookies and Analytics</h2>
          <p>We use cookies and analytics tools to improve platform performance, understand user behaviour, and enhance user experience. Users may disable cookies in browser settings, but some features may not function properly.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">7. User Rights (POPIA Compliance)</h2>
          <p className="mb-3">Users may request:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Access to personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of data (where legally permitted)</li>
          </ul>
          <p className="mt-3">Requests can be sent to <a href="mailto:support@illdoit.space" className="text-blue-600 hover:underline">support@illdoit.space</a></p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">8. Data Retention</h2>
          <p>We retain user data only as long as necessary to operate the platform or comply with legal obligations.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">9. Contact</h2>
          <p>For privacy-related inquiries, contact us at <a href="mailto:support@illdoit.space" className="text-blue-600 hover:underline">support@illdoit.space</a></p>
        </section>
      </div>
    </LegalLayout>
  )
}

export default PrivacyPolicy
