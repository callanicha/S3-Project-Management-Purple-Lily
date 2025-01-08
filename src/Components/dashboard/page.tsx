'use client';

import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const flowerTypeData = {
  labels: ['Roses', 'Lilies', 'Tulips', 'Sunflowers', 'Orchids'],
  datasets: [
    {
      data: [400, 300, 300, 200, 150],
      backgroundColor: [
        '#ffebf5',
        '#ffd1e8',
        '#ffb8db',
        '#ff9ecf',
        '#ff85c2'
      ],
    },
  ],
};

const stylePreferenceData = {
  labels: ['Classic', 'Modern', 'Rustic', 'Exotic', 'Minimalist'],
  datasets: [
    {
      label: 'Style Preferences',
      data: [30, 25, 20, 15, 10],
      backgroundColor: 'rgba(255,209,232,0.8)',
    },
  ],
};

const occasionData = {
  labels: ['Birthday', 'Anniversary', 'Wedding', 'Sympathy', 'Get Well'],
  datasets: [
    {
      label: 'Occasions',
      data: [120, 80, 60, 40, 30],
      backgroundColor: 'rgba(233,209,255,0.8)',
    },
  ],
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('flower-types');

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-purple-800 text-center">Questionnaire Insights Dashboard</h1>
        
        {/* Button Navigation */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => setActiveTab('flower-types')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 
              border-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
              ${activeTab === 'flower-types'
                ? 'bg-pink-100 border-pink-400 text-purple-800 shadow-pink-200'
                : 'bg-white border-purple-200 text-purple-600 hover:border-pink-300 hover:bg-pink-50'
              }`}>
                Flower Types
          </button>
          <button
            onClick={() => setActiveTab('style-preferences')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 
              border-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
              ${activeTab === 'style-preferences'
                ? 'bg-pink-100 border-pink-400 text-purple-800 shadow-pink-200'
                : 'bg-white border-purple-200 text-purple-600 hover:border-pink-300 hover:bg-pink-50'
              }`}
          >
            Style Preferences
          </button>
          <button
            onClick={() => setActiveTab('occasions')}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 
              border-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
              ${activeTab === 'occasions'
                ? 'bg-pink-100 border-pink-400 text-purple-800 shadow-pink-200'
                : 'bg-white border-purple-200 text-purple-600 hover:border-pink-300 hover:bg-pink-50'
              }`}
          >
            Occasions
          </button>
        </div>

        {/* Chart Content */}
        <div className="bg-white p-4 rounded-lg shadow">
          {activeTab === 'flower-types' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Popular Flower Types</h2>
              <div style={{ height: '300px' }}>
                <Pie data={flowerTypeData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          )}
          
          {activeTab === 'style-preferences' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Style Preferences</h2>
              <div style={{ height: '300px' }}>
                <Bar 
                  data={stylePreferenceData}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>
            </div>
          )}
          
          {activeTab === 'occasions' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Popular Occasions</h2>
              <div style={{ height: '300px' }}>
                <Bar 
                  data={occasionData}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
