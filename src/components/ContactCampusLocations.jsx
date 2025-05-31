import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const ContactCampusLocations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Admission Inquiry',
    message: ''
  });

  const campusLocations = [
    {
      id: 1,
      name: 'LNCT Bhopal',
      address: 'Kachhuf Nagar, Raisen Road, Bhopal, Madhya Pradesh - 462022',
      phone: '+91 755-6185300',
      color: 'bg-blue-500',
      icon: '📍'
    },
    {
      id: 2,
      name: 'LNCT Indore',
      address: 'AB Road, Indore, Madhya Pradesh - 453331',
      phone: '+91 731-4201000',
      color: 'bg-red-500',
      icon: '📍'
    },
    {
      id: 3,
      name: 'LNCT University',
      address: 'Kolar Road, Bhopal, Madhya Pradesh - 462042',
      phone: '+91 755-6185330',
      color: 'bg-green-500',
      icon: '🎓'
    },
    {
      id: 4,
      name: 'JNCT Rewa',
      address: 'Rewa-Satna Highway, Rewa, Madhya Pradesh - 486001',
      phone: '+91 7662-241000',
      color: 'bg-yellow-500',
      icon: '📍'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact & Campus Locations
          </h1>
          <p className="text-gray-600 text-lg">
            Get in touch with us or visit our campuses to experience the LNCT difference.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 lg:h-full">
              {/* Map Placeholder - In real implementation, integrate Google Maps */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gray-200 opacity-20"></div>
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">Interactive Map</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Click "View larger map" to explore all campus locations
                  </p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    View larger map
                  </button>
                </div>
                
                {/* Location Markers */}
                <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-32 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-orange-500 mr-2" />
                <h2 className="text-xl font-bold">Get In Touch</h2>
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                  >
                    <option value="Admission Inquiry">Admission Inquiry</option>
                    <option value="General Information">General Information</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Campus Location Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className={`w-10 h-10 ${location.color} rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0`}>
                  <span className="text-lg">{location.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    {location.name}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {location.address}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                  <a
                    href={`tel:${location.phone}`}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have chosen LNCT for their higher education. 
              Contact us today to learn more about our programs and admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Apply Now
              </button>
              <button className="px-8 py-3 text-white bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCampusLocations;