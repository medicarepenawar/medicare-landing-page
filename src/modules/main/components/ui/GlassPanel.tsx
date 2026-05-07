import React from "react";
import { cn } from "../../utils/cn";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className,
  padding = "p-6",
}) => {
  return (
    <div
      className={cn(
        "bg-white/70 backdrop-blur-xl border border-white/20 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
        padding,
        className
      )}
    >
      {children}
    </div>
  );
};
