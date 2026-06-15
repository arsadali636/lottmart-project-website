import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DownloadAPKButton from "@/components/DownloadAPKButton";

export const metadata: Metadata = {
  title: "Download Mobile App",
  description: "Download the Lottmart Android B2B application. Access live bulk lots, escrow payouts, and track wholesale orders directly from your smartphone."
};

export default function Download() {
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
        "name": "Download App",
        "item": "https://www.lottmart.com/download"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Showcase Grid */}
      <section className="pt-32 pb-24 bg-zinc-50 overflow-hidden bg-grid-pattern min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative">
          <div className="bg-glow w-[350px] h-[350px] bg-primary/10 top-[20%] left-[-100px]" />
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading font-black">
              MOBILE COMPATIBILITY
            </span>
            <h1 className="font-heading text-5xl font-black leading-[1.1] text-text-primary mb-6 tracking-tight">
              Trade on the Go.
            </h1>
            <p className="text-lg font-semibold text-text-primary mb-4">
              All transactions, deal listings, and wallet payouts are exclusive to the Lottmart mobile app.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-xl text-sm md:text-base">
              To guarantee B2B wholesale pricing confidentiality, prevent index leaking, and secure automated escrow settlements, Lottmart is engineered strictly for mobile app environments. Download the APK file below to start.
            </p>

            <div className="flex flex-col gap-4 mb-10 w-full max-w-md">
              {[
                { title: "Android Compatibility", detail: "Optimized for Android 8.0 Oreo and above" },
                { title: "Transaction Safety", detail: "Escrow clearing fully secured via app protocols" },
                { title: "Low Latency Updates", detail: "Instant push alerts for lot fills and dispatch changes" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-zinc-200/50 shadow-xs">
                  <span className="w-5.5 h-5.5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-text-primary mb-0.5">{item.title}</h4>
                    <p className="text-xs text-text-secondary">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-wrap gap-4 items-center">
                <DownloadAPKButton className="bg-primary hover:bg-primary-hover text-white font-extrabold px-8 py-4 rounded-xl shadow-md transition-all duration-300 flex items-center gap-3 cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414L20.218 10.6714C20.533 10.1264 20.347 9.4284 19.802 9.1134C19.257 8.7984 18.559 8.9844 18.244 9.5294L15.688 13.9574C14.544 13.4354 13.292 13.1254 11.977 13.1254C10.662 13.1254 9.41 13.4354 8.266 13.9574L5.71 9.5294C5.395 8.9844 4.697 8.7984 4.152 9.1134C3.607 9.4284 3.421 10.1264 3.736 10.6714L6.431 15.3414C2.784 17.2914.244 21.0364 0 25.5H23.954C23.71 21.0364 21.17 17.2914 17.523 15.3414ZM7.027 21.2824C6.427 21.2824 5.941 20.7964 5.941 20.1964C5.941 19.5964 6.427 19.1104 7.027 19.1104C7.627 19.1104 8.113 19.5964 8.113 20.1964C8.113 20.7964 7.627 21.2824 7.027 21.2824ZM16.927 21.2824C16.327 21.2824 15.841 20.7964 15.841 20.1964C15.841 19.5964 16.327 19.1104 16.927 19.1104C17.527 19.1104 18.013 19.5964 18.013 20.1964C18.013 20.7964 17.527 21.2824 16.927 21.2824Z" />
                  </svg>
                  Download Android App (.APK)
                </DownloadAPKButton>
                <span className="text-text-muted text-xs font-bold bg-zinc-150 border border-zinc-200/50 px-6 py-4 rounded-xl cursor-not-allowed select-none">
                  iOS App (Coming Soon)
                </span>
              </div>
              <p className="text-[11px] text-text-muted leading-normal max-w-md">
                * Note: To install files outside the Google Play Store, you may need to enable &quot;Install Unknown Apps&quot; inside your Android security settings panel.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] border-[8px] border-[#09090b] bg-[#09090b] rounded-[36px] overflow-hidden shadow-xl">
              <Image
                src="/assets/app-showcase.png"
                alt="Lottmart B2B mobile application dashboard mockup"
                width={300}
                height={600}
                className="w-full h-auto rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Setup Steps */}
      <section className="bg-white border-t border-zinc-200/40 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-black uppercase text-primary tracking-wider mb-2 block">
              GETTING STARTED
            </span>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-text-primary mb-4">
              Need Help Setting Up?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
              Our operations coordinators can guide you through installation, KYC document verification, and catalog configurations. Speak to a trade desk specialist via WhatsApp or request a phone call.
            </p>
          </div>
          <div className="lg:col-span-5 flex gap-4 justify-start lg:justify-end">
            <Link
              href="/contact"
              className="bg-white border border-zinc-200 text-text-primary font-bold px-6 py-3.5 rounded-xl hover:bg-zinc-50 transition-colors shadow-xs"
            >
              Contact Support
            </Link>
            <Link
              href="/partner"
              className="bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary-hover transition-colors shadow-xs"
            >
              Request Setup Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
