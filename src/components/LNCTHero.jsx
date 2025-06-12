import React from 'react';
import { Building2, Edit, Briefcase } from 'lucide-react';
import video from '../assets/video.mp4';
import AIChatbox from './AIChatbox';
const LNCTHero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <div className="absolute mt-[-27px] inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Optional Background Image Overlay */}
      <div className="absolute inset-0 -z-10">
        
        <div className="absolute inset-0 mb-[27px] bg-gradient-to-b from-[#14283c99] to-[#14283c99]" />
      </div>

      {/* Centered Heading and Button */}
     

      {/* Main Content */}
      <div className="w-full h-full relative mt-[-25px]">
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 flex items-center justify-center min-h-screen">
            <div className="max-w-4xl text-center">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                One Vision, Many Campuses —
                <br />
                <span className="text-orange-500">LNCT Group</span>
              </h1>
              <p className="text-xl text-white mb-12 leading-relaxed">
                Uniting 10+ Institutions, 100+ Programs, and 100K+ Students
                <br />
                Across India
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/campuses">
                  <div className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
                    <Building2 size={18} />
                    Explore All Campuses
                  </div>
                </a>
                <a href="https://admissions.lnct.ac.in/">
                  <div className="bg-white hover:bg-gray-50 text-red-400 px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
                    <Edit size={18} />
                    Apply Now
                  </div>
                </a>
                 <a href="/departments">
                <div className="bg-gray-700 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
                  <Briefcase size={18} />
                 See Departments
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help div */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <AIChatbox />
        </div>
      </div>
    </div>
  );
};

export default LNCTHero;