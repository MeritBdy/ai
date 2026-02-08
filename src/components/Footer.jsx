import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-12 px-8 border-t border-slate-800"> {/* Reduced py-24 to py-12 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16">
        
        {/* Brand Column */}
        <div className="space-y-5"> {/* Reduced space-y-8 to 5 */}
          <h2 className="text-xl font-medium text-white tracking-tighter">
            EventHub <span className="italic font-serif font-light text-indigo-400">Pro.</span>
          </h2>
          <p className="text-xs leading-relaxed font-light tracking-tight opacity-70 max-w-xs">
            The world's most trusted platform for venue booking. 
            Transforming spaces into <span className="italic font-serif">experiences</span>.
          </p>
          <div className="flex gap-3 pt-1">
            {['TW', 'FB', 'IG', 'LI'].map((social) => (
              <div key={social} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[9px] font-bold text-white cursor-pointer hover:bg-indigo-600 transition-all border border-white/10">
                {social}
              </div>
            ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:pl-12">
          <h3 className="text-white text-[9px] font-bold uppercase tracking-[0.3em] mb-5">Platform</h3>
          <ul className="space-y-3 text-xs font-light tracking-tight"> {/* Reduced text-sm to text-xs and spacing */}
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">How it works</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Pricing</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Vendor program</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:pl-12">
          <h3 className="text-white text-[9px] font-bold uppercase tracking-[0.3em] mb-5">Support</h3>
          <ul className="space-y-3 text-xs font-light tracking-tight">
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Help center</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Safety info</li>
            <li className="hover:text-indigo-400 cursor-pointer transition-colors">Contact us</li>
          </ul>
        </div>
      </div>
      
      {/* Slimmed Down Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-center items-center">
        <p className="text-slate-500 text-[8px] font-bold tracking-[0.5em] uppercase text-center">
          © 2026 EventHub Pro Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}