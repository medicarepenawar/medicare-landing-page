import { Link } from "react-router-dom";
import { TopBar } from "../../components/marketplace_pharmacy/layout/TopBar";
import { Header } from "../../components/marketplace_pharmacy/layout/Header";
import { NavBar } from "../../components/marketplace_pharmacy/layout/NavBar";
import { MARKETPLACE_CART_ITEMS } from "../../constants/marketplaceDummyData";
import { MARKETPLACE_CART_URL, MARKETPLACE_URL } from "../../constants/constant";
import { ChevronRight, CheckCircle2, MapPin, CreditCard, Wallet } from "lucide-react";

export default function CheckoutPage() {
  const items = MARKETPLACE_CART_ITEMS;
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 5.00;
  const tax = subtotal * 0.05;
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
          <Link to={MARKETPLACE_CART_URL} className="hover:text-[#0b5f8c]">Cart</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="font-semibold text-gray-800">Checkout</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Form Details */}
          <div className="w-full lg:w-7/12 space-y-6">
            
            {/* Delivery Address */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <MapPin className="text-[#0b5f8c]" />
                <h2 className="text-xl font-bold text-gray-800">Delivery Address</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" defaultValue="Ahmad Firdaus" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-1 focus:ring-[#0b5f8c] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="text" defaultValue="+60 12-345 6789" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-1 focus:ring-[#0b5f8c] outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                  <input type="text" defaultValue="No 12, Jalan Ampang" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-1 focus:ring-[#0b5f8c] outline-none" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" defaultValue="Kuala Lumpur" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-1 focus:ring-[#0b5f8c] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" defaultValue="Wilayah Persekutuan" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-1 focus:ring-[#0b5f8c] outline-none" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                    <input type="text" defaultValue="50450" className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:ring-1 focus:ring-[#0b5f8c] outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <CreditCard className="text-[#0b5f8c]" />
                <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
              </div>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border-2 border-[#0b5f8c] rounded-lg bg-blue-50 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-[#0b5f8c] accent-[#0b5f8c]" />
                    <span className="font-semibold text-gray-800 flex items-center gap-2"><CreditCard className="w-5 h-5"/> Credit / Debit Card</span>
                  </div>
                  <CheckCircle2 className="text-[#0b5f8c] w-5 h-5" />
                </label>
                
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-4 h-4 accent-[#0b5f8c]" />
                    <span className="font-semibold text-gray-800 flex items-center gap-2"><Wallet className="w-5 h-5"/> E-Wallet (TNG / GrabPay)</span>
                  </div>
                </label>
                
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-4 h-4 accent-[#0b5f8c]" />
                    <span className="font-semibold text-gray-800">Online Banking (FPX)</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Review Order */}
          <div className="w-full lg:w-5/12 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 bg-gray-50 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Review Items ({items.length})</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between gap-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-gray-50 rounded border border-gray-100 p-1 flex-shrink-0">
                         <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-800 leading-tight">{item.name}</div>
                        <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-800 text-sm">
                      RM{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800">RM{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping Fee</span>
                  <span className="font-medium text-gray-800">RM{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax (5%)</span>
                  <span className="font-medium text-gray-800">RM{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-base font-bold text-gray-800">Total to Pay</span>
                  <span className="text-2xl font-black text-[#0b5f8c]">RM{total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => alert("Order Placed Successfully!")}
                className="w-full bg-[#0b5f8c] text-white py-4 rounded-md font-bold text-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-xl flex items-center justify-center gap-2"
              >
                 Place Order
              </button>
              
              <div className="text-center mt-4">
                 <p className="text-xs text-gray-500">By placing an order, you agree to our Terms and Privacy Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
