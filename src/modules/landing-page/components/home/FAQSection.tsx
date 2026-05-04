import React, { useState } from "react";
import type { LandingFaqItem } from "../../types/api";

interface FAQSectionProps {
  faqsData?: LandingFaqItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqsData }) => {
  const [openId, setOpenId] = useState<number | null>(faqsData?.[0]?.id ?? null);

  if (!faqsData?.length) {
    return null;
  }

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">Everything you need to know about using MediCare services.</p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <article key={faq.id} className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
                  className="w-full flex items-center justify-between text-left p-6"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="text-[#2563EB] font-bold text-xl leading-none">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
