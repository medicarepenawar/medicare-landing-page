import { TopBar } from "../../components/marketplace_pharmacy/layout/TopBar";
import { Header } from "../../components/marketplace_pharmacy/layout/Header";
import { NavBar } from "../../components/marketplace_pharmacy/layout/NavBar";
import { Footer } from "../../components/marketplace_pharmacy/layout/Footer";
import { HeroSection } from "../../components/marketplace_pharmacy/sections/HeroSection";
import { BenefitsStrip } from "../../components/marketplace_pharmacy/sections/BenefitsStrip";
import { CategorySection } from "../../components/marketplace_pharmacy/sections/CategorySection";
import { PromoBanner } from "../../components/marketplace_pharmacy/sections/PromoBanner";
import { BestsellersSection } from "../../components/marketplace_pharmacy/sections/BestsellersSection";
import { FeaturesSection } from "../../components/marketplace_pharmacy/sections/FeaturesSection";

export default function MarketplaceLanding() {
  return (
    <div className="min-h-screen bg-white font-sans w-full">
      <TopBar />
      <Header />
      <NavBar />
      <main>
        <HeroSection />
        <BenefitsStrip />
        <CategorySection />
        <PromoBanner />
        <BestsellersSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
