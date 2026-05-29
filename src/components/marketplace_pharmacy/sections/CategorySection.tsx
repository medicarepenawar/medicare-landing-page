import { useProductCategories } from "../../../hooks/useMarketplace";
import {
  Pill,
  ShieldCheck,
  Sparkles,
  Activity,
  Heart,
  Baby,
  FileText,
  Grid
} from "lucide-react";

// Helper to resolve icon dynamically based on category name
const getCategoryIcon = (categoryName: string) => {
  const name = categoryName.toLowerCase();
  if (name.includes("medicine") || name.includes("obat")) {
    return {
      icon: Pill,
      color: "text-sky-600",
      bgColor: "bg-sky-50 hover:bg-sky-100/80 border-sky-100",
    };
  }
  if (name.includes("vitamin") || name.includes("supplement") || name.includes("suplemen")) {
    return {
      icon: ShieldCheck,
      color: "text-amber-600",
      bgColor: "bg-amber-50 hover:bg-amber-100/80 border-amber-100",
    };
  }
  if (name.includes("personal") || name.includes("diri") || name.includes("skin") || name.includes("perawatan")) {
    return {
      icon: Sparkles,
      color: "text-pink-600",
      bgColor: "bg-pink-50 hover:bg-pink-100/80 border-pink-100",
    };
  }
  if (name.includes("device") || name.includes("alat") || name.includes("medical")) {
    return {
      icon: Activity,
      color: "text-red-600",
      bgColor: "bg-red-50 hover:bg-red-100/80 border-red-100",
    };
  }
  if (name.includes("mother") || name.includes("anak") || name.includes("baby") || name.includes("ibu")) {
    return {
      icon: Baby,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100/80 border-indigo-100",
    };
  }
  if (name.includes("health") || name.includes("kesehatan")) {
    return {
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-50 hover:bg-rose-100/80 border-rose-100",
    };
  }
  if (name.includes("prescription") || name.includes("resep")) {
    return {
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100/80 border-blue-100",
    };
  }
  
  // Default fallback
  return {
    icon: Grid,
    color: "text-gray-600",
    bgColor: "bg-gray-50 hover:bg-gray-100/80 border-gray-100",
  };
};

export function CategorySection() {
  const categories = useProductCategories();

  // If no categories loaded from API, remove the section completely
  if (!categories || categories.length === 0) {
    return null;
  }

  const handleCategoryClick = (categoryName: string) => {
    console.log("Clicked Dynamic Category:", categoryName);
    // Add filtering redirection in the future
  };

  return (
    <div className="px-6 lg:px-16 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">Shop by Category</h2>
      </div>

      {/* Dynamic Grid of Categories loaded from API data */}
      <div className="flex flex-wrap gap-8 justify-start items-start">
        {categories.map((cat) => {
          const config = getCategoryIcon(cat.name);
          const IconComponent = config.icon;
          return (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.name)}
              className="flex flex-col items-center text-center group cursor-pointer w-20 sm:w-24"
            >
              {/* Circle Backdrop */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${config.bgColor} border shadow-sm group-hover:scale-105 active:scale-95`}
              >
                <IconComponent className={`w-6 h-6 ${config.color} transition-transform duration-300`} />
              </div>

              {/* Title */}
              <span className="text-[12px] font-bold text-gray-700 mt-3 group-hover:text-[#2563EB] transition-colors leading-tight line-clamp-2">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
