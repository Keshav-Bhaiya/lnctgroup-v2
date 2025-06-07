import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

const CampusShowcase = () => {
  const campuses = [
    {
      id: 1,
      name: "LNCT Bhopal",
      description:
        "Premier engineering and management institution with state-of-the-art infrastructure.",
      location: "Bhopal, Madhya Pradesh",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.3KHG36rhxyVivCdOIWI4DwHaEo&pid=Api&P=0&h=180",
      flagship: false,
    },
    {
      id: 2,
      name: "LNCT Indore",
      description:
        "Cutting-edge technology focus with strong industry connections. Taught by inspired, committed, and creative faculty.",
      location: "Indore, Madhya Pradesh",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.5Yb6BE3ih9skoYQmAUMCVwHaDz&pid=Api&P=0&h=180",
      flagship: false,
    },
    {
      id: 3,
      name: "LNCT University",
      description:
        "Comprehensive university offering diverse programs with research excellence.",
      location: "Bhopal, Madhya Pradesh",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.xga9RI6-K5f-LEiAzD3mFgHaE8&pid=Api&P=0&h=180",
      flagship: false,
    },
    {
      id: 4,
      name: "JNCT",
      description:
        "Specialized technical education with focus on practical learning and innovation.",
      location: "Bhopal, Madhya Pradesh",
      image:
        "http://2.bp.blogspot.com/-Rc1j94z_j-g/TcsZidTfTWI/AAAAAAAAByk/Ed1nTVVRlPM/s1600/JNCT%2BBhopal%2BJ.N.%2BCollege%2Bof%2BTechnology%2BBhopal.jpg",
      flagship: false,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-blue-50 py-20 px-6 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Decorative Top Section */}
        <div className="relative mb-16">
          {/* Background gradient & wave shape */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-300 to-blue-400 rounded-3xl opacity-30 blur-3xl"></div>
          <svg
            className="absolute bottom-0 left-0 w-full h-24 md:h-32 text-white opacity-20"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path
              fillOpacity="0.4"
              d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,101.3C672,85,768,107,864,138.7C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>

          {/* Small tagline or intro text above "Our Campuses" */}
          <p className="text-center text-sm uppercase tracking-widest font-semibold text-orange-700 mb-3">
            Discover Excellence & Innovation
          </p>

          {/* Main Header */}
          <h1 className="text-center text-5xl font-extrabold text-orange-600 tracking-wide drop-shadow-md">
            Our Campuses
          </h1>

          {/* Subheading */}
          <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto mt-3 leading-relaxed">
            Explore our world-class campuses spread across Central India, each
            offering unique specializations and facilities.
          </p>
        </div>

        {/* Campus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {campuses.map((campus) => (
            <div
              key={campus.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              tabIndex={0}
              aria-label={`Explore ${campus.name}`}
            >
              {/* Campus Image */}
              <div className="relative h-48 bg-gradient-to-tr from-orange-400 to-blue-500 flex items-center justify-center">
                {campus.flagship && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    Flagship
                  </span>
                )}
                <img
                  className="w-full h-full object-cover rounded-t-2xl brightness-90 hover:brightness-100 transition-all duration-300"
                  src={campus.image}
                  alt={campus.name}
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {campus.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5 min-h-[72px]">
                    {campus.description}
                  </p>
                </div>

                {/* Location and Button */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center text-orange-500 text-sm font-medium">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{campus.location}</span>
                  </div>
                  {/* Fix: Added Explore Campus button */}
                  <button
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:from-orange-600 hover:to-blue-700 transition-colors duration-300 font-semibold focus:outline-none focus:ring-4 focus:ring-orange-300"
                    aria-label={`Explore campus ${campus.name}`}
                  >
                    Explore Campus <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Campuses Button */}
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-blue-700 hover:from-orange-700 hover:to-blue-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="View all campuses"
          >
            <span role="img" aria-label="building">
              🏛
            </span>
            View All Campuses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusShowcase;