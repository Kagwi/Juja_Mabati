import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Users, Target, Eye, Award } from 'lucide-react';

const Company: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Every sheet undergoes rigorous quality control to ensure durability and performance.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'We prioritize customer satisfaction and build lasting relationships.',
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Continuously improving our processes and products to meet evolving needs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in manufacturing.',
    },
  ];

  return (
    <div>
      <HeroBanner
        title="Our Company"
        subtitle="Building trust through quality, innovation, and unwavering commitment to excellence"
        backgroundImage="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg"
      />

      <div id="main-content" className="py-16">
        {/* About Us Section */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-crimson mb-6">ABOUT US</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 1995, Juja Mabati Factory has been at the forefront of Kenya's 
                roofing industry for over 25 years. What started as a small family business 
                has grown into one of the most trusted names in steel roofing manufacturing.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commitment to quality and innovation has earned us the reputation as 
                the manufacturer of "The Forever Mabati" - roofing solutions that truly 
                stand the test of time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we serve customers across Kenya and beyond, from individual homeowners 
                to large construction companies, always maintaining our core values of quality, 
                integrity, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg"
                alt="Juja Mabati Factory"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-crimson bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div className="bg-crimson bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:bg-opacity-20 transition-colors">
                      <Icon className="w-8 h-8 text-crimson group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section id="story" className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crimson mb-6">OUR STORY</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-crimson mb-4">1995 - The Beginning</h3>
              <p className="text-gray-700 leading-relaxed">
                Started as a small family business in Juja with a vision to provide 
                quality roofing solutions to local communities. Our founder believed 
                in creating products that would last generations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-crimson mb-4">2005 - Expansion</h3>
              <p className="text-gray-700 leading-relaxed">
                Expanded our manufacturing capacity and introduced modern production 
                techniques. We began serving commercial and industrial clients across 
                Kenya, establishing our reputation for reliability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-crimson mb-4">2025 - Today</h3>
              <p className="text-gray-700 leading-relaxed">
                Now recognized as a leading manufacturer in East Africa, we continue 
                to innovate while maintaining our commitment to quality. Our "Forever Mabati" 
                promise remains stronger than ever.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Company;