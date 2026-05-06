import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "emergency";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#111111] text-white hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/20 focus:ring-[#1D4ED8]",
    secondary:
      "bg-white text-[#111111] border border-[rgba(0,0,0,0.06)] hover:border-[rgba(0,0,0,0.15)] hover:shadow-md focus:ring-gray-300",
    ghost:
      "bg-transparent text-[#666666] hover:text-[#111111] hover:bg-black/5 focus:ring-gray-200",
    emergency:
      "bg-[#DC2626] text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 focus:ring-red-500",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
