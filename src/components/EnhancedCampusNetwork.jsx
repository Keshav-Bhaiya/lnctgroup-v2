import React, { useState } from 'react';
import { MapPin, Phone, Users, Award, Building, Globe } from 'lucide-react';

const EnhancedCampusNetwork = () => {
  const [selectedCampus, setSelectedCampus] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState('All');

  const campusLocations = [
    {
      id: 1,
      name: 'LNCT Bhopal',
      region: 'Bhopal',
      address: 'Kalchuri Nagar, Raisen Road, Bhopal',
      phone: '+91 755-6185300',
      color: 'bg-blue-500',
      icon: '🏛️',
      type: 'Main Campus',
      programs: ['Engineering', 'Management', 'Medical'],
      students: '5000+',
      established: '1994',
      rating: 4.8,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889387.1306379174!2d75.8114580955954!3d22.345726898291034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c403aa0e35b89%3A0xbc3e9e7fc022f862!2sLakshmi%20Narain%20College%20of%20Technology%20%26%20Science%20(LNCTS)!5e0!3m2!1sen!2sin!4v1748968534083!5m2!1sen!2sin'
    },
    {
      id: 2,
      name: 'LNCT University',
      region: 'Bhopal',
      address: 'Kolar Road, Bhopal',
      phone: '+91 755-6185330',
      color: 'bg-purple-500',
      icon: '🎓',
      type: 'University',
      programs: ['Medical', 'Nursing', 'Research'],
      students: '4000+',
      established: '2003',
      rating: 4.7,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.799110136901!2d77.42513137437267!3d23.177531010529435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439eedfd261d%3A0xbda480b4e82fe8d7!2sLNCT%20University%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1748969377031!5m2!1sen!2sin'
    },
    {
      id: 3,
      name: 'LNCTS Bhopal',
      region: 'Bhopal',
      address: 'Raisen Road, Bhopal',
      phone: '+91 755-6185320',
      color: 'bg-green-500',
      icon: '🔬',
      type: 'Science Campus',
      programs: ['Science', 'Research', 'Technology'],
      students: '1800+',
      established: '2005',
      rating: 4.2,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889387.1306379174!2d75.8114580955954!3d22.345726898291034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c403aa0e35b89%3A0xbc3e9e7fc022f862!2sLakshmi%20Narain%20College%20of%20Technology%20%26%20Science%20(LNCTS)!5e0!3m2!1sen!2sin!4v1748968534083!5m2!1sen!2sin'
    },
    {
      id: 4,
      name: 'JNCT Bhopal',
      region: 'Bhopal',
      address: 'JNCT Campus, Bhopal',
      phone: '+91 755-6185340',
      color: 'bg-orange-500',
      icon: '⚡',
      type: 'Excellence Campus',
      programs: ['Engineering', 'Technical', 'Excellence'],
      students: '2800+',
      established: '2012',
      rating: 4.3,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.898501885067!2d77.41055797437728!3d23.319441105186392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c68e61ce99811%3A0xc7df8bdb6f8529e2!2sJai%20Narain%20College%20of%20Technology%20(JNCT)%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1748969471533!5m2!1sen!2sin'
    },
    {
      id: 5,
      name: 'LNCT Indore',
      region: 'Indore',
      address: 'AB Road, Indore',
      phone: '+91 731-4201000',
      color: 'bg-red-500',
      icon: '📍',
      type: 'Regional Campus',
      programs: ['Engineering', 'Computer Science'],
      students: '3000+',
      established: '2010',
      rating: 4.5,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.469933595183!2d75.81577664872064!3d22.714578635341187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb93a968c8f%3A0x61f3006e9ee73a2c!2sLnct%20Indore!5e0!3m2!1sen!2sin!4v1748968669213!5m2!1sen!2sin'
    },
    {
      id: 6,
      name: 'LNCT Jabalpur',
      region: 'Jabalpur',
      address: 'Jabalpur, MP',
      phone: '+91 761-4201000',
      color: 'bg-teal-500',
      icon: '🏢',
      type: 'Regional Campus',
      programs: ['B.Tech', 'MBA', 'Pharmacy'],
      students: '3500+',
      established: '2010',
      rating: 4.4,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4525294954356!2d79.79338547509596!3d23.153678279082108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b684cd588717%3A0xf4eebbc3f1fa4084!2sLakshmi%20Narain%20College%20Of%20Technology-%20LNCT%20Jabalpur!5e0!3m2!1sen!2sin!4v1749644175944!5m2!1sen!2sin'
    }
  ];

  const regions = ['All', 'Bhopal', 'Indore', 'Jabalpur'];

  const filteredCampuses = selectedRegion === 'All' 
    ? campusLocations 
    : campusLocations.filter(campus => campus.region === selectedRegion);

  const handleCampusSelect = (campusId) => {
    setSelectedCampus(campusId);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    // Auto-select first campus of the region
    const regionCampuses = region === 'All' ? campusLocations : campusLocations.filter(c => c.region === region);
    if (regionCampuses.length > 0) {
      setSelectedCampus(regionCampuses[0].id);
    }
  };

  const selectedCampusData = campusLocations.find(campus => campus.id === selectedCampus);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-100 py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Our <span className="text-orange-500">Campus Network</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Strategically located campuses across Madhya Pradesh
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex justify-center mb-10">
          <div className="bg-white flex hover:cursor-pointer rounded-2xl p-2 shadow-lg">
            {regions.map((region) => (
              <div
                key={region}
                onClick={() => handleRegionSelect(region)}
                className={`px-6 py-3  rounded-xl font-semibold transition-all duration-300 ${
                  selectedRegion === region
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-orange-50'
                }`}
              >
                {region} {region !== 'All' && `(${campusLocations.filter(c => c.region === region).length})`}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-2xl p-8 mb-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Section */}
            <div className="lg:col-span-2">
              {/* Selected Campus Header */}
              <div className="bg-gray-800 rounded-2xl p-6 text-white mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${selectedCampusData?.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                      <span className="text-xl">{selectedCampusData?.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {selectedCampusData?.name}
                      </h3>
                      <span className="px-2 py-1 bg-orange-500 text-white text-sm rounded-full">
                        {selectedCampusData?.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <Award className="w-4 h-4 mr-1" />
                      <span className="font-bold">{selectedCampusData?.rating}</span>
                    </div>
                    <div className="text-sm text-gray-300">Est. {selectedCampusData?.established}</div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="h-80 rounded-2xl overflow-hidden shadow-lg relative">
                {selectedCampusData && (
                  <iframe
                    src={selectedCampusData.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${selectedCampusData.name} Location`}
                  />
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${selectedCampusData?.color} rounded-full animate-pulse`}></div>
                    <span className="text-sm font-semibold text-gray-800">{selectedCampusData?.region} Region</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Info Panel */}
            <div className="bg-gray-800 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold">Campus Overview</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Contact</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-gray-300">{selectedCampusData?.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-orange-300">{selectedCampusData?.phone}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Quick Stats</h4>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-gray-300">{selectedCampusData?.students}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-gray-300">{selectedCampusData?.rating}/5</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Programs</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCampusData?.programs.map((program, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampuses.map((campus) => (
            <div
              key={campus.id}
              className={`bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                selectedCampus === campus.id ? 'ring-4 ring-orange-500 shadow-orange-500/25' : ''
              }`}
              onClick={() => handleCampusSelect(campus.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${campus.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                      <span className="text-sm">{campus.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {campus.name}
                      </h3>
                      <p className="text-sm text-gray-600">{campus.region}</p>
                    </div>
                  </div>
                  {selectedCampus === campus.id && (
                    <div className="flex items-center text-orange-500">
                      <Globe className="w-4 h-4" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-gray-600">{campus.students}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-gray-700">{campus.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {campus.programs.slice(0, 2).map((program, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {program}
                      </span>
                    ))}
                    {campus.programs.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{campus.programs.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedCampusNetwork;