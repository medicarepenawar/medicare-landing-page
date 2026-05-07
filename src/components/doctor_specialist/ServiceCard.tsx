import type { Service } from "../../types/doctor_specialist";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="group p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Info Layanan */}
      <div className="space-y-1">
        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h4>
        <p className="text-sm text-gray-500 max-w-lg">{service.description}</p>
        <span className="text-xs text-gray-400 flex items-center gap-1 pt-1">
          <span className="material-symbols-outlined text-sm">schedule</span>
          {service.duration}
        </span>
      </div>

      {/* Harga */}
      <div className="text-right flex-shrink-0">
        <p className="text-xl font-bold text-blue-600">{service.price}</p>
        <p className="text-xs text-gray-400">{service.priceLabel}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
