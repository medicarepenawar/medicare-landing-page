import { MARKETPLACE_BENEFITS } from "../../../constants/marketplaceDummyData";
import { FileText, UserPlus, Truck, RefreshCcw } from "lucide-react";

export function BenefitsStrip() {
  const getIcon = (id: number) => {
    switch(id) {
      case 1: return <FileText className="w-6 h-6 text-[#0b5f8c]" />;
      case 2: return <UserPlus className="w-6 h-6 text-[#0b5f8c]" />;
      case 3: return <Truck className="w-6 h-6 text-[#0b5f8c]" />;
      case 4: return <RefreshCcw className="w-6 h-6 text-[#0b5f8c]" />;
      default: return <FileText className="w-6 h-6 text-[#0b5f8c]" />;
    }
  };

  return (
    <div className="relative -mt-8 z-20 px-6 lg:px-16 mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 flex flex-wrap lg:flex-nowrap justify-between gap-6">
        {MARKETPLACE_BENEFITS.map((benefit, idx) => (
          <div key={benefit.id} className={`flex items-center gap-4 flex-1 ${idx !== MARKETPLACE_BENEFITS.length - 1 ? 'border-r border-gray-100' : ''}`}>
            <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
              {getIcon(benefit.id)}
            </div>
            <div>
              <div className="font-bold text-gray-800 text-sm">{benefit.title}</div>
              <div className="text-xs text-gray-500">{benefit.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
