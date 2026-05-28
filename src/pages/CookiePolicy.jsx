import React from 'react'
import LegalLayout from './LegalLayout'

const CookiePolicy = () => {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 2026">
      <div className="space-y-8">
        <section>
          <p className="text-lg text-slate-600 mb-4">
            IllDoIt uses cookies and similar tracking technologies to improve platform performance, security, and user experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device that help websites remember preferences and activity.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h2>
          <p className="mb-3">We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Keep users logged in securely</li>
            <li>Improve platform functionality</li>
            <li>Analyze traffic and usage patterns</li>
            <li>Enhance security and fraud prevention</li>
            <li>Personalize user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Types of Cookies</h2>
          <p className="mb-3">We may use:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><strong>Essential cookies</strong> — Required for platform operation</li>
            <li><strong>Analytics cookies</strong> — Usage tracking</li>
            <li><strong>Functional cookies</strong> — Preferences</li>
            <li><strong>Security cookies</strong> — Fraud prevention</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Third-Party Cookies</h2>
          <p>Third-party services such as analytics providers and payment processors may place cookies when you use the platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">5. Managing Cookies</h2>
          <p>Users can control or disable cookies through browser settings. However, disabling cookies may affect platform functionality.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">6. Updates</h2>
          <p>This Cookie Policy may be updated periodically. Continued use of the platform means acceptance of changes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">7. Contact</h2>
          <p>For cookie-related inquiries, contact us at <a href="mailto:support@illdoit.space" className="text-blue-600 hover:underline">support@illdoit.space</a></p>
        </section>
      </div>
    </LegalLayout>
  )
}

export default CookiePolicy
