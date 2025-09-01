import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import { Mail, Phone, MapPin, Clock, Send, QrCode } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:jujamabatifactoryltd@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      value: 'jujamabatifactoryltd@gmail.com',
      link: 'mailto:jujamabatifactoryltd@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+254 700 000 000',
      link: 'tel:+254700000000',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Juja, Kiambu County, Kenya',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 8:00 AM - 5:00 PM\nSat: 8:00 AM - 1:00 PM',
      link: null,
    },
  ];

  return (
    <div>
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch for quotes, inquiries, or to learn more about our products"
        backgroundImage="https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg"
      />

      <div id="main-content" className="py-16">
        {/* Contact Information */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group h-full">
                  <div className="bg-crimson bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:bg-opacity-20 transition-colors">
                    <Icon className="w-8 h-8 text-crimson group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                </div>
              );

              return info.link ? (
                <a key={index} href={info.link} className="block h-full">
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crimson focus:border-crimson transition-all resize-vertical"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-crimson text-white py-3 px-6 rounded-lg font-semibold hover:bg-gold hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-crimson text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Ready to discuss your roofing project? Our team is here to help you 
                  find the perfect solution for your needs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gold" />
                    <a
                      href="mailto:jujamabatifactoryltd@gmail.com"
                      className="hover:text-gold transition-colors"
                    >
                      jujamabatifactoryltd@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gold" />
                    <span>+254 700 000 000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span>Juja, Kiambu County, Kenya</span>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h4>
                <div className="bg-gray-100 p-8 rounded-lg inline-block">
                  <QrCode className="w-24 h-24 text-crimson mx-auto" />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Scan to save our contact information
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;