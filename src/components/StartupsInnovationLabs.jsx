import React from 'react';
import { Lightbulb, Rocket, Glasses } from 'lucide-react';

const StartupsInnovationLabs = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-orange-500">Startups & Innovation Labs</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Fostering entrepreneurship and innovation through state-of-the-art facilities and mentorship programs.
        </p>
      </div>

      {/* Top Three Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* LNCT Innovation Hub */}
        <div className="bg-slate-700 rounded-lg p-6">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">LNCT Innovation Hub</h3>
          <p className="text-gray-300 mb-4">
            A dedicated space for students to ideate, prototype, and launch their innovative projects with expert guidance.
          </p>
          <div className="flex items-center text-orange-500 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            LNCT Bhopal
          </div>
        </div>

        {/* Startup Incubator */}
        <div className="bg-slate-700 rounded-lg p-6">
          <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">Startup Incubator</h3>
          <p className="text-gray-300 mb-4">
            Providing infrastructure, funding, and mentorship to help student startups grow from concept to market.
          </p>
          <div className="flex items-center text-orange-500 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            LNCT University
          </div>
        </div>

        {/* AR/VR Research Lab */}
        <div className="bg-slate-700 rounded-lg p-6">
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
            <Glasses className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3">AR/VR Research Lab</h3>
          <p className="text-gray-300 mb-4">
            A state-of-the-art facility for advanced research and development in augmented and virtual reality (AR/VR) technologies.
          </p>
          <div className="flex items-center text-orange-500 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            LNCT Indore
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-700 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Success Stories */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-300 mb-6">
                Our students have launched successful startups that have received national recognition and venture funding.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">EcoTech Solutions</h4>
                    <p className="text-gray-300 text-sm">Sustainable energy solutions startup, raised ₹2 Crore funding</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">MediConnect</h4>
                    <p className="text-gray-300 text-sm">Healthcare tech platform connecting patients with specialists</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">AgriTech Innovations</h4>
                    <p className="text-gray-300 text-sm">Smart farming solutions using IoT and AI</p>
                  </div>
                </div>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium">
                Join Our Incubator Program
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="w-full h-80 bg-gray-600 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Students working together in innovation lab"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupsInnovationLabs;