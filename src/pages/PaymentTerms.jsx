import React from 'react'
import LegalLayout from './LegalLayout'

const PaymentTerms = () => {
  return (
    <LegalLayout title="Payment Terms" lastUpdated="May 2026">
      <div className="space-y-8">
        <section>
          <p className="text-lg text-slate-600 mb-4">
            These Payment Terms govern transactions made through IllDoIt. By making a payment on our platform, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Payment Processing</h2>
          <p>All payments are processed through secure third-party payment gateways, including PayFast or similar providers. IllDoIt does not store full card or banking details.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Customer Payments</h2>
          <p>Customers agree to pay the full amount displayed before confirming a service booking. Payments may include service fees, platform fees, or provider charges.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Service Completion</h2>
          <p>Payments are typically held or processed according to platform rules and released once service completion is confirmed.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Provider Payouts</h2>
          <p>Service providers are paid after successful completion of services and any required verification steps. Payout timelines may vary depending on payment processor rules.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">5. Refunds and Disputes</h2>
          <p className="mb-3">Refunds are not guaranteed and will be assessed based on:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Service delivery status</li>
            <li>Evidence provided by both parties</li>
            <li>Platform verification processes</li>
            <li>Payment processor policies</li>
          </ul>
          <p className="mt-3">IllDoIt reserves the right to mediate disputes but does not act as a financial guarantor.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">6. Chargebacks and Fraud</h2>
          <p>Users agree not to initiate fraudulent chargebacks. Accounts involved in abuse of payment systems may be suspended or permanently banned.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">7. Fees</h2>
          <p>IllDoIt may apply service or platform fees, which will always be disclosed before payment confirmation.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">8. Currency</h2>
          <p>All transactions are processed in South African Rand (ZAR) unless otherwise stated.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">9. Security</h2>
          <p>We use secure payment integrations to protect transactions, but users acknowledge that no system is completely risk-free.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">10. Contact</h2>
          <p>For payment-related inquiries, contact us at <a href="mailto:support@illdoit.space" className="text-blue-600 hover:underline">support@illdoit.space</a></p>
        </section>
      </div>
    </LegalLayout>
  )
}

export default PaymentTerms
