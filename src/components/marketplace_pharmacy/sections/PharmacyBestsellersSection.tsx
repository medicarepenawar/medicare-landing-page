import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, MapPin, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePharmacyProducts } from "../../../hooks/useMarketplace";
import { fetchAllPharmacies } from "../../../services/pharmacyService";
import { marketplaceService } from "../../../services/marketplaceService";

interface PharmacyBestsellersSectionProps {
  pharmacySlug: string;
}

export function PharmacyBestsellersSection({ pharmacySlug }: PharmacyBestsellersSectionProps) {
  const [pharmacy, setPharmacy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const products = usePharmacyProducts(pharmacy?.id || "");

  useEffect(() => {
    setLoading(true);
    fetchAllPharmacies()
      .then((apiPharmacies) => {
        const found = apiPharmacies.find((p) => p.slug === pharmacySlug);
        if (found) {
          setPharmacy({
            id: found.id.toString(),
            name: found.name,
            location: found.address ? `${found.address.city}, ${found.address.state}` : "Malaysia",
            rating: 4.8,
            availability: found.is_available ? "Open 24 Hours" : "Temporarily Closed",
            image: (found.photo && found.photo[0]) || "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=400",
          });
        } else {
          // Fallback to local mockup pharmacy
          const localPharmacy = marketplaceService.getPharmacyBySlug(pharmacySlug);
          if (localPharmacy) {
            setPharmacy(localPharmacy);
          }
        }
      })
      .catch((err) => {
        console.error("Failed to load pharmacy details:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pharmacySlug]);

  const formatPrice = (price: number) => {
    return `RM${price.toFixed(2)}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "/pharmacy/mukminpharmacy/cart";
  };

  if (loading) {
    return (
      <div className="px-6 lg:px-16 py-8 pb-20 min-h-[400px] flex items-center justify-center">
        <div className="text-center py-12 flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#2563EB] animate-spin" />
          <p className="text-gray-500 font-medium text-sm">Loading pharmacy details...</p>
        </div>
      </div>
    );
  }

  if (!pharmacy) {
    return (
      <div className="px-6 lg:px-16 py-8 pb-20 min-h-[400px] flex items-center justify-center">
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg font-medium">Pharmacy not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 lg:px-16 py-10 pb-16 max-w-7xl mx-auto">
      {/* Pharmacy Header Banner */}
      <div className="mb-10 bg-gradient-to-r from-blue-50/50 via-white to-blue-50/20 p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src={pharmacy.image}
            alt={pharmacy.name}
            className="w-16 h-16 rounded-xl object-cover border border-gray-100 shadow-sm"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{pharmacy.name}</h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gray-400" />
                {pharmacy.location}
              </span>

            </div>
          </div>
        </div>

        <div className="text-left md:text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
            {pharmacy.availability}
          </span>
          <p className="text-xs text-gray-400 mt-1.5 font-medium">Open 24 Hours • Licensed Pharmacist on Duty</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">Our Products</h2>
      </div>

      {products.length > 0 ? (
        <div className="relative group">
          {/* Navigation Left */}
          <button className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-100 p-2.5 rounded-full z-10 hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity flex">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Products List */}
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {products.map((item) => (
              <Link
                to={`/pharmacy/${pharmacySlug}/product/${item.id}`}
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
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 font-medium">No products listed for this pharmacy yet.</p>
        </div>
      )}
    </div>
  );
}
