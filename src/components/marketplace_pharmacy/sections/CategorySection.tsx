import { MARKETPLACE_CATEGORIES } from "../../../constants/marketplaceDummyData";

export function CategorySection() {
  return (
    <div className="px-6 lg:px-16 py-8">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Shop by Category</h2>
        <a href="#" className="text-[#0b5f8c] font-semibold text-sm hover:underline flex items-center gap-1">
          View all Categories <span className="text-lg leading-none">→</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {MARKETPLACE_CATEGORIES.map((category) => (
          <div key={category.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center group">
            <div className="bg-[#f8fbff] w-full aspect-square rounded-xl mb-4 flex items-center justify-center p-4 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{category.name}</h3>
            <p className="text-xs text-gray-500 leading-tight">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
