import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';

const Renovation = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('services');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Structural Renovation',
      description: 'Transform your space with expert structural modifications and improvements.',
      icon: '🏗️',
      features: ['Load-bearing wall modifications', 'Foundation reinforcement', 'Structural repairs', 'Space reconfiguration'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Kitchen Remodeling',
      description: 'Create your dream kitchen with modern appliances and premium finishes.',
      icon: '🍳',
      features: ['Custom cabinetry', 'Modern appliances', 'Efficient layouts', 'Premium finishes'],
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Bathroom Renovation',
      description: 'Transform your bathroom into a luxurious retreat with modern fixtures.',
      icon: '🚿',
      features: ['Luxury fixtures', 'Smart technology', 'Spa features', 'Premium tiles'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Outdoor Living',
      description: 'Extend your living space with beautiful outdoor renovations.',
      icon: '🌳',
      features: ['Patio design', 'Landscaping', 'Outdoor kitchens', 'Entertainment areas'],
      color: 'from-green-500 to-green-600'
    }
  ];

  const renovationProcess = [
    { 
      number: '01', 
      title: 'Assessment', 
      description: 'Thorough evaluation of your space and requirements',
      icon: '📋',
      color: 'from-violet-500 to-violet-600'
    },
    { 
      number: '02', 
      title: 'Planning', 
      description: 'Detailed renovation and construction planning',
      icon: '📐',
      color: 'from-rose-500 to-rose-600'
    },
    { 
      number: '03', 
      title: 'Construction', 
      description: 'Expert execution of the renovation plan',
      icon: '🔨',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      number: '04', 
      title: 'Completion', 
      description: 'Final inspection and handover of your renovated space',
      icon: '✨',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const renovationTypes = [
    {
      name: 'Modern Renovation',
      description: 'Contemporary updates with smart technology and clean lines',
      icon: '🏢',
      color: 'from-slate-500 to-slate-600',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Heritage Restoration',
      description: 'Preserve and enhance historical architectural elements',
      icon: '🏛️',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Industrial Conversion',
      description: 'Transform industrial spaces into modern living areas',
      icon: '🏭',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Eco-Friendly Renovation',
      description: 'Sustainable updates with energy-efficient solutions',
      icon: '🌱',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: 'The renovation team transformed our outdated kitchen into a modern masterpiece. Their attention to detail and quality of work was exceptional.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      role: 'Property Developer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: "We've worked with many renovation companies, but this team stands out for their professionalism and quality of work.",
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: 'The commercial renovation exceeded our expectations. The team completed the project on time and within budget.',
      rating: 5
    }
  ];

  const portfolio = [
    {
      title: 'Modern Kitchen Renovation',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Complete kitchen transformation with premium finishes'
    },
    {
      title: 'Office Space Renovation',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Modern office renovation with collaborative spaces'
    },
    {
      title: 'Bathroom Remodel',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Luxury bathroom renovation with spa features'
    }
  ];

  const pricing = [
    {
      title: 'Basic Renovation',
      price: '$15,000',
      features: [
        'Initial consultation',
        'Basic structural work',
        'Standard materials',
        'Basic fixtures',
        'Project management'
      ],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Premium Renovation',
      price: '$30,000',
      features: [
        'Everything in Basic',
        'Custom design elements',
        'Premium materials',
        'Smart home integration',
        'Extended warranty',
        'Post-renovation support'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Luxury Renovation',
      price: '$50,000+',
      features: [
        'Everything in Premium',
        'High-end materials',
        'Custom cabinetry',
        'Smart home automation',
        'Premium fixtures',
        'Lifetime support'
      ],
      color: 'from-cyan-500 to-cyan-600'
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

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return (
          <motion.div
            key="services"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`rounded-2xl shadow-xl overflow-hidden group ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                  }`}>
                    {service.description}
                  </p>
                  <ul className={`space-y-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-neutral-500'
                  }`}>
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`mr-2 text-${service.color.split('-')[1]}`}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'process':
        return (
          <motion.div
            key="process"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`rounded-3xl p-8 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {renovationProcess.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.number}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                  }`}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'styles':
        return (
          <motion.div
            key="styles"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {renovationTypes.map((type) => (
              <motion.div
                key={type.name}
                variants={itemVariants}
                className={`rounded-2xl shadow-xl overflow-hidden group ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${type.color} opacity-70`} />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {type.name}
                  </h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                  }`}>
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${
      theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Parallax Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] mb-20 overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
            alt="Renovation"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}
              >
                Renovation Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
              >
                Transform your space with our expert renovation services
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs with Gradient */}
        <div className="flex justify-center mb-16">
          <div className={`inline-flex rounded-full p-1.5 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'
          }`}>
            {['services', 'process', 'styles'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
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
        {renderContent()}

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Client Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } shadow-xl`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {testimonial.name}
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-neutral-600'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  {testimonial.text}
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden group ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } shadow-xl`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                  }`}>
                    {project.category}
                  </span>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Renovation Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((package_, index) => (
              <motion.div
                key={package_.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } shadow-xl`}
              >
                <div className={`h-2 bg-gradient-to-r ${package_.color}`} />
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {package_.title}
                  </h3>
                  <div className={`text-3xl font-bold mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {package_.price}
                  </div>
                  <ul className={`space-y-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                  }`}>
                    {package_.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`mr-2 text-${package_.color.split('-')[1]}`}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-6 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${package_.color} text-white hover:opacity-90 transform hover:scale-105`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-20 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className={`text-xl mb-10 ${
            theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
          }`}>
            Let's create your dream renovation together
          </p>
          <button
            className="px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Renovation; 