import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DirectorySearchSection } from "../components/sections/DirectorySearchSection";

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F2] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DirectorySearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
