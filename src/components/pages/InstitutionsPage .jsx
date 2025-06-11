import { useState, useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Award, Users, GraduationCap, Building, Search, ArrowRight, BookOpen, Star, Globe, Phone, Mail } from 'lucide-react';
import AIChatbox from "../AIChatbox" 
import Footer from "../Footer";

const LNCTInstitutionsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllInstitutions, setShowAllInstitutions] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const institutionsRef = useRef(null);

  const backgroundImages = [
"https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1024x456.jpg",
    "https://lncpbhopal.in/img/lncp6.jpg",
    "https://ucsworld.com/wp-content/uploads/2018/04/ln-medical-college-research-centre_bhopal.jpg"
  ];

  const institutions = [
    {
      id: 1,
      name: 'LNCT Bhopal',
      category: 'Engineering',
      type: 'Flagship',
      description: 'Engineering, Management, Medical programs with cutting-edge infrastructure and facilities.',
      image: "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1024x456.jpg",
      highlights: ['Engineering', 'Management', 'Medical', 'Research'],
      established: '1994',
      accreditation: 'NBA, NAAC A+',
      rating: 4.8,
      students: '5000+'
    },
    {
      id: 2,
      name: 'LNCT Indore',
      category: 'Engineering',
      type: 'Upcoming Branch',
      description: 'Industry-centric programs in Indore\'s commercial hub with strong corporate connections.',
      image: "https://www.lnctindore.com/_next/image?url=%2Fbuilding2.png&w=1920&q=75",
      highlights: ['Engineering', 'Electronics', 'Computer Science'],
      established: '2010',
      accreditation: 'AICTE Approved',
      rating: 4.5,
      students: '3000+'
    },
    {
      id: 3,
      name: 'LNCT University',
      category: 'Medical',
      type: 'Autonomous University',
      description: 'Research-driven multidisciplinary institution with comprehensive academic programs.',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUi7j1ZiYJ13_RR_7kn9cek4oryTvovsPjw&s",
      highlights: ['Medical', 'Nursing', 'Research'],
      established: '2003',
      accreditation: 'UGC Recognized',
      rating: 4.7,
      students: '4000+'
    },
    {
      id: 4,
      name: 'LNCT Technical Institute',
      category: 'Technical',
      type: 'Technical Institute',
      description: 'Hands-on technical education with focus on practical skills and industry readiness.',
      image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?w=400&h=300&fit=crop",
      highlights: ['Technical', 'Engineering', 'Practical'],
      established: '1998',
      accreditation: 'AICTE, NBA',
      rating: 4.3,
      students: '2500+'
    },
    {
      id: 5,
      name: 'LNCT Medical College',
      category: 'Medical',
      type: 'Medical',
      description: 'Modern infrastructure, top faculty and state-of-the-art medical facilities.',
      image: "https://ucsworld.com/wp-content/uploads/2018/04/ln-medical-college-research-centre_bhopal.jpg",
      highlights: ['Medical', 'Healthcare', 'Research'],
      established: '2008',
      accreditation: 'MCI Approved',
      rating: 4.9,
      students: '1500+'
    },
    {
      id: 6,
      name: 'LNCT Business School',
      category: 'Management',
      type: 'Business School',
      description: 'Corporate-focused MBA & BBA programs with industry partnerships and global placements.',
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      highlights: ['MBA', 'BBA', 'Corporate', 'Global'],
      established: '2005',
      accreditation: 'AICTE, NBA',
      rating: 4.6,
      students: '2000+'
    },
    {
      id: 7,
      name: 'LNCT College of Pharmacy',
      category: 'Medical',
      type: 'Pharmacy',
      description: 'Comprehensive pharmaceutical education with modern labs and research facilities.',
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      highlights: ['Pharmacy', 'Research', 'Healthcare', 'Innovation'],
      established: '2007',
      accreditation: 'PCI Approved',
      rating: 4.4,
      students: '1200+'
    },
    {
      id: 8,
      name: 'LNCT Nursing College',
      category: 'Medical',
      type: 'Nursing',
      description: 'Premier nursing education with clinical training and healthcare specializations.',
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      highlights: ['Nursing', 'Clinical', 'Healthcare', 'Practice'],
      established: '2009',
      accreditation: 'INC Approved',
      rating: 4.5,
      students: '800+'
    },
    {
      id: 9,
      name: 'LNCT Polytechnic',
      category: 'Technical',
      type: 'Polytechnic',
      description: 'Diploma programs in engineering with industry-oriented curriculum and practical training.',
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      highlights: ['Diploma', 'Engineering', 'Industry', 'Skills'],
      established: '2000',
      accreditation: 'AICTE Approved',
      rating: 4.2,
      students: '2200+'
    },
    {
      id: 10,
      name: 'LNCT Law College',
      category: 'Management',
      type: 'Law',
      description: 'Legal education with focus on constitutional law, corporate law and judicial services.',
      image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=400&h=300&fit=crop",
      highlights: ['Law', 'Legal', 'Corporate', 'Judiciary'],
      established: '2012',
      accreditation: 'BCI Approved',
      rating: 4.3,
      students: '900+'
    },
    {
      id: 11,
      name: 'LNCT Design College',
      category: 'Technical',
      type: 'Design',
      description: 'Creative design programs including fashion, interior, and graphic design specializations.',
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      highlights: ['Design', 'Creative', 'Fashion', 'Graphics'],
      established: '2015',
      accreditation: 'UGC Recognized',
      rating: 4.1,
      students: '600+'
    },
    {
      id: 12,
      name: 'LNCT Agriculture College',
      category: 'Technical',
      type: 'Agriculture',
      description: 'Agricultural sciences with focus on sustainable farming and agricultural technology.',
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      highlights: ['Agriculture', 'Farming', 'Technology', 'Sustainability'],
      established: '2018',
      accreditation: 'ICAR Approved',
      rating: 4.0,
      students: '700+'
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

  const filters = ['All', 'Engineering', 'Medical', 'Management', 'Technical'];

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
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden" data-scroll-section>
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen py-24 px-6 overflow-hidden flex items-center" data-scroll data-scroll-speed="-1">
        {/* Animated Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14283c99] to-[#14283c99]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="mb-8 animate-fade-in" data-scroll data-scroll-speed="2">
            <span className="inline-block px-6 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-orange-400/30">
              🎓 Premier Educational Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8 text-white drop-shadow-2xl animate-slide-up" data-scroll data-scroll-speed="3">
            Explore Our
            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent block mt-2">
              LNCT Campuses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-blue-100 opacity-90 animate-slide-up-delay" data-scroll data-scroll-speed="1">
            Multi-disciplinary campuses, cutting-edge infrastructure, and 30+ years of 
            educational excellence across Madhya Pradesh's premier institutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-delay-2" data-scroll data-scroll-speed="0.5">
            <button
              onClick={handleViewAllInstitutions}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 flex items-center gap-3"
            >
              <BookOpen className="w-6 h-6" />
              Explore Campuses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href=" https://tour.lnct.ac.in/LNCT/">
            <button className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl flex items-center gap-3">
              <Globe className="w-6 h-6" />
              Virtual Tour
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Institutions Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-blue-50/50 to-white" ref={institutionsRef} data-scroll-section>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16" data-scroll data-scroll-speed="1">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Our Campuses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover world-class institutions designed to shape tomorrow's leaders
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6" data-scroll data-scroll-speed="0.5">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <div
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:cursor-pointer hover:bg-gray-100 border border-gray-200 shadow-sm'
                  }`}
                >
                  {filter}
                </div>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campuses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent w-full lg:w-80 shadow-sm bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Institutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-scroll data-scroll-speed="0.2">
            {filteredInstitutions.slice(0, showAllInstitutions ? filteredInstitutions.length : 6).map((institution, index) => (
              <div 
                key={institution.id} 
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:rotate-1"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-scroll
                data-scroll-speed={0.1 * (index + 1)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={institution.image}
                    alt={institution.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${
                      institution.type === 'Flagship'
                        ? 'bg-yellow-500/90 text-white'
                        : institution.type === 'Medical'
                        ? 'bg-red-500/90 text-white'
                        : institution.type === 'Business School'
                        ? 'bg-green-500/90 text-white'
                        : 'bg-blue-500/90 text-white'
                    }`}>
                      {institution.type}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{institution.rating}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {institution.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{institution.description}</p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {institution.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">Est. {institution.established}</span>
                      <span>{institution.accreditation}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-blue-600">{institution.students}</span>
                      <span className="block">Students</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {!showAllInstitutions && (
            <div className="text-center mt-16" data-scroll data-scroll-speed="0.3">
              <button
                onClick={handleViewAllInstitutions}
                className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 hover:from-blue-500 hover:to-purple-700 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
              >
                <Building className="w-6 h-6" />
                View All Campuses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Campus Locations */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden" data-scroll-section>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-scroll data-scroll-speed="1">
            Our <span className="text-orange-400">Campus Network</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-scroll data-scroll-speed="0.5">
              <p className="text-xl text-blue-100 leading-relaxed">
                LNCT Group has established a comprehensive presence across Madhya Pradesh 
                with strategically located campuses in key educational hubs.
              </p>
              
              <div className="space-y-6">
                {campusLocations.map((location, index) => (
                  <div key={index} className="group p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300" data-scroll data-scroll-speed={0.2 * (index + 1)}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-4 h-4 rounded-full ${location.color.replace('text', 'bg')} animate-pulse`}></div>
                      <h3 className={`font-bold text-xl ${location.color}`}>
                        {location.region}
                      </h3>
                      <span className="ml-auto bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {location.count} campuses
                      </span>
                    </div>
                    <p className="text-blue-100 group-hover:text-white transition-colors">
                      {location.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interactive Map Placeholder */}
            <div className="relative" data-scroll data-scroll-speed="-0.5">
              <div className="w-full h-96 bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <MapPin className="w-20 h-20 text-orange-400 mx-auto mb-6 animate-bounce" />
                  <p className="text-white text-lg font-semibold mb-4">Interactive Campus Map</p>
                  <div className="grid grid-cols-4 gap-3 max-w-48 mx-auto">
                    {Array.from({length: 12}, (_, i) => (
                      <div 
                        key={i} 
                        className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics */}
      <section className="py-20 px-4 bg-white relative overflow-hidden" data-scroll-section>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent" data-scroll data-scroll-speed="1">
            LNCT Group Excellence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300" data-scroll data-scroll-speed={0.3 * (index + 1)}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  {stat.icon && <stat.icon className="w-16 h-16 mx-auto mb-6 text-white" />}
                  <div className="text-4xl md:text-5xl font-black mb-3 text-white">{stat.number}</div>
                  <div className="text-blue-100 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden" data-scroll-section>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Ready to Shape Your Future?
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of successful alumni who started their journey at LNCT. 
                Discover the perfect institution that aligns with your dreams and ambitions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                <BookOpen className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Apply Today</h3>
                <p className="text-gray-600 mb-6">Start your application process and secure your spot in our prestigious institutions.</p>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Apply Now
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Get Information</h3>
                <p className="text-gray-600 mb-6">Download brochures, get admission details, and connect with our counselors.</p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Info
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">+91 755 288 8888</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">info@lnct.ac.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.3s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up 1s ease-out 0.6s both;
        }
      `}</style>
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 text-sm font-semibold">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          <AIChatbox />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LNCTInstitutionsPage;