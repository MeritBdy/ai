import React, { useState } from 'react';

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: 'Wedding', symbol: '✦', desc: 'Curated Elegance' },
    { name: 'Corporate', symbol: '◇', desc: 'Professional Edge' },
    { name: 'Party', symbol: '❈', desc: 'Vibrant Socials' },
    { name: 'Conference', symbol: '⊕', desc: 'Strategic Gatherings' },
  ];

  // Simulated live results
  const suggestions = ["Paris, France", "Manhattan, NY", "London, UK"].filter(city => 
    city.toLowerCase().includes(searchQuery.toLowerCase()) && searchQuery.length > 0
  );

  return (
    <header className="relative pt-24 pb-32 px-4 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-[#0a0a0b]">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] transition-all duration-1000 ${isFocused ? 'scale-125 opacity-40' : 'opacity-20'}`}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-4">
        {/* Anti-Rusty Label */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-indigo-500"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-indigo-400">The 2026 Collection</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-indigo-500"></div>
        </div>

        <h1 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-10">
          Host Your <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 italic font-serif font-light">
            Legacy.
          </span>
        </h1>

        {/* --- INTERACTIVE SEARCH BAR --- */}
        <div className="relative max-w-2xl mx-auto mt-14">
          <div 
            className={`flex flex-col md:flex-row items-center gap-3 p-2 rounded-2xl transition-all duration-500 border shadow-2xl
              ${isFocused 
                ? 'bg-white/10 backdrop-blur-3xl border-white/30 scale-105' 
                : 'bg-white/[0.03] backdrop-blur-xl border-white/10 scale-100'}`}
          >
            <div className="flex-1 flex items-center gap-4 px-6 w-full">
              {/* Magnifier that glows when focused */}
              <div className={`w-4 h-4 border-2 rounded-full relative transition-colors duration-500 after:content-[''] after:absolute after:w-2 after:h-[2px] after:-bottom-1 after:-right-1 after:rotate-45
                ${isFocused ? 'border-indigo-400 after:bg-indigo-400' : 'border-white/20 after:bg-white/20'}`}>
              </div>
              
              <input 
                type="text" 
                value={searchQuery}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where is your event?" 
                className="bg-transparent w-full outline-none text-white placeholder:text-white/20 text-sm font-light py-4 tracking-widest uppercase"
              />
            </div>
            
            <button className={`w-full md:w-auto font-bold text-[10px] uppercase tracking-[0.3em] py-5 px-10 rounded-xl transition-all duration-500
              ${isFocused ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50' : 'bg-white text-slate-900'}`}>
              Find Venue
            </button>
          </div>

          {/* Floating Results Panel */}
          {isFocused && searchQuery.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-4 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
              {suggestions.length > 0 ? (
                suggestions.map(city => (
                  <div key={city} className="px-8 py-5 text-left text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-none flex items-center gap-4">
                    <span className="text-indigo-400 font-serif italic font-light">Exo</span> {city}
                  </div>
                ))
              ) : (
                <div className="px-8 py-5 text-left text-white/30 italic text-sm">No venues found in this region...</div>
              )}
            </div>
          )}
        </div>

        {/* Category Cards */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div 
              key={cat.name} 
              className="group relative bg-white/[0.02] hover:bg-white/[0.05] rounded-[2.5rem] p-10 transition-all duration-700 cursor-pointer border border-white/[0.05] hover:border-white/20 overflow-hidden"
            >
              <div className="text-3xl font-light text-indigo-400 mb-6 group-hover:scale-125 group-hover:rotate-90 transition-all duration-700 ease-out">
                {cat.symbol}
            z  </div>
              <p className="text-white font-bold text-[10px] uppercase tracking-[0.4em] mb-1">{cat.name}</p>
              <p className="text-[9px] text-white/30 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}