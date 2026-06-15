"use client";

import { useState } from "react";
import Link from "next/link";

type TabRole = "distributors" | "retailers" | "promoters";

const BENEFITS_DATA = {
  distributors: {
    title: "Unlock High-Velocity Stock Turnover",
    subtitle: "For Wholesalers, Importers, and Manufacturers",
    description: "Direct-to-retail distribution channels without the overhead of physical sales agents. Clear massive volume lots in record time by tapping into our decentralized promoter networks.",
    bullets: [
      "Accelerate inventory velocity: Offload entire lot campaigns within hours.",
      "Zero bad debt risks: Retailer funds are fully deposited in escrow before transport.",
      "Brand protection: Sell bulk batches discreetly without disrupting retail price tags.",
      "Automated commission tracking: Promoters drive sales while our ledger maps payouts."
    ],
    link: "/partner?role=distributor",
    btnText: "Partner as Distributor",
    metric: "3x Faster",
    metricLabel: "Stock Turnover Rate"
  },
  retailers: {
    title: "Source Direct. Maximize Your Margin.",
    subtitle: "For Local Shops, Supermarkets, and E-commerce Stores",
    description: "Join collective buying pools to secure tier-1 manufacturer discount brackets usually reserved for corporate conglomerates. Lower your cost-per-item and scale profitability.",
    bullets: [
      "Factory-direct pricing: Bypass regional brokers and broker fees completely.",
      "Escrow-protected capital: Payment is released only after you verify parcel contents.",
      "Flexible lot syndication: Buy parts of a large lot without heavy MOQ requirements.",
      "Real-time logistics: Complete tracking from the distributor's dispatch dock to your shop."
    ],
    link: "/partner?role=retailer",
    btnText: "Join as Retailer",
    metric: "24% Saved",
    metricLabel: "Average Sourcing Cost"
  },
  promoters: {
    title: "Monetize Your Network. Earn Uncapped Margins.",
    subtitle: "For Social Commerce Agents and Freelance Coordinators",
    description: "Find high-demand wholesale deals, share unique trackable syndicate links with retailers in your network, and coordinate lot checkouts. Earn commissions on every single unit filled.",
    bullets: [
      "Bulletproof referral attribution: Our smart routing engine links checkouts directly to you.",
      "Single-tap bank withdrawal: Withdraw cleared commissions instantly from the app wallet.",
      "Ready-made marketing assets: Professional banners and product copy provided in-app.",
      "Flexible workspace: Build a recurring B2B coordinator income from anywhere in India."
    ],
    link: "/partner?role=promoter",
    btnText: "Earn as Promoter",
    metric: "Rs. 45K+",
    metricLabel: "Avg. Monthly Income"
  }
};

export default function HomeBenefits() {
  const [activeTab, setActiveTab] = useState<TabRole>("distributors");

  const activeData = BENEFITS_DATA[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">
          TAILORED B2B BLUEPRINTS
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
          Ecosystem Playbooks
        </h2>
        <p className="text-text-secondary text-lg">
          Explore how Lottmart provides massive margin and efficiency benefits tailored for your commercial role.
        </p>
      </div>

      {/* Tabs header */}
      <div className="flex justify-center border-b border-zinc-200 max-w-md mx-auto mb-16">
        <button
          onClick={() => setActiveTab("distributors")}
          className={`flex-1 text-center font-heading font-bold text-sm pb-4 transition-all border-b-2 cursor-pointer ${
            activeTab === "distributors"
              ? "border-primary text-primary"
              : "border-transparent text-text-secondary hover:text-text-primary"
          }`}
        >
          Distributors
        </button>
        <button
          onClick={() => setActiveTab("retailers")}
          className={`flex-1 text-center font-heading font-bold text-sm pb-4 transition-all border-b-2 cursor-pointer ${
            activeTab === "retailers"
              ? "border-primary text-primary"
              : "border-transparent text-text-secondary hover:text-text-primary"
          }`}
        >
          Retailers
        </button>
        <button
          onClick={() => setActiveTab("promoters")}
          className={`flex-1 text-center font-heading font-bold text-sm pb-4 transition-all border-b-2 cursor-pointer ${
            activeTab === "promoters"
              ? "border-primary text-primary"
              : "border-transparent text-text-secondary hover:text-text-primary"
          }`}
        >
          Promoters
        </button>
      </div>

      {/* Active Tab Panel */}
      <div className="card-glass bg-zinc-50/50 p-8 md:p-12 rounded-3xl border border-zinc-200/40 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <span className="text-xs font-black uppercase tracking-wider text-primary mb-2">
            {activeData.subtitle}
          </span>
          <h3 className="font-heading text-3xl font-black text-text-primary mb-4 leading-tight">
            {activeData.title}
          </h3>
          <p className="text-text-secondary leading-relaxed mb-8 text-[0.95rem]">
            {activeData.description}
          </p>

          <ul className="flex flex-col gap-4 mb-8">
            {activeData.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px] mt-0.5 font-black">
                  ✓
                </span>
                <span className="text-sm font-semibold text-text-primary">{bullet}</span>
              </li>
            ))}
          </ul>

          <Link
            href={activeData.link}
            className="bg-primary hover:bg-primary-hover text-white font-extrabold text-sm px-8 py-4 rounded-xl shadow-xs transition-all duration-300"
          >
            {activeData.btnText}
          </Link>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm text-center max-w-[320px] w-full flex flex-col justify-center items-center h-[260px]">
            <span className="font-heading text-5xl font-black text-gradient mb-3 block">
              {activeData.metric}
            </span>
            <span className="text-sm font-bold text-text-primary">
              {activeData.metricLabel}
            </span>
            <span className="text-xs text-text-muted mt-2 leading-normal">
              Verified platform execution audit metric across active categories.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
