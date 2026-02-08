import React from 'react';

export default function About({ setPage }) {
  return (
    // Added relative and overflow-hidden to contain the background glow
    <section id="about" className="py-24 md:py-32 bg-[#fafaf9] px-6 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Visual Element */}
          <div className="relative group cursor-pointer" onClick={() => setPage('about-us')}>
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white shadow-xl shadow-indigo-200/50 transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" 
                alt="Event Celebration" 
                className="w-full h-[550px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-700"></div>
            </div>
            
            {/* Floating Glass Card */}
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white hidden md:block transform transition-transform duration-500 group-hover:-translate-y-2">
              <div className="text-4xl font-medium tracking-tighter text-indigo-600 mb-1">12k+</div>
              <div className="text-[#2D2A6E] font-bold text-[10px] tracking-[0.3em] uppercase opacity-70">
                Events Hosted
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-[10px] block">
                Our Philosophy
              </span>
              <h2 className="text-6xl font-medium text-[#2D2A6E] leading-[1.05] tracking-tighter">
                Where Every Space <br /> 
                Tells <span className="italic font-serif font-light text-indigo-500">A Story.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-light tracking-tight max-w-xl">
              EventHub Pro isn't just about booking—it's about the chemistry of a great location. 
              We hand-pick venues that don't just host your event, but elevate it through 
              atmosphere, design, and seamless service.
            </p>

            {/* Feature Row */}
            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div className="flex-1 p-8 bg-white rounded-[2rem] shadow-sm border border-indigo-50 hover:shadow-md hover:border-indigo-100 transition-all duration-500 group">
                <div className="text-2xl mb-4 group-hover:scale-125 transition-transform duration-500">✨</div>
                <h4 className="font-bold text-[#2D2A6E] text-[11px] uppercase tracking-[0.2em] mb-2">Premium Curation</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Every venue is verified by our experts for quality.</p>
              </div>
              
              <div className="flex-1 p-8 bg-white rounded-[2rem] shadow-sm border border-indigo-50 hover:shadow-md hover:border-indigo-100 transition-all duration-500 group">
                <div className="text-2xl mb-4 group-hover:scale-125 transition-transform duration-500">🛡️</div>
                <h4 className="font-bold text-[#2D2A6E] text-[11px] uppercase tracking-[0.2em] mb-2">Total Security</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Safe payments and guaranteed global bookings.</p>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => setPage('about-us')}
                className="bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-[0.3em] px-10 py-5 rounded-2xl hover:bg-[#2D2A6E] transition-all shadow-lg shadow-indigo-200 active:scale-95"
              >
                Learn More About Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}