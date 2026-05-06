import React from "react";
import { Search } from "lucide-react";
import { cn } from "../../utils/cn";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search professionals, clinics, pharmacy...",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center w-full max-w-xl",
        className
      )}
    >
      <div className="relative w-full">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
        <input
          type="text"
          placeholder={placeholder}
          className="w-full pl-14 pr-6 py-4 bg-white border border-[rgba(0,0,0,0.06)] rounded-full text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#1D4ED8]/30 focus:shadow-[0_0_0_4px_rgba(29,78,216,0.08)] transition-all duration-300"
        />
      </div>
    </div>
  );
};
