import { ShieldCheck, HelpCircle, Truck, MapPin } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#E7F6F5] text-sm py-2 px-6 flex justify-between items-center text-gray-700 hidden md:flex">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        <span className="font-medium text-green-700">Trusted by 1M+ Customers</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 hover:text-[#0C6A9E] transition-colors"><HelpCircle className="w-4 h-4" /> Help & Support</a>
        <a href="#" className="flex items-center gap-2 hover:text-[#0C6A9E] transition-colors"><Truck className="w-4 h-4" /> Track Order</a>
        <a href="#" className="flex items-center gap-2 hover:text-[#0C6A9E] transition-colors"><MapPin className="w-4 h-4" /> Store Locator</a>
      </div>
    </div>
  );
}
