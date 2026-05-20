import { HelpCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#F3F4F6] text-sm py-2 px-6 flex justify-between items-center text-gray-700 hidden md:flex">
      <div className="flex items-center gap-2"></div>
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 hover:text-[#1D4ED8] transition-colors">
          <HelpCircle className="w-4 h-4" /> Help
        </a>
      </div>
    </div>
  );
}
