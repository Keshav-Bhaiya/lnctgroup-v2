
import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Users, Award, Globe, ChevronDown, X, Calendar, MapPin, Clock } from 'lucide-react';
import AIChatbox from '../AIChatbox';
import Footer from '../Footer';

const LNCTHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
const images = [
  "https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-18.jpeg",
  "https://lnct.ac.in/wp-content/uploads/2021/05/ME-min-768x509.jpg",
  "https://lnct.ac.in/wp-content/uploads/2021/05/Civil-Eng-Images-min.jpg",
  "https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-15.jpeg"
];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);

const scrollToPrograms = () => {
  const programsSection = document.getElementById('programs-section');
  if (programsSection) {
    programsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'linear-gradient(135deg, #f97316 60%, #fbbf24 100%)',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 flex items-center justify-between min-h-screen relative z-10">
        {/* Left Content Section */}
        <div className={`w-1/2 pr-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full text-white text-sm font-medium mb-6 shadow-md">
            🎓 Excellence in Education Since 1994
          </div>
          
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-700 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
              LNCT Group
            </span>
            <br />
            <span className="text-gray-800">of Institutions</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Empowering minds, shaping futures, and creating tomorrow's innovators through world-class education and cutting-edge research.
          </p>
          
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <div 
            onClick={scrollToPrograms}
            className="group bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
            >
          <span className="flex items-center justify-center">
          Explore Programs
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          </div>
            <div className="border-2 border-orange-400 text-orange-600 hover:bg-orange-100 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300">
              <a className='' href="https://tour.lnct.ac.in/LNCT/">Virtual Tour</a>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { number: "50K+", label: "Alumni" },
              { number: "200+", label: "Faculty" },
              { number: "15+", label: "Programs" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Section */}
        
        <div className={`w-1/2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="relative">
            
            <div className="bg-gradient-to-br from-orange-50/80 to-yellow-50/60 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-orange-200">
             
              <div className="h-92 relative overflow-hidden">
        
      <div className="tier absolute inset-0 bg-gradient-to-b from-orange-200 via-yellow-300 to-orange-300">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Slide ${index}`}
      className={`absolute inset-0 object-cover object-left w-full h-full transition-opacity duration-1000 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    />
  ))}
