import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from './ThemeContext';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      bio: 'With over 15 years of experience in interior design, Sarah leads our creative vision and ensures every project exceeds expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      bio: 'Michael brings innovative design solutions and technical expertise to every project, ensuring perfect execution of our creative vision.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
      bio: 'Emma ensures smooth project delivery and client satisfaction through her exceptional organizational skills and attention to detail.'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering exceptional quality and attention to detail.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'We embrace innovation and creativity, pushing boundaries to create unique and inspiring spaces.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity, building trust through honest communication and transparency.',
      icon: '🤝'
    },
    {
      title: 'Sustainability',
      description: 'We are committed to sustainable practices, creating beautiful spaces that respect our environment.',
      icon: '🌱'
    }
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across residential and commercial spaces'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Consistently high ratings from our satisfied clients'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Decades of expertise in interior design and renovation'
    },
    {
      number: '25+',
      label: 'Design Awards',
      description: 'Recognized for excellence in design and innovation'
    }
  ];

  const history = [
    {
      year: '2008',
      title: 'Our Beginning',
      description: 'Founded with a vision to transform spaces and create beautiful, functional environments.'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Expanded our services to include custom furniture and full-scale renovations.'
    },
    {
      year: '2016',
      title: 'Innovation',
      description: 'Introduced sustainable design practices and smart home integration.'
    },
    {
      year: '2023',
      title: 'Today',
      description: 'Continuing to push boundaries in design while maintaining our commitment to excellence.'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-white'
              }`}
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-lg sm:text-xl ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-100'
              } max-w-2xl mx-auto`}
            >
              Creating beautiful spaces that inspire and transform lives since 2008
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* History Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {history.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                <div className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {item.year}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } shadow-xl`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-xl`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                  }`}>
                    {member.role}
                  </p>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                  }`}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`py-20 px-4 sm:px-6 lg:px-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 text-center ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } shadow-xl`}
              >
                <div className={`text-4xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {achievement.number}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {achievement.label}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-2xl p-8 sm:p-12 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <div className="text-center">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>
                Ready to Transform Your Space?
              </h2>
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-neutral-600'
              }`}>
                Let's create something beautiful together
              </p>
              <button className="px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:opacity-90 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
