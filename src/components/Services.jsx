import React from 'react';

export default function Services({ onServiceClick }) {
  const services = [
    {
      id: '01',
      title: 'Venue Curation',
      desc: 'Access to a private portfolio of heritage sites and hidden architectural gems.',
      accent: 'from-indigo-500 to-blue-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 10h1m4 0h1m-5-4h1m4 0h1" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Event Production',
      desc: 'Seamless end-to-end management from logistics to bespoke lighting design.',
      accent: 'from-fuchsia-500 to-purple-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Concierge Support',
      desc: 'Dedicated on-site assistance ensuring every detail is executed perfectly.',
      accent: 'from-emerald-500 to-teal-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#f5f3ff] px-8 relative overflow-hidden">
      {/* Decorative background element for texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-6xl font-medium tracking-tighter text-[#2D2A6E]">
            Our <span className="italic font-serif font-light text-indigo-600">Expertise.</span>
          </h2>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-[2px] bg-indigo-500"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-900/40">Elevating the standard</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={() => onServiceClick(service)}
              className="group relative cursor-pointer"
            >
              {/* Soft Shadow Glow that appears on hover */}
              <div className="absolute inset-0 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Card Container */}
              <div className="relative h-full bg-white rounded-[2.5rem] p-12 border border-indigo-50 shadow-[0_15px_40px_-15px_rgba(45,42,110,0.05)] group-hover:shadow-[0_40px_80px_-20px_rgba(45,42,110,0.12)] transition-all duration-700 group-hover:-translate-y-4">
                
                <div className="flex justify-between items-start mb-14">
                  <span className="text-[11px] font-black text-indigo-100 uppercase tracking-[0.5em] group-hover:text-indigo-600/20 transition-colors duration-500">
                    {service.id}
                  </span>
                  {/* Icon with accent color */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.accent} bg-opacity-10 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#2D2A6E] mb-5">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-12">
                  {service.desc}
                </p>

                <div className="flex items-center gap-4 group/btn">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-600">Discover More</span>
                  <div className="h-[1px] w-8 bg-indigo-200 group-hover:w-16 group-hover:bg-indigo-600 transition-all duration-500"></div>
                </div>

                {/* Subtle bottom-right gradient accent */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${service.accent} opacity-[0.03] rounded-br-[2.5rem]`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}