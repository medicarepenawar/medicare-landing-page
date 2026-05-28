import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import type { DirectoryItem } from "../../types";

interface DirectoryCardProps {
  item: DirectoryItem;
  index?: number;
}

export const DirectoryCard: React.FC<DirectoryCardProps> = ({ item, index = 0 }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    if (item.role === "Nurse" && item.slug) {
      navigate(`/nurse/${item.slug}`);
    } else if (item.role === "Doctor" && item.slug) {
      navigate(`/doctor-specialist/${item.slug}`);
    } else if (item.role === "Vendor" && item.slug) {
      navigate(`/marketplace/pharmacy/${item.slug}`);
    } else if (item.role === "Clinic" && item.slug) {
      navigate(`/clinic/${item.slug}`);
    } else if (item.role === "Lab" && item.slug) {
      navigate(`/lab/${item.slug}`);
    } else if (item.role === "Therapist" && item.slug) {
      navigate(`/therapist/${item.slug}`);
    } else if (item.role === "Ambulance" && item.slug) {
      navigate(`/ambulance/${item.slug}`);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative"
    >
      {/* Decorative glow layer for depth */}
      <div
        className={cn(
          "absolute -inset-px rounded-2xl bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#EF4444]/10",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
          "blur-xl scale-95",
        )}
      />

      <div
        className={cn(
          "relative bg-white rounded-2xl overflow-hidden border border-gray-100",
          "hover:border-[#2563EB]/20",
          "shadow-sm hover:shadow-lg hover:shadow-[#2563EB]/8",
          "transition-all duration-500 ease-out",
          "hover:-translate-y-1",
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Minimal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Badge */}
          {item.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span
                className={cn(
                  "inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold tracking-wide uppercase backdrop-blur-md",
                  item.badge === "Premium"
                    ? "bg-amber-500/90 text-white"
                    : item.badge === "Top Rated"
                      ? "bg-[#2563EB]/90 text-white"
                      : item.badge === "Specialist"
                        ? "bg-purple-500/90 text-white"
                        : "bg-emerald-500/90 text-white",
                )}
              >
                {item.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 pt-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div>
              <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight leading-snug">{item.name}</h3>
              {item.specialty && <p className="text-[13px] text-[#2563EB] font-medium mt-0.5">{item.specialty}</p>}
            </div>

            {/* Meta row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-gray-400">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[12px]">{item.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-[13px] font-semibold text-gray-900">{item.rating}</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-4 pt-3 border-t border-gray-50">
            <button
              onClick={handleViewProfile}
              className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-[13px] font-medium text-gray-500 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
            >
              View Profile
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