</div>


              </div>
            </div>
        
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full shadow-lg animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AcademicPrograms = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('programs-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);


  const programs = [
    {
      id: 1,
      title: "Engineering & Technology",
      description: "Programs across multiple engineering disciplines with state-of-the-art laboratories and industry partnerships.",
      bgGradient: "from-orange-500 to-yellow-500",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/0014_Background.jpg",
      stats: "15+ Specializations",
      duration: "4 Years",
      location: "Main Campus",
      intake: "July 2025",
      apply: "https://lnct.ac.in/",
      fullDescription: "Our Engineering & Technology programs offer comprehensive education across 15+ specializations including Computer Science, Mechanical, Electrical, Civil, and emerging fields like AI/ML and Robotics. Students gain hands-on experience through industry partnerships, internships, and project-based learning.",
      highlights: [
        "State-of-the-art laboratories and equipment",
        "Industry partnerships with top companies",
        "100% placement assistance",
        "Research opportunities in emerging technologies",
        "International exchange programs"
      ]
    },
    {
      id: 2,
      title: "Medical",
      description: "Comprehensive medical education with hands-on clinical experience and advanced healthcare training facilities.",
      bgGradient: "from-yellow-500 to-orange-600",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/0005_Medicine.jpg",
      stats: "500+ Beds Hospital",
      duration: "5.5 Years",
      location: "Medical Campus",
      intake: "August 2025",
      apply: "https://lnctu.ac.in/ln-medical-college/",
      fullDescription: "Our MBBS program provides world-class medical education with extensive clinical training in our 500+ bed hospital. Students learn from experienced faculty and gain practical experience through patient care under supervision.",
      highlights: [
        "500+ bed multi-specialty hospital",
        "Advanced medical equipment and technology",
        "Experienced faculty with clinical expertise",
        "Comprehensive clinical training programs",
        "Research opportunities in medical sciences"
      ]
    },
    {
      id: 3,
      title: "Dentistry",
      description: "Premier dental education with modern clinics, specialized training, and patient care excellence.",
      bgGradient: "from-orange-600 to-yellow-600",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/0009_Dentistry.jpg",
      stats: "Modern Dental Clinic",
      duration: "5 Years",
      location: "Dental Campus",
      intake: "August 2025",
      apply: "https://www.lnctrishiraj.ac.in/",
      fullDescription: "Our BDS program offers comprehensive dental education with hands-on clinical experience in our modern dental clinic. Students learn latest techniques and technologies in dentistry while providing community dental care.",
      highlights: [
        "Modern dental clinic with latest equipment",
        "Comprehensive training in all dental specialties",
        "Community outreach programs",
        "Research in advanced dental materials",
        "Clinical exposure from second year"
      ]
    },
    {
      id: 4,
      title: "Management",
      description: "Business programs focusing on leadership, entrepreneurship, and strategic management with global perspectives.",
      bgGradient: "from-yellow-600 to-orange-700",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/0006_Management.jpg",
      stats: "100% Placement",
      duration: "2 Years",
      apply: "https://lnctu.ac.in/school-of-management/",
      location: "Business School",
      intake: "June 2025",
      fullDescription: "Our MBA program develops future business leaders through comprehensive curriculum covering all aspects of management. Strong industry connections ensure excellent placement opportunities across various sectors.",
      highlights: [
        "100% placement record",
        "Industry mentorship programs",
        "International business exposure",
        "Entrepreneurship development cell",
        "Corporate partnerships and internships"
      ]
    },
    {
      id: 5,
      title: "Law",
      description: "Comprehensive legal education with moot courts, legal clinics, and expertise in constitutional and corporate law.",
      bgGradient: "from-orange-600 to-yellow-700",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/0007_LAW-1.jpg",
      stats: "Moot Court Available",
      duration: "5 Years",
      location: "Law College",
      apply: "https://lnctu.ac.in/school-of-law/",
      intake: "July 2025",
      fullDescription: "Our integrated law program provides comprehensive legal education with practical training through moot courts, legal aid clinics, and internships with law firms and courts.",
      highlights: [
        "Well-equipped moot court facility",
        "Legal aid clinic for community service",
        "Internships with top law firms",
        "Guest lectures by eminent jurists",
        "Strong alumni network in judiciary"
      ]
    },
    {
      id: 6,
      title: "Architecture",
      apply: "https://lnctu.ac.in/school-of-architecture/",
      description: "Creative architectural programs with design studios, workshop facilities, and sustainable building practices.",
      bgGradient: "from-orange-700 to-yellow-700",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/0010_Architecture.jpg",
      stats: "Design Studios",
      duration: "5 Years",
      location: "Architecture Wing",
      intake: "July 2025",
      fullDescription: "Our B.Arch program combines creativity with technical knowledge, focusing on sustainable design practices. Students work on real projects and gain experience through internships with architectural firms.",
      highlights: [
        "Modern design studios and workshops",
        "Focus on sustainable architecture",
        "Industry collaborations on live projects",
        "Advanced CAD and modeling facilities",
        "Study tours to architectural marvels"
      ]
    },
    // Additional programs (initially hidden)
    {
      id: 7,
      title: "Science & Humanities",
      apply: "https://lnct.ac.in/lnct-and-science/",
      description: "Diverse programs in pure sciences and humanities with research opportunities and interdisciplinary approach.",
      bgGradient: "from-yellow-700 to-orange-800",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/boxImg_science_humanities.jpg",
      stats: "Research Labs",
      duration: "3-4 Years",
      location: "Science Block",
      intake: "June 2025",
      fullDescription: "Our science programs offer strong foundation in physics, chemistry, mathematics, and biology with emphasis on research and practical applications. Humanities programs develop critical thinking and communication skills.",
      highlights: [
        "Well-equipped research laboratories",
        "Faculty with research expertise",
        "Undergraduate research opportunities",
        "Interdisciplinary course options",
        "Preparation for competitive exams"
      ]
    },
    {
      id: 8,
      title: "Agriculture Sciences",
      apply: "https://lnctu.ac.in/school-of-agriculture/",
      description: "Practical agricultural education with experimental farms, modern techniques, and sustainable farming practices.",
      bgGradient: "from-green-600 to-orange-600",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/0011_Agriculture-Sciences.jpg",
      stats: "50+ Acre Farm",
      duration: "4 Years",
      location: "Agriculture Campus",
      intake: "July 2025",
      fullDescription: "Our agriculture program combines traditional farming knowledge with modern technology. Students gain practical experience on our 50+ acre experimental farm while learning sustainable farming practices.",
      highlights: [
        "50+ acre experimental farm",
        "Modern agricultural equipment",
        "Research in crop improvement",
        "Organic farming practices",
        "Extension activities with farmers"
      ]
    },
    {
      id: 9,
      title: "Pharmacy",
      apply:"https://lnct.ac.in/lnct-pharmacy/",
      description: "Comprehensive pharmaceutical education with modern labs, drug development facilities, and industry connections.",
      bgGradient: "from-orange-700 to-yellow-800",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/boxImg_pharmacy.jpg",
      stats: "Modern Lab Setup",
      duration: "4 Years",
      location: "Pharmacy Block",
      intake: "July 2025",
      fullDescription: "Our pharmacy program provides comprehensive education in pharmaceutical sciences with hands-on experience in drug development, quality control, and clinical pharmacy through modern laboratories.",
      highlights: [
        "State-of-the-art pharmaceutical labs",
        "Drug development research facilities",
        "Industry internships and placements",
        "Clinical pharmacy training",
        "Quality control and assurance labs"
      ]
    },
    {
      id: 10,
      title: "Nursing",
      apply:"https://lnctu.ac.in/school-of-nursing/",
      description: "Professional nursing education with clinical training, patient care excellence, and healthcare leadership development.",
      bgGradient: "from-pink-600 to-orange-600",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/boxImg_nursing.jpg",
      stats: "Clinical Training",
      duration: "4 Years",
      location: "Nursing College",
      intake: "August 2025",
      fullDescription: "Our nursing program prepares compassionate healthcare professionals through comprehensive theoretical knowledge and extensive clinical practice in hospitals and community health settings.",
      highlights: [
        "Extensive clinical training opportunities",
        "Modern simulation labs",
        "Community health programs",
        "International nursing standards",
        "Leadership development programs"
      ]
    },
    {
      id: 11,
      title: "Physiotherapy",
      apply:"https://lnctu.ac.in/master-physiotherapy-mpt-course/",
      description: "Comprehensive rehabilitation education with modern equipment, clinical practice, and sports medicine specialization.",
      bgGradient: "from-teal-600 to-orange-700",
      icon: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/boxImg_physiotheropy.jpg",
      stats: "Rehab Center",
      duration: "4.5 Years",
      location: "Allied Health Campus",
      intake: "August 2025",
      fullDescription: "Our physiotherapy program combines theoretical knowledge with hands-on clinical experience, preparing students to become skilled rehabilitation professionals in various healthcare settings.",
      highlights: [
        "Modern physiotherapy equipment",
        "Sports medicine specialization",
        "Clinical rotations in hospitals",
        "Community rehabilitation programs",
        "Research in movement sciences"
      ]
    },
    {
      id: 12,
      title: "Hotel Management",
      apply:"https://lnctu.ac.in/school-of-hotel-management/",
      description: "Hospitality education with practical training, industry exposure, and culinary arts specialization.",
      bgGradient: "from-orange-600 to-red-600",
      icon: "https://th.bing.com/th/id/OIP.fRgoSitinh2pUa1xOA8rjAHaEU?rs=1&pid=ImgDetMain",
      stats: "Training Hotel",
      duration: "4 Years",
      location: "Hospitality Campus",
      intake: "July 2025",
      fullDescription: "Our hotel management program provides comprehensive training in hospitality operations, culinary arts, and service excellence through our on-campus training hotel and industry partnerships.",
      highlights: [
        "On-campus training hotel",
        "Professional kitchen facilities",
        "Industry internships",
        "International hospitality exposure",
        "Culinary arts specialization"
      ]
    }
  ];

  // Determine which programs to show
  const visiblePrograms = showAllPrograms ? programs : programs.slice(0, 6);

  const ProgramModal = ({ program, onClose }) => {
    if (!program) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className={`bg-gradient-to-r ${program.bgGradient} p-6 text-white relative`}>
            <div
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-4">
              <img src="" alt="" />
              <div className="text-5xl"></div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{program.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {program.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {program.intake}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Program Overview</h3>
              <p className="text-gray-600 leading-relaxed">{program.fullDescription}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {program.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-4">
              
                <a className="flex-1 bg-orange-100 text-orange-700 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all cursor-pointer text-center" href={program.apply}>  Apply Now</a>
              
             
              
                <a className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all cursor-pointer text-center" href="https://lnct.ac.in/wp-content/uploads/2025/03/LNCT-Brochure.pdf">Download Brochure</a>
           
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="programs-section" className="bg-gradient-to-br from-blue-100 via-orange-50 to-blue-400 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full text-white text-sm font-medium mb-6">
            ✨ Academic Excellence
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Discover Your
            <span className="bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"> Perfect Program</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of world-class programs designed to shape tomorrow's leaders and innovators.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePrograms.map((program, index) => (
            <div
              key={program.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-15`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-6xl transform transition-all duration-300 ${hoveredProgram === program.id ? 'scale-105 ' : 'scale-100'}`}>
                    <img className='object-cover w-full h-full object-top' src={program.icon} alt="" />
                    
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-orange-400 rounded-full transition-all duration-1000 ${
                        hoveredProgram === program.id ? 'opacity-60 scale-100' : 'opacity-0 scale-0'
                      }`}
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${20 + (i * 10)}%`,
                        transitionDelay: `${i * 100}ms`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {program.title}
                  </h3>
                  <div className={`px-3 py-1 bg-gradient-to-r ${program.bgGradient} text-white text-xs rounded-full font-medium`}>
                    {program.stats}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <div
                    onClick={() => setSelectedProgram(program)}
                    className="flex-1 group/btn inline-flex items-center justify-center text-orange-700 hover:text-orange-800 font-medium text-sm transition-all duration-200 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-lg cursor-pointer"
                  >
                    <span className="relative">
                      View More
                    </span>
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                 
                  <a className="px-4 py-2 bg-orange-100 text-white text-sm rounded-lg font-medium hover:shadow-lg transition-all cursor-pointer" href={program.apply}>Apply</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAllPrograms && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllPrograms(true)}
              className="group bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                View More Programs
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </div>
        )};

        {/* View Less Button */}
        {showAllPrograms && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllPrograms(false)}
              className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                View Less Programs
                <ChevronDown className="ml-2 w-5 h-5 transform rotate-180 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </div>
        )};

        {/* CTA Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-900 to-stone-900 rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-slate-400/10 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-slate-400/10 to-stone-400/10 rounded-full transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Shape Your Future?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their lives through our world-class education programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://admissions.lnct.ac.in/">
                <div className="group bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                  <span className="flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div></a>
                <a href="https://lnct.ac.in/wp-content/uploads/2025/03/LNCT-Brochure.pdf">
                <div className="border-2 border-orange-400 text-orange-600 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer">
                  Download Brochure
                </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )};
    </div>
  );
};

const ProgramsPage = () => {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div className="font-sans">
      <LNCTHero />
      <AcademicPrograms />
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

export default ProgramsPage;