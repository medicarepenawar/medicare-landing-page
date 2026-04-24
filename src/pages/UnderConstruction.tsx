import React from "react";

export default function UnderConstruction() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <img src="/medicare-logo.png" alt="Medicare Logo" className="h-16 mx-auto" />
        </div>

        {/* Status Badge */}
        <div className="mb-8 inline-block">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-6 leading-tight">
          Building Something Great
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-600 mb-3 font-light leading-relaxed">
          We're crafting a revolutionary healthcare platform to connect patients, doctors, nurses, and vendors seamlessly.
        </p>

        <p className="text-slate-500 mb-12 font-light">Thank you for your patience as we prepare to launch.</p>

        {/* Visual Element */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex justify-center items-center gap-8 text-slate-400">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span className="text-xs font-medium">Optimizing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-medium">Launching</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-medium">Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
