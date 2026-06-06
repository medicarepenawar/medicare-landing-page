import { Shield, Truck, MessageSquare, Upload, FileText, Lock } from "lucide-react";
import doctorImg from "../../../assets/img/main/medicare_hero_doctor.png";

export function HeroSection() {
  const handleShopNow = () => {
    const productsSection = document.getElementById("top-products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUploadNow = () => {
    window.location.href = "/pharmacies/mukminpharmacy/upload-prescription";
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/50 py-16 px-6 lg:px-16 overflow-hidden border-b border-gray-100">
      {/* Decorative light blue background glow */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-100/30 rounded-l-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Heading & Trust Badges */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Your Health,
            <br />
            <span className="text-[#2563EB]">Our Priority</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Trusted medicines, health products, and expert advice. Delivered to your door, fast and safely.
          </p>

          {/* Guarantees List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100/50 rounded-xl flex-shrink-0">
                <Shield className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">100% Authentic</p>
                <p className="text-xs text-gray-500">Genuine medicines</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100/50 rounded-xl flex-shrink-0">
                <Truck className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">Fast Delivery</p>
                <p className="text-xs text-gray-500">On-time at your door</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100/50 rounded-xl flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">Pharmacist Support</p>
                <p className="text-xs text-gray-500">24/7 expert advice</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={handleShopNow}
              className="bg-[#2563EB] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-500/10"
            >
              Shop Medicines
            </button>
            <button
              onClick={handleUploadNow}
              className="bg-white border-2 border-[#2563EB] text-[#2563EB] px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload Prescription
            </button>
          </div>
        </div>

        {/* Center Column: Pharmacist Doctor Image */}
        <div className="lg:col-span-4 flex justify-center items-end h-full mt-6 lg:mt-0">
          <div className="relative w-full max-w-[360px] aspect-[4/5] lg:aspect-[3/4] flex items-end">
            <img
              src={doctorImg}
              alt="MediCare Pharmacist Doctor"
              className="w-full h-full object-contain relative z-10 select-none pointer-events-none drop-shadow-xl"
            />
            {/* Soft decorative background bubble under doctor */}
            <div className="absolute inset-x-0 bottom-0 top-[20%] bg-gradient-to-t from-blue-100/80 to-transparent rounded-t-[100px] -z-10" />
          </div>
        </div>

        {/* Right Column: Upload Prescription Card */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-[320px] w-full space-y-5 relative">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-xl">
                <FileText className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg leading-tight">Upload Prescription</h3>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Upload prescription and we'll take care of the rest.
            </p>

            <button
              onClick={handleUploadNow}
              className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm"
            >
              Upload Now
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium">
              <Lock className="w-3.5 h-3.5 text-gray-400" />
              <span>We ensure 100% privacy</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
