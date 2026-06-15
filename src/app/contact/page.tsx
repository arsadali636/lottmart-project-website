import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Lottmart. Access support phone lines, send partnership queries, or submit an enquiry to our operations centers in India."
};

export default function Contact() {
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
        "name": "Contact Us",
        "item": "https://www.lottmart.com/contact"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Lottmart Platform Office",
    "image": "https://www.lottmart.com/assets/logo.png",
    "telephone": "+91-8126177819",
    "email": "support@lottmart.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B2B Trade Center, Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-zinc-50 border-b border-zinc-200/40 bg-grid-pattern relative">
        <div className="bg-glow w-[300px] h-[300px] bg-primary/10 top-[20%] left-[-100px]" />
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block font-heading font-black">
            GET IN TOUCH
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            Have a question or require immediate support? Reach out directly via our operational phone lines or log a support ticket.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="card-glass bg-white border border-zinc-200/50 p-8 rounded-2xl shadow-sm">
              <h3 className="font-heading font-extrabold text-base text-primary mb-5">Telephone Support</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="text-success text-xs font-black uppercase tracking-wider shrink-0 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                    Support
                  </div>
                  <div>
                    <a href="tel:8126177819" className="font-heading font-extrabold text-base text-text-primary block hover:text-primary transition-colors">
                      81261 77819
                    </a>
                    <a href="tel:8126044585" className="font-heading font-extrabold text-base text-text-primary block hover:text-primary transition-colors">
                      81260 44585
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t border-zinc-100 pt-5">
                  <div className="text-primary text-xs font-black uppercase tracking-wider shrink-0 bg-primary/10 px-2.5 py-1 rounded-md">
                    Escrow
                  </div>
                  <div>
                    <a href="tel:9528353168" className="font-heading font-extrabold text-base text-text-primary block hover:text-primary transition-colors">
                      95283 53168
                    </a>
                    <a href="tel:7808747054" className="font-heading font-extrabold text-base text-text-primary block hover:text-primary transition-colors">
                      78087 74054
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass bg-white border border-zinc-200/50 p-8 rounded-2xl shadow-sm">
              <h3 className="font-heading font-extrabold text-base text-primary mb-5">Email Directories</h3>
              <div className="flex flex-col gap-5">
                <div>
                  <span className="text-[10px] font-bold uppercase text-text-muted block mb-1">
                    General & Shop Help
                  </span>
                  <a href="mailto:support@lottmart.com" className="font-heading font-extrabold text-base text-text-primary hover:text-primary transition-colors">
                    support@lottmart.com
                  </a>
                </div>
                <div className="border-t border-zinc-100 pt-5">
                  <span className="text-[10px] font-bold uppercase text-text-muted block mb-1">
                    Enterprise Partnerships
                  </span>
                  <a href="mailto:partnerships@lottmart.com" className="font-heading font-extrabold text-base text-text-primary hover:text-primary transition-colors">
                    partnerships@lottmart.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card-glass bg-white border border-dashed border-primary/40 p-6 rounded-2xl text-center">
              <h4 className="font-heading font-extrabold text-base text-primary mb-1">Instant WhatsApp Chat</h4>
              <p className="text-text-secondary text-[11px] mb-4">Direct chat line to our duty operations officer.</p>
              <a
                href="https://wa.me/918126177819?text=Hello%20Team%20Lottmart%2C%20I%20would%20like%20to%20know%20more%20about%20your%20platform."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl hover:scale-[1.02] transition-all cursor-pointer shadow-xs w-full"
              >
                Chat Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
