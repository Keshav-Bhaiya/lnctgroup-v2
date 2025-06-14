import { useState, useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Award, Users, GraduationCap, Building, Search, ArrowRight, BookOpen, Star, Globe, Phone, Mail } from 'lucide-react';
import AIChatbox from "../AIChatbox" 
import Footer from "../Footer";
import EnhancedCampusNetwork from '../EnhancedCampusNetwork';
import EventsNews from '../EventNews';

const LNCTInstitutionsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllInstitutions, setShowAllInstitutions] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Added state for floating box visibility
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
      image: "https://lnct.ac.in/wp-content/uploads/2021/04/Health-Care-min.jpg",
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
    },
    {
      id: 13,
      name: 'LNCT Jabalpur',
      category: 'Engineering',
      type: 'Jabalpur Campus',
      description: 'Premier engineering college in Jabalpur offering B.Tech, MBA, and Pharmacy programs with modern infrastructure.',
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      highlights: ['B.Tech', 'MBA', 'Pharmacy', 'Engineering'],
      established: '2010',
      accreditation: 'AICTE, RGPV Affiliated',
      rating: 4.4,
      students: '3500+'
    },
    {
      id: 14,
      name: 'LNCT & Science (LNCTS)',
      category: 'Technical',
      type: 'Science College',
      description: 'Comprehensive science education with research-oriented programs and modern laboratory facilities.',
      image: "https://images.collegedunia.com/public/reviewPhotos/507551/IMG-20231206-WA0019.jpg?mode=cover",
      highlights: ['Science', 'Research', 'Laboratory', 'Innovation'],
      established: '2005',
      accreditation: 'UGC Recognized',
      rating: 4.2,
      students: '1800+'
    },
    {
      id: 15,
      name: 'LNCTE (LNCT Excellence)',
      category: 'Engineering',
      type: 'Excellence Campus',
      description: 'Advanced engineering programs with emphasis on excellence in technical education and industry collaboration.',
      image: "https://images.shiksha.com/mediadata/images/1541496450phpwY17km_g.jpg",
      highlights: ['Excellence', 'Engineering', 'Industry', 'Technical'],
      established: '2012',
      accreditation: 'AICTE Approved',
      rating: 4.3,
      students: '2800+'
    },
    {
      id: 16,
      name: 'LNCT College of Pharmacy (Jabalpur)',
      category: 'Medical',
      type: 'Pharmacy',
      description: 'Specialized pharmaceutical education in Jabalpur with state-of-the-art labs and research facilities.',
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
      highlights: ['Pharmacy', 'Research', 'Healthcare', 'Clinical'],
      established: '2015',
      accreditation: 'PCI Approved',
      rating: 4.1,
      students: '1000+'
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
            <button className=" border-orange-400 text-white hover:bg-orange-100 hover:text-white px-10 py-5 rounded-full font-semibold text-lg  transition-all duration-300 shadow-xl flex items-center gap-3">
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
          
            <h1 className='text-5xl md:text-10xl  font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent '> Our Campuses</h1>
            <p className='text-gray-800 '>
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
                    <span className="text-sm font-semibold text-black">{institution.rating}</span>
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
                className="group bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
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
      <EnhancedCampusNetwork/>

      {/* Enhanced Statistics */}
      

      {/* Enhanced Call to Action */}
      

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
      <div>
         <EventsNews />
      </div>
        <div className={`mt-20 px-9 mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-900 to-stone-900 rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-slate-400/10 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-slate-400/10 to-stone-400/10 rounded-full transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl  font-bold text-white ">
                Ready to Shape Your Future?
              </h2>
              <p className=" text-blue-100 ">
                Join thousands of students who have transformed their lives through our world-class education programs.
              </p>
              <br />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://admissions.lnct.ac.in/">
                <div className="group bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                  <span className="flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div></a>
                <a href="https://lnct.ac.in/wp-content/uploads/2025/03/LNCT-Brochure.pdf">
                <div className="border-2 border-white-400 text-white hover:bg-gray-800 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer">
                  Download Brochure
                </div></a>
              </div>
            </div>
          </div>
        </div>
        <br />
       
      <Footer />
    </div>
  );
};

export default LNCTInstitutionsPage;