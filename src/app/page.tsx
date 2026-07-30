import Image from "next/image";
import Link from "next/link";
import HomeBenefits from "@/components/HomeBenefits";
import FAQAccordion from "@/components/FAQAccordion";

const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lottmart",
  "url": "https://www.lottmart.com/",
  "logo": "https://www.lottmart.com/assets/logo-square.jpg",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-8126177819",
      "contactType": "customer support",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-8126044585",
      "contactType": "partnerships support",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/lottmart",
    "https://www.instagram.com/lottmart_product"
  ]
};

const TRUST_METRICS = [
  { name: "Verified Network", logo: "VERIFIED TRADE" },
  { name: "Secure Escrow", logo: "ESCROW SAFE" },
  { name: "Automated Routing", logo: "SMART ROUTING" },
  { name: "Instant Settlements", logo: "QUICK PAY" },
  { name: "KYC Compliance", logo: "KYC COMPLIANT" }
];

const STEPS = [
  {
    step: "01",
    title: "Distributor Syndicates Lots",
    desc: "Wholesalers define lot parameters, minimum thresholds, and prompt promoter commission rates inside the platform panel."
  },
  {
    step: "02",
    title: "Promoters Share Deals",
    desc: "Coordinators push custom referral links to their networks of retail stores to drive immediate buying momentum."
  },
  {
    step: "03",
    title: "Retailers Join Buying Lots",
    desc: "Local retailers syndicate orders to fill the lot requirements, locking bulk discounts and placing funds in escrow."
  },
  {
    step: "04",
    title: "Escrow and Safe Delivery",
    desc: "Funds stay protected by Lottmart Escrow. Supply chain partners fulfill logistics, dispatching directly to the store."
  },
  {
    step: "05",
    title: "Verification & Settlement",
    desc: "Retailer checks and confirms inventory count. Escrow clears, sending funds to distributors and commissions to promoters."
  }
];

