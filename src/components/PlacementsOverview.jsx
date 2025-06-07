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
  const COLORS = ['#f97316', '#3b82f6', '#ef4444'];

  return (
    <div id="placements-overview" className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Placements Overview</h1>
        <p className="text-gray-600">Our students are recruited by leading companies across industries.</p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{currentData.highestPackage}</div>
            <div className="text-gray-600 text-sm">Highest Package</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{currentData.offers}</div>
            <div className="text-gray-600 text-sm">Offers in 2024</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{currentData.recruiters}</div>
            <div className="text-gray-600 text-sm">Recruiters</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{currentData.csPlacement}</div>
            <div className="text-gray-600 text-sm">CS/IT Placement</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{currentData.overallPlacement}</div>
            <div className="text-gray-600 text-sm">Overall Placement</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{currentData.averagePackage}</div>
            <div className="text-gray-600 text-sm">Average Package</div>
          </div>
        </div>

        {/* Campus Selection Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {Object.keys(campusData).map((campus) => (
            <button
              key={campus}
              onClick={() => setSelectedCampus(campus)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                selectedCampus === campus
                  ? 'bg-gray-800 text-white'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {campus}
            </button>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bar Chart - Branch-wise Placement */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Branch-wise Placement Rate</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentData.barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'placement' ? `${value}%` : `₹${value}L`,
                    name === 'placement' ? 'Placement Rate' : 'Avg Package'
                  ]}
                />
                <Bar dataKey="placement" fill="	#3b82f6" name="placement" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Overall Status */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Status Distribution</h2>
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
                >
                  {currentData.pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Placement Statistics */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Placement Statistics - {selectedCampus}</h2>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{currentData.placementRate}</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{currentData.highestPackage}</div>
                <div className="text-gray-600">Highest Package</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{currentData.averagePackage}</div>
                <div className="text-gray-600">Average Package</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{currentData.recruiters}</div>
                <div className="text-gray-600">Recruiters</div>
              </div>
            </div>

            {/* Package Distribution Bar Chart */}
            <div className="mt-8 ">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Average Package by Branch</h3>
              <ResponsiveContainer width="100%"  height={200}>
                <BarChart data={currentData.barData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip formatter={(value) => [`₹${value}L`, 'Average Package']} />
                  <Bar dataKey="package" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Recruiters */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Our Top Recruiters</h2>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2">
                View All <span>→</span>
              </button>
            </div>
            
            {/* Company logos grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-600 font-bold text-lg">TCS</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-500 font-bold text-lg">INFOSYS</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-purple-600 font-bold text-lg">WIPRO</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-500 font-bold text-lg">COGNIZANT</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-600 font-bold text-lg">IBM</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-purple-600 font-bold text-lg">ACCENTURE</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-500 font-bold text-lg">HCL</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-600 font-bold text-lg">TCS PRIME</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-blue-600 font-bold text-lg">CAPGEMINI</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-purple-600 font-bold text-lg">MICROSOFT</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <span className="text-purple-600 font-bold text-lg">AMAZON</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 italic mb-3">
                    "The placement cell at LNCT provided excellent opportunities and guidance. I received multiple job offers and landed my dream role at Microsoft."
                  </p>
                  <div>
                    <div className="font-semibold text-gray-800">Rahul Sharma</div>
                    <div className="text-gray-600 text-sm">B.Tech CSE, Batch of 2022</div>
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