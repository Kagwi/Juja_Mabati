import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Building, Cog, Package, Award, Phone, Factory } from 'lucide-react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Building, label: 'Company', path: '/company' },
    { icon: Cog, label: 'Production', path: '/production' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Award, label: 'Brand', path: '/brand' },
    { icon: Phone, label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="bg-crimson text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Factory className="w-8 h-8" />
              <div>
                <h2 className="text-lg font-bold">Juja Mabati Factory</h2>
                <p className="text-sm opacity-90">The Forever Mabati</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:text-gold hover:bg-gray-50 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:text-gold transition-colors" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Get in touch with us</p>
            <a
              href="mailto:jujamabatifactoryltd@gmail.com"
              className="text-crimson hover:text-gold font-medium text-sm transition-colors"
            >
              jujamabatifactoryltd@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;