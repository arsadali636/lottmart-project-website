"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-5">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen ? "border-primary shadow-md" : "border-slate-200 hover:border-slate-300 hover:shadow-sm"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer outline-none focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-lg text-text-primary pr-6">
                {item.question}
              </span>
              <span
                className={`w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-primary shrink-0 transition-transform duration-300 ${
                  isOpen ? "bg-primary text-white rotate-180" : ""
                }`}
              >
                <svg
                  className="w-3.5 h-3.5 stroke-[2.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 pt-1 text-text-secondary leading-relaxed border-t border-slate-100 text-[1.05rem]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
