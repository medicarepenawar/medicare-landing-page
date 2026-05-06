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
        "absolute px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50",
        "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#DBEAFE] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-xs font-semibold text-[#111111] leading-tight">{title}</p>
          <p className="text-[11px] text-[#999999]">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};
