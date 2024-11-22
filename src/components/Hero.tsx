import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Tree planting initiative"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="max-w-3xl pt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Planting Tomorrow's Legacy Today
          </h1>
          <p className="text-xl text-green-50 mb-8">
            Join Kenya's largest tree-planting initiative. Together, we're creating a greener future 
            through data-driven environmental action.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur text-white px-8 py-3 rounded-lg hover:bg-white/20 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}