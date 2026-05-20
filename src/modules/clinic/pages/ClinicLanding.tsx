import React from "react";
import { useParams } from "react-router-dom";
import { getClinicBySlug, type ClinicData } from "../constants/clinicData";
import { HeroSection } from "../components/hero";
import { TaglineSection } from "../components/features";
import { ServicesSection } from "../components/services";
import { ClinicInfoSection } from "../components/doctors";
import { TestimonialsSection } from "../components/testimonials";

interface ClinicLandingProps {
  clinic: ClinicData;
}

const ClinicLandingContent: React.FC<ClinicLandingProps> = ({ clinic }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection clinic={clinic} />
      <TaglineSection clinic={clinic} />
      <ServicesSection clinic={clinic} />
      <ClinicInfoSection clinic={clinic} />
      <TestimonialsSection clinic={clinic} />
    </div>
  );
};

const NotFoundContent: React.FC = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
    <h1 className="mb-2 text-6xl font-bold text-gray-300">404</h1>
    <p className="mb-6 text-xl text-gray-500">Vendor/Clinic Not Found</p>
    <p className="mb-8 text-gray-400">
      The clinic you're looking for doesn't exist or may have been removed.
    </p>
    <a
      href="/"
      className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
    >
      Back to Home
    </a>
  </div>
);

const ClinicLanding: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const clinic = slug ? getClinicBySlug(slug) : null;

  if (!clinic) {
    return <NotFoundContent />;
  }

  return <ClinicLandingContent clinic={clinic} />;
};

export default ClinicLanding;
