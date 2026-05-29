import { ShieldCheck, CreditCard, RotateCcw, Headphones, Truck } from "lucide-react";

interface TrustAssurance {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  color: string;
}

const TRUST_ASSURANCES_DATA: TrustAssurance[] = [
  {
    id: 1,
    title: "Genuine Products",
    subtitle: "100% authentic medicines from trusted brands",
    icon: ShieldCheck,
    color: "text-blue-600 bg-blue-50/80 border-blue-100",
  },
  {
    id: 2,
    title: "Secure Payments",
    subtitle: "Multiple payment options with secure checkout",
    icon: CreditCard,
    color: "text-blue-600 bg-blue-50/80 border-blue-100",
  },
  {
    id: 3,
    title: "Easy Returns",
    subtitle: "Hassle-free returns within 7 days",
    icon: RotateCcw,
    color: "text-blue-600 bg-blue-50/80 border-blue-100",
  },
  {
    id: 4,
    title: "Pharmacist Support",
    subtitle: "Get expert advice 24/7",
    icon: Headphones,
    color: "text-blue-600 bg-blue-50/80 border-blue-100",
  },
  {
    id: 5,
    title: "Fast & Reliable Delivery",
    subtitle: "Quick delivery to your doorstep",
    icon: Truck,
    color: "text-blue-600 bg-blue-50/80 border-blue-100",
  },
];

export function BenefitsStrip() {
  return (
    <div className="px-6 lg:px-16 py-8 pb-12 max-w-7xl mx-auto w-full">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-8">
        {TRUST_ASSURANCES_DATA.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`flex items-start gap-4 flex-1 ${
                idx !== TRUST_ASSURANCES_DATA.length - 1 ? "lg:border-r lg:border-gray-100/80 pr-4" : ""
              }`}
            >
              <div className={`p-3 rounded-xl border flex-shrink-0 ${item.color} shadow-sm`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-gray-800 text-sm leading-tight">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
