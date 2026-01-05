import React from "react";
import { Button } from "../common/Button";
import { DashboardPreview } from "./DashboardPreview";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] -translate-y-1/2 animate-pulse" />

      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[80px] translate-x-1/3" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-medium mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            New standard for healthcare
          </div>

          {/* --- 3. Animated Gradient Title --- */}
          <h1
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-16 leading-tight tracking-tight animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Healthcare. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-300% animate-gradient">
              Anytime. Anywhere.
            </span>
          </h1>

          <div className="flex justify-center gap-4 animate-fade-in-up opacity-0 mb-12" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative">
                <Button size="lg" icon>
                  Get Started Now
                </Button>
              </div>
            </div>

            {/* Tombol Sekunder (Optional) */}
            <button className="px-6 py-3 rounded-lg text-gray-600 font-semibold hover:bg-gray-50 transition-colors">Learn more</button>
          </div>
        </div>

        {/* --- 6. Dashboard Preview with 3D Float Effect --- */}
        <div className="relative animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          {/* Decorative Elements behind dashboard */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[2rem] blur-xl opacity-50"></div>

          <div className="relative transform transition-transform duration-500 hover:scale-[1.01]">
            <DashboardPreview />
          </div>
        </div>
      </div>

      {/* --- CSS Styles untuk Animasi Custom --- */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        .bg-300\% {
            background-size: 300%;
        }
      `}</style>
    </section>
  );
};
