import { Menu } from "lucide-react";

export function NavBar() {
  const links = [
    { name: "Medicine", href: "#" },
    { name: "Health", href: "#" },
    { name: "Personal Care", href: "#" },
    { name: "Vitamins & Supplements", href: "#" },
    { name: "Mother & Child", href: "#" },
    { name: "Medical Devices", href: "#" },
    { name: "Promo", href: "#", isRed: true },
  ];

  return (
    <div className="bg-white border-b border-gray-200 hidden md:block">
      <div className="px-6 flex items-center gap-8">
        <button className="bg-[#2563EB] text-white px-4 py-3 flex items-center gap-2 font-medium hover:bg-blue-800 transition-colors min-w-[200px]">
          <Menu className="w-5 h-5" />
          Categories <span className="ml-auto text-xs">▼</span>
        </button>

        <nav className="flex flex-1 items-center gap-6 font-medium text-sm">
          {links.map((link) => (
            <a key={link.name} href={link.href} className={`${link.isRed ? 'text-red-500 font-bold hover:text-red-600' : 'text-gray-700 hover:text-[#2563EB]'} transition-colors`}>
              {link.name}
            </a>
          ))}
          <a href="#" className="text-gray-700 hover:text-[#2563EB] transition-colors relative flex items-center gap-1">
            Prescription
            <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full ml-1">New</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
