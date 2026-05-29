import { Phone, Mail, Clock, MapPin, Check } from "lucide-react";
import doctorAvatar from "../../../assets/img/main/doctor.png";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] pt-16 pb-8 px-6 lg:px-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-16 mb-12 flex-wrap">
        
        {/* Column 1: Why Choose Medicare Pharmacy? with Profile Avatar */}
        <div className="max-w-sm w-full md:w-auto space-y-4">
          <h4 className="font-extrabold text-gray-900 text-sm tracking-wider uppercase">
            Why Choose MediCare Pharmacy?
          </h4>
          <div className="flex gap-4 items-start">
            {/* Checklist */}
            <ul className="space-y-2 text-xs font-semibold text-gray-600 flex-1">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Licensed & Registered Pharmacy</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Wide Range of Products</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Best Prices Guaranteed</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Trusted by Thousands</span>
              </li>
            </ul>

            {/* Doctor Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border border-gray-200/50 flex-shrink-0 shadow-sm">
              <img
                src={doctorAvatar}
                alt="Medicare Pharmacist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="w-full md:w-auto space-y-4">
          <h4 className="font-extrabold text-gray-900 text-sm tracking-wider uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs font-bold text-gray-500">
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">How to Order</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>


        {/* Column 4: Contact Us */}
        <div className="w-full md:w-auto space-y-4">
          <h4 className="font-extrabold text-gray-900 text-sm tracking-wider uppercase">
            Contact Us
          </h4>
          <ul className="space-y-3 text-xs font-bold text-gray-500">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>+60 123-456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span className="break-all">support@medicarepharmacy.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>Kuala Lumpur, Malaysia</span>
            </li>
          </ul>
        </div>

        

      </div>

      {/* Copyright Strip */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-xs font-bold text-gray-400">
          © 2026 Medicare. All rights reserved.
        </p>
        <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="font-extrabold text-xs text-blue-900 italic">VISA</span>
          <span className="font-extrabold text-xs text-red-600">MasterCard</span>
          <span className="font-extrabold text-xs text-blue-700">Maybank</span>
          <span className="font-extrabold text-xs text-cyan-600">TNG</span>
          <span className="font-extrabold text-xs text-emerald-600">GrabPay</span>
        </div>
      </div>
    </footer>
  );
}
