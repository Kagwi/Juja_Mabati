import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Factory } from 'lucide-react';
import Navigation from './Navigation';
import Breadcrumbs from './Breadcrumbs';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top Header */}
      <div className="bg-crimson text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">Quality Steel Roofing Solutions Since 1995</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Tagline */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-crimson p-2 rounded-lg group-hover:bg-opacity-90 transition-all duration-300">
              <Factory className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Juja Mabati Factory</h1>
              <p className="text-sm text-crimson font-medium">The Forever Mabati</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-crimson transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>

      {/* Breadcrumbs */}
      {location.pathname !== '/' && <Breadcrumbs />}
    </header>
  );
};

export default Header;