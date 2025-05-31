import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and Description Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded mr-3 flex items-center justify-center">
                <span className="">
                  <img className="w-full h-full object-cover"
                    src="https://www.admissionindia.net/uploads/colleges/31/logo-1.png"
                    alt="LNCT Logo"
                  />  
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">LNCT GROUP</h3>
                <p className="text-white text-sm font-medium">OF INSTITUTIONS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering education and innovation since 1993, creating leaders of tomorrow.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Facebook size={16} className="text-blue-400" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter size={16} className="text-sky-400" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Instagram size={16} className="text-pink-400" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin size={16} className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Admissions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Academics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Placements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Campus Life</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Programs Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Engineering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pharmacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Medical Sciences</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Computer Applications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Science & Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Diploma Courses</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className=''>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-orange-500 mt-0.5 ml-21 flex-shrink-0" />
                <a href="mailto:info@lnct.ac.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@lnct.ac.in
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-orange-500 mt-0.5 ml-20 flex-shrink-0" />
                <a href="tel:+917556185300" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 755-6185300
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-500 ml-10 mt-0.5 flex-shrink-0" />
                <address className="text-gray-400 text-sm not-italic">
                  Kalchuri Nagar, Raisen Road,<br />
                  Bhopal, Madhya Pradesh -<br />
                  462022
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2023 LNCT Group of Institutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;