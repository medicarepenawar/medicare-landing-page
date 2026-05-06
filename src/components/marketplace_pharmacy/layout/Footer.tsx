import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Logo_medicare from "../../../assets/img/home/logo.png";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 lg:px-16 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Company Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
             <div className="flex items-center gap-3">
         {/* Logo Medicare */}
        <div className="w-32 md:w-40 flex items-center">
           <img src={Logo_medicare} alt="Medicare Logo" className="w-full h-auto object-contain" />
        </div>
        </div>
        
      
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Medicare adalah marketplace kesehatan terpercaya untuk kebutuhan obat, vitamin, dan produk kesehatan lainnya.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-[#2563EB] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#2563EB] transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#2563EB] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#2563EB] transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Belanja</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Obat</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Kesehatan</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Perawatan Diri</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Vitamin & Suplemen</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Ibu & Anak</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Alat Kesehatan</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Informasi</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Cara Belanja</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Pengiriman</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Pembayaran</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Kebijakan Retur</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Syarat & Ketentuan</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Bantuan</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Pusat Bantuan</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Hubungi Kami</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Lacak Pesanan</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Upload Resep</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition-colors">Konsultasi Apoteker</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="font-bold text-gray-800 mb-2">Berlangganan Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Dapatkan info promo & tips kesehatan</p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Masukkan email Anda" 
              className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
            />
            <button className="bg-[#2563EB] text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-800 transition-colors">
              Langganan
            </button>
          </div>
        </div>
      </div>

      {/* Copyright & Payments */}
      <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">
          © 2023 Medicare. All rights reserved.
        </p>
        <div className="flex items-center gap-4 opacity-70 grayscale">
          <span className="font-bold text-blue-800 italic">VISA</span>
          <span className="font-bold text-red-600">MasterCard</span>
          <span className="font-bold text-blue-600">BCA</span>
          <span className="font-bold text-cyan-500">OVO</span>
          <span className="font-bold text-green-500">Gopay</span>
        </div>
      </div>
    </footer>
  );
}
