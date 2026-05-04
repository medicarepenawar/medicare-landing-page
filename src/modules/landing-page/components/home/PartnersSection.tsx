import React from "react";
import type { LandingPartnerItem } from "../../types/api";
import { resolveMediaUrl } from "../../utils/media";

interface PartnersSectionProps {
  partnersData?: LandingPartnerItem[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ partnersData }) => {
  const partners = partnersData?.length
    ? partnersData
    : [
        {
          id: 1,
          name: "Provider Partner",
          description: "Clinics, Hospitals, and Labs. Expand your patient reach and digitize operations.",
          image: "",
          created_at: "",
          updated_at: "",
        },
        {
          id: 2,
          name: "Technology Partner",
          description: "ISVs, IoT Device makers, and SaaS platforms looking to integrate via API.",
          image: "",
          created_at: "",
          updated_at: "",
        },
        {
          id: 3,
          name: "Implementation Partner",
          description: "Consultants and agencies helping healthcare providers adopt digital solutions.",
          image: "",
          created_at: "",
          updated_at: "",
        },
      ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden" id="partners">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EF4444]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
            Partner with <span className="text-[#2563EB]">Medicare</span>
          </h2>
          <p className="text-gray-600 text-lg">Join our rapidly growing ecosystem and build the future of healthcare together.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, idx) => (
            <div
              key={partner.id}
              className="group bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-[#2563EB]/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#EF4444] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {partner.image ? (
                <img src={resolveMediaUrl(partner.image)} alt={partner.name} className="w-14 h-14 rounded-xl object-cover mb-4 border border-gray-100" />
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center font-bold text-lg mb-4">{idx + 1}</div>
              )}

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors">{partner.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
