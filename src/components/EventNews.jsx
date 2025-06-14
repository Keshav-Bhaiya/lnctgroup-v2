import React, { useState } from 'react';
import { Calendar, ArrowRight, Users, Code, GraduationCap } from 'lucide-react';

const EventsNews = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filters = ['All', 'Events', 'News', 'Achievements'];

  const events = [
    {
      id: 1,
      title: 'Annual Technology Festival',
      date: 'May 15-17, 2023',
      category: 'Tech Fest',
      type: 'Events',
      description: 'A three-day extravaganza showcasing student innovations, competitions, and industry expert talks.',
      image: 'https://webo360solutions.com/wp-content/uploads/2024/06/it-developer-close-up.webp',
      bgColor: 'from-orange-500 to-red-500',
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'CodeCraft 2023: 36-Hour Hackathon',
      date: 'June 10-11, 2023',
      category: 'Hackathon',
      type: 'Events',
      description: 'An intensive coding challenge with industry mentors and exciting prizes for innovative solutions.',
      image: 'https://th.bing.com/th/id/OIP.S9_0rarbDLkwyo47orJuogHaEK?rs=1&pid=ImgDetMain',
      bgColor: 'from-blue-500 to-purple-500',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Annual Convocation Ceremony 2023',
      date: 'April 28, 2023',
      category: 'Convocation',
      type: 'Achievements',
      description: 'Celebrating the achievements of our graduating and talented students with distinguished guests and speakers.',
      image: 'https://th.bing.com/th/id/OIP.gQ6ghIvlYUWHTUIU7W8mGwHaD6?rs=1&pid=ImgDetMain',
      bgColor: 'from-green-500 to-teal-500',
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const filteredEvents = activeFilter === 'All' ? events : events.filter(event => event.type === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Latest Updates
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Events & News
          </h1>
          <p className=" text-gray-600 ">
            Stay updated with the latest happenings, events, and achievements across LNCT Group institutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex gap-2">
              {filters.map((filter) => (
                <div
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {filter}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-16">
          {filteredEvents.map((evt, index) => (
            <div
              key={evt.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === evt.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(evt.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={evt.image} 
                  alt={evt.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-90" />
                <div className="absolute inset-0 bg-opacity-20" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-2 bg-white bg-opacity-90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {evt.icon}
                    {evt.category}
                  </span>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-2 text-white text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {evt.date}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {evt.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {evt.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <a href="https://lnct.ac.in/recent-events/">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-3 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 transform hover:scale-105 transition-all duration-300 group">
            <Calendar className="w-5 h-5" />
            View All Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          </a>
        </div>

        {/* Floating Background Elements */}
        
      </div>
    </div>
  );
};

export default EventsNews;