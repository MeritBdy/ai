import { useState, useEffect } from "react";

export default function Navbar({ setPage, isLoggedIn, setIsLoggedIn }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setPage('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 px-8 ${
      isScrolled 
        ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 py-4 shadow-sm" 
        : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo with sophisticated serif accent */}
        <button 
          onClick={() => { setPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className={`text-2xl font-medium tracking-tighter transition-colors duration-500 ${isScrolled ? "text-slate-900" : "text-white"}`}
        >
          EventHub<span className={`font-serif italic font-light ml-1 ${isScrolled ? "text-indigo-600" : "text-indigo-300"}`}>Pro</span>
        </button>

        <div className="hidden md:flex items-center space-x-12">
          {/* Navigation Links with Animated Underlines */}
          <div className={`flex items-center space-x-10 font-bold text-[10px] uppercase tracking-[0.4em] ${
            isScrolled ? "text-slate-500" : "text-white/70"
          }`}>
            {['about', 'services', 'popular-venues'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="group relative hover:text-indigo-500 transition-colors duration-300"
              >
                {item.replace('-', ' ')}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-500 group-hover:w-full opacity-50"></span>
              </button>
            ))}
          </div>

          <div className={`h-4 w-[1px] ${isScrolled ? "bg-slate-200" : "bg-white/20"}`}></div>

          {/* Enhanced Auth Section */}
          <div className="flex items-center space-x-8">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => setPage('login')} 
                  className={`group relative text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                    isScrolled ? "text-slate-900" : "text-white"
                  }`}
                >
                  Login
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-500 group-hover:w-full`}></span>
                </button>

                <button 
                  onClick={() => setPage('signup')}
                  className={`px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 transform hover:-translate-y-1 active:scale-95 ${
                    isScrolled 
                      ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100 hover:bg-slate-900 hover:shadow-indigo-200" 
                      : "bg-white text-slate-900 shadow-2xl shadow-black/20 hover:bg-indigo-50"
                  }`}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setPage('dashboard')}
                  className={`group relative text-[10px] font-bold uppercase tracking-[0.3em] ${isScrolled ? "text-slate-900" : "text-white"}`}
                >
                  Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-500 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-red-500 transition-all duration-300 shadow-lg"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}