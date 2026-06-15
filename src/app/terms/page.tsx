import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the Lottmart Terms & Conditions. Read legal guidelines on lot listings, escrow clearing contracts, promoter wallets, and KYC obligations in India."
};

const BREADCRUMB_SCHEMA = {
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
      "name": "Terms & Conditions",
      "item": "https://www.lottmart.com/terms"
    }
  ]
};

export default function Terms() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-radial from-secondary/5 via-primary/5 to-transparent border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">Legal Terms</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Last Updated: June 15, 2026. Review rules, escrow liabilities, and account guidelines for Lottmart.
          </p>
        </div>
      </section>

      {/* Terms Details */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card-glass bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-10">
            
            <div>
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">1. User Onboarding & Verification</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                By downloading the application and signing up, you agree that you are a verified business entity, sole proprietor, or authorized promotional agent operating in India. You must complete our mandatory multi-point KYC, submitting a valid tax registration number (GSTIN) or corporate business certification prior to conducting transaction lot operations.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">2. Lot Deals & Execution Conditions</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                Distributors agree that once a lot deal is published inside the app and successfully filled by retailers, they are legally obligated to honor the pricing brackets and ship inventory batches within the defined timeline parameters. Retailers agree to maintain sufficient funds in their escrow profile to complete purchases when a target lot is filled.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">3. Escrow and Funds Protection</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                To secure transactions, Lottmart holds retailer funds in safe escrow pools. Capital is cleared to the distributor&apos;s payout bank account only after the buyer confirms receipt of freight count and quality verification. If a retailer fails to raise a dispute ticket within 48 hours of dispatch delivery receipt, the escrow funds are automatically cleared to the distributor.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">4. Promoter Wallets & Commissions</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                Promoters receive referral margins credited directly to their Commission Wallet after successful escrow release. Lottmart reserves the right to lock wallet withdrawals if promotion links are found to be distributed via spam, scraping channels, or fraudulent routing setups.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h2 className="font-heading font-extrabold text-xl text-primary mb-3">5. Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed text-sm">
                Lottmart acts as a matching escrow portal for lot clearing. We are not liable for manufacturer product warranties, freight damage during transit (unless utilizing Lottmart Logistics), or regional distributor-retailer contract breaches. Disputes will be handled according to our standard arbitration procedures.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
