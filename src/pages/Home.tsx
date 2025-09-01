import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Shield, Clock, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Durable Quality',
      description: 'Premium steel construction that withstands harsh weather conditions for decades.',
    },
    {
      icon: Clock,
      title: 'Proven Reliability',
      description: 'Over 25 years of manufacturing excellence and customer satisfaction.',
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Recognized as the leading mabati manufacturer in Kenya.',
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Serving thousands of satisfied customers across residential and commercial sectors.',
    },
  ];

  const applications = [
    { name: 'Residential', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' },
    { name: 'Commercial', image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg' },
    { name: 'Industrial', image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg' },
    { name: 'Agricultural', image: 'https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg' },
  ];

  return (
    <div>
      <HeroBanner
        title="The Forever Mabati"
        subtitle="Premium steel roofing solutions built to last a lifetime. Quality guaranteed, trust earned."
        backgroundImage="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
        height="h-screen"
      />

      <div id="main-content" className="py-16">
        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Juja Mabati Factory?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional craftsmanship with modern technology to deliver 
              roofing solutions that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-crimson bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:bg-opacity-20 transition-colors">
                    <Icon className="w-8 h-8 text-crimson group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Applications Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Applications Across Industries
              </h2>
              <p className="text-xl text-gray-600">
                Our mabati serves diverse sectors with uncompromising quality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${app.image})` }}>
                    <div className="absolute inset-0 bg-crimson bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">{app.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-crimson rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build with Forever Mabati?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Juja Mabati Factory 
              for their roofing needs. Get a quote today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/products"
                className="bg-white text-crimson px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-crimson transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;