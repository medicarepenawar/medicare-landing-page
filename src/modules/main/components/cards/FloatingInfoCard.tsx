import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface FloatingInfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
  delay?: number;
}

export const FloatingInfoCard: React.FC<FloatingInfoCardProps> = ({
  icon,
  title,
  subtitle,
  className,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5 + delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={cn(
        "absolute px-4 py-3 rounded-xl bg-white/90 backdrop-blur-xl border border-white/50",
        "shadow-lg shadow-[#2563EB]/10",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-900 leading-tight">{title}</p>
          <p className="text-[11px] text-gray-400">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};
