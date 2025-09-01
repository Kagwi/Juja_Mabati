import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
  showScrollArrow?: boolean;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = 'h-96',
  showScrollArrow = true,
}) => {
  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`relative ${height} bg-cover bg-center bg-gray-900 flex items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Scroll Arrow */}
      {showScrollArrow && (
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gold transition-all duration-300 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default HeroBanner;