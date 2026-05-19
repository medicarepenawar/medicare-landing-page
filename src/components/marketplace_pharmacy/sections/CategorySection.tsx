import { useProductCategories } from "../../../hooks/useMarketplace";

export function CategorySection() {
  const categories = useProductCategories();

  return (
    <div className="px-6 lg:px-16 py-8">
      <div className="flex justify-between items-end mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-2xl font-bold text-gray-800">Belanja per Kategori</h2>
        <a href="#" className="text-[#2563EB] font-semibold text-sm hover:underline flex items-center gap-1">
          Lihat Semua Kategori <span className="text-lg leading-none">→</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, idx) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center group animate-card-entry opacity-0"
            style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
          >
            <div className="bg-[#F8FAFC] w-full aspect-square rounded-xl mb-4 flex items-center justify-center p-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
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
