import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TreePine } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export function Navigation({ isScrolled }: NavigationProps) {
  const location = useLocation();
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className={`flex items-center space-x-2 ${isScrolled ? 'text-green-800' : 'text-white'}`}>
          <TreePine className="h-8 w-8" />
          <span className="text-2xl font-bold">Clima Quest</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
            } ${location.pathname === '/' ? 'font-semibold' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
            } ${location.pathname === '/about' ? 'font-semibold' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/footprint" 
            className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
            } ${location.pathname === '/footprint' ? 'font-semibold' : ''}`}
          >
            Footprint
          </Link>
          <Link 
            to="/contact" 
            className={`transition ${
              isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
            } ${location.pathname === '/contact' ? 'font-semibold' : ''}`}
          >
            Contact
          </Link>
          <Link 
            to="/dashboard"
            className={`px-4 py-2 rounded-lg transition ${
              isScrolled 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-white text-green-800 hover:bg-green-50'
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}