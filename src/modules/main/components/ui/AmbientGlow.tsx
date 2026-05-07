import React from "react";
import { cn } from "../../utils/cn";

interface AmbientGlowProps {
  color?: string;
  size?: string;
  position?: string;
  className?: string;
}

export const AmbientGlow: React.FC<AmbientGlowProps> = ({
  color = "bg-blue-500/10",
  size = "w-[600px] h-[600px]",
  position = "top-0 left-1/2 -translate-x-1/2",
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[120px] pointer-events-none",
        color,
        size,
        position,
        className
      )}
      aria-hidden="true"
    />
  );
};
