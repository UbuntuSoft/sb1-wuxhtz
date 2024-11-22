import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold text-white">Clima Quest</span>
            </Link>
            <p className="text-gray-400">
              Leading Kenya's environmental transformation through data-driven tree-planting initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-500 transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-500 transition"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-500 transition"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-green-500 transition">About Us</Link></li>
              <li><Link to="/footprint" className="hover:text-green-500 transition">Our Impact</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition">Get Involved</Link></li>
              <li><Link to="/" className="hover:text-green-500 transition">News & Updates</Link></li>
              <li><Link to="/" className="hover:text-green-500 transition">Resources</Link></li>
            </ul>
          </div>

          {/* Footprint Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Footprint Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/footprint" className="hover:text-green-500 transition">Download App</Link></li>
              <li><Link to="/footprint" className="hover:text-green-500 transition">Organization Dashboard</Link></li>
              <li><Link to="/footprint" className="hover:text-green-500 transition">Impact Reports</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition">Support Center</Link></li>
              <li><Link to="/footprint" className="hover:text-green-500 transition">API Documentation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-500" />
                <a href="mailto:info@climaquest.co.ke" className="hover:text-green-500 transition">
                  info@climaquest.co.ke
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <a href="tel:+254200000000" className="hover:text-green-500 transition">
                  +254 20 000 0000
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-500 mt-1" />
                <span>Kilimani Business Center,<br />Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Clima Quest LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/about" className="text-sm text-gray-400 hover:text-green-500 transition">Privacy Policy</Link>
              <Link to="/about" className="text-sm text-gray-400 hover:text-green-500 transition">Terms of Service</Link>
              <Link to="/about" className="text-sm text-gray-400 hover:text-green-500 transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}