import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PlacementsOverview = () => {
  const [selectedCampus, setSelectedCampus] = useState('All Campuses');

  // Data for different campuses
  const campusData = {
    'All Campuses': {
      placementRate: '95%',
      highestPackage: '₹1.12 Cr',
      averagePackage: '₹6 LPA',
      recruiters: '300+',
      offers: '1000+',
      csPlacement: '95%',
      overallPlacement: '85%',
      barData: [
        { name: 'CS/IT', placement: 95, package: 8.5 },
        { name: 'Mechanical', placement: 80, package: 5.2 },
        { name: 'Civil', placement: 75, package: 4.8 },
        { name: 'Electrical', placement: 85, package: 6.0 },
        { name: 'Electronics', placement: 88, package: 6.5 }
      ],
      pieData: [
        { name: 'Placed', value: 85 },
        { name: 'Higher Studies', value: 10 },
        { name: 'Unplaced', value: 5 }
      ]
    },
    'LNCT Bhopal': {
      placementRate: '90%',
      highestPackage: '₹48 L',
      averagePackage: '₹6.2 L',
      recruiters: '200+',
      offers: '800+',
      csPlacement: '95%',
      overallPlacement: '90%',
      barData: [
        { name: 'CS/IT', placement: 95, package: 8.0 },
        { name: 'Mechanical', placement: 75, package: 4.5 },
        { name: 'Civil', placement: 70, package: 4.2 },
        { name: 'Electrical', placement: 80, package: 5.5 },
        { name: 'Electronics', placement: 85, package: 6.0 }
      ],
      pieData: [
        { name: 'Placed', value: 90 },
        { name: 'Higher Studies', value: 7 },
        { name: 'Unplaced', value: 3 }
      ]
    },
    'LNCT Indore': {
      placementRate: '75%',
      highestPackage: '₹4.5 L',
      averagePackage: '₹2.4 L',
      recruiters: '80+',
      offers: '300+',
      csPlacement: '80%',
      overallPlacement: '75%',
      barData: [
        { name: 'CS/IT', placement: 80, package: 3.5 },
        { name: 'Mechanical', placement: 60, package: 2.0 },
        { name: 'Civil', placement: 65, package: 2.2 },
        { name: 'Electrical', placement: 70, package: 2.8 },
        { name: 'Electronics', placement: 75, package: 3.0 }
      ],
      pieData: [
        { name: 'Placed', value: 75 },
        { name: 'Higher Studies', value: 15 },
        { name: 'Unplaced', value: 10 }
      ]
    },
    'LNCT University': {
      placementRate: '88%',
      highestPackage: '₹12 L',
      averagePackage: '₹3.5 L',
      recruiters: '150+',
      offers: '600+',
      csPlacement: '90%',
      overallPlacement: '88%',
      barData: [
        { name: 'CS/IT', placement: 90, package: 5.5 },
        { name: 'Mechanical', placement: 82, package: 3.0 },
        { name: 'Civil', placement: 78, package: 2.8 },
        { name: 'Electrical', placement: 85, package: 3.8 },
        { name: 'Electronics', placement: 87, package: 4.2 }
      ],
      pieData: [
        { name: 'Placed', value: 88 },
        { name: 'Higher Studies', value: 8 },
        { name: 'Unplaced', value: 4 }
      ]
    }
  };

  const currentData = campusData[selectedCampus];
  const COLORS = ['#6366f1', '#22d3ee', '#f43f5e'];

  return (
    <div id="placements-overview" className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-blue-50 p-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">
          Placements Overview
        </h1>
        <p className="text-center text-slate-600 ">
          Empowering students with exceptional career opportunities through partnerships with industry leaders
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              {currentData.highestPackage}
            </div>
            <div className="text-slate-600 text-sm font-medium">Highest Package</div>
          </div>
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3">
              {currentData.offers}
            </div>
            <div className="text-slate-600 text-sm font-medium">Offers in 2024</div>
          </div>
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
              {currentData.recruiters}
            </div>
            <div className="text-slate-600 text-sm font-medium">Recruiters</div>
          </div>
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              {currentData.csPlacement}
            </div>
            <div className="text-slate-600 text-sm font-medium">CS/IT Placement</div>
          </div>
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3">
              {currentData.overallPlacement}
            </div>
            <div className="text-slate-600 text-sm font-medium">Overall Placement</div>
          </div>
          <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20 hover:scale-105">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-3">
              {currentData.averagePackage}
            </div>
            <div className="text-slate-600 text-sm font-medium">Average Package</div>
          </div>
        </div>

        {/* Campus Selection Buttons */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {Object.keys(campusData).map((campus) => (
            <div
              key={campus}
              onClick={() => setSelectedCampus(campus)}
              className={`px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm ${
                selectedCampus === campus
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-white/60 border border-slate-200 text-slate-700 hover:bg-white/80 hover:shadow-lg hover:scale-105'
              }`}
            >
              {campus}
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bar Chart - Branch-wise Placement */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Branch-wise Placement Rate</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart className='text-black' data={currentData.barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'placement' ? `${value}%` : `₹${value}L`,
                    name === 'placement' ? 'Placement Rate' : 'Avg Package'
                  ]}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar 
                  dataKey="placement" 
                  fill="url(#barGradient)" 
                  name="placement"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Overall Status */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Student Status Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={currentData.pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelStyle={{ fontSize: '12px', fontWeight: '600' }}
                >
                  {currentData.pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Percentage']}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Placement Statistics */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-slate-800 mb-10">Placement Statistics - {selectedCampus}</h2>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {currentData.placementRate}
                </div>
                <div className="text-slate-600 font-medium">Placement Rate</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {currentData.highestPackage}
                </div>
                <div className="text-slate-600 font-medium">Highest Package</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {currentData.averagePackage}
                </div>
                <div className="text-slate-600 font-medium">Average Package</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {currentData.recruiters}
                </div>
                <div className="text-slate-600 font-medium">Recruiters</div>
              </div>
            </div>

            {/* Package Distribution Bar Chart */}
            <div className="mt-10 ">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Average Package by Branch</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart className='text-black' data={currentData.barData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" stroke="#64748b" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    formatter={(value) => [`₹${value}L`, 'Average Package']}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar 
                    dataKey="package" 
                    fill="url(#horizontalBarGradient)"
                    radius={[0, 4, 4, 0]}
                  />
                  <defs>
                    <linearGradient id="horizontalBarGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Recruiters */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-bold text-slate-800">Our Top Recruiters</h2>
              <a href="https://lnct.ac.in/placement-records/">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 flex items-center gap-2 font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:scale-105">
                View All <span className="text-lg">→</span>
              </button>
              </a>
            </div>
            
            {/* Company logos grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { name: 'TCS', color: 'from-blue-600 to-blue-700' },
                { name: 'INFOSYS', color: 'from-cyan-600 to-cyan-700' },
                { name: 'WIPRO', color: 'from-purple-600 to-purple-700' },
                { name: 'COGNIZANT', color: 'from-indigo-600 to-indigo-700' },
                { name: 'IBM', color: 'from-slate-600 to-slate-700' },
                { name: 'ACCENTURE', color: 'from-violet-600 to-violet-700' },
                { name: 'HCL', color: 'from-emerald-600 to-emerald-700' },
                { name: 'TCS PRIME', color: 'from-teal-600 to-teal-700' },
                { name: 'CAPGEMINI', color: 'from-rose-600 to-rose-700' },
                { name: 'MICROSOFT', color: 'from-amber-600 to-amber-700' },
                { name: 'AMAZON', color: 'from-orange-600 to-orange-700' }
              ].slice(0, 9).map((company, index) => (
                <div key={index} className="group flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-100 hover:scale-105">
                  <span className={`bg-gradient-to-r ${company.color} bg-clip-text text-transparent font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {company.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-l-4 border-gradient-to-b border-indigo-500 p-6 rounded-r-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  R
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 italic mb-4 leading-relaxed">
                    "The placement cell at LNCT provided excellent opportunities and guidance. I received multiple job offers and landed my dream role at Microsoft."
                  </p>
                  <div>
                    <div className="font-semibold text-slate-800">Rahul Sharma</div>
                    <div className="text-slate-600 text-sm">B.Tech CSE, Batch of 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementsOverview;