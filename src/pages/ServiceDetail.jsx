import React, { useState } from 'react';

export default function ServiceDetail({ service, setPage }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!service) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsPanelOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white relative overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* 1. Background Mesh (Consistent with Collective) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Editorial Header */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[#0a0a0b]">
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 text-center space-y-6">
          <button 
            onClick={() => setPage('home')}
            className="group flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.5em] text-white/30 hover:text-indigo-400 transition-all"
          >
            <span className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-indigo-400 transition-all"></span>
            Return to Collective
          </button>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter">
            {service.title.split(' ')[0]} <span className="italic font-serif font-light text-indigo-400">{service.title.split(' ')[1]}</span>
          </h1>
        </div>
      </div>

      {/* Detail Content */}
      <div className="relative z-10 max-w-4xl mx-auto py-24 px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Main Copy */}
          <div className="md:col-span-8 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#4f46e5]"></span>
                <span className="text-white/30 font-bold uppercase tracking-[0.5em] text-[10px]">Strategic Overview</span>
              </div>
              <p className="text-3xl text-white font-light leading-tight tracking-tight">
                {service.longDesc || service.desc}
              </p>
            </section>

            <div className="h-[1px] w-full bg-white/5"></div>

            <section className="space-y-8">
               <h4 className="font-serif italic text-2xl text-indigo-300">Technical Capabilities</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {(service.features || ['Global Logistics', 'Security Protocol', 'Creative Direction']).map((feature, index) => (
                   <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                     <span className="text-indigo-500 text-xs">/</span>
                     <span className="text-sm font-light text-white/60">{feature}</span>
                   </div>
                 ))}
               </div>
            </section>
          </div>

          {/* Action Column */}
          <div className="md:col-span-4">
            <div className="sticky top-12 p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem]">
              <div className="bg-[#0d0d0e] rounded-[2.4rem] p-10 space-y-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Service Availability</p>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Our {service.title} team currently has <span className="text-white font-medium">Limited Capacity</span> for the 2026 season.
                </p>
                <button 
                  onClick={() => setIsPanelOpen(true)}
                  className="w-full bg-white text-black py-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-indigo-500 hover:text-white transition-all shadow-xl active:scale-95"
                >
                  Initiate Request
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- INTERACTIVE BOOKING PANEL (Portal Style) --- */}
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-xl z-[150] transition-opacity duration-700 ${isPanelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsPanelOpen(false)}
      />

      {/* Slide-over Panel */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[550px] bg-[#0d0d0e] z-[200] border-l border-white/10 transform transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[-50px_0_100px_rgba(0,0,0,0.5)] ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-16">
          <button 
            onClick={() => setIsPanelOpen(false)}
            className="group text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-16 hover:text-white text-left transition-colors flex items-center gap-3"
          >
            <span className="text-lg group-hover:rotate-90 transition-transform">✕</span> Terminate Request
          </button>
          
          {isSuccess ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 animate-in zoom-in-95 duration-700">
              <div className="w-24 h-24 rounded-full border border-emerald-500/20 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping"></div>
                 <span className="text-4xl text-emerald-400">✓</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-medium tracking-tighter">Transmission Sent</h2>
                <p className="text-white/40 font-light italic font-serif">A senior curator will reach out via secure channel shortly.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <div>
                <span className="text-indigo-400 font-bold uppercase tracking-[0.5em] text-[10px]">Registry Portal</span>
                <h2 className="text-5xl font-medium tracking-tighter text-white mt-4">
                  Request <span className="italic font-serif font-light text-indigo-300">{service.title}</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 ml-2">Operation Date</label>
                  <input required type="date" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-sm text-white focus:border-indigo-500 outline-none transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 ml-2">Attendance Volume</label>
                  <input required type="number" placeholder="Expected VIP Count" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-sm text-white focus:border-indigo-500 outline-none transition-all placeholder:text-white/10" />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 ml-2">Mission Brief</label>
                  <textarea rows="4" placeholder="Describe the operational scope..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-sm text-white focus:border-indigo-500 outline-none transition-all resize-none placeholder:text-white/10" />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full bg-indigo-600 text-white py-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.4em] overflow-hidden group shadow-2xl shadow-indigo-500/20"
                >
                  <span className={isSubmitting ? "opacity-0" : "opacity-100"}>Transmit Inquiry</span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}