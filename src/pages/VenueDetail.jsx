import React, { useState } from 'react';

export default function VenueDetail({ venue, setPage }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booked, setBooked] = useState(false);

  if (!venue) return null;

  const handleNextStep = () => setStep(prev => prev + 1);
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBooked(true);
      setTimeout(() => {
        setBooked(false);
        setIsBookingOpen(false);
        setStep(1);
      }, 3500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* 1. Ambient Background Glows */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img src={venue.image} className="w-full h-full object-cover scale-105" alt={venue.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/20 to-transparent"></div>
        
        <button 
          onClick={() => setPage('home')} 
          className="absolute top-10 left-10 z-20 group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all"
        >
          <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-indigo-400 transition-all"></span>
          Collection
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 -mt-40 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Section */}
          <div className="lg:col-span-8 bg-white/[0.03] backdrop-blur-3xl rounded-[3.5rem] p-12 md:p-16 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-indigo-500"></span>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-400">Venue Spotlight</p>
            </div>
            <h1 className="text-7xl font-medium tracking-tighter text-white mb-8">
              {venue.name.split(' ')[0]} <span className="italic font-serif font-light text-indigo-300">{venue.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-2xl">
              {venue.description}
            </p>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/5">
              {[ { l: 'Capacity', v: '250+' }, { l: 'Curation', v: 'Elite' }, { l: 'Security', v: 'Level 4' } ].map((stat, i) => (
                <div key={i}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 mb-2">{stat.l}</p>
                  <p className="text-xl font-medium text-white">{stat.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing/Booking Sticky Card */}
          <div className="lg:col-span-4 sticky top-10">
            <div className="bg-white text-black rounded-[2.5rem] p-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden relative">
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 mb-2">Private Rate</p>
              <div className="text-5xl font-medium tracking-tighter mb-10 text-slate-900">{venue.price}</div>
              
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-[#0a0a0b] text-white py-6 rounded-2xl text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-indigo-600 transition-all duration-500 shadow-xl active:scale-95"
              >
                Request Access
              </button>
              
              <p className="text-center text-[9px] font-bold text-black/20 uppercase tracking-[0.2em] mt-6 italic">
                Membership verification required
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- INTERACTIVE SLIDE-OVER (Obsidian Style) --- */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-700 ${isBookingOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsBookingOpen(false)} />
        
        <div className={`absolute right-0 inset-y-0 w-full md:w-[550px] bg-[#0d0d0e] border-l border-white/10 shadow-[-50px_0_100px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] p-16 flex flex-col ${isBookingOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <button onClick={() => setIsBookingOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-16 hover:text-white flex items-center gap-2">
            <span className="text-xl">✕</span> Close Portal
          </button>

          {booked ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-700">
              <div className="w-24 h-24 rounded-full border border-emerald-500/30 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping"></div>
                <span className="text-3xl text-emerald-400">✓</span>
              </div>
              <h2 className="text-4xl font-medium tracking-tighter text-white mb-4">Inquiry Received.</h2>
              <p className="text-white/40 font-light leading-relaxed max-w-xs">
                Our digital curators have flagged your request for priority review.
              </p>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              {/* Progress Steps */}
              <div className="flex items-center gap-4 mb-16">
                <span className={`text-[10px] font-bold tracking-widest ${step === 1 ? 'text-indigo-400' : 'text-white/20'}`}>01 TIMELINE</span>
                <div className="h-[1px] flex-1 bg-white/5">
                  <div className={`h-full bg-indigo-500 transition-all duration-700 ${step === 1 ? 'w-0' : 'w-full'}`}></div>
                </div>
                <span className={`text-[10px] font-bold tracking-widest ${step === 2 ? 'text-indigo-400' : 'text-white/20'}`}>02 IDENTITY</span>
              </div>

              {step === 1 ? (
                <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
                  <h3 className="text-5xl font-medium tracking-tighter text-white">Select <span className="italic font-serif font-light text-indigo-300">Phase.</span></h3>
                  <div className="space-y-4">
                    <label className="block text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 ml-2">Digital Calendar</label>
                    <input 
                      type="date" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-indigo-500 transition-all" 
                    />
                  </div>
                  <button 
                    onClick={handleNextStep} 
                    className="w-full bg-white text-black py-6 rounded-2xl font-bold uppercase text-[11px] tracking-[0.4em] hover:bg-indigo-500 hover:text-white transition-all duration-500"
                  >
                    Proceed to Details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFinalSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
                  <h3 className="text-5xl font-medium tracking-tighter text-white">Guest <span className="italic font-serif font-light text-indigo-300">Profile.</span></h3>
                  <div className="space-y-5">
                    <input 
                      required 
                      type="number" 
                      placeholder="Guest count" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-indigo-500 transition-all placeholder:text-white/10" 
                    />
                    <textarea 
                      placeholder="Additional technical requirements..." 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-white outline-none focus:border-indigo-500 h-40 resize-none transition-all placeholder:text-white/10" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="relative w-full bg-indigo-600 text-white py-6 rounded-2xl font-bold uppercase text-[11px] tracking-[0.4em] overflow-hidden group"
                  >
                    <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
                      {isSubmitting ? "Encrypting..." : "Transmit Inquiry"}
                    </span>
                    {isSubmitting && (
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                       </div>
                    )}
                  </button>
                  <button onClick={() => setStep(1)} className="w-full text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">
                    Return to Timeline
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}