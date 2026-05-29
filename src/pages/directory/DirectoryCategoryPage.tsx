import React from "react";
import { Navbar } from "../../modules/main/components/layout/Navbar";
import { Footer } from "../../modules/main/components/layout/Footer";
import { DirectorySearchSection } from "../../modules/main/components/sections/DirectorySearchSection";

interface DirectoryCategoryPageProps {
  category: "Doctor" | "Nurse" | "Vendor" | "Clinic" | "Lab" | "Therapist" | "Ambulance";
}

const DirectoryCategoryPage: React.FC<DirectoryCategoryPageProps> = ({ category }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DirectorySearchSection fixedTab={category} />
      </main>
      <Footer />
    </div>
  );
};

export default DirectoryCategoryPage;
