import React from 'react';

export default function AboutPage({ setPage }) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-white/20">
      
      {/* 1. Obsidian Depth Base */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#000000]"></div>
        {/* White Light Leak for Contrast */}
        <div className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>
      </div>

      {/* 2. Navigation */}
      <nav className="fixed top-0 w-full p-10 z-50 flex justify-between items-center bg-black/5 backdrop-blur-sm">
        <button 
          onClick={() => setPage('home')}
          className="group flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.5em] text-white/40 hover:text-white transition-all"
        >
          <span className="w-6 h-[1px] bg-white/20 group-hover:w-10 group-hover:bg-white transition-all"></span>
          Home
        </button>
        <div className="text-[9px] font-bold uppercase tracking-[0.8em] text-white/20 italic">The Event Collective</div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 pt-40 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* 3. Left: Visual Narrative */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-[1px] bg-gradient-to-b from-white/40 via-white/5 to-transparent rounded-[3.5rem]">
              <div className="relative rounded-[3.5rem] overflow-hidden bg-black group">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
                  alt="Elite Event Space" 
                  className="w-full h-[600px] object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-1000"></div>
                <div className="absolute bottom-10 left-10 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">Live Production</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-4 p-8 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 max-w-[300px] shadow-2xl">
              <p className="text-[11px] text-white/50 font-light italic leading-relaxed font-serif">
                "We don't just book venues; we engineer environments where vision meets reality."
              </p>
            </div>
          </div>

          {/* 4. Right: Event-Focused Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-white font-bold uppercase tracking-[0.6em] text-[10px]">What we do</span>
                <div className="h-[1px] w-12 bg-white/20"></div>
              </div>
              <h1 className="text-7xl md:text-[8rem] font-medium tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20">
                Redefining <br />
                <span className="italic font-serif font-light">Events.</span>
              </h1>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-2xl text-white/80 font-light leading-snug tracking-tight">
                Your premier partner for <span className="text-white border-b border-white/30">unforgettable coordination</span> and elite venue scouting.
              </p>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                From high-stakes corporate summits to intimate private celebrations, we handle the technical logistics, strategic planning, and aesthetic direction that transform a simple gathering into a landmark occasion.
              </p>
            </div>

            {/* Event Stats: Inversion Hover */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="group border border-white/10 p-10 rounded-[2.5rem] hover:bg-white hover:text-black transition-all duration-500">
                <div className="text-4xl font-medium mb-2 tracking-tighter">850+</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100">Events Hosted</div>
              </div>
              <div className="group border border-white/10 p-10 rounded-[2.5rem] hover:bg-white hover:text-black transition-all duration-500">
                <div className="text-4xl font-medium mb-2 tracking-tighter">24/7</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100">Global Support</div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => setPage('signup')}
                className="group flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                  <span className="text-white group-hover:text-black transition-colors text-xl">→</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-[0.5em]">Join the Collective</span>
                  <span className="text-[9px] text-white/30 uppercase tracking-[0.3em]">Exclusive Membership</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}