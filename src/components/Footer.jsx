import React from 'react'
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                className="h-8 w-8 text-emerald-400"
                src="https://cdn-icons-png.flaticon.com/128/16821/16821939.png"
              />
              <span className="text-2xl font-bold">LINDA WANYAMA</span>
            </div>
            <p className="text-gray-400">
              Protecting wildlife and preserving our planet for future
              generations.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wildlife Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Marine Conservation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Research
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@worldlife.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Conservation Way</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 WorldLife Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer