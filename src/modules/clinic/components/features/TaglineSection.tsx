import React from "react";
import type { ClinicData } from "../../constants/clinicData";

interface TaglineSectionProps {
  clinic: ClinicData;
}

export const TaglineSection: React.FC<TaglineSectionProps> = ({ clinic }) => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <svg className="w-8 h-8 text-[#0d7a99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0d7a99] tracking-wide mb-2">{clinic.tagline}</h2>
        <p className="text-gray-500 text-sm md:text-base">{clinic.taglineDescription}</p>
      </div>
    </section>
  );
};
