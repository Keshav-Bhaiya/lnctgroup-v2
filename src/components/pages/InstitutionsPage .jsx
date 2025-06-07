import { useState, useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Award, Users, GraduationCap, Building, Search, Filter } from 'lucide-react';
import Footer from '../Footer'; // Adjust the path based on your file structure

const LNCTInstitutionsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllInstitutions, setShowAllInstitutions] = useState(false);
  const institutionsRef = useRef(null);

  const institutions = [
    {
      id: 1,
      name: 'LNCT Bhopal',
      category: 'Engineering',
      type: 'Flagship',
      description: 'Engineering, Management, Medical programs with cutting-edge infrastructure and facilities.',
      image: '/api/placeholder/400/250',
      highlights: ['Engineering', 'Management', 'Medical', 'Research'],
      established: '1994',
      accreditation: 'NBA, NAAC A+'
    },
    {
      id: 2,
      name: 'LNCT Indore',
      category: 'Engineering',
      type: 'Upcoming Branch',
      description: 'Industry-centric programs in Indore\'s commercial hub with strong corporate connections.',
      image: '/api/placeholder/400/250',
      highlights: ['Engineering', 'Electronics', 'Computer Science'],
      established: '2010',
      accreditation: 'AICTE Approved'
    },
    {
      id: 3,
      name: 'LNCT University',
      category: 'Medical',
      type: 'Autonomous University',
      description: 'Research-driven multidisciplinary institution with comprehensive academic programs.',
      image: '/api/placeholder/400/250',
      highlights: ['Medical', 'Nursing', 'Research'],
      established: '2003',
      accreditation: 'UGC Recognized'
    },
    {
      id: 4,
      name: 'LNCT Bhopal',
      category: 'Technical',
      type: 'Technical Institute',
      description: 'Hands-on technical education with focus on practical skills and industry readiness.',
      image: '/api/placeholder/400/250',
      highlights: ['Technical', 'Engineering', 'Practical'],
      established: '1998',
      accreditation: 'AICTE, NBA'
    },
    {
      id: 5,
      name: 'LNCT Medical College',
      category: 'Medical',
      type: 'Medical',
      description: 'Modern infrastructure, top faculty and state-of-the-art medical facilities.',
      image: '/api/placeholder/400/250',
      highlights: ['Medical', 'Healthcare', 'Research'],
      established: '2008',
      accreditation: 'MCI Approved'
    },
    {
      id: 6,
      name: 'LNCT Business School',
      category: 'Management',
      type: 'Business School',
      description: 'Corporate-focused MBA & BBA programs with industry partnerships and global placements.',
      image: '/api/placeholder/400/250',
      highlights: ['MBA', 'BBA', 'Corporate', 'Global'],
      established: '2005',
      accreditation: 'AICTE, NBA'
    },
    {
      id: 7,
      name: 'Chouksey Engineering College',
      category: 'Engineering',
      type: 'Technical Institute',
      description: 'Core tech and applied sciences with focus on innovation and engineering excellence.',
      image: '/api/placeholder/400/250',
      highlights: ['Engineering', 'Tech', 'Innovation'],
      established: '2001',
      accreditation: 'AICTE'
    },
    {
      id: 8,
      name: 'Sardar Patel College of Tech',
      category: 'Engineering',
      type: 'Autonomous',
      description: 'Emphasis on innovation, technology development and entrepreneurship.',
      image: '/api/placeholder/400/250',
      highlights: ['Technology', 'Innovation', 'Entrepreneurship'],
      established: '2006',
      accreditation: 'AICTE, NBA'
    },
    {
      id: 9,
      name: 'LNCT School of Architecture',
      category: 'Architecture',
      type: 'Design',
      description: 'Creative design & real-world architectural practice with modern design studios.',
      image: '/api/placeholder/400/250',
      highlights: ['Architecture', 'Design', 'Creative'],
      established: '2012',
      accreditation: 'COA Approved'
    }
  ];

  const campusLocations = [
    { region: 'Bhopal Region', count: 7, color: 'text-blue-600', description: 'Comprising flagship LNCT Bhopal, LNCT University, and specialized institutions' },
    { region: 'Indore Region', count: 3, color: 'text-orange-600', description: '3 Campuses with focus on biomedics, engineering and medical education' },
    { region: 'Jabalpur Region', count: 2, color: 'text-teal-600', description: '2 specialized technical and medical institutions' }
  ];

  const stats = [
    { number: '30+', label: 'Years of Excellence', icon: Award },
    { number: '15+', label: 'Institutions', icon: Building },
    { number: '50k+', label: 'Alumni Network', icon: Users },
    { number: '100+', label: 'Programs Offered', icon: GraduationCap }
  ];

  const filters = ['All', 'Engineering', 'Medical', 'Management', 'Architecture'];

  const filteredInstitutions = institutions.filter(institution => {
    const matchesFilter = selectedFilter === 'All' || institution.category === selectedFilter;
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleViewAllInstitutions = () => {
    setShowAllInstitutions(true);
    setTimeout(() => {
      institutionsRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Our LNCT Campuses
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Multi-disciplinary campuses, modern infrastructure, and 30+ years of 
            educational excellence across Madhya Pradesh.
          </p>
          <button
            onClick={handleViewAllInstitutions}
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Campuses <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Featured Institutions Preview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Campuses</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedFilter === filter
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campuses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstitutions.slice(0, showAllInstitutions ? filteredInstitutions.length : 6).map((institution) => (
              <div key={institution.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Building className="w-16 h-16 text-blue-600" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      institution.type === 'Flagship' ? 'bg-yellow-100 text-yellow-800' :
                      institution.type === 'Medical' ? 'bg-red-100 text-red-800' :
                      institution.type === 'Business School' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {institution.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{institution.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{institution.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {institution.highlights.map((highlight, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Est. {institution.established}</span>
                    <span>{institution.accreditation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAllInstitutions && (
            <div className="text-center mt-12">
              <button
                onClick={handleViewAllInstitutions}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View All Campuses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Campus Locations */}
      <section ref={institutionsRef} className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Campus Locations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                LNCT Group has established a strong presence across Madhya Pradesh 
                with <span className="font-semibold text-blue-600">multiple campuses in key cities</span>, 
                providing accessible quality education.
              </p>
              <div className="space-y-6">
                {campusLocations.map((location, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${location.color.replace('text', 'bg')} mt-2`}></div>
                    <div>
                      <h3 className={`font-semibold text-lg ${location.color}`}>
                        {location.region}
                      </h3>
                      <p className="text-gray-600 mt-1">{location.description}</p>
                      <span className="text-sm text-gray-500">{location.count} campuses</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Campus Map</p>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[1,2,3,4,5,6,7,8,9].map((dot) => (
                      <div key={dot} className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">LNCT Group at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-300 group-hover:text-white transition-colors duration-300" />
                <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-400">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the right LNCT institution that aligns with your career goals and aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LNCTInstitutionsPage;