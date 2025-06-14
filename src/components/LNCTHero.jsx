import { Building2, Edit, Briefcase } from "lucide-react"
import { Link } from "react-router-dom"
import AIChatbox from "./AIChatbox"

const LNCTHero = ({ videoSrc }) => {
  return (
    <div className=" h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Background Overlay */}
      <div className="absolute mb-[-2px] md:mb-[-62px]  inset-0 bg-gradient-to-b from-[#14283c99] to-[#14283c99]" />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="max-w-4xl text-center">
            {/* Responsive Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              One Vision, Many Campuses —
              <br />
              <span className="text-orange-500">LNCT Group</span>
            </h1>

            {/* Responsive Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4 sm:px-0">
              Uniting 10+ Institutions, 100+ Programs, and 100K+ Students
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Across India
            </p>

            {/* Responsive Button Group */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Link to="/campuses" className="w-full sm:w-auto">
                <div className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 min-w-[200px] sm:min-w-0">
                  <Building2 size={18} />
                  Explore All Campuses
                </div>
              </Link>

              <a
                href="https://admissions.lnct.ac.in/"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white hover:bg-gray-50 text-red-400 px-4 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 min-w-[200px] sm:min-w-0">
                  <Edit size={18} />
                  Apply Now
                </div>
              </a>

              <Link to="/departments" className="w-full sm:w-auto">
                <div className="bg-gray-700 hover:bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 min-w-[200px] sm:min-w-0">
                  <Briefcase size={18} />
                  See Departments
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Help Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
        <div className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <AIChatbox />
        </div>
      </div>
    </div>
  )
}

export default LNCTHero