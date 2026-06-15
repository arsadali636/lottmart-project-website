import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Lottmart connects B2B stakeholders in 5 simple steps: download the app, select your trade role, access live bulk deals, and trade at scale."
};

export default function HowItWorks() {
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
        "name": "How It Works",
        "item": "https://www.lottmart.com/how-it-works"
      }
    ]
  };

  const stepsList = [
    {
      step: 1,
      title: "Download App",
      desc: "Install the Lottmart B2B application on your Android device. Complete quick profile registration and secure SMS code authentication."
    },
    {
      step: 2,
      title: "Confirm KYC Verification",
      desc: "Upload business identification (GST number, trade license, or active company proof) to verify your credentials for wholesale access."
    },
    {
      step: 3,
      title: "Access Live B2B Deals",
      desc: "Browse our dynamic real-time lot listing brackets. Gain immediate transparency on volume milestones and quantity pricing charts."
    },
    {
      step: 4,
      title: "Coordinate or Transact",
      desc: "Launch wholesale lot syndicates if you are a distributor, buy portions of a lot via escrow if you are a retailer, or share links if you are a promoter."
    },
    {
      step: 5,
      title: "Settle and Release Escrow",
      desc: "Watch volume targets fill up. Parcels are delivered directly. Retailers inspect quality, triggering instant payout payouts to banking nodes."
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
            STEP-BY-STEP PROCESS
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Lottmart streamlines wholesale trading through a clean 5-step workflow designed to deliver efficiency and margin security.
          </p>
        </div>
      </section>

      {/* Timeline Flow */}
      <section className="bg-white py-24 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative max-w-3xl mx-auto border-l-2 border-primary/20 pl-8 ml-4 sm:ml-auto flex flex-col gap-12">
            {stepsList.map((stepItem) => (
              <div key={stepItem.step} className="relative">
                <span className="absolute -left-[45px] top-1 w-8 h-8 rounded-full bg-primary text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                  {stepItem.step}
                </span>
                <h3 className="font-heading font-extrabold text-xl text-text-primary mb-2 leading-tight">
                  {stepItem.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed max-w-2xl">{stepItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Playbooks */}
      <section className="bg-zinc-50 border-t border-zinc-200/40 py-24 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">
              STAKEHOLDER PLAYBOOKS
            </span>
            <h2 className="font-heading text-3xl font-black text-text-primary tracking-tight mb-4">
              How Each Role Succeeds
            </h2>
            <p className="text-text-secondary text-sm">
              Lottmart creates a circular B2B economy where every participant&apos;s action drives transaction speed and network scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card-glass bg-white p-8 rounded-2xl border border-zinc-200/50">
              <span className="text-xs font-black uppercase text-primary mb-2 block">
                DISTRIBUTORS
              </span>
              <h3 className="font-heading font-extrabold text-lg text-text-primary mb-3">Distributor Pipeline</h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Upload Catalog &rarr; Set Lot limits &rarr; Let promoters share deal campaigns &rarr; Dispatch B2B freight orders &rarr; Escrow clears to bank.
              </p>
            </div>
            <div className="card-glass bg-white p-8 rounded-2xl border border-zinc-200/50">
              <span className="text-xs font-black uppercase text-secondary mb-2 block">
                RETAILERS
              </span>
              <h3 className="font-heading font-extrabold text-lg text-text-primary mb-3">Retailer Procurement</h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Join active lots &rarr; Hold purchase funds in Escrow &rarr; Receive parcel tracking &rarr; Verify quantity &rarr; Tap to release payouts.
              </p>
            </div>
            <div className="card-glass bg-white p-8 rounded-2xl border border-zinc-200/50">
              <span className="text-xs font-black uppercase text-success mb-2 block">
                PROMOTERS
              </span>
              <h3 className="font-heading font-extrabold text-lg text-text-primary mb-3">Promoter Earning Loop</h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Select high-demand deals &rarr; Share links with retail buyers &rarr; Lot fills successfully &rarr; Instant wallet commission credited &rarr; Withdraw instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
