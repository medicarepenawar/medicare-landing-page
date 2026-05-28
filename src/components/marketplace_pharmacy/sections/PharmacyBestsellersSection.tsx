import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { usePharmacyProducts, usePharmacyBySlug } from "../../../hooks/useMarketplace";

interface PharmacyBestsellersSectionProps {
  pharmacySlug: string;
}

export function PharmacyBestsellersSection({ pharmacySlug }: PharmacyBestsellersSectionProps) {
  const pharmacy = usePharmacyBySlug(pharmacySlug);
  const products = usePharmacyProducts(pharmacy?.id || "");

  const formatPrice = (price: number) => {
    return `RM${price.toLocaleString("en-MY")}`;
  };

  console.log("PharmacySlug:", pharmacySlug);
  console.log("Pharmacy:", pharmacy);
  console.log("Products:", products);

  if (!pharmacy) {
    return (
      <div className="px-6 lg:px-16 py-8 pb-20 min-h-[400px] flex items-center justify-center">
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Pharmacy not found</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <div className="px-6 lg:px-16 py-8 pb-20">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <img src={pharmacy.image} alt={pharmacy.name} className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{pharmacy.name}</h1>
              <p className="text-gray-500 flex items-center gap-2">
                📍 {pharmacy.location} • ⭐ {pharmacy.rating}
              </p>
              <p className="text-sm text-[#2563EB] font-medium">{pharmacy.availability}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Products</h2>
        </div>

        {products.length > 0 ? (
          <div className="relative group">
            <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md border border-gray-100 p-2 rounded-full z-10 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-30 flex">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {products.map((item) => (
                <Link
                  to={`/pharmacy/${pharmacySlug}/product/${item.id}`}
                  key={item.id}
                  className="min-w-[200px] w-[220px] bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col snap-start"
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
                        <span className="font-bold text-[#111827] text-lg">{formatPrice(item.discountedPrice)}</span>
                        <span className="text-xs text-gray-400 line-through">{formatPrice(item.originalPrice)}</span>
                        <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">-{item.discountPercentage}%</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "https://medicareapp.example.com";
                        }}
                        className="w-full bg-[#2563EB] text-white py-2 mt-3 rounded-md font-semibold text-sm hover:bg-blue-700 transition-colors"
                      >
                        Buy on App
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
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
            <p className="text-gray-600">No products available yet</p>
          </div>
        )}
      </div>
    </>
  );
}
