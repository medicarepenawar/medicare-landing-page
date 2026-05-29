import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useMarketplaceBestsellers } from "../../../hooks/useMarketplace";

export function BestsellersSection() {
  const bestsellers = useMarketplaceBestsellers();

  const formatPrice = (price: number) => {
    return `RM${price.toFixed(2)}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/pharmacy/mukminpharmacy/cart";
  };

  return (
    <div id="top-products-section" className="px-6 lg:px-16 py-10 pb-16 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">Top Products</h2>
        <a href="#" className="text-[#2563EB] font-bold text-sm hover:underline flex items-center gap-1 transition-all hover:gap-2">
          View All Products <span className="text-lg leading-none">→</span>
        </a>
      </div>

      <div className="relative group">
        {/* Navigation Left */}
        <button className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-100 p-2.5 rounded-full z-10 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity flex">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Products Flex Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {bestsellers.map((item) => (
            <Link
              to={`/pharmacy/mukminpharmacy/product/${item.id}`}
              key={item.id}
              className="min-w-[210px] w-[230px] bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col snap-start relative group/card"
            >
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 z-10 transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="w-full aspect-[4/3] mb-4 flex items-center justify-center relative overflow-hidden bg-gray-50/50 rounded-xl p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover/card:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Details */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 text-[14px] leading-snug mb-0.5 group-hover/card:text-[#2563EB] transition-colors line-clamp-2 min-h-[40px]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mb-3">{item.variant}</p>
                </div>

                <div>
                  {/* Price Block */}
                  <div className="flex flex-wrap items-baseline gap-1.5 mb-3.5">
                    <span className="font-extrabold text-[#111827] text-[16px]">{formatPrice(item.discountedPrice)}</span>
                    <span className="text-xs text-gray-400 line-through font-medium">{formatPrice(item.originalPrice)}</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm ml-auto">
                      -{item.discountPercentage}%
                    </span>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#2563EB] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Right */}
        <button className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-100 p-2.5 rounded-full z-10 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity flex">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
