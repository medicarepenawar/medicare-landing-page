import React from "react";
import type { ClinicData } from "../../constants/clinicData";

interface TestimonialsSectionProps {
  clinic: ClinicData;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ clinic }) => {
  return (
    <section className="bg-[#0d4d6f] py-4 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white text-sm md:text-base">{clinic.footerText}</p>
      </div>
    </section>
  );
};
