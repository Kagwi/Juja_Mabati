import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Company',
      path: '/company',
      dropdown: [
        { label: 'About Us', path: '/company#about' },
        { label: 'Our Story', path: '/company#story' },
        { label: 'Leadership', path: '/company#leadership' },
      ]
    },
    {
      label: 'Production',
      path: '/production',
      dropdown: [
        { label: 'Manufacturing Process', path: '/production#process' },
        { label: 'Quality Control', path: '/production#quality' },
        { label: 'Facilities', path: '/production#facilities' },
      ]
    },
    {
      label: 'Products',
      path: '/products',
      dropdown: [
        { label: 'Roofing Sheets', path: '/products#roofing' },
        { label: 'Accessories', path: '/products#accessories' },
        { label: 'Custom Solutions', path: '/products#custom' },
      ]
    },
    { label: 'Brand', path: '/brand' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  if (mobile) {
    return (
      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between">
              <Link
                to={item.path}
                onClick={onItemClick}
                className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                  isActivePage(item.path)
                    ? 'text-crimson bg-crimson bg-opacity-10'
                    : 'text-gray-700 hover:text-crimson hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <button
                  onClick={() => handleDropdownToggle(item.label)}
                  className="p-2 text-gray-500 hover:text-crimson"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>
              )}
            </div>
            {item.dropdown && activeDropdown === item.label && (
              <div className="ml-4 space-y-1">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.label}
                    to={subItem.path}
                    onClick={onItemClick}
                    className="block py-2 px-4 text-sm text-gray-600 hover:text-crimson hover:bg-gray-50 rounded transition-colors"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            to={item.path}
            className={`flex items-center space-x-1 py-2 transition-all duration-300 ${
              isActivePage(item.path)
                ? 'text-crimson font-medium'
                : 'text-gray-700 hover:text-gold font-medium'
            }`}
          >
            <span>{item.label}</span>
            {item.dropdown && (
              <ChevronDown className={`w-4 h-4 transition-transform ${
                activeDropdown === item.label ? 'rotate-180' : ''
              }`} />
            )}
          </Link>

          {/* Dropdown Menu */}
          {item.dropdown && activeDropdown === item.label && (
            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.label}
                  to={subItem.path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-gold hover:bg-gray-50 transition-colors"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;