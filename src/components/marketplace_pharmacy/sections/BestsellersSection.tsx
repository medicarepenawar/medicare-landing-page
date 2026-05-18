import { MARKETPLACE_BESTSELLERS } from "../../../constants/marketplaceDummyData";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function BestsellersSection() {
  return (
    <div className="px-6 lg:px-16 py-8 pb-20">
      <div className="flex justify-between items-end mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-2xl font-bold text-gray-800">Produk Terlaris</h2>
        <a href="#" className="text-[#2563EB] font-semibold text-sm hover:underline flex items-center gap-1">
          Lihat Semua <span className="text-lg leading-none">→</span>
        </a>
      </div>

      <div className="relative group">
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-100 p-2 rounded-full z-10 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30 flex">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {MARKETPLACE_BESTSELLERS.map((item, idx) => (
            <Link
              to={`/pharmacy/mukminpharmacy/product/${item.id}`}
              key={item.id}
              className="min-w-[200px] w-[220px] bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col snap-start relative animate-card-entry opacity-0"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 z-10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="w-full aspect-square mb-4 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>

              {/* Info Container */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.variant}</p>

                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[#111827] text-lg">{item.discountedPrice}</span>
                    <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                    <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">{item.discountBadge}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "https://medicareapp.example.com";
                    }}
                    className="w-full bg-[#2563EB] text-white py-2 mt-3 rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors"
                  >
                    Beli di App
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
