import React from 'react';
import { Building2, Edit, Briefcase } from 'lucide-react';
import video from '../assets/video.mp4';
const LNCTHero = () => {
  return (
    
    <div className="">
      {/* Background Image with Overlay */}
         <div className="mt-[-76px] w-full overflow-hidden ">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover object-center"
  >
    <source src={video} type="video/mp4" />
  </video>
</div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <div>
        <div className="w-full h-full relative mt-[-25px]">
          <img
            className="w-full h-screen"
            src="https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1024x456.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#14283c99] to-[#14283c99] flex items-center justify-center">
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
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
                    <Building2 size={18} />
                    Explore All Campuses
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-red-400 px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
                    <Edit size={18} />
                    Apply Now
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
                    <Briefcase size={18} />
                    See Placements
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div  className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div  className="max-w-4xl">
         
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
          
         
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
              <Building2 size={18} />
              Explore All Campuses
            </button>
            
            <button className="bg-white hover:bg-gray-50 text-red-400 px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
              <Edit size={18} />
              Apply Now
            </button>
            
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium text-base transition-all duration-200 flex items-center gap-2">
              <Briefcase size={18} />
              See Placements
            </button>
          </div>
        </div>
      </div> */}
      
      {/* Help Button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Help
        </button>
      </div>
    </div>
  );
};

export default LNCTHero;