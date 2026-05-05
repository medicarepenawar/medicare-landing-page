import { UserCircle, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { MARKETPLACE_CART_URL } from "../../../constants/constant";

export function Header() {
  return (
    <div className="py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-100 bg-white shadow-sm gap-4">
      <div className="flex items-center gap-3 text-[#0b5f8c] w-full md:w-auto justify-between md:justify-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-md grid grid-cols-2 gap-[2px] p-[2px]">
              <div className="bg-white rounded-tl-[3px]"></div>
              <div className="bg-green-500 rounded-tr-[3px]"></div>
              <div className="bg-green-500 rounded-bl-[3px]"></div>
              <div className="bg-white rounded-br-[3px]"></div>
          </div>
          <div className="font-bold text-xl leading-tight">
            MediCare <br /> <span className="text-sm font-normal">Retail Pharmacy</span>
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
          placeholder="Search for medicines, wellness, healthcare..." 
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="bg-[#0b5f8c] text-white px-4 md:px-8 py-2 rounded-r-md hover:bg-blue-800 transition-colors font-medium">
          Search
        </button>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-3 cursor-pointer">
          <UserCircle className="w-9 h-9 text-gray-500" />
          <div className="text-sm">
            <div className="text-gray-500">Hello, Sign in</div>
            <div className="font-semibold text-gray-800 flex items-center gap-1">My Account <span className="text-[10px]">▼</span></div>
          </div>
        </div>
        <Link to={MARKETPLACE_CART_URL} className="flex items-center gap-2 cursor-pointer relative text-gray-700 hover:text-[#0b5f8c]">
          <div className="relative">
            <ShoppingCart className="w-8 h-8" />
            <span className="absolute -top-1 -right-1 bg-[#0b5f8c] border-2 border-white text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">2</span>
          </div>
          <span className="font-medium">Cart</span>
        </Link>
      </div>
    </div>
  );
}
