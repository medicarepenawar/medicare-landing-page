import { useState, useEffect } from "react";
import { Shield, Truck, Lock, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const HERO_SLIDER_IMAGES = ["/images/marketplace/pharmacy_store.png", "/images/marketplace/promo_bottles.png", "/images/marketplace/bestseller_item.png"];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
    }, 5000); // Auto-rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDER_IMAGES.length) % HERO_SLIDER_IMAGES.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDER_IMAGES.length);
  };
  return (
    <div className="bg-[#EFF6FF] py-12 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#DBEAFE] rounded-l-full opacity-50 pointer-events-none animate-pulse"></div>

      <div className="md:w-1/2 z-10 mb-10 md:mb-0 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
          Your Health,
          <br />
          <span className="text-[#2563EB]">Our</span> <span className="text-red-500">Priority</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-md animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Shop for medicines, vitamins, and health essentials easily and safely on Medicare.
        </p>

        <div
          className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700 py-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#2563EB]" />
            100% Authentic
            <br />
            Products
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#2563EB]" />
            Fast
            <br />
            Delivery
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#2563EB]" />
            Secure
            <br />
            Payment
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
            Pharmacist
            <br />
            Consultation
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <button className="bg-[#2563EB] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl">
            Shop Now
          </button>
          <button 
            onClick={() => navigate(MARKETPLACE_PRESCRIPTION_URL)}
            className="bg-white border border-gray-300 text-[#2563EB] px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Upload className="w-5 h-5" />
            <div className="text-left flex flex-col leading-tight">
              <span>Upload Prescription</span>
              <span className="text-xs font-normal text-gray-500">Get your medicines easily</span>
            </div>
          </button>
        </div> */}
      </div>

      <div className="md:w-1/2 z-10 relative flex justify-end animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
        <div className="relative w-[90%] max-w-[600px]">
          {/* Slider Container */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
            {HERO_SLIDER_IMAGES.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Pharmacy Store ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#2563EB]" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#2563EB]" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {HERO_SLIDER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-[#2563EB] w-8" : "bg-white hover:bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
