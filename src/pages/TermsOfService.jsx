import React from 'react'
import LegalLayout from './LegalLayout'

const TermsOfService = () => {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 2026">
      <div className="space-y-8">
        <section>
          <p className="text-lg text-slate-600 mb-4">
            By accessing or using IllDoIt, you agree to these Terms of Service. If you do not agree, please do not use the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Platform Role</h2>
          <p>IllDoIt is a digital marketplace that connects customers with independent service providers. We do not employ service providers. Providers operate as independent contractors responsible for their own work, conduct, and compliance with applicable laws. IllDoIt is not responsible for the actions, quality, timing, or outcomes of services performed by providers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
          <p>Users must be at least 18 years old to use the platform. By using IllDoIt, you confirm that all information provided is accurate and truthful.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Accounts</h2>
          <p>Users are responsible for maintaining confidentiality of their account credentials and for all activity under their account. We reserve the right to suspend or terminate accounts that provide false information or violate platform rules.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Service Agreements</h2>
          <p>All agreements for services are made directly between users and service providers via the platform. IllDoIt only facilitates discovery, communication, and payment processing.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">5. Payments</h2>
          <p>Payments are processed securely through third-party providers such as PayFast. Funds are released according to platform rules after service completion. Disputes may be reviewed but IllDoIt does not guarantee refunds unless required by law or payment provider rules.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">6. User Conduct</h2>
          <p className="mb-3">Users agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Use the platform for illegal or harmful activity</li>
            <li>Harass, threaten, or abuse others</li>
            <li>Attempt fraud or chargebacks without valid cause</li>
            <li>Circumvent payment systems</li>
            <li>Interfere with platform operations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">7. Service Provider Conduct</h2>
          <p className="mb-3">Providers agree to:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Deliver services professionally and safely</li>
            <li>Provide accurate service information</li>
            <li>Honour agreed bookings</li>
            <li>Comply with local laws and regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
          <p className="mb-3">To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>IllDoIt is not liable for damages arising from user interactions</li>
            <li>We are not responsible for service quality or outcomes</li>
            <li>We are not liable for delays, losses, or disputes between users and providers</li>
          </ul>
          <p className="mt-3">Users accept full responsibility for their use of the platform.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">9. Platform Availability</h2>
          <p>We may modify, suspend, or discontinue parts of the platform at any time without notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">10. Termination</h2>
          <p>We may suspend or terminate accounts that violate these Terms or pose risk to the platform or other users.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">11. Governing Law</h2>
          <p>These Terms are governed by the laws of South Africa.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">12. Contact</h2>
          <p>For legal inquiries, contact us at <a href="mailto:support@illdoit.space" className="text-blue-600 hover:underline">support@illdoit.space</a></p>
        </section>
      </div>
    </LegalLayout>
  )
}

export default TermsOfService
