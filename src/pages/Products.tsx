import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Check, Home, Building, Factory, Truck } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      name: 'Corrugated Iron Sheets',
      image: 'https://images.pexels.com/photos/159045/the-roof-plate-roof-superstructure-159045.jpeg',
      description: 'Classic corrugated design for maximum strength and water drainage.',
      specifications: {
        thickness: '0.4mm - 0.8mm',
        finishes: 'Galvanized, Color Coated',
        length: '1m - 12m',
        width: '1m standard',
      },
      applications: ['residential', 'commercial', 'agricultural'],
    },
    {
      name: 'Box Profile Sheets',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg',
      description: 'Modern box profile design for contemporary architectural aesthetics.',
      specifications: {
        thickness: '0.5mm - 1.0mm',
        finishes: 'Galvanized, PPGI',
        length: '1m - 12m',
        width: '1m standard',
      },
      applications: ['commercial', 'industrial', 'residential'],
    },
    {
      name: 'Roofing Accessories',
      image: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg',
      description: 'Complete range of accessories for professional roofing installation.',
      specifications: {
        thickness: '0.4mm - 0.6mm',
        finishes: 'Color Matched',
        types: 'Ridge caps, gutters, fascia',
        material: 'Galvanized steel',
      },
      applications: ['residential', 'commercial', 'construction'],
    },
  ];

  const industries = [
    { icon: Home, name: 'Residential', color: 'text-blue-600' },
    { icon: Building, name: 'Commercial', color: 'text-green-600' },
    { icon: Factory, name: 'Industrial', color: 'text-purple-600' },
    { icon: Truck, name: 'Construction', color: 'text-orange-600' },
  ];

  return (
    <div>
      <HeroBanner
        title="Our Products"
        subtitle="Premium steel roofing solutions for every application"
        backgroundImage="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg"
      />

      <div id="main-content" className="py-16">
        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Range
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive roofing solutions for all your construction needs
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-bold text-crimson mb-4">{product.name}</h3>
                  <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                  
                  {/* Specifications Table */}
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="border-b border-gray-200 pb-2">
                          <dt className="text-sm font-medium text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </dt>
                          <dd className="text-sm text-gray-900 font-medium">{value}</dd>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Icons */}
                  <div className="flex flex-wrap gap-3">
                    {product.applications.map((app) => {
                      const industry = industries.find(i => i.name.toLowerCase() === app);
                      if (!industry) return null;
                      const Icon = industry.icon;
                      return (
                        <div
                          key={app}
                          className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2"
                        >
                          <Icon className={`w-4 h-4 ${industry.color}`} />
                          <span className="text-sm font-medium text-gray-700 capitalize">{app}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Applications */}
        <section className="bg-crimson text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Our products serve diverse sectors with proven performance
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:bg-opacity-30 transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{industry.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;