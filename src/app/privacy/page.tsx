import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Lottmart's Privacy Policy. Understand how we protect your business profile data, transaction logs, escrow security, and promoter referral mappings."
};

export default function Privacy() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.lottmart.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://www.lottmart.com/privacy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-radial from-secondary/5 via-primary/5 to-transparent border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">Legal Terms</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Last Updated: June 15, 2026. This policy outlines how Lottmart collects, processes, and secures business data.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card-glass bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-10">
            
            <div>
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">1. Information We Collect</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Lottmart collects information necessary to coordinate wholesale escrow transactions and referral campaigns. This includes:
              </p>
              <ul className="list-disc pl-6 text-text-secondary text-sm flex flex-col gap-2">
                <li><strong>Account Profiles:</strong> Full name, company tax codes, mobile contacts, and registered email address.</li>
                <li><strong>KYC Verification:</strong> Trade licenses, GST registration files, and regional business certificates.</li>
                <li><strong>Escrow Logs:</strong> Bank details for payout clearances, mobile wallet codes, and escrow transaction parameters.</li>
                <li><strong>Device & Geography:</strong> Network IP coordinates, OS identifiers, and GPS routing details for freight verification.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">2. How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We process your data for operational purposes inside the Lottmart app system:
              </p>
              <ul className="list-disc pl-6 text-text-secondary text-sm flex flex-col gap-2">
                <li>To match distributors with promoters and process referral commissions.</li>
                <li>To hold buyer funds securely in escrow until shipping quality is confirmed.</li>
                <li>To map routing logs for logistics carriers and provide tracking status checks.</li>
                <li>To prevent fraud, verify distributor credentials, and resolve disputes.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">3. Sharing of Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Lottmart does not sell or rent B2B profiles. Information is shared strictly under transacting lot conditions:
              </p>
              <ul className="list-disc pl-6 text-text-secondary text-sm flex flex-col gap-2">
                <li>Distributor contact details are shared with transacting retailers to facilitate bulk pickup.</li>
                <li>Commission ledger entries are visible to coordinate promoter payouts.</li>
                <li>Delivery address details are shared with verified logistics transport agencies.</li>
                <li>Data is shared with banking gatekeepers to execute KYC and process withdrawals.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">4. Data Security</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                Lottmart utilizes industry-standard 128-bit SSL channels, database encryption layers, and multi-factor logins. Payout nodes are secured by automated escrow contracts to block unauthorized funds routing.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">5. Support & Inquiries</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                For inquiries regarding data erasure, account deletion, or access queries, contact our data protection desk at{" "}
                <a href="mailto:support@lottmart.com" className="text-primary font-semibold underline">
                  support@lottmart.com
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
