import { MARKETPLACE_BESTSELLERS } from "../../../constants/marketplaceDummyData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { MARKETPLACE_CART_URL } from "../../../constants/constant";

export function BestsellersSection() {
  const navigate = useNavigate();
  return (
    <div className="px-6 lg:px-16 py-8 pb-20">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Bestsellers</h2>
        <a href="#" className="text-[#0b5f8c] font-semibold text-sm hover:underline flex items-center gap-1">
          View all <span className="text-lg leading-none">→</span>
        </a>
      </div>

      <div className="relative group">
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-100 p-2 rounded-full z-10 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30 flex">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {MARKETPLACE_BESTSELLERS.map((item) => (
            <Link to={`/pharmacy/mukminpharmacy/product/${item.id}`} key={item.id} className="min-w-[200px] w-[220px] bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col snap-start">
              {/* Image Container */}
              <div className="bg-[#f8fbff] w-full aspect-square rounded-xl mb-4 p-4 flex items-center justify-center relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Info Container */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.variant}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                    <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">{item.discountBadge}</span>
                  </div>
                  <div className="font-bold text-[#1a2f44] text-lg mb-3">{item.discountedPrice}</div>
                  
                  <button 
                    onClick={(e) => { e.preventDefault(); navigate(MARKETPLACE_CART_URL); }}
                    className="w-full bg-white border border-gray-300 text-[#0b5f8c] py-2 rounded-md font-semibold text-sm hover:bg-blue-50 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-100 p-2 rounded-full z-10 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity flex">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
