 import React, { useState } from 'react';



export default function Login({ setPage, onLogin }) {

  const [isFocused, setIsFocused] = useState(null);



  return (

    <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Cinematic Glow */}

      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>

     

      {/* Background Grid - Increased opacity slightly for structure */}

      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"

           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }}>

      </div>



      <div className="relative z-10 w-full max-w-[420px] bg-white/[0.04] backdrop-blur-3xl border border-white/20 rounded-[3rem] p-12 shadow-[0_50px_100px_rgba(0,0,0,0.6)]">

        <div className="text-center mb-12">

          {/* Brighter secondary text */}

          <h2 className="text-indigo-300 text-[10px] font-bold uppercase tracking-[0.8em] mb-4">Member Portal</h2>

          <h1 className="text-4xl font-medium tracking-tighter text-white">

            Authorize <span className="italic font-serif font-light text-indigo-400">Access.</span>

          </h1>

        </div>



        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin({ role: 'user' }); }}>

          <div className="space-y-2">

            {/* Label color made much clearer */}

            <label className={`text-[10px] font-bold uppercase tracking-widest ml-4 transition-colors ${isFocused === 'email' ? 'text-white' : 'text-indigo-200/60'}`}>Identity</label>

            <input

              type="email"

              onFocus={() => setIsFocused('email')}

              onBlur={() => setIsFocused(null)}

              placeholder="email@example.com"

              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-white/40 outline-none focus:border-indigo-400 focus:bg-white/[0.08] transition-all"

            />

          </div>



          <div className="space-y-2">

            {/* Label color made much clearer */}

            <label className={`text-[10px] font-bold uppercase tracking-widest ml-4 transition-colors ${isFocused === 'pass' ? 'text-white' : 'text-indigo-200/60'}`}>Security Key</label>

            <input

              type="password"

              onFocus={() => setIsFocused('pass')}

              onBlur={() => setIsFocused(null)}

              placeholder="••••••••"

              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-white/40 outline-none focus:border-indigo-400 focus:bg-white/[0.08] transition-all"

            />

          </div>



          <button className="w-full bg-white text-slate-900 py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.4em] mt-8 hover:bg-indigo-600 hover:text-white transition-all duration-500 active:scale-95 shadow-2xl">

            Enter Gallery

          </button>

        </form>



        <div className="mt-12 text-center">

          {/* Brighter link color */}

          <button onClick={() => setPage('signup')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-200/50 hover:text-white transition-colors">

            Require Access? Request Registration

          </button>

        </div>

      </div>



      {/* Brighter Return button */}

      <button onClick={() => setPage('home')} className="absolute top-10 left-10 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all">

        ← Return

      </button>

    </div>

  );

}