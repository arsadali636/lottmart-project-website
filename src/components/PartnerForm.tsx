"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

export default function PartnerForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullname: "",
    companyname: "",
    mobile: "",
    email: "",
    businesstype: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const roleParam = searchParams.get("role");
  const targetRole = (roleParam && ["distributor", "retailer", "promoter", "partnership"].includes(roleParam)) ? roleParam : "";
  const [prevRole, setPrevRole] = useState<string | null>(null);

  if (targetRole !== prevRole) {
    setPrevRole(targetRole);
    if (targetRole) {
      setFormData((prev) => ({ ...prev, businesstype: targetRole }));
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({
        fullname: "",
        companyname: "",
        mobile: "",
        email: "",
        businesstype: "",
        message: "",
      });
    });
  };

  const handleCallback = () => {
    const mobileNum = prompt("Please enter your mobile number for a callback:");
    if (mobileNum) {
      if (/^\d{10}$/.test(mobileNum.trim())) {
        alert(`Thank you! We will call you back within 15 minutes at ${mobileNum}.`);
      } else {
        alert("Please enter a valid 10-digit mobile number.");
      }
    }
  };

  return (
    <div className="card-glass bg-white border border-zinc-200/50 p-8 rounded-2xl shadow-sm">
      <h3 className="font-heading font-black text-xl text-text-primary pb-4 mb-6 border-b border-zinc-100">
        Partnership Application
      </h3>

      {success ? (
        <div className="bg-emerald-50 border border-emerald-500/20 text-emerald-800 p-6 rounded-xl text-center mb-6">
          <h4 className="font-heading font-extrabold text-lg mb-1">Application Received!</h4>
          <p className="text-xs leading-normal">
            Thank you for your interest in Lottmart. An onboarding officer will verify your GST/business details and connect back within 24 hours.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullname" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="companyname" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
                Company Name
              </label>
              <input
                type="text"
                id="companyname"
                value={formData.companyname}
                onChange={handleInputChange}
                className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white"
                placeholder="Company Ltd."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mobile" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white"
                placeholder="9876543210"
                pattern="[0-9]{10}"
                title="Please enter a 10-digit mobile number"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="businesstype" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
              Business Type *
            </label>
            <div className="relative">
              <select
                id="businesstype"
                value={formData.businesstype}
                onChange={handleInputChange}
                className="w-full font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white appearance-none cursor-pointer pr-10"
                required
              >
                <option value="" disabled>Select Role Type</option>
                <option value="distributor">Distributor / Manufacturer</option>
                <option value="retailer">Local Retailer</option>
                <option value="promoter">Ecosystem Promoter</option>
                <option value="partnership">Corporate Partnership</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
              Message / Details
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white min-h-[120px] resize-y"
              placeholder="Tell us about your bulk inventory capacity, shop catalog, or coordinator network details..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-primary hover:bg-primary-hover text-white font-extrabold py-3.5 rounded-xl mt-2 transition-all duration-300 disabled:opacity-50 flex justify-center items-center gap-2 cursor-pointer shadow-xs"
          >
            {isPending ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      )}

      <div className="text-center mt-6 pt-5 border-t border-zinc-100 flex flex-col gap-2">
        <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">Need urgent callback?</span>
        <button
          onClick={handleCallback}
          className="w-full bg-zinc-50 border border-zinc-200 text-text-primary font-bold py-2.5 rounded-xl hover:bg-zinc-150 transition-colors cursor-pointer text-xs"
        >
          Request Callback Instantly
        </button>
      </div>
    </div>
  );
}
