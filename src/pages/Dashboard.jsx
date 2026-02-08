import React, { useState } from 'react';

export default function Dashboard({ user, setPage }) {
  const [activeTab, setActiveTab] = useState('bookings');
  const [hoveredCard, setHoveredCard] = useState(null);

  const bookings = [
    { id: 1, venue: "The Glass Pavilion", date: "Oct 12, 2026", status: "Confirmed", price: "$4,500" },
    { id: 2, venue: "Grand Obsidian Hall", date: "Dec 05, 2026", status: "Pending", price: "$12,800" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans selection:bg-indigo-500/30">
      {/* 1. Ambient Background (Consistent with Header/Login) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        
        {/* SIDEBAR: Interactive Navigation */}
        <aside className="w-full md:w-72 bg-white/[0.02] backdrop-blur-3xl border-r border-white/10 p-8 flex flex-col">
          <div className="mb-12">
            <h2 className="text-xl font-medium tracking-tighter">
              EventHub <span className="italic font-serif text-indigo-400">Pro.</span>
            </h2>
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 mt-2">Member Dashboard</p>
          </div>

          <nav className="space-y-2 flex-1">
            {['bookings', 'favorites', 'messages', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeTab === tab 
                  ? "bg-white/10 text-white shadow-xl ring-1 ring-white/20" 
                  : "text-white/30 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeTab === tab ? "bg-indigo-400 animate-pulse" : "bg-transparent"}`}></span>
                {tab}
              </button>
            ))}
          </nav>

          <button 
            onClick={() => setPage('home')}
            className="mt-auto pt-8 border-t border-white/5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-red-400 transition-colors"
          >
            ← Terminate Session
          </button>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-8 md:p-16 overflow-y-auto">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <div>
              <h1 className="text-5xl font-medium tracking-tighter leading-none">
                Welcome, <span className="italic font-serif font-light text-indigo-300">Alexander</span>
              </h1>
              <p className="text-indigo-200/40 mt-4 text-sm font-light tracking-wide">You have 2 active reservations for the 2026 season.</p>
            </div>
            <button className="bg-white text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-indigo-400 hover:text-white transition-all shadow-2xl active:scale-95">
              Request New Venue
            </button>
          </header>

          {/* INTERACTIVE STAT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Total Invested', val: '$17,300', color: 'text-white' },
              { label: 'Active Requests', val: '02', color: 'text-indigo-400' },
              { label: 'Pro Membership', val: 'Elite', color: 'text-fuchsia-400' }
            ].map((stat, i) => (
              <div key={i} className="group bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 mb-2">{stat.label}</p>
                <p className={`text-3xl font-medium tracking-tight ${stat.color}`}>{stat.val}</p>
              </div>
            ))}
          </div>

          {/* DYNAMIC BOOKING LIST */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">Recent Activity</h3>
              <div className="h-[1px] flex-1 mx-8 bg-white/5"></div>
            </div>

            <div className="space-y-4">
              {bookings.map((item) => (
                <div 
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative flex flex-col md:flex-row items-center justify-between p-8 rounded-[2.5rem] border transition-all duration-700 cursor-pointer overflow-hidden ${
                    hoveredCard === item.id 
                    ? "bg-white/[0.08] border-white/30 translate-x-2" 
                    : "bg-white/[0.02] border-white/5"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-medium tracking-tight text-white group-hover:text-indigo-300 transition-colors">{item.venue}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{item.date}</p>
                  </div>

                  <div className="flex items-center gap-12 mt-4 md:mt-0">
                    <div className="text-right">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">Investment</p>
                      <p className="text-lg font-medium text-white">{item.price}</p>
                    </div>
                    <div className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                      item.status === 'Confirmed' ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/5' : 'border-amber-500/50 text-amber-400 bg-amber-500/5'
                    }`}>
                      {item.status}
                    </div>
                  </div>

                  {/* Hover Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-700 ${hoveredCard === item.id ? 'opacity-100' : ''}`}></div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}