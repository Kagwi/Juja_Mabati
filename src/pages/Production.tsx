import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Cog, Shield, CheckCircle, Settings } from 'lucide-react';

const Production: React.FC = () => {
  const processes = [
    {
      icon: Settings,
      title: 'Raw Material Processing',
      description: 'Premium steel coils are carefully inspected and prepared for production.',
      step: '01',
    },
    {
      icon: Cog,
      title: 'Roll Forming',
      description: 'Advanced roll forming machines shape the steel into precise profiles.',
      step: '02',
    },
    {
      icon: Shield,
      title: 'Surface Treatment',
      description: 'Galvanizing and coating processes ensure maximum corrosion resistance.',
      step: '03',
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Rigorous testing and inspection guarantee product excellence.',
      step: '04',
    },
  ];

  const facilities = [
    {
      name: 'Main Production Line',
      capacity: '500 tons/month',
      description: 'State-of-the-art roll forming equipment for corrugated and box profile sheets.',
    },
    {
      name: 'Coating Facility',
      capacity: '300 tons/month',
      description: 'Advanced color coating line for PPGI and decorative finishes.',
    },
    {
      name: 'Quality Lab',
      capacity: '24/7 Testing',
      description: 'Comprehensive testing facility for material properties and durability.',
    },
  ];

  return (
    <div>
      <HeroBanner
        title="Production Excellence"
        subtitle="Advanced manufacturing processes delivering consistent quality and reliability"
        backgroundImage="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
      />

      <div id="main-content" className="py-16">
        {/* Manufacturing Process */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600">
              Precision engineering at every step ensures superior quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <div
                  key={index}
                  className="relative text-center group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-crimson text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                    {process.step}
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 pt-8">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:bg-opacity-20 transition-colors">
                      <Icon className="w-8 h-8 text-crimson group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quality Control */}
        <section id="quality" className="bg-crimson text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">QUALITY CONTROL</h2>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  Our commitment to quality is unwavering. Every sheet that leaves our 
                  factory has been subjected to rigorous testing and inspection processes.
                </p>
                <div className="space-y-4">
                  {[
                    'Tensile strength testing',
                    'Coating thickness measurement',
                    'Corrosion resistance evaluation',
                    'Dimensional accuracy verification',
                    'Surface finish inspection',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg"
                  alt="Quality Control Process"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section id="facilities" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Modern equipment and infrastructure supporting efficient production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-crimson"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-crimson font-semibold mb-3">{facility.capacity}</p>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Production;