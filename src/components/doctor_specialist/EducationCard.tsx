import type { Education } from "../../types/doctor_specialist";

const EducationCard = ({ data }: { data: Education[] }) => {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-blue-600">school</span>
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => (
          // Gunakan index sebagai key hanya jika data tidak punya ID unik
          <div key={index} className="relative pl-6">
            {/* Garis vertikal timeline */}
            {index < data.length - 1 && (
              <div className="absolute left-[3px] top-4 bottom-[-16px] w-0.5 bg-blue-100" />
            )}
            {/* Titik bulat di timeline */}
            <div
              className={`absolute left-[-2px] top-1.5 w-3 h-3 rounded-full border-2 ${
                item.isLatest
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white border-gray-300"
              }`}
            />
            <span
              className={`text-sm font-bold ${
                item.isLatest ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {item.degree} ({item.year})
            </span>
            <p className="text-sm font-semibold text-gray-800">
              {item.university}
            </p>
            <p className="text-xs text-gray-400">{item.major}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationCard;
