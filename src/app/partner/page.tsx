import type { Metadata } from "next";
import { Suspense } from "react";
import PartnerForm from "@/components/PartnerForm";

export const metadata: Metadata = {
  title: "Become A Partner",
  description: "Onboard as a Lottmart distributor, retailer, or promoter. Complete our partner query form to secure a callback and live platform demo."
};

export default function Partner() {
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
        "name": "Become A Partner",
        "item": "https://www.lottmart.com/partner"
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
      <section className="pt-32 pb-16 bg-zinc-50 border-b border-zinc-200/40 bg-grid-pattern relative">
        <div className="bg-glow w-[300px] h-[300px] bg-primary/10 top-[20%] left-[-100px]" />
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading font-black font-semibold">
            ONBOARDING
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Become a Partner
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Submit your business profile or promoter credentials to initiate verification and request a platform walkthrough callback.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-start">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading font-black">
              GROW WITH US
            </span>
            <h2 className="font-heading text-3xl font-black text-text-primary tracking-tight mb-6">
              Why Partner With Lottmart?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 text-sm md:text-base">
              Lottmart has built the high-concurrency infrastructure necessary to scale your B2B commerce operations. We handle technical routing, escrow verification, promoter attribution, and freight logs, leaving you free to focus on supply and client expansion.
            </p>

            <div className="flex flex-col gap-6 w-full max-w-lg">
              {[
                { title: "Accelerated Stock Turn", desc: "On average, wholesale distributors utilizing our promoter campaigns experience a 3x increase in lot liquidation speeds." },
                { title: "Guaranteed Capital Escrow", desc: "Zero collection delays or bad debts. Retailer funds are fully deposited in platform escrow before any logistics shipping begins." },
                { title: "Uncapped Referral Commissions", desc: "Promoters get direct margin payouts on every item sold within a lot. No caps on payout thresholds or monthly withdrawal volumes." }
              ].map((point, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-200/50 p-6 rounded-2xl">
                  <h4 className="font-heading font-extrabold text-base text-primary mb-2">{point.title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Suspense fallback={<div className="p-8 text-center text-text-muted font-heading font-bold">Loading onboarding form...</div>}>
              <PartnerForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
