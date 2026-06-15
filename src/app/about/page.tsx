import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Lottmart's mission to unify fragmented wholesale markets, build direct connections, and establish India's leading bulk-buying trading network."
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
      "name": "About Us",
      "item": "https://www.lottmart.com/about"
    }
  ]
};

const TIMELINE_PHASES = [
  {
    phase: "Phase 1: Foundation (Q2 2024)",
    desc: "Lottmart was conceived by commerce veterans who recognized deep systemic fragmentations in regional product distribution. We mapped the core role blueprints for distributors, retailers, and promoters."
  },
  {
    phase: "Phase 2: Alpha Application (Q4 2024)",
    desc: "Built and deployed the alpha Android application to a closed group of 100 distributors and 500 retailers in selected pilot hubs. Validated our escrow safety mechanisms."
  },
  {
    phase: "Phase 3: Promoter Integration (Q2 2025)",
    desc: "Introduced the Commission Wallet and Promoter referral engine, allowing social commerce coordinators to actively liquidate lots for distributors, creating instant earning channels."
  },
  {
    phase: "Phase 4: Multi-City Expansion (2026)",
    desc: "Currently scaling across 100+ cities in India, onboarding thousands of verified distributors and retailers, moving high-volume trade lots daily."
  }
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />


      {/* Page Header */}
      <section className="pt-32 pb-16 bg-zinc-50 border-b border-zinc-200/40 bg-grid-pattern relative">
        <div className="bg-glow w-[300px] h-[300px] bg-primary/10 top-[20%] left-[-100px]" />
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading font-black">
            WHO WE ARE
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Unifying B2B Trade.
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Lottmart was founded to resolve the fundamental fragmentations of bulk commerce, building trust and scaling profitability across distributors, retailers, and promoters.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-24 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">
              OUR MISSION
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-6">
              Empowering Commerce Through Network Scale
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
              At Lottmart, we believe that B2B commerce shouldn&apos;t be limited by geographical boundaries or fragmented networks. By introducing a structured lot-based trading architecture, we allow distributors to liquidate large volumes instantly, help retailers buy at factory-direct pricing, and enable promoters to capture recurring incomes.
            </p>
            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              By shifting the center of gravity from individual transactions to collective lot executions, we make trade more secure, transparent, and profitable for everyone involved.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="card-glass p-8 bg-zinc-50 border border-zinc-200/60 rounded-2xl flex flex-col gap-6">
              <div>
                <h4 className="font-heading font-extrabold text-base text-primary mb-1">Collective Buying Power</h4>
                <p className="text-text-secondary text-xs leading-relaxed">Consolidating individual purchase interests to unlock manufacturer volume pricing.</p>
              </div>
              <div className="border-t border-zinc-200/60 pt-6">
                <h4 className="font-heading font-extrabold text-base text-primary mb-1">Integrity & Escrow</h4>
                <p className="text-text-secondary text-xs leading-relaxed">Securing deal capital until exact quality specifications are verified at delivery.</p>
              </div>
              <div className="border-t border-zinc-200/60 pt-6">
                <h4 className="font-heading font-extrabold text-base text-primary mb-1">Ecosystem Profit Sharing</h4>
                <p className="text-text-secondary text-xs leading-relaxed">Redistributing marketing margins directly to the independent promoters who drive deals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-zinc-50 border-b border-zinc-200/40 py-24 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">
              OUR CORE PILLARS
            </span>
            <h2 className="font-heading text-3xl font-black text-text-primary tracking-tight mb-4">
              Guided by Strong Foundation Values
            </h2>
            <p className="text-text-secondary text-sm">
              To scale B2B marketplaces nationwide, we rely on core principles that guide our product engineering, vendor relationships, and support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trust & Transparency", desc: "No hidden markups. Live, dynamic bulk pricing structures displayed directly to verified app users." },
              { title: "Scalable Technology", desc: "A mobile-first infrastructure built to process high-concurrency lot trades across hundreds of cities seamlessly." },
              { title: "Inclusive Growth", desc: "We empower independent promoters and local retailers to compete head-to-head with corporate supply chains." },
              { title: "Operational Excellence", desc: "End-to-end support networks, logistics partners, and conflict resolution mechanisms to secure every deal." }
            ].map((value, i) => (
              <div key={i} className="card-glass bg-white p-8 rounded-2xl shadow-xs border border-zinc-200/50">
                <h3 className="font-heading font-extrabold text-base text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">OUR JOURNEY</span>
            <h2 className="font-heading text-3xl font-black text-text-primary tracking-tight mb-4">How Lottmart Scaled Up</h2>
            <p className="text-text-secondary text-sm">From our initial digital prototype to a fully integrated lot marketplace supporting thousands of enterprises.</p>
          </div>

          <div className="relative max-w-3xl mx-auto border-l-2 border-primary/20 pl-8 ml-4 sm:ml-auto">
            {TIMELINE_PHASES.map((phase, i) => (
              <div key={i} className="mb-12 relative">
                <span className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-xs"></span>
                <h4 className="font-heading font-extrabold text-lg text-primary mb-2">{phase.phase}</h4>
                <p className="text-text-secondary text-xs leading-relaxed max-w-2xl">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
