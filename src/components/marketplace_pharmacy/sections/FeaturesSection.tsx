import { ShieldCheck, BadgeCheck, Tags, HeadphonesIcon } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      title: "Apotek Terpercaya",
      subtitle: "Izin resmi & terpercaya"
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-red-500" />,
      title: "Produk 100% Original",
      subtitle: "Asli, aman, dan berkualitas"
    },
    {
      icon: <Tags className="w-8 h-8 text-red-500" />,
      title: "Harga Kompetitif",
      subtitle: "Terjangkau setiap hari"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-red-500" />,
      title: "Layanan Pelanggan 24/7",
      subtitle: "Siap membantu kapan saja"
    }
  ];

  return (
    <div className="px-6 lg:px-16 py-12 bg-gray-50 border-t border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-8">Kenapa Belanja di Medicare?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-red-50">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-tight">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
