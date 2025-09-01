import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Mail, Phone, MapPin, QrCode } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-crimson p-2 rounded-lg">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Juja Mabati Factory</h3>
                <p className="text-sm text-crimson">The Forever Mabati</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading manufacturer of high-quality steel roofing solutions in Kenya, 
              committed to providing durable and innovative mabati for all your construction needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-crimson">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/company' },
                { label: 'Our Products', path: '/products' },
                { label: 'Production', path: '/production' },
                { label: 'Brand Story', path: '/brand' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-crimson">Product Categories</h4>
            <nav className="space-y-2">
              {[
                'Corrugated Iron Sheets',
                'Box Profile Sheets',
                'Roofing Accessories',
                'Guttering Systems',
                'Ridge Caps',
                'Custom Solutions',
              ].map((product) => (
                <Link
                  key={product}
                  to="/products"
                  className="block text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  {product}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-crimson">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-crimson mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:jujamabatifactoryltd@gmail.com"
                    className="text-white hover:text-gold transition-colors text-sm"
                  >
                    jujamabatifactoryltd@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-crimson mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white text-sm">+254 700 000 000</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-crimson mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white text-sm">Juja, Kiambu County, Kenya</p>
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="pt-4">
                <div className="bg-white p-4 rounded-lg inline-block">
                  <QrCode className="w-16 h-16 text-crimson" />
                </div>
                <p className="text-xs text-gray-400 mt-2">Scan for contact info</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Juja Mabati Factory Ltd. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Quality guaranteed • Trusted since 1995
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;