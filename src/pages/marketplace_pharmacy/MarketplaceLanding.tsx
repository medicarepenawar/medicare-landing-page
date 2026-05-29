import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../modules/main/components/layout/Navbar";
import { Footer } from "../../components/marketplace_pharmacy/layout/Footer";
import { HeroSection } from "../../components/marketplace_pharmacy/sections/HeroSection";
import { BenefitsStrip } from "../../components/marketplace_pharmacy/sections/BenefitsStrip";
import { CategorySection } from "../../components/marketplace_pharmacy/sections/CategorySection";
import { PromoBanner } from "../../components/marketplace_pharmacy/sections/PromoBanner";
import { BestsellersSection } from "../../components/marketplace_pharmacy/sections/BestsellersSection";
import { PharmacyBestsellersSection } from "../../components/marketplace_pharmacy/sections/PharmacyBestsellersSection";
import { FeaturesSection } from "../../components/marketplace_pharmacy/sections/FeaturesSection";
import { Preloader } from "../../components/marketplace_pharmacy/layout/Preloader";

export default function MarketplaceLanding() {
  const { pharmacySlug } = useParams<{ pharmacySlug?: string }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading/preload (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-white font-sans w-full transition-opacity duration-700 opacity-100">
      <Navbar />
      <main className="pt-[72px]">
        {pharmacySlug ? (
          // Show pharmacy-specific products
          <>
            <PharmacyBestsellersSection pharmacySlug={pharmacySlug} />
            <BenefitsStrip />
            <CategorySection />
          </>
        ) : (
          // Show general marketplace
          <>
            <HeroSection />
            <BenefitsStrip />
            <CategorySection />
            <PromoBanner />
            <BestsellersSection />
            <FeaturesSection />
          </>
        )}
      </main>
      <Footer />

      <style>{`
        /* 1. Fade In Up */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 2. Floating 3D */
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) rotate3d(1, 1, 0, 0deg); }
          50% { transform: translateY(-20px) rotate3d(1, 1, 0, 5deg); }
        }
        .animate-float-3d {
          animation: float3D 6s ease-in-out infinite;
        }

        /* 3. Card Entry */
        @keyframes cardEntry {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-card-entry {
          animation: cardEntry 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 4. Slide In */
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        /* 5. Standard Float */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
