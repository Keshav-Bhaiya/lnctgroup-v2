import React from 'react';
import { Building2, GraduationCap, Award, Lightbulb } from 'lucide-react';
import AIChatbox from './AIChatbox';

const LNCTAbout = () => {
  return (
    <div id="lnctabout" className="bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-100 py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            About <span className="text-orange-500">LNCT Group</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            A legacy of excellence in education, research, and innovation since 1994.
          </p>
        </div>

        {/* Main Content */}
        <div className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-300 hover:scale-[1.01]">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Our Journey</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-10">
              Founded in 1994, LNCT Group has grown from a single engineering college to a diverse 
              educational conglomerate with multiple campuses across India. Our mission is to provide 
              quality education that empowers students to become industry-ready professionals and 
              innovative thinkers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                ['10+', 'Institutions'], 
                ['100+', 'Programs'], 
                ['100K+', 'Alumni'], 
                ['2000+', 'Faculty']
              ].map(([value, label], idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-xl p-4 text-center transform hover:scale-105 transition duration-300"
                >
                  <div className="text-3xl font-bold text-orange-500 mb-1">{value}</div>
                  <div className="text-gray-600 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-orange-200"></div>

            {/* Timeline Events */}
            {[
              { year: '1994', text: 'Establishment of LNCT campus in Bhopal', icon: <Building2 /> },
              { year: '2003', text: 'Expansion with LNCT University', icon: <GraduationCap /> },
              { year: '2010', text: 'Received A+ NAAC Accreditation', icon: <Award /> },
              { year: '2020', text: 'Launch of Innovation & Incubation Hub', icon: <Lightbulb /> },
            ].map((event, idx) => (
              <div key={idx} className="flex items-start gap-4 relative mb-8 group">
                {/* Icon */}
                <div className="bg-orange-500 rounded-full p-3 text-white shadow-md transform group-hover:scale-110 transition">
                  {React.cloneElement(event.icon, { className: 'w-5 h-5' })}
                </div>

                {/* Year and Event Text stacked vertically */}
                <div className=''>
                  <div className="text-sm  font-semibold text-gray-700">{event.year}</div>
                  <div className="text-gray-600 text-sm mt-1">{event.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help button */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 text-sm font-semibold">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          <AIChatbox />
        </div>
      </div>
    </div>
  );
};

export default LNCTAbout;