import React, { useState } from 'react';
import { MapPin, Phone, Mail, Users, GraduationCap, Award, Building, Globe } from 'lucide-react';

const EnhancedCampusNetwork = () => {
  const [selectedCampus, setSelectedCampus] = useState(1);

  const campusLocations = [
    {
      id: 1,
      name: 'LNCT Bhopal (Main Campus)',
      region: 'Bhopal Region',
      address: 'Kachhuf Nagar, Raisen Road, Bhopal, Madhya Pradesh - 462022',
      phone: '+91 755-6185300',
      email: 'info@lnct.ac.in',
      color: 'bg-blue-500',
      icon: '🏛️',
      type: 'Flagship Campus',
      programs: ['Engineering', 'Management', 'Medical'],
      students: '5000+',
      established: '1994',
      accreditation: 'NBA, NAAC A+',
      rating: 4.8,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889387.1306379174!2d75.8114580955954!3d22.345726898291034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c403aa0e35b89%3A0xbc3e9e7fc022f862!2sLakshmi%20Narain%20College%20of%20Technology%20%26%20Science%20(LNCTS)!5e0!3m2!1sen!2sin!4v1748968534083!5m2!1sen!2sin'
    },
    {
      id: 2,
      name: 'LNCT University Bhopal',
      region: 'Bhopal Region',
      address: 'Kolar Road, Bhopal, Madhya Pradesh - 462042',
      phone: '+91 755-6185330',
      email: 'info@lnctu.ac.in',
      color: 'bg-purple-500',
      icon: '🎓',
      type: 'Autonomous University',
      programs: ['Medical', 'Nursing', 'Research'],
      students: '4000+',
      established: '2003',
      accreditation: 'UGC Recognized',
      rating: 4.7,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.799110136901!2d77.42513137437267!3d23.177531010529435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439eedfd261d%3A0xbda480b4e82fe8d7!2sLNCT%20University%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1748969377031!5m2!1sen!2sin'
    },
    {
      id: 3,
      name: 'LNCTS Bhopal',
      region: 'Bhopal Region',
      address: 'Raisen Road, Bhopal, Madhya Pradesh - 462023',
      phone: '+91 755-6185320',
      email: 'info@lncts.ac.in',
      color: 'bg-green-500',
      icon: '🔬',
      type: 'Science & Technology',
      programs: ['Science', 'Research', 'Laboratory'],
      students: '1800+',
      established: '2005',
      accreditation: 'UGC Recognized',
      rating: 4.2,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889387.1306379174!2d75.8114580955954!3d22.345726898291034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c403aa0e35b89%3A0xbc3e9e7fc022f862!2sLakshmi%20Narain%20College%20of%20Technology%20%26%20Science%20(LNCTS)!5e0!3m2!1sen!2sin!4v1748968534083!5m2!1sen!2sin'
    },
    {
      id: 4,
      name: 'LNCTE Bhopal',
      region: 'Bhopal Region',
      address: 'Excellence Campus, Bhopal, Madhya Pradesh - 462024',
      phone: '+91 755-6185340',
      email: 'info@lncte.ac.in',
      color: 'bg-orange-500',
      icon: '⚡',
      type: 'Excellence Campus',
      programs: ['Excellence', 'Engineering', 'Technical'],
      students: '2800+',
      established: '2012',
      accreditation: 'AICTE Approved',
      rating: 4.3,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.898501885067!2d77.41055797437728!3d23.319441105186392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c68e61ce99811%3A0xc7df8bdb6f8529e2!2sJai%20Narain%20College%20of%20Technology%20(JNCT)%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1748969471533!5m2!1sen!2sin'
    },
    {
      id: 5,
      name: 'LNCT Indore',
      region: 'Indore Region',
      address: 'AB Road, Indore, Madhya Pradesh - 453331',
      phone: '+91 731-4201000',
      email: 'info@lnctindore.ac.in',
      color: 'bg-red-500',
      icon: '📍',
      type: 'Regional Campus',
      programs: ['Engineering', 'Electronics', 'Computer Science'],
      students: '3000+',
      established: '2010',
      accreditation: 'AICTE Approved',
      rating: 4.5,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.469933595183!2d75.81577664872064!3d22.714578635341187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb93a968c8f%3A0x61f3006e9ee73a2c!2sLnct%20Indore!5e0!3m2!1sen!2sin!4v1748968669213!5m2!1sen!2sin'
    },
    {
      id: 6,
      name: 'LNCT Jabalpur',
      region: 'Jabalpur Region',
      address: 'Jabalpur, Madhya Pradesh - 482003',
      phone: '+91 761-4201000',
      email: 'info@lnctjabalpur.ac.in',
      color: 'bg-teal-500',
      icon: '🏢',
      type: 'Regional Campus',
      programs: ['B.Tech', 'MBA', 'Pharmacy'],
      students: '3500+',
      established: '2010',
      accreditation: 'AICTE, RGPV Affiliated',
      rating: 4.4,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4525294954356!2d79.79338547509596!3d23.153678279082108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b684cd588717%3A0xf4eebbc3f1fa4084!2sLakshmi%20Narain%20College%20Of%20Technology-%20LNCT%20Jabalpur!5e0!3m2!1sen!2sin!4v1749644175944!5m2!1sen!2sin'
    }
  ];

  const regionStats = [
    { region: 'Bhopal Region', count: 4, color: 'text-blue-600', campuses: ['LNCT Bhopal', 'LNCT University', 'LNCTS', 'LNCTE'] },
    { region: 'Indore Region', count: 1, color: 'text-red-600', campuses: ['LNCT Indore'] },
    { region: 'Jabalpur Region', count: 1, color: 'text-teal-600', campuses: ['LNCT Jabalpur'] }
  ];

  const handleCampusSelect = (campusId) => {
    setSelectedCampus(campusId);
  };

  const selectedCampusData = campusLocations.find(campus => campus.id === selectedCampus);

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-white via-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
            Our Campus Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our strategically located campuses across Madhya Pradesh with world-class infrastructure
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Interactive Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Selected Campus Info Header */}
              <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${selectedCampusData?.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                      <span className="text-xl">{selectedCampusData?.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {selectedCampusData?.name}
                      </h3>
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-medium">
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-orange-400 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-gray-200">
                      {selectedCampusData?.address}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                    <a
                      href={`tel:${selectedCampusData?.phone}`}
                      className="text-orange-300 hover:text-orange-200 font-medium transition-colors"
                    >
                      {selectedCampusData?.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-200">{selectedCampusData?.students} Students</span>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="h-96 lg:h-[500px] relative">
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
                    className="rounded-b-2xl"
                  />
                )}
                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${selectedCampusData?.color} rounded-full animate-pulse`}></div>
                    <span className="text-sm font-semibold text-gray-800">{selectedCampusData?.region}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Statistics Panel */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-2xl shadow-xl p-6 text-white h-full">
              <div className="flex items-center mb-6">
                <Building className="w-6 h-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold">Campus Overview</h3>
              </div>
              
              {/* Selected Campus Details */}
              <div className="space-y-4 mb-8">
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Programs Offered</h4>
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
                
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Accreditation</h4>
                  <p className="text-sm text-gray-300">{selectedCampusData?.accreditation}</p>
                </div>
              </div>

              {/* Regional Statistics */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg mb-4">Regional Distribution</h4>
                {regionStats.map((region, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className={`font-semibold ${region.color}`}>{region.region}</h5>
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {region.count} {region.count === 1 ? 'Campus' : 'Campuses'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      {region.campuses.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Campus Selection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {campusLocations.map((campus) => (
            <div
              key={campus.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                selectedCampus === campus.id ? 'ring-4 ring-orange-500 shadow-orange-500/25' : ''
              }`}
              onClick={() => handleCampusSelect(campus.id)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${campus.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                      <span className="text-lg">{campus.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">
                        {campus.name}
                      </h3>
                      <p className="text-sm text-gray-500">{campus.region}</p>
                    </div>
                  </div>
                  {selectedCampus === campus.id && (
                    <div className="flex items-center text-orange-500">
                      <Globe className="w-5 h-5 animate-spin" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <p className="text-gray-600 truncate">{campus.address}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-gray-600">{campus.students}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold text-gray-700">{campus.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
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
                        +{campus.programs.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                {selectedCampus === campus.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-orange-600 text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-2" />
                      Currently viewing this campus
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </div>
  );
};

export default EnhancedCampusNetwork;