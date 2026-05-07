import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { DirectorySearchSection } from "../components/sections/DirectorySearchSection";

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DirectorySearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
