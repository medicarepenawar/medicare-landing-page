import { Shield, Truck, Lock, Upload, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MARKETPLACE_PRESCRIPTION_URL } from "../../../constants/constant";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#EFF6FF] py-12 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#DBEAFE] rounded-l-full opacity-50 pointer-events-none animate-pulse"></div>

      <div className="md:w-1/2 z-10 mb-10 md:mb-0 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: "0.1s" }}>
          Kesehatan Anda,
          <br />
          <span className="text-[#2563EB]">Prioritas</span> <span className="text-red-500">Kami</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-md animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Belanja obat, vitamin, dan kebutuhan kesehatan dengan mudah dan aman di Medicare.
        </p>

        <div
          className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700 py-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#2563EB]" />
            100% Produk
            <br />
            Asli
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#2563EB]" />
            Pengiriman
            <br />
            Cepat
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#2563EB]" />
            Pembayaran
            <br />
            Aman
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
            Konsultasi
            <br />
            Apoteker
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <button className="bg-[#2563EB] text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl">
            Belanja Sekarang
          </button>
          <button 
            onClick={() => navigate(MARKETPLACE_PRESCRIPTION_URL)}
            className="bg-white border border-gray-300 text-[#2563EB] px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Upload className="w-5 h-5" />
            <div className="text-left flex flex-col leading-tight">
              <span>Upload Resep</span>
              <span className="text-xs font-normal text-gray-500">Dapatkan obat lebih mudah</span>
            </div>
          </button>
        </div> */}
      </div>

      <div className="md:w-1/2 z-10 relative flex justify-end animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
        <img
          src="/images/marketplace/pharmacy_store.png"
          alt="Pharmacy Store"
          className="w-[90%] max-w-[600px] h-auto object-cover rounded-2xl shadow-2xl border-4 border-white animate-float-3d"
        />
      </div>
    </div>
  );
}
