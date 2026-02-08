import React, { useState, useEffect } from 'react';

// Sections & Pages
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import PopularVenues from './components/PopularVenues';
import Footer from './components/Footer';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import VenueDetail from './pages/VenueDetail'; // Ensure you create this file

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(null);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage(userData.role === 'admin' ? 'admin-dashboard' : 'dashboard');
  };

  const handleVenueNav = (venue) => {
    setSelectedVenue(venue);
    setPage('venue-detail');
  };

  const handleServiceNav = (service) => {
    setSelectedService(service);
    setPage('service-detail');
  };

  // List of high-focus pages that hide the standard Navbar/Footer
  const isMinimalView = [
    'login', 'signup', 'dashboard', 'admin-dashboard', 
    'service-detail', 'about-us', 'venue-detail'
  ].includes(page);

  return (
    <div className="selection:bg-indigo-100 selection:text-indigo-900 min-h-screen">
      {!isMinimalView && (
        <Navbar 
          setPage={setPage} 
          isLoggedIn={!!user} 
          setIsLoggedIn={() => { setUser(null); setPage('home'); }} 
        />
      )}
      
      <main>
        {/* Home Landing Flow */}
        {page === 'home' && (
          <>
            <Header setPage={setPage} />
            <About setPage={setPage} />
            <Services onServiceClick={handleServiceNav} />
            <PopularVenues onVenueClick={handleVenueNav} />
          </>
        )}

        {/* Story & Detail Pages */}
        {page === 'about-us' && <AboutPage setPage={setPage} />}
        {page === 'service-detail' && <ServiceDetail service={selectedService} setPage={setPage} />}
        {page === 'venue-detail' && <VenueDetail venue={selectedVenue} setPage={setPage} />}

        {/* Auth & Dashboards */}
        {page === 'login' && <Login onLogin={handleLogin} setPage={setPage} />}
        {page === 'signup' && <Signup onLogin={handleLogin} setPage={setPage} />}
        {page === 'dashboard' && user && <Dashboard user={user} setPage={setPage} />}
        {page === 'admin-dashboard' && user?.role === 'admin' && (
          <AdminDashboard user={user} setPage={setPage} />
        )}
      </main>

      {!isMinimalView && <Footer />}
    </div>
  );
}