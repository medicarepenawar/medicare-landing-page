import React from "react";
import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "premium" | "emergency";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const variants = {
    default: "bg-[#2563EB]/10 text-[#2563EB]",
    success: "bg-emerald-50 text-emerald-700",
    premium: "bg-amber-50 text-amber-700",
    emergency: "bg-[#EF4444]/10 text-[#EF4444]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
