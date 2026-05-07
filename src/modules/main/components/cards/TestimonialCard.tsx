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
        "group relative p-8 rounded-[28px]",
        "bg-white/70 backdrop-blur-xl border border-[rgba(0,0,0,0.04)]",
        "shadow-[0_4px_24px_rgba(0,0,0,0.03)]",
        "hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]",
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
      <p className="text-[15px] text-[#444444] leading-relaxed mb-8">
        "{item.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#1D4ED8]/20 flex items-center justify-center">
          <span className="text-sm font-semibold text-[#1D4ED8]">
            {item.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#111111]">{item.name}</p>
          <p className="text-xs text-[#999999]">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
};
