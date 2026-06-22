import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, AlertCircle, Eye, EyeOff, Check, ShieldAlert } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const CORRECT_PASSCODE = "medicare2026";
const AUTH_KEY = "medicare_main_auth";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // Check both session and local storage
    const sessionAuth = sessionStorage.getItem(AUTH_KEY);
    const localAuth = localStorage.getItem(AUTH_KEY);
    
    if (sessionAuth === "true" || localAuth === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) {
      setError("Please enter the access passcode");
      triggerShake();
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simulate verification delay for premium feel
    setTimeout(() => {
      if (passcode === CORRECT_PASSCODE) {
        setIsSuccess(true);
        setTimeout(() => {
          if (rememberMe) {
            localStorage.setItem(AUTH_KEY, CORRECT_PASSCODE);
          } else {
            sessionStorage.setItem(AUTH_KEY, "true");
          }
          setIsAuthenticated(true);
          setIsSubmitting(false);
        }, 800);
      } else {
        setError("Invalid passcode. Please try again.");
        triggerShake();
        setIsSubmitting(false);
      }
    }, 600);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  // While checking authentication, show a clean spinner
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-slate-950" />
          </div>
        </div>
      </div>
    );
  }

  // Render children if authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Otherwise, render the premium lock screen
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-blue-950 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Decorative Blur Rings */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Fine lines pattern grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        {/* Glow effect under the card */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
        
        <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-8 md:p-10 shadow-2xl">
          
          {/* Logo / Brand Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-1.5 text-2xl font-black tracking-tight mb-6">
              <span className="text-blue-500">Medi</span>
              <span className="text-red-500">Care</span>
              <span className="text-slate-400 font-normal text-sm ml-2 px-2 py-0.5 bg-slate-800 rounded border border-slate-700">Internal</span>
            </div>
            
            {/* Animated Lock Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                animate={
                  isSuccess 
                    ? { scale: [1, 1.1, 1], rotate: [0, 0, 0] } 
                    : shake 
                    ? { x: [-10, 10, -10, 10, 0] } 
                    : { y: [0, -4, 0] }
                }
                transition={
                  isSuccess 
                    ? { duration: 0.5 } 
                    : shake 
                    ? { duration: 0.4 } 
                    : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }
                className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-colors duration-500 relative ${
                  isSuccess 
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" 
                    : error 
                    ? "bg-rose-500/10 border border-rose-500/30 text-rose-400" 
                    : "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                }`}
              >
                {isSuccess ? (
                  <Unlock className="w-10 h-10" />
                ) : error ? (
                  <ShieldAlert className="w-10 h-10 animate-pulse" />
                ) : (
                  <Lock className="w-10 h-10" />
                )}
                
                {/* Glowing ring */}
                <div className={`absolute inset-0 rounded-2xl animate-ping opacity-15 pointer-events-none ${
                  isSuccess ? "bg-emerald-500" : error ? "bg-rose-500" : "bg-blue-500"
                }`} style={{ animationDuration: '2.5s' }} />
              </motion.div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Medical Directory Lock
            </h2>
            <p className="mt-2.5 text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
              Please enter the access passcode to view patient, vendor, and specialist listings.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="passcode" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Access Passcode
              </label>
              
              <div className="relative">
                <input
                  type={showPasscode ? "text" : "password"}
                  id="passcode"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    if (error) setError(null);
                  }}
                  disabled={isSubmitting || isSuccess}
                  placeholder="••••••••••••"
                  className={`w-full pl-4 pr-11 py-3 bg-slate-950/65 border rounded-xl text-white placeholder:text-slate-600 focus:outline-none transition-all duration-300 ${
                    error 
                      ? "border-rose-500/60 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10" 
                      : "border-slate-800 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                />
                
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  tabIndex={-1}
                  disabled={isSubmitting || isSuccess}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPasscode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isSubmitting || isSuccess}
                  className="sr-only peer"
                />
                <div className="w-4.5 h-4.5 rounded border border-slate-700 bg-slate-950 peer-checked:bg-blue-600 peer-checked:border-blue-500 flex items-center justify-center transition-all duration-200">
                  <Check className="w-3 h-3 text-white stroke-[3px] opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors selection:bg-transparent">
                  Remember this device
                </span>
              </label>
            </div>

            {/* Error Notification */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                isSuccess
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : isSubmitting
                  ? "bg-blue-600/50 text-blue-200 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-[0.98]"
              }`}
            >
              {isSuccess ? (
                <>
                  <Check className="w-4.5 h-4.5 stroke-[3px]" />
                  <span>Access Granted</span>
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <span>Unlock Directory</span>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
