import React from 'react';
import { Star, Calendar, Bell, GraduationCap, MapPin, Users, Building2 } from 'lucide-react';

const LNCTSections = () => {
  // Alumni testimonials data
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Senior Engineer, Google",
      batch: "Batch of 2015",
      image: "https://i.pinimg.com/736x/e6/92/15/e692151bfc86c7d523697aa0dbd1a5d0.jpg",
      quote: "The foundation I received at LNCT prepared me for global challenges and helped me secure my dream job at Google.",
      bgColor: "bg-white/70"
    },
    {
      name: "Priya Patel",
      role: "Product Manager, Microsoft",
      batch: "Batch of 2016",
      image: "https://i.pinimg.com/736x/6a/9d/9d/6a9d9d28137be97147a827dddf3437d9.jpg",
      quote: "The project-based learning and industry exposure at LNCT gave me the skills to excel in product management at Microsoft.",
      bgColor: "bg-white/70"
    },
    {
      name: "Ajay Verma",
      role: "Founder & CEO, TechSolutions",
      batch: "Batch of 2012",
      image: "https://i.pinimg.com/736x/48/6f/23/486f2396c4a7928ddee07ca627066fe3.jpg",
      quote: "The entrepreneurial mindset I developed at LNCT's incubation center was instrumental in launching my successful startup.",
      bgColor: "bg-white/70"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-100" id="lnct-alumni-section">
      {/* Mobile Experience Section */}
      <section className="py-10 sm:py-14 lg:py-20 px-2 sm:px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-lg bg-white/70 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:px-10 lg:py-2 transition-all duration-300 hover:scale-[1.01]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-5 sm:space-y-7 order-2 lg:order-1">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-2 sm:mb-3 tracking-tight">
                    LNCT <span className="text-orange-400">Mobile Experience</span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                    Access everything you need on the go with our comprehensive mobile 
                    app designed for students, parents, and alumni.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-orange-500 p-2 sm:p-2.5 md:p-3 rounded-xl shadow-md flex-shrink-0">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-xs sm:text-sm md:text-base">Attendance Tracking</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Real-time attendance monitoring and reports.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-orange-500 p-2 sm:p-2.5 md:p-3 rounded-xl shadow-md flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-xs sm:text-sm md:text-base">Results & Grades</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Instant access to examination results and performance analytics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-orange-500 p-2 sm:p-2.5 md:p-3 rounded-xl shadow-md flex-shrink-0">
                      <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-xs sm:text-sm md:text-base">Notifications</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Important announcements and updates from administration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-orange-500 p-2 sm:p-2.5 md:p-3 rounded-xl shadow-md flex-shrink-0">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-gray-800 mb-1 text-xs sm:text-sm md:text-base">Event Calendar</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Stay updated with upcoming events and academic schedule.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col pb-2 sm:flex-row gap-2 sm:gap-3 pt-2">
                  <a href="https://apps.apple.com/gb/app/the-lnct-group/id1671432042" className="flex-1">
                    <div className="bg-gray-800 text-white py-2 sm:py-2.5 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors shadow-md">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left min-w-0">
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.schoolmanagemnetapp.LNCTUniversity&hl=en-US" className="flex-1">
                    <div className="bg-gray-800 text-white py-2 sm:py-2.5 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors shadow-md">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left min-w-0">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Side - Phone Mockup */}
              <div className="flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-2xl w-full max-w-[320px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                  <div className="bg-black rounded-lg sm:rounded-xl p-1">
                    <div className="aspect-[9/16] h-[50vw] max-h-[420px] w-full overflow-hidden rounded-md sm:rounded-lg">
                      <img 
                        className='w-full h-full object-cover' 
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/64b87746fd-bad6de22042e12b6ffde.png" 
                        alt="LNCT Mobile App Interface"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-10xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Alumni & <span className="text-orange-500">Global Reach</span>
            </h1>
            <p className="text-lg text-gray-600">
              Our alumni network spans across the globe, making significant contributions in various industries.
            </p>
          </div>

          {/* Global Footprint Card */}
          <div className="mb-16">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(20, 40, 60, 0.6), rgba(20, 40, 60, 0.6)), url('https://storage.googleapis.com/uxpilot-auth.appspot.com/dc26245f0a-b84038cc3eeed04985f8.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
              }}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                {/* Simulated world map dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>

              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-white space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Global Footprint</h3>
                    <p className="text-blue-100 text-lg leading-relaxed font-medium">
                      LNCT alumni are making their mark in over 40 countries 
                      across 6 continents, leading innovation and excellence.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl lg:text-4xl font-extrabold text-orange-500">50K+</span>
                        <span className="text-blue-100 font-medium">Alumni Network</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl lg:text-4xl font-extrabold text-orange-500">40+</span>
                        <span className="text-blue-100 font-medium">Countries</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl lg:text-4xl font-extrabold text-orange-500">500+</span>
                        <span className="text-blue-100 font-medium">Global Companies</span>
                      </div>
                    </div>
                  </div>

                  {/* World Map Visualization */}
                  <div className="relative h-64 lg:h-80">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-600/20 rounded-lg"></div>
                    <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                      {/* Simplified world map outline */}
                      
                      {/* Glowing dots for major cities */}
                      <circle cx="150" cy="180" r="4" fill="#f97316" className="animate-pulse"/>
                      <circle cx="280" cy="160" r="4" fill="#f97316" className="animate-pulse"/>
                      <circle cx="450" cy="190" r="4" fill="#f97316" className="animate-pulse"/>
                      <circle cx="580" cy="170" r="4" fill="#f97316" className="animate-pulse"/>
                      <circle cx="650" cy="200" r="4" fill="#f97316" className="animate-pulse"/>
                      <circle cx="200" cy="280" r="4" fill="#f97316" className="animate-pulse"/>
                      <circle cx="380" cy="300" r="4" fill="#f97316" className="animate-pulse"/>
                      <circle cx="520" cy="290" r="4" fill="#f97316" className="animate-pulse"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alumni Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`${testimonial.bgColor} backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden shadow-md">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.batch}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Join Alumni Network Button */}
          <a href="https://lnct.ac.in/alumni-cell/">
          <div className="text-center text-white  mt-12">
            <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-full  flex items-center space-x-3 mx-auto shadow-xl transform hover:scale-105 transition-all duration-300">
              <Users className="w-5 h-5" />
              <span className=''>Join Alumni Network </span>
            </button>
          </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LNCTSections;