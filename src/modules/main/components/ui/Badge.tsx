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
    default: "bg-[#DBEAFE] text-[#1D4ED8]",
    success: "bg-emerald-50 text-emerald-700",
    premium: "bg-amber-50 text-amber-700",
    emergency: "bg-red-50 text-[#DC2626]",
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
