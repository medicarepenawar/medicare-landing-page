import {
  FileText,
  Pill,
  ShieldAlert,
  Leaf,
  Sparkles,
  HeartHandshake,
  Baby,
  Activity,
  Heart,
  User,
  Users,
  Grid
} from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "cat-1",
    name: "Prescription",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50/80 hover:bg-blue-100/80",
  },
  {
    id: "cat-2",
    name: "Pain Relief",
    icon: Pill,
    color: "text-sky-600",
    bgColor: "bg-sky-50/80 hover:bg-sky-100/80",
  },
  {
    id: "cat-3",
    name: "Vitamins",
    icon: ShieldAlert,
    color: "text-amber-600",
    bgColor: "bg-amber-50/80 hover:bg-amber-100/80",
  },
  {
    id: "cat-4",
    name: "Supplements",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50/80 hover:bg-emerald-100/80",
  },
  {
    id: "cat-5",
    name: "Skin Care",
    icon: Sparkles,
    color: "text-pink-600",
    bgColor: "bg-pink-50/80 hover:bg-pink-100/80",
  },
  {
    id: "cat-6",
    name: "Personal Care",
    icon: HeartHandshake,
    color: "text-teal-600",
    bgColor: "bg-teal-50/80 hover:bg-teal-100/80",
  },
  {
    id: "cat-7",
    name: "Mother & Child",
    icon: Baby,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50/80 hover:bg-indigo-100/80",
  },
  {
    id: "cat-8",
    name: "Medical Devices",
    icon: Activity,
    color: "text-red-600",
    bgColor: "bg-red-50/80 hover:bg-red-100/80",
  },
  {
    id: "cat-9",
    name: "Health Care",
    icon: Heart,
    color: "text-rose-600",
    bgColor: "bg-rose-50/80 hover:bg-rose-100/80",
  },
  {
    id: "cat-10",
    name: "Men's Health",
    icon: User,
    color: "text-blue-700",
    bgColor: "bg-blue-50/80 hover:bg-blue-100/80",
  },
  {
    id: "cat-11",
    name: "Women's Health",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50/80 hover:bg-purple-100/80",
  },
  {
    id: "cat-12",
    name: "View All",
    icon: Grid,
    color: "text-gray-600",
    bgColor: "bg-gray-50/80 hover:bg-gray-100/80",
  },
];

export function CategorySection() {
  const handleCategoryClick = (categoryName: string) => {
    console.log("Clicked Category:", categoryName);
    // Add filtering logic or route redirection if needed in the future
  };

  return (
    <div className="px-6 lg:px-16 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">Shop by Category</h2>
      </div>

      {/* Grid of Categories matching design reference */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 justify-center items-start">
        {CATEGORIES_DATA.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.name)}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circle Backdrop */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${cat.bgColor} border border-gray-100/50 shadow-sm group-hover:scale-105 active:scale-95`}
              >
                <IconComponent className={`w-6 h-6 ${cat.color} transition-transform duration-300`} />
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
