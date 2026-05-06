import { ShieldCheck, HelpCircle, Truck, MapPin } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#F3F4F6] text-sm py-2 px-6 flex justify-between items-center text-gray-700 hidden md:flex">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        <span className="font-medium text-green-700">Gratis ongkir untuk pembelian di atas Rp250.000</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 hover:text-[#1D4ED8] transition-colors"><HelpCircle className="w-4 h-4" /> Bantuan</a>
        <a href="#" className="flex items-center gap-2 hover:text-[#1D4ED8] transition-colors"><Truck className="w-4 h-4" /> Lacak Pesanan</a>
        <a href="#" className="flex items-center gap-2 hover:text-[#1D4ED8] transition-colors"><MapPin className="w-4 h-4" /> Temukan Apotek</a>
      </div>
    </div>
  );
}
