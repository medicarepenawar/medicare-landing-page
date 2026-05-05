import { Menu } from "lucide-react";

export function NavBar() {
  const links = [
    { name: "Medicines", href: "#" },
    { name: "Health Care", href: "#" },
    { name: "Personal Care", href: "#" },
    { name: "Wellness", href: "#" },
    { name: "Baby Care", href: "#" },
    { name: "Elderly Care", href: "#" },
    { name: "Offers", href: "#" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 hidden md:block">
      <div className="px-6 flex items-center gap-8">
        <button className="bg-[#0b5f8c] text-white px-4 py-3 flex items-center gap-2 font-medium hover:bg-blue-800 transition-colors min-w-[200px]">
          <Menu className="w-5 h-5" />
          Shop by Category <span className="ml-auto text-xs">▼</span>
        </button>

        <nav className="flex flex-1 items-center gap-6 text-gray-700 font-medium text-sm">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#0b5f8c] transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#" className="hover:text-[#0b5f8c] transition-colors relative flex items-center gap-1">
            Prescriptions
            <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm">New</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
