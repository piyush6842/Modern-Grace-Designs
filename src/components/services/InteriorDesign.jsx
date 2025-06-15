import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';
import { Link } from 'react-router-dom';

const InteriorDesign = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('services');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Space Planning',
      description: 'Optimize your living spaces with our expert space planning services.',
      icon: '📐',
      features: ['Traffic flow optimization', 'Furniture layout', 'Space zoning', 'Storage solutions'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Color Consultation',
      description: 'Create the perfect ambiance with our professional color schemes.',
      icon: '🎨',
      features: ['Color psychology', 'Custom palettes', 'Paint selection', 'Accent colors'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Furniture Selection',
      description: 'Find the perfect pieces to complement your space and lifestyle.',
      icon: '🛋️',
      features: ['Custom furniture', 'Style matching', 'Space optimization', 'Quality assurance'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Lighting Design',
      description: 'Transform your space with strategic lighting solutions.',
      icon: '💡',
      features: ['Ambient lighting', 'Task lighting', 'Accent lighting', 'Smart controls'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const designProcess = [
    { 
      number: '01', 
      title: 'Discovery', 
      description: 'Initial consultation to understand your style and needs',
      icon: '🔍',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      number: '02', 
      title: 'Concept', 
      description: 'Developing design concepts and mood boards',
      icon: '🎯',
      color: 'from-indigo-500 to-indigo-600'
    },
    { 
      number: '03', 
      title: 'Design', 
      description: 'Detailed space planning and material selection',
      icon: '✏️',
      color: 'from-teal-500 to-teal-600'
    },
    { 
      number: '04', 
      title: 'Execution', 
      description: 'Implementation and styling of your space',
      icon: '✨',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const styles = [
    {
      name: 'Modern',
      description: 'Clean lines, minimal decor, and a focus on functionality',
      icon: '🏢',
      color: 'from-gray-500 to-gray-600',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Traditional',
      description: 'Classic elegance with rich details and timeless appeal',
      icon: '🏛️',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Scandinavian',
      description: 'Light, airy spaces with natural materials and cozy elements',
      icon: '❄️',
      color: 'from-sky-500 to-sky-600',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Industrial',
      description: 'Raw materials, exposed elements, and urban aesthetics',
      icon: '🏭',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: 'The interior design team transformed our home into a beautiful, functional space. Their attention to detail and creativity exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: 'Our office space now reflects our brand perfectly. The team understood our vision and delivered beyond what we imagined.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: "The restaurant redesign has significantly improved customer experience. The team's expertise in commercial spaces is unmatched.",
      rating: 5
    }
  ];

  const portfolio = [
    {
      title: 'Modern Apartment',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary design with smart space utilization'
    },
    {
      title: 'Corporate Office',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Professional workspace with collaborative areas'
    },
    {
      title: 'Luxury Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant design with premium finishes'
    }
  ];

  const pricing = [
    {
      title: 'Basic Package',
      price: '$2,500',
      features: [
        'Initial consultation',
        'Space planning',
        'Color scheme selection',
        'Basic furniture layout',
        'Shopping list'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Premium Package',
      price: '$5,000',
      features: [
        'Everything in Basic',
        'Detailed 3D renderings',
        'Custom furniture design',
        'Material selection',
        'Project management',
        'Installation supervision'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Luxury Package',
      price: '$10,000+',
      features: [
        'Everything in Premium',
        'Full renovation management',
        'Custom artwork selection',
        'Smart home integration',
        'Premium material sourcing',
        'Lifetime support'
      ],
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] mb-12 sm:mb-16 md:mb-20 overflow-hidden rounded-2xl sm:rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
            alt="Interior Design"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-white"
              >
                Interior Design
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-200"
              >
                Transform your space into a masterpiece
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs with Gradient */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 overflow-x-auto">
          <div className={`inline-flex rounded-full p-1 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'
          }`}>
            {['services', 'process', 'portfolio', 'testimonials', 'pricing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? theme === 'dark'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          key="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {activeTab === 'services' && services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className={`text-2xl sm:text-3xl mb-3 sm:mb-4 ${
                theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
              }`}>
                {service.icon}
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              <p className={`text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}

          {activeTab === 'process' && designProcess.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className={`text-2xl sm:text-3xl mb-3 sm:mb-4 ${
                theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
              }`}>
                {step.icon}
              </div>
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {step.title}
              </h3>
              <p className={`text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {step.description}
              </p>
            </motion.div>
          ))}

          {activeTab === 'portfolio' && portfolio.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`rounded-lg overflow-hidden shadow-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm sm:text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {activeTab === 'testimonials' && testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                />
                <div>
                  <h3 className={`text-base sm:text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className={`text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {testimonial.text}
              </p>
              <div className="flex mt-3 sm:mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm sm:text-base">★</span>
                ))}
              </div>
            </motion.div>
          ))}

          {activeTab === 'pricing' && pricing.map((plan, index) => (
            <motion.div
              key={plan.title}
              variants={itemVariants}
              className={`p-4 sm:p-6 rounded-lg shadow-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {plan.title}
              </h3>
              <p className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${
                theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
              }`}>
                {plan.price}
              </p>
              <ul className="space-y-2 mb-4 sm:mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex items-center text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block w-full text-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
                  theme === 'dark'
                    ? 'bg-primary-400 text-black hover:bg-primary-500'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center p-6 sm:p-8 rounded-lg mt-12 sm:mt-16 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
          }`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Transform Your Space?
          </h2>
          <p className={`text-base sm:text-lg mb-6 sm:mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's create your dream interior together
          </p>
          <Link
            to="/contact"
            className={`inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors ${
              theme === 'dark'
                ? 'bg-primary-400 text-black hover:bg-primary-500'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default InteriorDesign; 