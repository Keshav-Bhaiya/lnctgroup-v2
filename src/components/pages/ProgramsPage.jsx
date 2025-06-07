import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// Import your existing components
import Nav from '../Nav'; // Adjust path as needed
import Footer from '../Footer'; // Adjust path as needed

const LNCTHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden pt-20">
      {/* Background decorative circles */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-gray-200 rounded-full opacity-60"></div>
      <div className="absolute bottom-16 left-1/4 w-16 h-16 bg-gray-100 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-6 py-12 flex items-center justify-between min-h-screen">
        {/* Left Content Section */}
        <div className="w-1/2 pr-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            LNCT Group of Institutions
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Shaping Tomorrow's Leaders Through Excellence in Education
          </p>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore All Programs
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="w-1/2">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Campus Building Image */}
              <div className="h-96 bg-gradient-to-b from-blue-400 to-blue-600 relative">
                {/* Modern building facade */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700">
                  {/* Building structure */}
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-gray-200 to-white">
                    {/* Glass windows pattern */}
                    <div className="grid grid-cols-8 gap-1 p-4 h-full">
                      {[...Array(32)].map((_, i) => (
                        <div key={i} className="bg-blue-200 opacity-70 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Ground level with students */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-green-200">
                    {/* Walkway */}
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-1/3 bg-gray-300"></div>
                    
                    {/* Students walking */}
                    <div className="absolute bottom-2 left-1/3 flex space-x-4">
                      <div className="w-3 h-8 bg-blue-800 rounded-full"></div>
                      <div className="w-3 h-8 bg-red-600 rounded-full"></div>
                      <div className="w-3 h-8 bg-green-700 rounded-full"></div>
                      <div className="w-3 h-8 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Tree on the right */}
                  <div className="absolute bottom-0 right-8 w-8 h-16 bg-green-600 rounded-full"></div>
                  <div className="absolute bottom-0 right-10 w-2 h-12 bg-amber-800"></div>
                </div>
                
                {/* Sky gradient */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-300 to-blue-400"></div>
              </div>
            </div>
            
            {/* Floating accent element */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400 rounded-full shadow-lg opacity-80"></div>
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-8 right-8 w-20 h-20 bg-blue-100 rounded-full opacity-30"></div>
    </div>
  );
};

const AcademicPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Engineering & Technology",
      description: "Cutting-edge programs across multiple engineering disciplines with state-of-the-art laboratories and industry partnerships.",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Medicine",
      description: "Comprehensive medical education with hands-on clinical experience and advanced healthcare training facilities.",
      bgColor: "bg-teal-50"
    },
    {
      id: 3,
      title: "Dentistry",
      description: "Premier dental education with modern clinics, specialized training, and patient care excellence.",
      bgColor: "bg-cyan-50"
    },
    {
      id: 4,
      title: "Management",
      description: "Business programs focusing on leadership, entrepreneurship, and strategic management with global perspectives.",
      bgColor: "bg-amber-50"
    },
    {
      id: 5,
      title: "Law",
      description: "Comprehensive legal education with moot courts, legal clinics, and expertise in constitutional and corporate law.",
      bgColor: "bg-red-50"
    },
    {
      id: 6,
      title: "Architecture",
      description: "Creative architectural programs with design studios, workshop workshops, and sustainable building practices.",
      bgColor: "bg-purple-50"
    },
    {
      id: 7,
      title: "Science & Humanities",
      description: "Diverse programs in pure sciences and humanities with research opportunities and interdisciplinary approach.",
      bgColor: "bg-orange-50"
    },
    {
      id: 8,
      title: "Agriculture Sciences",
      description: "Practical agricultural education with experimental farms, modern techniques, and sustainable farming practices.",
      bgColor: "bg-green-50"
    },
    {
      id: 9,
      title: "Pharmacy",
      description: "Comprehensive pharmaceutical education with modern labs, drug development facilities, and industry connections.",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      {/* Nav */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Diverse Programs for Every Career
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover a wide range of academic programs designed to prepare you for success in your chosen field.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div 
            key={program.id}
            className={`${program.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            {/* Image */}
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/50 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {program.description}
              </p>
              
              {/* Learn More Link */}
              <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-200">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-6">
            Choose from our comprehensive range of programs and take the first step towards your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Apply Now
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Request Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramsPage = () => {
  // Hide horizontal scrollbar globally
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div style={{ marginTop: 0, paddingTop: 0 }}>
      <LNCTHero />
      <AcademicPrograms />
      <Footer />
    </div>
  );
};

export default ProgramsPage;