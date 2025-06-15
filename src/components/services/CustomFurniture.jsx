import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeContext from '../ThemeContext';

const CustomFurniture = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('services');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Custom Sofas',
      description: 'Handcrafted sofas tailored to your comfort and style preferences.',
      icon: '🛋️',
      features: ['Custom dimensions', 'Premium fabrics', 'Ergonomic design', 'Built-in storage'],
      color: 'from-rose-500 to-rose-600'
    },
    {
      title: 'Custom Tables',
      description: 'Unique tables designed to complement your space perfectly.',
      icon: '🪑',
      features: ['Custom sizes', 'Premium materials', 'Unique designs', 'Multi-functional'],
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Custom Storage',
      description: 'Tailored storage solutions for maximum functionality.',
      icon: '🗄️',
      features: ['Space optimization', 'Custom compartments', 'Smart solutions', 'Premium finishes'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Custom Beds',
      description: 'Luxurious beds designed for ultimate comfort and style.',
      icon: '🛏️',
      features: ['Custom sizes', 'Premium materials', 'Storage options', 'Smart features'],
      color: 'from-violet-500 to-violet-600'
    }
  ];

  const furnitureProcess = [
    { 
      number: '01', 
      title: 'Consultation', 
      description: 'Discuss your needs and design preferences',
      icon: '💬',
      color: 'from-violet-500 to-violet-600'
    },
    { 
      number: '02', 
      title: 'Design', 
      description: 'Create detailed designs and material selection',
      icon: '✏️',
      color: 'from-rose-500 to-rose-600'
    },
    { 
      number: '03', 
      title: 'Crafting', 
      description: 'Expert craftsmanship and quality control',
      icon: '🔨',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      number: '04', 
      title: 'Delivery', 
      description: 'Careful delivery and installation',
      icon: '🚚',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const furnitureStyles = [
    {
      name: 'Modern Minimalist',
      description: 'Clean lines and functional design with premium materials',
      icon: '✨',
      color: 'from-slate-500 to-slate-600',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Classic Elegance',
      description: 'Timeless designs with luxurious finishes and details',
      icon: '👑',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Industrial Chic',
      description: 'Raw materials and bold designs with modern functionality',
      icon: '🏭',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Scandinavian',
      description: 'Simple, functional designs with natural materials',
      icon: '🌲',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: 'The custom sofa they created for our living room is absolutely perfect. The quality and attention to detail is outstanding.',
      rating: 5
    },
    {
      name: 'Sophie Chen',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: 'I regularly recommend their custom furniture to my clients. The craftsmanship and customization options are exceptional.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      text: 'The custom tables and seating they created for our restaurant have received countless compliments from our customers.',
      rating: 5
    }
  ];

  const portfolio = [
    {
      title: 'Modern Sectional Sofa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Custom modular sofa with premium fabric'
    },
    {
      title: 'Dining Table Collection',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Custom dining tables for restaurant chain'
    },
    {
      title: 'Storage Solutions',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      description: 'Custom storage units with smart features'
    }
  ];

  const pricing = [
    {
      title: 'Basic Custom',
      price: '$2,000',
      features: [
        'Initial consultation',
        'Basic customization',
        'Standard materials',
        'Delivery',
        'Basic warranty'
      ],
      color: 'from-rose-500 to-rose-600'
    },
    {
      title: 'Premium Custom',
      price: '$5,000',
      features: [
        'Everything in Basic',
        'Advanced customization',
        'Premium materials',
        'Installation',
        'Extended warranty',
        'Design consultation'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Luxury Custom',
      price: '$10,000+',
      features: [
        'Everything in Premium',
        'Full customization',
        'Luxury materials',
        'White glove delivery',
        'Lifetime warranty',
        'Priority support'
      ],
      color: 'from-orange-500 to-orange-600'
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
    <div className="relative w-full mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Custom Furniture Design
          </h1>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Create unique, personalized furniture pieces that perfectly match your style and space
          </p>
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
        <AnimatePresence mode="wait">
          {activeTab === 'services' && (
            <motion.div
              key="services"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
          {services.map((service, index) => (
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
          )}

          {activeTab === 'process' && (
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
                {furnitureProcess.map((step, index) => (
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
          )}

          {activeTab === 'styles' && (
            <motion.div
              key="styles"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {furnitureStyles.map((style, index) => (
                <motion.div
                  key={style.name}
                  variants={itemVariants}
                  className={`rounded-2xl shadow-xl overflow-hidden group ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={style.image} 
                      alt={style.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${style.color} opacity-70`} />
                  </div>
                  <div className="p-6">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {style.icon}
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
                      {style.name}
                    </h3>
                    <p className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                    }`}>
                      {style.description}
                    </p>
                </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

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
            Client Reviews
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
            Featured Pieces
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
            Custom Furniture Packages
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
                    Start Designing
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
            Ready to Create Your Custom Piece?
          </h2>
          <p className={`text-xl mb-10 ${
            theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
          }`}>
            Let's design your perfect furniture together
          </p>
          <button
            className="px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 shadow-lg"
          >
            Start Your Design
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomFurniture; 