import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AnnouncementBanner = () => {
  const announcements = [
    { icon: "📍", text: "Central India" },
    { icon: "📊", text: "95% Placement Record for 2023 Batch" },
    { icon: "🚀", text: "New AI Research Center Launch" },
    { icon: "🎓", text: "Admissions Open for 2023-24 Academic Year" }
  ];

  return (
    <div className="bg-orange-500 z-[9] relative text-white py-2 overflow-hidden">
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
  const navigate = useNavigate();

  const navItems = [
    'Home', 'About', 'Campuses', 'Placements',
    'Startups', 'Alumni', 'Departments', 'Contact'
  ];

  // Function to handle navigation and scrolling
  const handleNavClick = (item) => {
    if (item === 'Home') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      }, 100);
    } else if (item === 'About') {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('lnctabout');
        if (aboutSection) {
          aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else if (item === 'Alumni') {
      navigate('/');
      setTimeout(() => {
        const alumniSection = document.getElementById('lnct-alumni-section');
        if (alumniSection) {
          alumniSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else if (item === 'Placements') {
      navigate('/');
      setTimeout(() => {
        const placementsSection = document.getElementById('placements-overview');
        if (placementsSection) {
          placementsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else if (item === 'Startups') {
      navigate('/');
      setTimeout(() => {
        const startupsSection = document.getElementById('startups-innovation-labs');
        if (startupsSection) {
          startupsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else if (item === 'Contact') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact-campus-locations');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

  // Function to handle logo click (same as Home)
  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <header className=" top-0 bg-white z-99999  shadow-sm fixed  left-0 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <img
              className="w-32"
              src="https://www.admissionindia.net/uploads/colleges/31/logo-1.png"
              alt="LNCT Logo"
            />
          </div>

          {/* Desktop Nav */}
          
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => {
        const routes = {
          'Campuses': '/campuses',
          'Departments': '/departments'
    };
    
    return (
      <div key={item} className="text-blue-500 hover:text-orange-500 text-sm font-medium transition-colors cursor-pointer">
        {routes[item] ? (
          <Link to={routes[item]}>{item}</Link>
        ) : (
          <span onClick={() => handleNavClick(item)}>{item}</span>
        )}
      </div>
    );
  })}
</div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
              onClick={() => window.location.href = 'https://admissions.lnct.ac.in/'}
            >
              Apply Now
            </div>

            {/* Mobile Menu Toggle */}
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

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pb-4">
            <div className="pt-2 space-y-1">
              {navItems.map((item) => {
                const routes = {
                  'Campuses': '/campuses',
                  'Departments': '/departments'
                };

                return (
                  <div key={item}>
                    {routes[item] ? (
                      <Link
                        to={routes[item]}
                        className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-100 transition"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          handleNavClick(item);
                        }}
                      >
                        {item}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const App = () => {
  // Hide horizontal scrollbar globally
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div  style={{ marginTop: 0, paddingTop: 0 }}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .announcement-container {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Header  />
    </div>
  );
};
export default App;