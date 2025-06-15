import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../ThemeContext';

const Consultation = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('services');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Design Consultation',
      description: 'Expert advice on space planning, color schemes, and design concepts.',
      icon: '🎨',
      features: ['Space planning', 'Color consultation', 'Style assessment', 'Budget planning'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Virtual Consultation',
      description: 'Remote design consultation through video calls and digital tools.',
      icon: '💻',
      features: ['Video consultations', 'Digital mood boards', 'Online measurements', 'Virtual tours'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Project Planning',
      description: 'Comprehensive planning and coordination for your design project.',
      icon: '📋',
      features: ['Timeline planning', 'Budget analysis', 'Vendor coordination', 'Project management'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Expert Advice',
      description: 'Specialized guidance from industry experts in various design aspects.',
      icon: '👨‍💼',
      features: ['Material selection', 'Technical guidance', 'Code compliance', 'Best practices'],
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const consultationProcess = [
    { 
      number: '01', 
      title: 'Initial Contact', 
      description: 'Schedule your consultation and discuss your needs',
      icon: '📞',
      color: 'from-violet-500 to-violet-600'
    },
    { 
      number: '02', 
      title: 'Assessment', 
      description: 'Evaluate your space and requirements',
      icon: '📐',
      color: 'from-rose-500 to-rose-600'
    },
    { 
      number: '03', 
      title: 'Recommendation', 
      description: 'Receive detailed design recommendations',
      icon: '💡',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      number: '04', 
      title: 'Implementation', 
      description: 'Guidance on executing the design plan',
      icon: '✨',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const consultationTypes = [
    {
      name: 'Residential Consultation',
      description: 'Expert advice for home design and improvement projects',
      icon: '🏠',
      color: 'from-slate-500 to-slate-600',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Commercial Consultation',
      description: 'Professional guidance for business and office spaces',
      icon: '🏢',
      color: 'from-amber-500 to-amber-600',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Specialized Consultation',
      description: 'Focused advice for specific design challenges',
      icon: '🎯',
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
    },
    {
      name: 'Emergency Consultation',
      description: 'Quick solutions for urgent design problems',
      icon: '⚡',
      color: 'from-emerald-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80'
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
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
            alt="Consultation"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white"
              >
                Design Consultation
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
              >
                Expert guidance to bring your design vision to life
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
        <motion.div
          key="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {activeTab === 'services' && (
            services.map((service, index) => (
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
            ))
          )}

          {activeTab === 'process' && (
            consultationProcess.map((step, index) => (
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
            ))
          )}

          {activeTab === 'styles' && (
            consultationTypes.map((style, index) => (
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
            ))
          )}
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
            Let's discuss your design vision together
          </p>
          <button
            className="px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 shadow-lg"
          >
            Book a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Consultation; 