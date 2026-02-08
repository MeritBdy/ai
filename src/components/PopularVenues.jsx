import React from 'react';

export default function PopularVenues({ onVenueClick }) {
  const venues = [
    { 
      id: 1, 
      name: "The Grand Ballroom", 
      category: "Wedding", 
      price: "$5,000", 
      rating: 4.9, 
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
      description: "An opulent space featuring crystal chandeliers, gold-leaf molding, and a majestic marble dance floor designed for high-society galas.",
      specs: ["500 Guests", "12,000 sq.ft", "Valet Parking"]
    },
    { 
      id: 2, 
      name: "Skyline Terrace", 
      category: "Corporate", 
      price: "$3,200", 
      rating: 4.7, 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      description: "A modern glass-walled sanctuary offering 360-degree panoramic views of the city skyline, perfect for executive retreats and product launches.",
      specs: ["150 Guests", "4,500 sq.ft", "Built-in AV"]
    },
    { 
      id: 3, 
      name: "Industrial Loft", 
      category: "Party", 
      price: "$2,100", 
      rating: 4.5, 
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      description: "Brutalistic charm meets urban luxury. Features exposed brickwork, high-vaulted ceilings, and raw metal accents for an edgy, intimate vibe.",
      specs: ["200 Guests", "6,000 sq.ft", "Full Bar"]
    },
  ];

  return (
    <section id="popular-venues" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-medium tracking-tighter text-[#2D2A6E]">
            Popular <span className="italic font-serif font-light opacity-90">Venues</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {venues.map((venue) => (
            <div 
              key={venue.id} 
              onClick={() => onVenueClick(venue)} // Trigger navigation
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.06)] hover:shadow-[0_40px_80px_rgba(79,70,229,0.15)] hover:-translate-y-3 transition-all duration-700"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <span className="absolute top-5 left-5 bg-indigo-600/90 backdrop-blur-md text-white text-[9px] font-bold px-4 py-2 rounded-xl uppercase tracking-[0.2em]">
                  {venue.category}
                </span>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold tracking-tight text-[#2D2A6E]">{venue.name}</h3>
                  <span className="text-amber-500 text-sm font-bold">★ {venue.rating}</span>
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <span className="text-2xl font-medium tracking-tight text-indigo-600">{venue.price}</span>
                  <button className="bg-indigo-50 text-indigo-600 text-[11px] uppercase tracking-widest font-bold px-6 py-2.5 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    See Space
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}