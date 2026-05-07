import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { TestimonialItem } from "../../types";
import { cn } from "../../utils/cn";

interface TestimonialCardProps {
  item: TestimonialItem;
  index?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  item,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "group relative p-8 rounded-2xl",
        "bg-white/70 backdrop-blur-xl border border-gray-100/50",
        "shadow-sm",
        "hover:shadow-xl hover:shadow-[#2563EB]/10",
        "hover:-translate-y-1 transition-all duration-500 ease-out"
      )}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 text-amber-400 fill-amber-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
        "{item.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/10 flex items-center justify-center">
          <span className="text-sm font-semibold text-[#2563EB]">
            {item.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.name}</p>
          <p className="text-xs text-gray-400">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
};
