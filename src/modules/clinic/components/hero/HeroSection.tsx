import React from "react";
import type { ClinicData } from "../../constants/clinicData";

interface HeroSectionProps {
  clinic: ClinicData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ clinic }) => {
  return (
    <section className="relative bg-white">
      {/* <div className="bg-[#0d4d6f] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span className="text-white font-semibold text-lg">{clinic.clinicUrl}</span>
        </div>
      </div> */}

      <div className="bg-white py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 text-[#0d7a99]">
              <svg viewBox="0 0 48 48" fill="currentColor">
                <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
                <path d="M22 14h4v20h-4z" />
                <path d="M14 22h20v4H14z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0d7a99] tracking-tight">
                {clinic.name}
              </h1>
              <p className="text-[#0d7a99] font-medium text-sm">
                {clinic.subtitle}
              </p>
            </div>
          </div>
          <a
            href={clinic.streetViewUrl}
            className="hidden md:inline-flex items-center gap-2 bg-[#0d7a99] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0a6580] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Street View
          </a>
        </div>
      </div>

      <div className="relative bg-gray-200 min-h-[80vh] overflow-hidden">
        <img
          src={clinic.heroImage}
          alt={clinic.name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='400'%3E%3Crect fill='%23e5e7eb' width='1200' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='sans-serif' font-size='24'%3EClinic Photo Placeholder%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#0d4d6f]/90 py-4 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {clinic.keyFeatures.map(
              (
                feature: { icon: string; icon2?: string; text: string },
                index: number,
              ) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <svg
                    className="w-8 h-8 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                    {feature.icon2 && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.icon2}
                      />
                    )}
                  </svg>
                  <span className="text-sm md:text-base font-medium">
                    {feature.text}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
