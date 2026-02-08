import React, { useState } from 'react';

export default function Signup({ setPage }) {
  const [isFocused, setIsFocused] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center px-6 py-20 relative overflow-hidden selection:bg-indigo-500/30">
      
      {/* 1. Cinematic Glow - Indigo/Fuchsia mix for more color depth */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
      
      {/* 2. Structural Grid Overlay - Using your requested 80px linear grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }}>
      </div>

      <div className="relative z-10 w-full max-w-[480px] bg-white/[0.04] backdrop-blur-3xl border border-white/20 rounded-[3rem] p-12 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">
        
        <header className="text-center mb-12">
          <h2 className="text-indigo-300 text-[10px] font-bold uppercase tracking-[0.8em] mb-4">Membership Registry</h2>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-white leading-tight">
            Create <span className="italic font-serif font-light text-indigo-400">Account.</span>
          </h1>
        </header>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name Field */}
          <div className="space-y-2">
            <label className={`text-[10px] font-bold uppercase tracking-widest ml-4 transition-colors ${isFocused === 'name' ? 'text-white' : 'text-indigo-200/60'}`}>Full Identity</label>
            <input 
              type="text" 
              onFocus={() => setIsFocused('name')}
              onBlur={() => setIsFocused(null)}
              placeholder="Alexander Wright" 
              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-white/20 outline-none focus:border-indigo-400 focus:bg-white/[0.08] transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className={`text-[10px] font-bold uppercase tracking-widest ml-4 transition-colors ${isFocused === 'email' ? 'text-white' : 'text-indigo-200/60'}`}>Secure Email</label>
            <input 
              type="email" 
              onFocus={() => setIsFocused('email')}
              onBlur={() => setIsFocused(null)}
              placeholder="name@agency.com" 
              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-white/20 outline-none focus:border-indigo-400 focus:bg-white/[0.08] transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className={`text-[10px] font-bold uppercase tracking-widest ml-4 transition-colors ${isFocused === 'pass' ? 'text-white' : 'text-indigo-200/60'}`}>Secret Key</label>
            <input 
              type="password" 
              onFocus={() => setIsFocused('pass')}
              onBlur={() => setIsFocused(null)}
              placeholder="••••••••" 
              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-white/20 outline-none focus:border-indigo-400 focus:bg-white/[0.08] transition-all"
            />
          </div>

          {/* High-Contrast Submit */}
          <button className="w-full bg-white text-[#0a0a0b] py-6 rounded-2xl font-bold uppercase text-[11px] tracking-[0.4em] mt-8 hover:bg-indigo-600 hover:text-white transition-all duration-500 active:scale-95 shadow-2xl">
            Confirm Registry
          </button>
        </form>

        <div className="mt-12 text-center border-t border-white/5 pt-8">
          <button onClick={() => setPage('login')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-200/50 hover:text-white transition-colors">
            Existing Member? <span className="text-white border-b border-white/30 pb-0.5 ml-2">Sign In</span>
          </button>
        </div>
      </div>

      {/* Return to Index */}
      <button 
        onClick={() => setPage('home')} 
        className="absolute top-10 left-10 group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> Index
      </button>
      
    </div>
  );
}