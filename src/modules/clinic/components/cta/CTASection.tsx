import React from "react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Siap Berkunjung ke Klinik?",
  subtitle = "Daftarkan diri Anda sekarang dan nikmati pengalaman berobat yang mudah dan nyaman.",
  buttonText = "Daftar Sekarang",
}) => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1e40af]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EF4444]/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          <button className="px-10 py-4 bg-white text-[#2563EB] rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            {buttonText}
          </button>
          <button className="px-10 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
            Hubungi Kami
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
};
