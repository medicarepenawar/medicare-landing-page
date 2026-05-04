import React, { useEffect, useState } from "react";
import { Header } from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { Testimonials } from "../components/home/Testimonials";
import { CTASection } from "../components/home/CTASection";
import { Footer } from "../components/home/Footer";
import { ServicesSection } from "../components/home/ServiceSection";
import { IndustriesSection } from "../components/home/IndustriesSection";

import { SpecialistsSection } from "../components/home/SpecialistsSection";
import { FAQSection } from "../components/home/FAQSection";
import { usePageTitle } from "../hooks/usePageTitle";
import { landingService } from "../services/landingService";
import type { Data as LandingPageData } from "../types/landingApi";
import { PartnersSection } from "../components/home/PartnersSection";

const Home: React.FC = () => {
  usePageTitle("Home");

  const [landingData, setLandingData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLandingData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await landingService.getLandingPageData();
        if (response.success) {
          setLandingData(response.data);
        } else {
          setError(response.message || "Failed to load landing page data.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load landing page data.");
      } finally {
        setLoading(false);
      }
    };

    fetchLandingData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      <Header />

      {loading && <div className="px-6 py-8 text-center text-gray-600">Loading landing page data...</div>}

      {error && <div className="px-6 py-4 text-center text-red-500">{error}</div>}

      <HeroSection hero={landingData?.hero} />
      <FeaturesSection featuresData={landingData?.features} />
      <ServicesSection servicesData={landingData?.services} />
      <IndustriesSection industriesData={landingData?.industries} />
      <PartnersSection partnersData={landingData?.partners} />
      <SpecialistsSection specialistsData={landingData?.specialists} />
      <Testimonials testimonialsData={landingData?.testimonials} />
      <FAQSection faqsData={landingData?.faqs} />
      <CTASection mission={landingData?.mission} />
      <Footer companyProfile={landingData?.company_profile} servicesData={landingData?.services} />
    </div>
  );
};

export default Home;
