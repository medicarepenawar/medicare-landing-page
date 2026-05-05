import { TopBar } from "../../components/marketplace_pharmacy/layout/TopBar";
import { Header } from "../../components/marketplace_pharmacy/layout/Header";
import { NavBar } from "../../components/marketplace_pharmacy/layout/NavBar";
import { HeroSection } from "../../components/marketplace_pharmacy/sections/HeroSection";
import { BenefitsStrip } from "../../components/marketplace_pharmacy/sections/BenefitsStrip";
import { CategorySection } from "../../components/marketplace_pharmacy/sections/CategorySection";
import { PromoBanner } from "../../components/marketplace_pharmacy/sections/PromoBanner";
import { BestsellersSection } from "../../components/marketplace_pharmacy/sections/BestsellersSection";

export default function MarketplaceLanding() {
  return (
    <div className="min-h-screen bg-white font-sans 2xl:max-w-[1440px] 2xl:mx-auto 2xl:border-x border-gray-100 2xl:shadow-sm">
      <TopBar />
      <Header />
      <NavBar />
      <main>
        <HeroSection />
        <BenefitsStrip />
        <CategorySection />
        <PromoBanner />
        <BestsellersSection />
      </main>
    </div>
  );
}
