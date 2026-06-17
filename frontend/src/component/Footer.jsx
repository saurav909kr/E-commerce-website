import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <img
              src={assets.logo}
              className="w-32 hover:scale-105 transition-transform duration-300"
              alt="Forever Logo"
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Your one-stop destination for premium quality products and
              exceptional shopping experience.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-gray-400">📞</span>
                <a
                  href="tel:+12124563456"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  +1-212-456-3456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-400">✉️</span>
                <a
                  href="mailto:contact@forever.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  contact@forever.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-300 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Forever.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