const FEATURES = [
  {
    title: "Escrow Payment Shield",
    desc: "Retailer funds remain in safe secure escrow. Payouts clear only after shipping verification.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Smart Promoter Routing",
    desc: "Automated tracking links purchases to promoters with 100% wallet payout integrity.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Live Lot Syndicate",
    desc: "Real-time updates on active lot filling percentages inside the native Android mobile app.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "B2B Business KYC",
    desc: "Comprehensive business screening verifies GST, trade credentials, and location validation.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Custom Lot Campaigner",
    desc: "Distributors build and launch wholesale deal brackets, pricing steps, and lot milestones in 2 minutes.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Freight Coordination",
    desc: "Consolidated freight networks automate dispatch, tracking, and regional delivery routing logs.",
    icon: (
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  }
];

const TESTIMONIALS = [
  {
    quote: "Lottmart completely changed how I clear regional inventory batches. Using promoter campaigns, I sold through 5,000 units of home appliances in less than 24 hours. The escrow payout is extremely reliable.",
    author: "Rajesh K. Mehta",
    role: "Director of Supply, Mehta Electronics (Noida)",
    avatar: "RM"
  },
  {
    quote: "As a local grocery store owner, direct sourcing was impossible due to high MOQ constraints. Group buying on Lottmart allows me to buy directly from manufacturers, saving 25% on sourcing bills.",
    author: "Sunita Deshmukh",
    role: "Owner, Deshmukh Supermart (Indore)",
    avatar: "SD"
  },
  {
    quote: "Coordinating lots for local apparel sellers has become my main business. The promoter links route checkouts instantly, and I withdraw my commission earnings straight to my bank account with one tap.",
    author: "Amit Sharma",
    role: "Market Coordinator & Promoter (New Delhi)",
    avatar: "AS"
  }
];

const FAQ_ITEMS = [
  {
    question: "What is Lottmart and how does it benefit my business?",
    answer: "Lottmart is a premium, mobile-first B2B marketplace platform connecting verified distributors, retailers, and promoters into a unified trade syndicate. Wholesalers clear stock instantly, retailers buy direct at collective volume discounts, and promoters earn margins for coordinating deals."
  },
  {
    question: "How does the Lottmart Escrow Payment shield work?",
    answer: "When a retailer buys into an active lot, the funds are deposited securely in Lottmart Escrow. The capital is safely held by the platform and only released to the distributor after the retailer confirms receiving the wholesale parcel in correct quantity and condition."
  },
  {
    question: "How do promoters track checkouts and withdraw earnings?",
    answer: "Promoters share trackable, system-generated deal links with their network of local shops. The platform's routing system matches checkouts directly to the promoter's Commission Wallet. Cleared balances can be withdrawn directly to verified bank accounts instantly."
  },
  {
    question: "Do I need KYC verification to trade on Lottmart?",
    answer: "Yes. Lottmart is an enterprise-grade platform. All participants must submit GST registration, trade licenses, or business profile credentials to pass our screening checks and enter the trading ecosystem."
  }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_DATA) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-zinc-50 overflow-hidden bg-grid-pattern">
        <div className="bg-glow w-[500px] h-[500px] bg-primary/10 top-[-100px] left-[-100px]" />
        <div className="bg-glow w-[500px] h-[500px] bg-secondary/10 bottom-[-100px] right-[-100px]" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/5 text-primary border border-primary/15 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Now Scaling Nationwide
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-black leading-[1.08] text-text-primary mb-6 tracking-tight">
              Trade at Scale.<br />
              <span className="text-gradient">Earn More.</span>
            </h1>
            <p className="text-lg font-bold text-text-primary mb-3 leading-snug">
              A mobile-first platform for lot-based buying, selling and promotion.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed max-w-xl text-sm md:text-base">
              Lottmart connects distributors, retailers and promoters into one powerful trade network where scale creates competitive advantage.
            </p>

            {/* Original Bullet Points List styled premiumly */}
            <ul className="flex flex-col gap-3 mb-8 w-full">
              {["Better Pricing", "Higher Volume", "Lower Cost", "Verified Trade Network", "Commission Earnings"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-text-primary text-sm">
                  <span className="w-5.5 h-5.5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-[10px] font-black">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/download"
                className="bg-primary hover:bg-primary-hover text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Download App
              </Link>
              <Link
                href="/partner"
                className="bg-white hover:bg-zinc-50 border border-zinc-200 text-text-primary font-extrabold text-sm px-8 py-4 rounded-xl shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Request Demo
              </Link>
            </div>

            {/* Quick Stats Grid with Original Values */}
            <div className="grid grid-cols-3 gap-6 border-t border-zinc-200/60 pt-8 w-full max-w-lg">
              <div>
                <span className="block font-heading text-2xl font-black text-text-primary">10,000+</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block mt-1">Products Traded</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-black text-text-primary">5,000+</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block mt-1">Retailers Sourcing</span>
              </div>
              <div>
                <span className="block font-heading text-2xl font-black text-text-primary">1,000+</span>
                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block mt-1">Distributors</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[580px] animate-float">
              <Image
                src="/assets/hero-illustration.png"
                alt="Lottmart B2B Supply Chain & Trading Network Illustration"
                width={580}
                height={580}
                className="w-full h-auto rounded-3xl shadow-xl border border-zinc-200/30"
                priority
              />
              
              {/* Floating glass card */}
              <div className="absolute -bottom-6 -left-6 bg-white/85 backdrop-blur-md border border-zinc-200/50 shadow-md px-6 py-4.5 rounded-2xl hidden sm:flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <span className="block font-heading font-black text-sm text-text-primary">10,000+ Deals Active</span>
                  <span className="block text-[10px] text-text-muted font-bold uppercase tracking-wider">Real-time Syndications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & compliance Bar */}
      <section className="bg-white border-y border-zinc-200/40 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="font-heading text-xs font-black uppercase tracking-widest text-text-muted text-center md:text-left">
              ENTERPRISE STANDARDS
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {TRUST_METRICS.map((metric, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-heading font-bold text-xs text-text-primary uppercase tracking-wider">{metric.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Lottmart Works Section */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">THE CIRCULAR ECONOMY</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">How Lottmart Works</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              We integrate supply, demand, and promotions into a single secure lot-based checkout loop, replacing traditional friction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {STEPS.map((step, i) => (
              <div key={i} className="card-glass bg-white p-8 rounded-2xl border border-zinc-250/30 flex flex-col justify-between">
                <div>
                  <span className="font-heading font-black text-5xl text-primary/10 block mb-6">{step.step}</span>
                  <h3 className="font-heading font-extrabold text-lg text-text-primary mb-3 leading-snug">{step.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-zinc-300">
                    {/* Arrow indicator */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits tab section */}
      <section className="bg-white py-24 border-b border-zinc-200/40">
        <HomeBenefits />
      </section>

      {/* Features Grid Section */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">PLATFORM CAPABILITIES</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">Built for Scale and Safety</h2>
            <p className="text-text-secondary text-lg">
              Engineered with advanced escrow routing, compliance screenings, and mobile logistics coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="card-glass bg-white p-8 rounded-2xl border border-zinc-200/20 shadow-xs flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-black text-xl text-text-primary mb-3 leading-snug">{feature.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Preview Section */}
      <section className="bg-white py-24 overflow-hidden border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">LOTTMAR MOBILE SYSTEM</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-6 leading-[1.1]">
              B2B Wholesale Happens Inside The App
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8 text-[0.98rem]">
              Lottmart operates strictly as a closed mobile ecosystem to prevent catalog leaks, protect confidential wholesale price brackets, and secure escrow settlement payouts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 w-full">
              {[
                { title: "Live Syndication", desc: "Retailers join group lot checkouts to unlock higher quantity discounts." },
                { title: "Escrow Wallet", desc: "Distributors monitor deposits, and promoters manage commission ledger withdrawals." },
                { title: "Freight Logs", desc: "Real-time updates from distributor shipping yards to local retail points." },
                { title: "Single-Tap Settler", desc: "Retailers tap to verify count and instantly release escrow funds to banking nodes." }
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-heading font-extrabold text-base text-text-primary mb-1.5">{item.title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/download"
                className="bg-primary hover:bg-primary-hover text-white font-extrabold text-sm px-7 py-4 rounded-xl shadow-xs transition-all duration-300 flex items-center gap-3"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414L20.218 10.6714C20.533 10.1264 20.347 9.4284 19.802 9.1134C19.257 8.7984 18.559 8.9844 18.244 9.5294L15.688 13.9574C14.544 13.4354 13.292 13.1254 11.977 13.1254C10.662 13.1254 9.41 13.4354 8.266 13.9574L5.71 9.5294C5.395 8.9844 4.697 8.7984 4.152 9.1134C3.607 9.4284 3.421 10.1264 3.736 10.6714L6.431 15.3414C2.784 17.2914.244 21.0364 0 25.5H23.954C23.71 21.0364 21.17 17.2914 17.523 15.3414ZM7.027 21.2824C6.427 21.2824 5.941 20.7964 5.941 20.1964C5.941 19.5964 6.427 19.1104 7.027 19.1104C7.627 19.1104 8.113 19.5964 8.113 20.1964C8.113 20.7964 7.627 21.2824 7.027 21.2824ZM16.927 21.2824C16.327 21.2824 15.841 20.7964 15.841 20.1964C15.841 19.5964 16.327 19.1104 16.927 19.1104C17.527 19.1104 18.013 19.5964 18.013 20.1964C18.013 20.7964 17.527 21.2824 16.927 21.2824Z" />
                </svg>
                Download Android App (.APK)
              </Link>
              <span className="text-text-muted text-xs font-bold bg-zinc-100 border border-zinc-200/60 px-4 py-2.5 rounded-xl cursor-not-allowed select-none">
                iOS App Coming Soon
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] border-[8px] border-[#09090b] bg-[#09090b] rounded-[36px] overflow-hidden shadow-xl">
              <Image
                src="/assets/app-showcase.png"
                alt="Lottmart B2B Mobile App Dashboard interface"
                width={320}
                height={640}
                className="w-full h-auto rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">VERIFIED SUCCESS</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">Trusted Across Trade Hubs</h2>
            <p className="text-text-secondary text-lg">
              Hear from regional bulk distributors, independent retailers, and promotional organizers scaling business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi, i) => (
              <div key={i} className="card-glass bg-white p-8 rounded-2xl border border-zinc-200/20 shadow-xs flex flex-col justify-between">
                <p className="text-text-secondary italic text-sm leading-relaxed mb-8">
                  &ldquo;{testi.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-black text-xs shrink-0">
                    {testi.avatar}
                  </div>
                  <div>
                    <span className="block font-heading font-extrabold text-sm text-text-primary">{testi.author}</span>
                    <span className="block text-[11px] text-text-muted font-semibold">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQs Section on homepage */}
      <section className="bg-white py-24 border-b border-zinc-200/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">FAQ PREVIEW</span>
            <h2 className="font-heading text-4xl font-black text-text-primary tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-text-secondary text-sm">
              Got questions about escrow safety, commissions, or KYC verification? Check out our quick answers below or visit the full page.
            </p>
          </div>

          <div className="mb-12">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-heading font-extrabold text-sm text-primary hover:underline"
            >
              <span>View All Frequently Asked Questions</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-[#09090b] text-white py-28 text-center overflow-hidden bg-grid-pattern">
        <div className="bg-glow w-[400px] h-[400px] bg-primary/20 top-[-100px] left-1/3" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            Ready to Syndicate B2B Lots?
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Secure margins, protect transaction safety, and grow commerce turnovers. Get the Android app today to begin bulk trading.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/download"
              className="bg-primary hover:bg-primary-hover text-white font-extrabold px-8 py-4 rounded-xl shadow-md transition-all duration-300"
            >
              Download Mobile App
            </Link>
            <Link
              href="/partner"
              className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-extrabold px-8 py-4 rounded-xl shadow-md transition-all duration-300"
            >
              Request Onboarding callback
            </Link>
            <Link
              href="/contact"
              className="bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 text-zinc-300 font-extrabold px-8 py-4 rounded-xl shadow-md transition-all duration-300"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
