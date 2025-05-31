import React from 'react';

const PlacementsOverview = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Placements Overview</h1>
        <p className="text-gray-600">Our students are recruited by leading companies across industries.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Placement Statistics */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Placement Statistics</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">₹12L</div>
              <div className="text-gray-600">Highest Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">₹6.2L</div>
              <div className="text-gray-600">Average Package</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600">Recruiters</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm">
              All Campuses
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50">
              LNCT Bhopal
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50">
              LNCT Indore
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50">
              LNCT University
            </button>
          </div>
        </div>

        {/* Right Column - Top Recruiters */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Top Recruiters</h2>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2">
              View All <span>→</span>
            </button>
          </div>
          
          {/* Company logos grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-blue-600 font-bold text-lg">TCS</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-blue-500 font-bold text-lg">INFOSYS</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-purple-600 font-bold text-lg">WIPRO</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-blue-500 font-bold text-lg">COGNIZANT</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-blue-600 font-bold text-lg">IBM</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-purple-600 font-bold text-lg">ACCENTURE</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-blue-500 font-bold text-lg">HCL</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-blue-600 font-bold text-lg">TCS PRIME</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-blue-600 font-bold text-lg">CAPGEMINI</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-purple-600 font-bold text-lg">MICROSOFT</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <span className="text-purple-600 font-bold text-lg">AMAZON</span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <div className="flex-1">
                <p className="text-gray-700 italic mb-3">
                  "The placement cell at LNCT provided excellent opportunities and guidance. I received multiple job offers and landed my dream role at Microsoft."
                </p>
                <div>
                  <div className="font-semibold text-gray-800">Rahul Sharma</div>
                  <div className="text-gray-600 text-sm">B.Tech CSE, Batch of 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementsOverview;