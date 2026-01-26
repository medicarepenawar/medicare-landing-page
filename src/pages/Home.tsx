import React from "react";
import { Header } from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { Testimonials } from "../components/home/Testimonials";
import { CTASection } from "../components/home/CTASection";
import { Footer } from "../components/home/Footer";
import { ServicesSection } from "../components/home/ServiceSection";
import { IndustriesSection } from "../components/home/IndustriesSection";
import { PartnersSection } from "../components/home/PartnersSection";
import { usePageTitle } from "../hooks/usePageTitle";

const Home: React.FC = () => {
  usePageTitle("Home");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <IndustriesSection />
      <PartnersSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
