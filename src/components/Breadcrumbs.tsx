import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';
import SideMenu from './SideMenu';

const Breadcrumbs: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  const breadcrumbNames: { [key: string]: string } = {
    company: 'Company',
    production: 'Production',
    products: 'Products',
    brand: 'Brand',
    contact: 'Contact',
  };

  return (
    <>
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSideMenuOpen(true)}
              className="p-1 text-gray-600 hover:text-crimson transition-colors"
              title="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
            
            <nav className="flex items-center space-x-2">
              <Link to="/" className="text-sm text-crimson hover:text-gold transition-colors">
                Home
              </Link>
              {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const name = breadcrumbNames[value] || value.charAt(0).toUpperCase() + value.slice(1);

                return (
                  <React.Fragment key={to}>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    {isLast ? (
                      <span className="text-sm text-gray-600 font-medium">{name}</span>
                    ) : (
                      <Link to={to} className="text-sm text-crimson hover:text-gold transition-colors">
                        {name}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </>
  );
};

export default Breadcrumbs;