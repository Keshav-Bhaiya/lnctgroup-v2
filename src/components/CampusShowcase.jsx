import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const CampusShowcase = () => {
  const campuses = [
    {
      id: 1,
      name: "LNCT Bhopal",
      description: "Premier engineering and management institution with state-of-the-art infrastructure.",
      location: "Bhopal, Madhya Pradesh",
      image: "/api/placeholder/300/200",
      flagship: true
    },
    {
      id: 2,
      name: "LNCT Indore",
      description: "Cutting-edge technology focus with strong industry connections.Taught by inspired, committed, and creative faculty,",
      location: "Indore, Madhya Pradesh",
      image: "https://tse1.mm.bing.net/th?id=OIP.5Yb6BE3ih9skoYQmAUMCVwHaDz&pid=Api&P=0&h=180",
      flagship: false
    },
    {
      id: 3,
      name: "LNCT University",
      description: "Comprehensive university offering diverse programs with research excellence.",
      location: "Bhopal, Madhya Pradesh",
      image: "/api/placeholder/300/200",
      flagship: false
    },
    {
      id: 4,
      name: "JNCT",
      description: "Specialized technical education with focus on practical learning and innovation.",
      location: "Rewa, Madhya Pradesh",
      image: "/api/placeholder/300/200",
      flagship: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Our Campuses</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore our world-class campuses spread across Central India, each offering unique specializations and facilities.
          </p>
        </div>

        {/* Campus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {campuses.map((campus) => (
            <div key={campus.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Campus Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500">
                {campus.flagship && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Flagship
                  </span>
                )}
                {/* Placeholder for actual campus images */}
                <div className="w-full h-full bg-gradient-to-br from-green-400 via-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-bold">{campus.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{campus.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {campus.description}
                </p>
                
                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                  <span>{campus.location}</span>
                </div>

                {/* Explore Button */}
                <button className="flex items-center text-white-600 font-medium hover:text-blue-700 transition-colors duration-200">
                  <span>Explore Campus</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Campuses Button */}
        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center mx-auto">
            <span className="mr-2">🏛</span>
            View All Campuses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusShowcase;