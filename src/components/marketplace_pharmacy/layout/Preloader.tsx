import Logo_medicare from "../../../assets/img/home/logo.png";

export function Preloader() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center w-full transition-opacity duration-500">
      <div className="w-40 md:w-56 animate-pulse mb-8">
        <img src={Logo_medicare} alt="Medicare Logo" className="w-full h-auto object-contain" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-100 border-t-[#2563EB] rounded-full animate-spin"></div>
        <span className="text-gray-500 text-sm font-medium animate-pulse">Memuat halaman...</span>
      </div>
    </div>
  );
}
