"use client";

import { useState, useTransition } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    });
  };

  return (
    <div className="card-glass bg-white border border-zinc-200/50 p-8 rounded-2xl shadow-sm">
      <h3 className="font-heading font-black text-xl text-text-primary pb-4 mb-6 border-b border-zinc-100">
        Send an Enquiry
      </h3>

      {success ? (
        <div className="bg-emerald-50 border border-emerald-500/20 text-emerald-800 p-6 rounded-xl text-center">
          <h4 className="font-heading font-extrabold text-lg mb-1">Enquiry Sent Successfully!</h4>
          <p className="text-xs leading-normal">
            Your enquiry ticket has been recorded. Our team will review the request and get in touch with you shortly.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 text-xs font-semibold text-primary hover:underline cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white"
              placeholder="Jane Doe"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
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
                placeholder="jane@company.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white"
              placeholder="How can we help you?"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-extrabold text-text-primary uppercase tracking-wider">
              Message *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="font-sans text-sm p-3 rounded-xl border border-zinc-200 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-white min-h-[120px] resize-y"
              placeholder="Write details of your query here..."
              required
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
                Sending Enquiry...
              </>
            ) : (
              "Send Enquiry"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
