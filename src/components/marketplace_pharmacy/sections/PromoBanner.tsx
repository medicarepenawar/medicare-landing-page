import { ShieldCheck, Zap, Heart } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="px-6 lg:px-16 py-8">
      <div className="bg-[#FFF1F2] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Left Section - Call to action */}
        <div className="z-10 md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <div className="text-gray-800 font-bold mb-1 text-2xl">Promo Spesial</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-2 leading-none tracking-tight">Diskon 20%</h2>
          <p className="text-gray-600 font-medium mb-6 text-lg mt-4">Untuk semua Vitamin & Suplemen</p>
          <button className="bg-[#2563EB] text-white px-8 py-3 rounded-md font-bold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg">
            Belanja Sekarang
          </button>
        </div>
        
        {/* Middle Section - Image */}
        <div className="w-full md:w-1/3 relative flex justify-center items-center z-10">
           {/* Abstract shape behind bottle */}
           <div className="absolute w-48 h-48 bg-white opacity-40 rounded-full blur-2xl"></div>
           <img 
            src="/images/marketplace/promo_bottles.png" 
            alt="Wellness Promo" 
            className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl z-20" 
          />
        </div>

        {/* Right Section - Features */}
        <div className="z-10 md:w-1/3 flex flex-col gap-6 mt-8 md:mt-0 items-start md:pl-12">
            <div className="flex items-center gap-4">
                <div className="text-green-500"><ShieldCheck className="w-8 h-8"/></div>
                <div className="font-bold text-[#111827] text-md">Tingkatkan Imunitas</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-green-500"><Zap className="w-8 h-8"/></div>
                <div className="font-bold text-[#111827] text-md">Energi Lebih Baik</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-green-500"><Heart className="w-8 h-8"/></div>
                <div className="font-bold text-[#111827] text-md">Hidup Lebih Sehat</div>
            </div>
        </div>
      </div>
    </div>
  );
}
