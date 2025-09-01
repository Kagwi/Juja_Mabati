import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Crown, Star, Trophy, Heart } from 'lucide-react';

const Brand: React.FC = () => {
  const brandPillars = [
    {
      icon: Crown,
      title: 'Premium Quality',
      description: 'We use only the finest materials and most advanced manufacturing processes.',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Continuous improvement and innovation drive everything we do.',
    },
    {
      icon: Trophy,
      title: 'Leadership',
      description: 'Setting industry standards and leading by example in manufacturing.',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships with customers based on reliability and integrity.',
    },
  ];

  return (
    <div>
      <HeroBanner
        title="The Forever Mabati"
        subtitle="More than a tagline - it's our promise of enduring quality and unwavering commitment"
        backgroundImage="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
      />

      <div id="main-content" className="py-16">
        {/* Brand Story */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crimson mb-6">BRAND STORY</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "The Forever Mabati" represents our unwavering commitment to creating 
              roofing solutions that truly last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Promise</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When we say "Forever Mabati," we mean it. Our products are engineered 
                to withstand Kenya's diverse climate conditions, from the coastal humidity 
                to the highland winds, ensuring your investment protects what matters most.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This promise is backed by decades of experience, continuous innovation, 
                and an uncompromising commitment to quality that has made us Kenya's 
                most trusted roofing manufacturer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every sheet carries our reputation, and we take that responsibility seriously. 
                That's why we invest in the best materials, the most advanced equipment, 
                and the most skilled craftspeople in the industry.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                alt="Juja Mabati Brand"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-crimson bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Brand Pillars */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Brand Pillars
              </h2>
              <p className="text-xl text-gray-600">
                The foundations that define who we are and what we stand for
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div className="bg-crimson bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:bg-opacity-20 transition-colors">
                      <Icon className="w-10 h-10 text-crimson group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-crimson mb-4">25+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Years of Experience</h3>
                <p className="text-gray-600">Proven track record in roofing excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-crimson mb-4">10,000+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfied Customers</h3>
                <p className="text-gray-600">Trust built through consistent quality</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-crimson mb-4">100%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">Every product backed by our promise</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Brand;