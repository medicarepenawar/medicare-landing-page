import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "../../utils/cn";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index = 0,
}) => {
  const IconComponent = (LucideIcons as Record<string, React.FC<{ className?: string }>>)[icon] || LucideIcons.Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "group relative p-8 rounded-[28px] bg-white border border-[rgba(0,0,0,0.04)]",
        "hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]",
        "transition-all duration-500 ease-out"
      )}
    >
      <div className="w-12 h-12 rounded-2xl bg-[#DBEAFE] flex items-center justify-center mb-6 group-hover:bg-[#1D4ED8] transition-colors duration-500">
        <IconComponent className="w-5 h-5 text-[#1D4ED8] group-hover:text-white transition-colors duration-500" />
      </div>

      <h3 className="text-lg font-semibold text-[#111111] tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#666666] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
