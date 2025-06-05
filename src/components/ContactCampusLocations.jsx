import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const ContactCampusLocations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Admission Inquiry',
    message: ''
  });

  const [selectedCampus, setSelectedCampus] = useState(1);

  const campusLocations = [
    {
      id: 1,
      name: 'LNCT Bhopal',
      address: 'Kachhuf Nagar, Raisen Road, Bhopal, Madhya Pradesh - 462022',
      phone: '+91 755-6185300',
      color: 'bg-blue-500',
      icon: '📍',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889387.1306379174!2d75.8114580955954!3d22.345726898291034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c403aa0e35b89%3A0xbc3e9e7fc022f862!2sLakshmi%20Narain%20College%20of%20Technology%20%26%20Science%20(LNCTS)!5e0!3m2!1sen!2sin!4v1748968534083!5m2!1sen!2sin'
    },
    {
      id: 2,
      name: 'LNCT Indore',
      address: 'AB Road, Indore, Madhya Pradesh - 453331',
      phone: '+91 731-4201000',
      color: 'bg-red-500',
      icon: '📍',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.469933595183!2d75.81577664872064!3d22.714578635341187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb93a968c8f%3A0x61f3006e9ee73a2c!2sLnct%20Indore!5e0!3m2!1sen!2sin!4v1748968669213!5m2!1sen!2sin'
    },
    {
      id: 3,
      name: 'LNCT University',
      address: 'Kolar Road, Bhopal, Madhya Pradesh - 462042',
      phone: '+91 755-6185330',
      color: 'bg-green-500',
      icon: '🎓',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.799110136901!2d77.42513137437267!3d23.177531010529435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439eedfd261d%3A0xbda480b4e82fe8d7!2sLNCT%20University%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1748969377031!5m2!1sen!2sin'
    },
    {
      id: 4,
      name: 'JNCT Bhopal',
      address: 'Bhopal, Madhya Pradesh - 462003',
      phone: '+91 755-6185340',
      color: 'bg-yellow-500',
      icon: '📍',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.898501885067!2d77.41055797437728!3d23.319441105186392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c68e61ce99811%3A0xc7df8bdb6f8529e2!2sJai%20Narain%20College%20of%20Technology%20(JNCT)%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1748969471533!5m2!1sen!2sin'
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

  const handleCampusSelect = (campusId) => {
    setSelectedCampus(campusId);
  };

  const selectedCampusData = campusLocations.find(campus => campus.id === selectedCampus);

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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Selected Campus Info */}
              <div className="p-4 bg-white border-b">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {selectedCampusData?.name}
                </h3>
                <div className="flex items-start mb-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    {selectedCampusData?.address}
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                  <a
                    href={`tel:${selectedCampusData?.phone}`}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    {selectedCampusData?.phone}
                  </a>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="h-96 lg:h-[500px]">
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
                  />
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1  ">
            <div className="bg-slate-800 mt-2.5 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-orange-500 mr-2" />
                <h2 className="text-xl font-bold">Get In Touch</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your Name"
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
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Location Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campusLocations.map((location) => (
            <div
              key={location.id}
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                selectedCampus === location.id ? 'ring-2 ring-orange-500' : ''
              }`}
              onClick={() => handleCampusSelect(location.id)}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
              
              {selectedCampus === location.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-orange-600 font-medium">
                    📍 Currently viewing this campus
                  </p>
                </div>
              )}
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
              <button className="px-8 py-3  text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                <a className='' href="https://admissions.lnct.ac.in/">Apply Now</a> 
              </button>
              <button className="px-8 py-3 text-white bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
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