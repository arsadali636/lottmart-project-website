import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to all your questions about Lottmart B2B lot-based trading, seller deals, retailer purchases, promoter commissions, and wallet safety features."
};

export default function FAQ() {
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
        "name": "FAQ",
        "item": "https://www.lottmart.com/faq"
      }
    ]
  };

  const faqItems = [
    {
      question: "What is Lottmart?",
      answer: "Lottmart is a premium mobile-first B2B marketplace platform that connects verified distributors, retailers, and promoters into a unified ecosystem. It operates using a lot-based bulk-trading system to lower supply chain costs and unlock commission earnings."
    },
    {
      question: "How does lot-based trading work?",
      answer: "Distributors structure their wholesale products into set batches called 'lots' (e.g., a lot of 500 units) and set volume-based price brackets. Retailers buy portions of these lots, or join forces with others to fill a lot, securing highly discounted rates once the lot targets are fully cleared."
    },
    {
      question: "Who can join Lottmart?",
      answer: "Lottmart is open to verified business stakeholders, including wholesale distributors, local manufacturers, retail shop owners, bulk buyers, and social commerce promoters looking to market deals for commission earnings."
    },
    {
      question: "How do promoters earn commissions?",
      answer: "Promoters browse active deals listed by distributors in the Lottmart app. They share trackable product deal links with their retail networks. Once a group order fills the lot requirements and the transaction clears, the promoter's commission is instantly credited to their Commission Wallet."
    },
    {
      question: "Is Lottmart secure?",
      answer: "Yes. Lottmart uses a secure escrow framework. Retailer capital is securely held by the platform and only transferred to the distributor once the buyer verifies delivery count and product quality condition."
    },
    {
      question: "How do distributors create deals?",
      answer: "Distributors use their dedicated seller panel in the Android app to upload inventory details, define lot sizes, input pricing thresholds, set expiry dates, and activate promoter margins. The deal is immediately broadcasted to the network."
    },
    {
      question: "How do retailers buy products?",
      answer: "Retailers open the app, browse category catalogs, select desired lot volumes, and checkout. They can join open group lots to take advantage of higher discount rates and track logistics updates in real-time."
    },
    {
      question: "Can I track my earnings?",
      answer: "Absolutely. The Lottmart mobile app has a built-in Wallet dashboard showing current balance, lifetime earnings, pending commissions, and historical bank payout receipts."
    },
    {
      question: "How does commission tracking work?",
      answer: "Every deal link shared by a promoter has a unique referral code. When a retailer clicks the link and executes a checkout in the app, our routing engine connects the transaction directly to the promoter's wallet, ensuring bulletproof payout accuracy."
    },
    {
      question: "How does Lottmart help reduce costs?",
      answer: "Lottmart bypasses traditional layers of middlemen, connects retailers directly to source distributors, and aggregates shipping logs. Group lot purchasing drops individual order shipping and procurement costs significantly."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-radial from-secondary/5 via-primary/5 to-transparent border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading">Help Center</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">Frequently Asked Questions</h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
            Got questions about trading, commissions, escrow, or the Lottmart app? Explore our detailed knowledge base.
          </p>
        </div>
      </section>

      {/* Accordion FAQs */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
