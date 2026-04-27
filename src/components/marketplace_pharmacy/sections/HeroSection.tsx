import { Shield, Truck, Lock, Upload, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <div className="bg-[#f4f9fc] py-12 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#e8f1f8] rounded-l-full opacity-50 pointer-events-none"></div>

      <div className="md:w-1/2 z-10 mb-10 md:mb-0 space-y-6">
        <div className="inline-block bg-blue-100 text-[#0b5f8c] font-semibold text-xs px-3 py-1 rounded-full tracking-wider">
          YOUR HEALTH, OUR PRIORITY
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2f44] leading-tight">
          Trusted Medicare.<br />
          <span className="text-[#0b5f8c]">Better Living.</span>
        </h1>
        
        <p className="text-gray-600 text-lg max-w-md">
          Your one-stop shop for Medicines, Health Products & Everyday Wellness.
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700 py-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#0b5f8c]" />
            100% Genuine<br/>Medicines
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#0b5f8c]" />
            Fast & Reliable<br/>Delivery
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#0b5f8c]" />
            Secure<br/>Payments
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#0b5f8c] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl">
            Shop Medicines
          </button>
          <button className="bg-white border border-gray-300 text-[#0b5f8c] px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
            <Upload className="w-5 h-5" />
            <div className="text-left flex flex-col leading-tight">
              <span>Upload Prescription</span>
              <span className="text-xs font-normal text-gray-500">Get medicines easily</span>
            </div>
          </button>
        </div>
      </div>

      <div className="md:w-1/2 z-10 relative flex justify-end">
        {/* Lincensed Pharmacy Badge */}
        <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-xl flex items-center gap-3 z-20">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <div className="font-bold text-gray-800 text-sm">Licensed Pharmacy</div>
            <div className="text-xs text-gray-500">Guaranteed Quality & Safety</div>
          </div>
        </div>
        
        <img 
          src="/images/marketplace/pharmacy_store.png" 
          alt="Pharmacy Store" 
          className="w-[90%] max-w-[600px] h-auto object-cover rounded-2xl shadow-2xl border-4 border-white"
        />
      </div>
    </div>
  );
}
