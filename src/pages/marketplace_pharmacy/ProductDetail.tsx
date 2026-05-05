import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TopBar } from "../../components/marketplace_pharmacy/layout/TopBar";
import { Header } from "../../components/marketplace_pharmacy/layout/Header";
import { NavBar } from "../../components/marketplace_pharmacy/layout/NavBar";
import { MARKETPLACE_PRODUCT_DETAIL } from "../../constants/marketplaceDummyData";
import { MARKETPLACE_CART_URL, MARKETPLACE_URL } from "../../constants/constant";
import { ChevronRight, Minus, Plus, ShoppingCart } from "lucide-react";

export default function ProductDetail() {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const product = MARKETPLACE_PRODUCT_DETAIL;

  const handleAddToCart = () => {
    navigate(MARKETPLACE_CART_URL);
  };

  return (
    <div className="min-h-screen bg-white font-sans 2xl:max-w-[1440px] 2xl:mx-auto 2xl:border-x border-gray-100 2xl:shadow-sm">
      <TopBar />
      <Header />
      <NavBar />
      
      <main className="px-6 lg:px-16 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 pt-2">
          <Link autoFocus to={MARKETPLACE_URL} className="hover:text-[#0b5f8c]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-[#0b5f8c] cursor-pointer">Medicines</span>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Image Section */}
          <div className="md:w-5/12 flex-shrink-0">
            <div className="bg-[#f8fbff] rounded-2xl p-8 border border-gray-100 aspect-square flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-md mix-blend-multiply" />
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-7/12 flex flex-col pt-2">
            <div className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-sm w-max mb-3">In Stock: {product.stock} units</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-500 font-medium mb-6">{product.variant} • By {product.manufacturer}</p>
            
            <div className="flex items-end gap-4 mb-6 pb-6 border-b border-gray-100">
              <div className="text-4xl font-black text-[#1a2f44]">RM{product.discountedPrice}</div>
              <div className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-sm mb-1">{product.discountBadge}</div>
              <div className="text-gray-400 line-through text-lg font-medium mb-1 pl-2">RM{product.originalPrice}</div>
            </div>

            <h3 className="font-bold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-600 mb-6 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {product.description}
            </p>

            <h3 className="font-bold text-gray-800 mb-3">Highlights</h3>
            <ul className="list-disc pl-5 mb-8 text-gray-600 space-y-1">
              {product.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>

            <div className="flex items-center gap-6 mt-auto">
              {/* Qty Counter */}
              <div className="flex items-center border border-gray-200 rounded-md">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="p-3 hover:bg-gray-50 text-gray-600 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="w-12 text-center font-bold text-lg text-gray-800">{qty}</div>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="p-3 hover:bg-gray-50 text-[#0b5f8c] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#0b5f8c] text-white py-4 rounded-md font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
