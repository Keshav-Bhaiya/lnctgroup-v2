import React from 'react';
import { Building2, GraduationCap, Award, Lightbulb } from 'lucide-react';

const LNCTAbout = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About LNCT Group</h1>
          <p className="text-lg text-gray-600">
            A legacy of excellence in education, research, and innovation since 1994.
          </p>
        </div>

        {/* Main Content Container - White Background */}
        <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Our Journey */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Founded in 1994, LNCT Group has grown from a single 
              engineering college to a diverse educational conglomerate 
              with multiple campuses across India. Our mission is to 
              provide quality education that empowers students to 
              become industry-ready professionals and innovative 
              thinkers.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">100+</div>
                <div className="text-gray-600 text-sm">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">100K+</div>
                <div className="text-gray-600 text-sm">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">2000+</div>
                <div className="text-gray-600 text-sm">Faculty</div>
              </div>
            </div>
          </div>

          {/* Right Side - Timeline with vertical line */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 relative">
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 relative z-10">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800 mb-1">1994</div>
                  <div className="text-gray-600 text-sm ml-8">Establishment of LNCT campus in Bhopal</div>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 relative z-10">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800  mb-1 ">2003</div>
                  <div className="text-gray-600 text-sm ml-22">Expansion with LNCT University</div>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 relative z-10">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800 mb-1">2010</div>
                  <div className="text-gray-600 text-sm ml-20">Received A+ NAAC Accreditation</div>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0 relative z-10">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800 mb-1">2020</div>
                  <div className="text-gray-600 text-sm ml-10">Launch of Innovation & Incubation Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default LNCTAbout;