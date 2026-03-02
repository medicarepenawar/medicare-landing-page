import React from "react";
import type { LandingSpecialistItem } from "../../types/api";
import { resolveMediaUrl } from "../../utils/media";

interface SpecialistsSectionProps {
  specialistsData?: LandingSpecialistItem[];
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ specialistsData }) => {
  if (!specialistsData?.length) {
    return null;
  }

  return (
    <section className="relative py-24 px-6 bg-gray-50/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#2563EB]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#EF4444]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Specialists</span>
          </h2>
          <p className="text-gray-600 text-lg">Experienced medical professionals ready to support your healthcare journey.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialistsData.map((specialist, index) => (
            <article
              key={specialist.id}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {specialist.image ? (
                <img
                  src={resolveMediaUrl(specialist.image)}
                  alt={specialist.name}
                  className="w-16 h-16 rounded-full object-cover mb-5 border-2 border-[#2563EB]/20"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#EF4444] text-white font-bold text-lg flex items-center justify-center mb-5">
                  {specialist.name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
              )}

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors">{specialist.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{specialist.position_company}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
