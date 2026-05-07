import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { cn } from "../../utils/cn";
import logoImg from "../../../../assets/img/home/logo.png";

const navLinks = [
  { label: "Directory", href: "/directory" },
  { label: "Doctors", href: "/register/doctor" },
  { label: "Vendors", href: "/register/vendor" },
  { label: "Nurses", href: "/register/nurse" },
];

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-[rgba(0,0,0,0.04)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={logoImg}
                alt="Medicare"
                className="h-9 w-auto object-contain"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-300",
                      isActive
                        ? "bg-[#111111] text-white"
                        : "text-[#666666] hover:text-[#111111] hover:bg-black/[0.03]"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                className="p-2.5 rounded-full text-[#666666] hover:text-[#111111] hover:bg-black/[0.03] transition-all duration-300"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                className="p-2.5 rounded-full text-[#666666] hover:text-[#111111] hover:bg-black/[0.03] transition-all duration-300"
                aria-label="Profile"
              >
                <User className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => navigate("/register")}
                className="ml-2 px-6 py-2.5 rounded-full bg-[#111111] text-white text-[13px] font-medium hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-full text-[#666666] hover:bg-black/[0.03] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          mobileOpen ? "visible" : "invisible"
        )}
      >
        {/* Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-full max-w-sm h-full bg-white/95 backdrop-blur-2xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "px-5 py-3.5 rounded-2xl text-base font-medium transition-all duration-300",
                      isActive
                        ? "bg-[#111111] text-white"
                        : "text-[#666666] hover:text-[#111111] hover:bg-black/[0.03]"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <hr className="border-[rgba(0,0,0,0.06)]" />
              <button
                onClick={() => navigate("/register")}
                className="w-full py-3.5 rounded-2xl bg-[#111111] text-white text-sm font-medium hover:bg-[#1D4ED8] transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
