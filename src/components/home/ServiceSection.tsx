import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

export const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5",
      title: "Visit Clinic",
      description: "Walk-in appointments and scheduled visits at our state-of-the-art medical facilities.",
    },
    {
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      title: "Home Nursing",
      description: "Professional nursing care provided in the comfort and privacy of your own home.",
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "Teleconsultation",
      description: "Connect with healthcare professionals via high-quality video calls anywhere, anytime.",
    },
    {
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      title: "Pharmacy & E-Prescription",
      description: "Get your prescriptions digitally and have medicines delivered from our partnered pharmacies.",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Ambulance & Telemedicine",
      description: "24/7 Emergency response coordination and immediate telemedicine triage support.",
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      title: "Visit Specialist",
      description: "Book consultations with top-tier specialists across various medical fields effortlessly.",
    },
    {
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Doctor Home Visit",
      description: "Schedule a certified doctor to visit your location for personalized medical attention.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Our Services</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
            Comprehensive Healthcare <br /> Solutions For You
          </h2>
          <p className="text-gray-600 text-lg">
            We provide a wide range of medical services to ensure your health is taken care of, from emergency needs to routine checkups.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Card Component
const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div className="w-14 h-14 rounded-xl bg-purple-50 group-hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center mb-6">
      <svg className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
      </svg>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{title}</h3>

    <p className="text-gray-500 leading-relaxed text-sm">{description}</p>

    {/* Optional: 'Learn More' Link style arrow */}
    <div className="mt-6 flex items-center text-purple-600 font-medium text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
      Learn more
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
);
