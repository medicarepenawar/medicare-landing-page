import { ShieldCheck, BadgeCheck, Tags, HeadphonesIcon } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      title: "Trusted Pharmacy",
      subtitle: "Licensed & officially registered"
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-red-500" />,
      title: "100% Original Products",
      subtitle: "Authentic, safe, and quality assured"
    },
    {
      icon: <Tags className="w-8 h-8 text-red-500" />,
      title: "Competitive Pricing",
      subtitle: "Affordable prices every day"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-red-500" />,
      title: "24/7 Customer Service",
      subtitle: "Ready to help anytime"
    }
  ];

  return (
    <div className="px-6 lg:px-16 py-12 bg-gray-50 border-t border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>Why Shop at Medicare?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex gap-4 items-start animate-slide-in opacity-0 group cursor-pointer"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <div className="bg-white p-3 rounded-xl shadow-sm border border-red-50 group-hover:-translate-y-1 transition-transform">
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
