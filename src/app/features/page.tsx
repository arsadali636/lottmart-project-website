import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform Features",
  description: "Discover Lottmart's powerful feature set including flexible lot trading, commission wallets, real-time tracking, volume pricing, and secure transactions."
};

export default function Features() {
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
        "name": "Features",
        "item": "https://www.lottmart.com/features"
      }
    ]
  };

  const featuresList = [
    {
      title: "Flexible Lot Trading",
      desc: "Syndicate purchases in structured lot batches. Adjust lot sizes dynamically according to market supply conditions and regional retail targets.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Volume Based Pricing",
      desc: "Enjoy progressive discounts. The larger the aggregate lot size filled by the group network, the lower the item price drops for all participants.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Commission Wallet",
      desc: "Real-time tracking of deal promotions. Promoters monitor pending, approved, and cleared commissions with single-tap instant cash bank withdrawals.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Verified Trade Network",
      desc: "Rigorous multi-point KYC screening. Only verified companies, tax registrants, and active traders gain entry to maintain deal integrity.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Order Tracking",
      desc: "End-to-end trace loops. Track bulk shipments in real-time from distributor dispatch warehouses to final destination drop points.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Deal Management",
      desc: "Distributors configure custom, campaign-limited deals in under two minutes. Setup parameters like target counts, time limits, and pricing tiers.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Role Based Access",
      desc: "Specific dashboards tailored to your account type. Distributors manage logistics, retailers procure, and promoters coordinate marketing drives.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Secure Escrow System",
      desc: "Funds are securely held in escrow. Capital is only transferred to distributors when products are received, unpacked, and verified by the buyer.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Real Time Updates",
      desc: "Never miss a flash deal or a payout threshold. Live push alerts keep you informed as lots are filled and shipped.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    }
  ];

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
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading font-black">
            MARKETPLACE ARCHITECTURE
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Platform Capabilities
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Explaining the core systems working inside Lottmart that enable distributors, retailers, and promoters to trade safely at scale.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, i) => (
              <div key={i} className="card-glass p-8 rounded-2xl bg-white/70 border border-zinc-200/50 shadow-xs flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-text-primary mb-3 leading-snug">{feature.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* 10. Mobile First Experience card */}
          <div className="mt-12 max-w-2xl mx-auto card-glass p-8 rounded-3xl bg-zinc-50/50 border border-zinc-200/50 shadow-xs">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-heading font-black text-xl text-text-primary mb-2">Mobile First Experience</h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Purpose-built native Android architecture optimized for field operations, remote warehouse lots management, and instant coordinator referrals tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
