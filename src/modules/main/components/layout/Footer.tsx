import React from "react";
import { Container } from "./Container";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Find Doctors", href: "#" },
      { label: "Home Nursing", href: "#" },
      { label: "Pharmacy", href: "#" },
      { label: "Lab Tests", href: "#" },
      { label: "Physiotherapy", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "/contact" },
      { label: "Community", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/policy" },
      { label: "Terms of Service", href: "/terms/doctor" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAF8] border-t border-[rgba(0,0,0,0.04)]">
      <Container>
        {/* Main Footer */}
        <div className="py-20 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
              <h3 className="text-xl font-semibold text-[#111111] tracking-tight">
                Medicare
              </h3>
              <p className="mt-4 text-sm text-[#666666] leading-relaxed max-w-xs">
                A premium healthcare ecosystem connecting patients with trusted
                professionals, clinics, and emergency services.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs text-[#999999] hover:text-[#111111] transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold text-[#111111] tracking-[0.15em] uppercase mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#666666] hover:text-[#111111] transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[rgba(0,0,0,0.04)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#999999]">
            © {new Date().getFullYear()} Medicare. All rights reserved.
          </p>
          <p className="text-xs text-[#999999]">
            Designed with care for a healthier tomorrow.
          </p>
        </div>
      </Container>
    </footer>
  );
};
