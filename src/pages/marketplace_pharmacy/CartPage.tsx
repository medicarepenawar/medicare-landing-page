import { Link, useNavigate } from "react-router-dom";
import { TopBar } from "../../components/marketplace_pharmacy/layout/TopBar";
import { Header } from "../../components/marketplace_pharmacy/layout/Header";
import { NavBar } from "../../components/marketplace_pharmacy/layout/NavBar";
import { MARKETPLACE_CART_ITEMS } from "../../constants/marketplaceDummyData";
import { MARKETPLACE_CHECKOUT_URL, MARKETPLACE_URL } from "../../constants/constant";
import { ChevronRight, Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const navigate = useNavigate();
  const items = MARKETPLACE_CART_ITEMS;

  const handleCheckout = () => {
    navigate(MARKETPLACE_CHECKOUT_URL);
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 5.00;
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 font-sans 2xl:max-w-[1440px] 2xl:mx-auto 2xl:border-x border-gray-100 2xl:shadow-sm">
      <TopBar />
      <Header />
      <NavBar />
      
      <main className="px-6 lg:px-16 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 pt-2">
          <Link to={MARKETPLACE_URL} className="hover:text-[#0b5f8c]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">Shopping Cart</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items List */}
          <div className="w-full lg:w-8/12 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 font-semibold text-gray-600 text-sm">
              <div className="col-span-6">Product Details</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2 text-center">Action</div>
            </div>

            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center">
                <div className="col-span-1 md:col-span-6 flex gap-4 items-center">
                  <div className="w-20 h-20 bg-[#f8fbff] rounded-lg border border-gray-100 flex items-center justify-center p-2 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">{item.variant}</p>
                    <p className="text-sm font-semibold text-[#1a2f44] md:hidden">RM{item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                  <div className="flex items-center border border-gray-200 rounded-md bg-white">
                    <button className="p-1 px-2 hover:bg-gray-50 text-gray-400 transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-8 text-center font-bold text-sm">{item.quantity}</div>
                    <button className="p-1 px-2 hover:bg-gray-50 text-gray-400 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="hidden md:block col-span-2 text-right font-bold text-[#1a2f44]">
                  RM{(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="col-span-1 md:col-span-2 flex justify-end md:justify-center">
                  <button className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-4/12 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.length} items)</span>
                <span className="font-medium text-gray-800">RM{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping Fee</span>
                <span className="font-medium text-gray-800">RM{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 border-b border-gray-100 pb-4">
                <span>SST (5%)</span>
                <span className="font-medium text-gray-800">RM{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-2xl font-black text-[#0b5f8c]">RM{total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-[#2ebc78] text-white py-4 rounded-md font-bold text-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
            >
              Proceed to Checkout
            </button>
            <div className="mt-4 text-center">
              <Link to={MARKETPLACE_URL} className="text-[#0b5f8c] font-medium text-sm hover:underline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
