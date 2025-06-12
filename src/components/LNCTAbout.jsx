import React from "react"
import { Building2, GraduationCap, Award, Lightbulb } from "lucide-react"
import AIChatbox from "./AIChatbox"

const LNCTAbout = () => {
  return (
    <div
      id="lnctabout"
      className="bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-3 sm:mb-4 tracking-tight">
            About <span className="text-orange-500">LNCT Group</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium px-4 sm:px-0">
            A legacy of excellence in education, research, and innovation since 1994.
          </p>
        </div>

        {/* Main Content */}
        <div className="backdrop-blur-lg bg-white/70 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 transition-all duration-300 hover:scale-[1.01]">
          {/* Left Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">🌟 Our Journey</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              Founded in 1994, LNCT Group has grown from a single engineering college to a diverse educational
              conglomerate with multiple campuses across India. Our mission is to provide quality education that
              empowers students to become industry-ready professionals and innovative thinkers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {[
                ["10+", "Institutions"],
                ["100+", "Programs"],
                ["100K+", "Alumni"],
                ["2000+", "Faculty"],
              ].map(([value, label], idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-md rounded-lg sm:rounded-xl p-3 sm:p-4 text-center transform hover:scale-105 transition duration-300"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-1">{value}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div className="relative order-1 lg:order-2">
            {/* Vertical Line - Hidden on mobile, shown on larger screens */}
            <div className="hidden sm:block absolute left-6 top-4 bottom-4 w-0.5 bg-orange-200"></div>

            {/* Timeline Events */}
            <div className="space-y-6 sm:space-y-8">
              {[
                { year: "1994", text: "Establishment of LNCT campus in Bhopal", icon: <Building2 /> },
                { year: "2003", text: "Expansion with LNCT University", icon: <GraduationCap /> },
                { year: "2010", text: "Received A+ NAAC Accreditation", icon: <Award /> },
                { year: "2020", text: "Launch of Innovation & Incubation Hub", icon: <Lightbulb /> },
              ].map((event, idx) => (
                <div key={idx} className="relative flex items-start sm:items-center group">
                  {/* Icon */}
                  <div className="relative z-10 bg-orange-500 rounded-full p-2 sm:p-3 text-white shadow-md transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {React.cloneElement(event.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                  </div>

                  {/* Year and Event Text */}
                  <div className="ml-4 sm:ml-6 flex-1">
                    <div className="text-xs sm:text-sm font-bold text-orange-600 mb-1">{event.year}</div>
                    <div className="text-gray-700 text-sm sm:text-base leading-relaxed">{event.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Help button - Responsive positioning */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-semibold">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          <AIChatbox />
        </div>
      </div>
    </div>
  )
}

export default LNCTAbout
