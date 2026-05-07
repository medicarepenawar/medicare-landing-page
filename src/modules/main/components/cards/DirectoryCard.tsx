import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Badge } from "../ui/Badge";
import { cn } from "../../utils/cn";
import type { DirectoryItem } from "../../types";

interface DirectoryCardProps {
  item: DirectoryItem;
  index?: number;
}

export const DirectoryCard: React.FC<DirectoryCardProps> = ({ item, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative"
    >
      <div
        className={cn(
          "relative bg-white rounded-[32px] overflow-hidden border border-[rgba(0,0,0,0.04)]",
          "shadow-[0_4px_24px_rgba(0,0,0,0.03)]",
          "hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
          "transition-all duration-700 ease-out",
          "hover:-translate-y-2"
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Badge */}
          {item.badge && (
            <div className="absolute top-5 left-5">
              <Badge
                variant={item.badge === "Premium" ? "premium" : item.badge === "Top Rated" ? "default" : "success"}
              >
                {item.badge}
              </Badge>
            </div>
          )}

          {/* Availability */}
          <div className="absolute bottom-5 left-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-medium text-[#111111]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {item.availability}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold text-[#111111] tracking-tight">
                {item.name}
              </h3>
              <p className="text-sm text-[#666666] mt-0.5">
                {item.specialty || item.role}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-sm font-medium text-[#111111]">{item.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[#999999]">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs">{item.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
