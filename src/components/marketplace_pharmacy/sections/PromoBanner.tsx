import { ShieldCheck, Zap, Heart } from "lucide-react";

export function PromoBanner() {
  return (
    <div className="px-6 lg:px-16 py-8">
      <div className="bg-[#e9f6f2] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Left Section - Call to action */}
        <div className="z-10 md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <div className="text-gray-600 font-bold mb-1 text-lg">Flat</div>
          <h2 className="text-4xl md:text-6xl font-black text-[#1a2f44] mb-2 leading-none tracking-tight">20% OFF</h2>
          <p className="text-gray-700 font-medium mb-6 text-xl">On Wellness Essentials</p>
          <button className="bg-[#21b764] text-white px-8 py-3 rounded-md font-bold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
            Shop Now
          </button>
        </div>
        
        {/* Middle Section - Image */}
        <div className="w-full md:w-1/3 relative flex justify-center items-center z-10">
           {/* Abstract shape behind bottle */}
           <div className="absolute w-48 h-48 bg-white opacity-40 rounded-full blur-2xl"></div>
           <img 
            src="/images/marketplace/promo_bottles.png" 
            alt="Wellness Promo" 
            className="w-[280px] h-[280px] object-cover drop-shadow-2xl z-20 rounded-full border-4 border-white" 
          />
        </div>

        {/* Right Section - Features */}
        <div className="z-10 md:w-1/3 flex justify-evenly items-center mt-8 md:mt-0">
            <div className="flex flex-col items-center text-center">
                <div className="bg-white text-[#21b764] p-3 rounded-full mb-3 shadow-sm border border-green-50"><ShieldCheck className="w-6 h-6"/></div>
                <div className="font-bold text-[#1a2f44] text-sm leading-tight">Boost<br/>Immunity</div>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="bg-white text-[#21b764] p-3 rounded-full mb-3 shadow-sm border border-green-50"><Zap className="w-6 h-6"/></div>
                <div className="font-bold text-[#1a2f44] text-sm leading-tight">Better<br/>Energy</div>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="bg-white text-[#21b764] p-3 rounded-full mb-3 shadow-sm border border-green-50"><Heart className="w-6 h-6"/></div>
                <div className="font-bold text-[#1a2f44] text-sm leading-tight">Stronger<br/>You</div>
            </div>
        </div>
      </div>
    </div>
  );
}
