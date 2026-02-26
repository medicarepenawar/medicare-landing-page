import React from "react";
import heroAppImage from "../../assets/img/home/mockup.png";
import westMalaysiaMap from "../../assets/img/home/westm.png";
import eastMalaysiaMap from "../../assets/img/home/eastm.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[100px] -translate-y-1/2 animate-pulse" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#EF4444]/10 rounded-full blur-[80px] translate-x-1/3" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* --- TOP: Medicare Branding --- */}
        <div className="text-center mb-12 mt-12 animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <h1 className="text-6xl md:text-7xl font-black mb-3 tracking-tight">
            <span className="text-[#2563EB]">Medi</span>
            <span className="text-[#EF4444]">Care</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600 tracking-wide">Healthcare, Anytime, Anywhere</p>
        </div>

        {/* --- MAIN GRID: 3 Columns --- */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* --- LEFT COLUMN: Users Section --- */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#2563EB]/20 to-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] text-sm font-bold tracking-wider uppercase">
                Users
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">Medicare brings healthcare closer than ever.</h3>
              <p className="text-base md:text-lg text-gray-500 font-medium">Comprehensive medical services, simplified</p>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-md mx-auto lg:mx-0 font-normal">
              From GP online visits and specialist appointments, specialist visit, home nursing, e-prescriptions, ambulance services, doctor home visits, and
              onsite laboratory support, everything is available at your fingertips. The intuitive design ensures quick access, clear choices, and peace of
              mind—whether for routine care or urgent needs.
            </p>

            {/* Map illustration */}
            <div className="pt-8 flex flex-col items-center">
              <div className="relative w-64 h-52 mb-4">
                <img src={westMalaysiaMap} alt="West Malaysia Map" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <p className="text-2xl md:text-3xl font-bold italic text-gray-800 tracking-wide">West Malaysia</p>
            </div>
          </div>

          {/* --- CENTER COLUMN: Phone Mockup --- */}
          <div
            className="relative flex justify-center perspective-1000 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-tr from-[#2563EB]/20 to-[#EF4444]/20 blur-[80px] rounded-full pointer-events-none animate-pulse-slow" />

            <div className="relative w-full max-w-[280px] lg:max-w-[320px] animate-float-3d transform-style-3d z-10">
              <div className="relative rounded-[2.5rem] bg-gray-900 shadow-2xl overflow-hidden border-[8px] border-gray-900 ring-1 ring-white/10 group transition-transform duration-500">
                <img src={heroAppImage} alt="Medicare Mobile App Interface" className="w-full h-auto object-cover" />

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[-25deg] animate-shine" />
              </div>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 blur-xl rounded-[100%] animate-shadow-scale" />
            </div>
          </div>

          {/* --- RIGHT COLUMN: Healthcare Providers Section --- */}
          <div className="text-center lg:text-right space-y-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="flex justify-center lg:justify-end">
              <span className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#EF4444]/20 to-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-sm font-bold tracking-wider uppercase">
                Healthcare Providers
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">Powering Healthcare Excellence</h3>
              <p className="text-base md:text-lg text-gray-500 font-medium">Integrated solutions for better outcomes</p>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-md mx-auto lg:mx-0 font-normal">
              Medicare App is a powerful platform that connects clinics, hospital, doctors, nurses, ambulances, laboratories, and pharmacies within one
              integrated ecosystem. It supports efficient patient management, teleconsultations, service coordination and delivery, digital records, and
              real-time communication—improving workflow, response time, and service quality.
            </p>

            {/* Map illustration */}
            <div className="pt-8 flex flex-col items-center">
              <div className="relative w-72 h-52 mb-4">
                <img src={eastMalaysiaMap} alt="East Malaysia Map" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <p className="text-2xl md:text-3xl font-bold italic text-gray-800 tracking-wide">East Malaysia</p>
            </div>
          </div>
        </div>

        {/* --- BOTTOM: Tagline --- */}
        <div className="text-center mt-20 space-y-1 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Unified Ecosystem. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">Seamless Care.</span>
          </h2>
          <p className="text-base md:text-lg font-medium text-gray-600 pt-2">Connecting healthcare, empowering lives.</p>
        </div>
      </div>

      {/* --- CSS Styles --- */}
      <style>{`
        /* Setup 3D Environment */
        .perspective-1000 {
            perspective: 1000px;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
        .translate-z-20 {
            transform: translateZ(20px);
        }
        
        /* Rotasi 3D Statis Awal (Miring sedikit) */
        .rotate-y-\[-12deg\] {
            transform: rotateY(-12deg) rotateX(5deg);
        }
        
        /* Hover Effect: Kembali lurus */
        .group:hover .rotate-y-\[-12deg\] {
            transform: rotateY(0deg) rotateX(0deg) scale(1.02);
        }

        /* 1. Floating Animation (Naik Turun) */
        @keyframes float3D {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-3d {
          animation: float3D 6s ease-in-out infinite;
        }

        /* 2. Shadow Scaling (Mengecil saat HP naik) */
        @keyframes shadowScale {
            0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.2; }
            50% { transform: translateX(-50%) scale(0.8); opacity: 0.1; }
        }
        .animate-shadow-scale {
            animation: shadowScale 6s ease-in-out infinite;
        }

        /* 3. Floating Badge Delayed */
        @keyframes floatDelayed {
            0%, 100% { transform: translateY(0) translateZ(30px); }
            50% { transform: translateY(-15px) translateZ(30px); }
        }
        .animate-float-delayed {
            animation: floatDelayed 5s ease-in-out infinite 1s;
        }

        /* 4. Shine Animation (Kilatan Cahaya Lewat) */
        @keyframes shine {
            0% { left: -100%; opacity: 0; }
            50% { opacity: 0.5; }
            100% { left: 200%; opacity: 0; }
        }
        .animate-shine {
            animation: shine 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Standard Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientFlow 4s linear infinite;
        }
        .bg-300\% { background-size: 300%; }
      `}</style>
    </section>
  );
};
