import { ShoppingCart } from "lucide-react";
import Logo_medicare from "../../../assets/img/home/logo.png";

export function Header() {
  return (
    <div className="py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-100 bg-white shadow-sm gap-4">
      <div className="flex items-center gap-3 text-[#2563EB] w-full md:w-auto justify-between md:justify-start">
        <div className="flex items-center gap-3">
         {/* Logo Medicare */}
        <div className="w-32 md:w-40 flex items-center">
           <img src={Logo_medicare} alt="Medicare Logo" className="w-full h-auto object-contain" />
        </div>
        </div>
        
        {/* Mobile icons */}
        <div className="md:hidden flex items-center gap-4">
           <ShoppingCart className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      <div className="flex-1 w-full md:max-w-2xl md:mx-6 lg:mx-12 flex">
        <input 
          type="text" 
          placeholder="Cari obat, vitamin, atau kebutuhan kesehatan..." 
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="bg-[#2563EB] text-white px-4 md:px-8 py-2 rounded-r-md hover:bg-blue-800 transition-colors font-medium">
          Cari
        </button>
      </div>

      
    </div>
  );
}
