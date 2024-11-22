import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Smartphone, Building2, TreePine, Users2, ArrowRight } from 'lucide-react';

export function Footprint() {
  const [isScrolled, setIsScrolled] = React.useState(true);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={isScrolled} />
      
      {/* Footprint Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-900 to-green-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Footprint Platform
          </h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Track, manage, and amplify your environmental impact with Kenya's leading 
            tree-planting data platform.
          </p>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <Smartphone className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile App</h3>
                <p className="text-gray-600 mb-6">
                  Download our mobile app to track your individual contributions, join community 
                  events, and monitor your environmental impact in real-time.
                </p>
                <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                  Download Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <Building2 className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Access powerful tools to manage large-scale tree-planting initiatives, generate 
                  impact reports, and track your organization's environmental contributions.
                </p>
                <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                  Access Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-green-50 p-8 rounded-xl">
                <TreePine className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impact Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Monitor your contributions to Kenya's national tree-planting goals with detailed 
                  analytics and progress tracking.
                </p>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Progress to Goal</span>
                    <span className="text-green-600 font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <Users2 className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Features</h3>
                <p className="text-gray-600 mb-6">
                  Connect with other environmental champions, join local initiatives, and participate 
                  in community challenges.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">50K+</div>
                    <div className="text-gray-600 text-sm">Active Users</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">200+</div>
                    <div className="text-gray-600 text-sm">Monthly Events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}