import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Building2, ArrowRight } from 'lucide-react';

export function FootprintCTA() {
  return (
    <section className="py-20 bg-green-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Footprint Today
          </h2>
          <p className="text-green-50 text-lg max-w-2xl mx-auto">
            Whether you're an individual or an organization, be part of Kenya's largest 
            tree-planting data platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white hover:bg-white/20 transition">
            <Smartphone className="h-12 w-12 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Individual Contributors</h3>
            <p className="text-green-50 mb-6">
              Download the Footprint mobile app to track your tree-planting journey, 
              join community events, and contribute to a greener Kenya.
            </p>
            <Link to="/footprint" className="flex items-center text-white hover:text-green-300 transition">
              Download App <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white hover:bg-white/20 transition">
            <Building2 className="h-12 w-12 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Organizations & Corporates</h3>
            <p className="text-green-50 mb-6">
              Access our web platform dashboard to manage large-scale tree-planting initiatives, 
              track impact, and generate environmental reports.
            </p>
            <Link to="/dashboard" className="flex items-center text-white hover:text-green-300 transition">
              Access Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}