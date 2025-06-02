import React, { useState, useEffect } from 'react';
import video from '../assets/video.mp4';

const AnnouncementBanner = () => {
  const announcements = [
    { icon: "📍", text: "Central India" },
    { icon: "📊", text: "95% Placement Record for 2023 Batch" },
    { icon: "🚀", text: "New AI Research Center Launch" },
    { icon: "🎓", text: "Admissions Open for 2023-24 Academic Year" }
  ];

  return (
    <div className="bg-orange-500  text-white py-2 overflow-hidden">
      <div className="animate-marquee flex space-x-12 whitespace-nowrap">
        {[...announcements, ...announcements].map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Campuses', 'Events', 'Placements', 'Startups', 'News', 'Contact'];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              className="w-32"
              src="https://www.admissionindia.net/uploads/colleges/31/logo-1.png"
              alt="LNCT Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-orange-500 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <div
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
              onClick={() => alert('Apply Now clicked!')}
            >
              Apply Now
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pb-4">
            <div className="pt-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-red-400" style={{ marginTop: '-32px' }}>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      
      <AnnouncementBanner />
      <Header />
      <video autoPlay muted loop playsInline
        className="w-full h-full object-contain">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default App;